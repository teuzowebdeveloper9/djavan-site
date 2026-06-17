import { access, mkdir, rm, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public", "djavan");
const workDir = path.join(rootDir, "node_modules", ".cache", "djavan-hero-video");
const outputPath = path.join(publicDir, "djavan-hero-video.mp4");

const fps = 30;
const width = 1920;
const height = 1080;
const sceneSeconds = 4.4;
const sceneFrames = Math.round(fps * sceneSeconds);

const scenes = [
  {
    file: "jovem-imagem-djavan.jpg",
    mood: "memoria",
    zoom: 0.052,
    saturation: 0.22,
    brightness: -0.045,
    contrast: 1.19,
    warmth: "rs=0.025:gs=0.008:bs=-0.025",
    cropX: 0.5,
    cropY: 0.52,
  },
  {
    file: "djavan-jovem-boina.jpg",
    mood: "olhar",
    zoom: 0.046,
    saturation: 0.18,
    brightness: -0.02,
    contrast: 1.12,
    warmth: "rs=0.035:gs=0.014:bs=-0.032",
    cropX: 0.48,
    cropY: 0.48,
  },
  {
    file: "lilas.jpg",
    mood: "cor",
    zoom: 0.04,
    saturation: 0.92,
    brightness: -0.035,
    contrast: 1.1,
    warmth: "rs=0.045:gs=0.012:bs=-0.018",
    cropX: 0.28,
    cropY: 0.46,
  },
  {
    file: "Djavan-no-show-do-Allianz-Clayto-1024x538.webp",
    mood: "palco",
    zoom: 0.058,
    saturation: 1.04,
    brightness: -0.07,
    contrast: 1.16,
    warmth: "rs=0.05:gs=-0.004:bs=-0.035",
    cropX: 0.38,
    cropY: 0.5,
  },
  {
    file: "1900x1900-000000-80-0-0.jpg",
    mood: "alumbramento",
    zoom: 0.042,
    saturation: 0.16,
    brightness: -0.015,
    contrast: 1.22,
    warmth: "rs=0.018:gs=0.006:bs=-0.018",
    cropX: 0.5,
    cropY: 0.56,
  },
  {
    file: "djavan-07.png",
    mood: "legado",
    zoom: 0.036,
    saturation: 0.1,
    brightness: -0.025,
    contrast: 1.14,
    warmth: "rs=0.014:gs=0.005:bs=-0.012",
    cropX: 0.5,
    cropY: 0.42,
  },
];

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: rootDir,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

async function assertAsset(file) {
  const inputPath = path.join(publicDir, file);
  await access(inputPath, constants.R_OK);
  return inputPath;
}

function cropExpression(axis, position) {
  const source = axis === "x" ? "iw-ow" : "ih-oh";
  return `(${source})*${position}`;
}

function sceneFilter(scene) {
  const oversizedWidth = Math.round(width * 1.18);
  const oversizedHeight = Math.round(height * 1.18);

  return [
    `scale=${oversizedWidth}:${oversizedHeight}:force_original_aspect_ratio=increase`,
    `crop=${oversizedWidth}:${oversizedHeight}:${cropExpression("x", scene.cropX)}:${cropExpression("y", scene.cropY)}`,
    [
      `zoompan=z='1+${scene.zoom}*on/${sceneFrames - 1}'`,
      "x='iw/2-(iw/zoom/2)'",
      "y='ih/2-(ih/zoom/2)'",
      `d=${sceneFrames}`,
      `s=${width}x${height}`,
      `fps=${fps}`,
    ].join(":"),
    [
      `eq=contrast=${scene.contrast}`,
      `brightness=${scene.brightness}`,
      `saturation=${scene.saturation}`,
      "gamma=0.98",
    ].join(":"),
    `colorbalance=${scene.warmth}`,
    "curves=preset=medium_contrast",
    "vignette=PI/5.8",
    "noise=alls=3:allf=t+u",
    "fade=t=in:st=0:d=0.45:color=black",
    `fade=t=out:st=${sceneSeconds - 0.55}:d=0.55:color=black`,
    "unsharp=5:5:0.35:3:3:0.15",
    "setsar=1",
    "format=yuv420p",
  ].join(",");
}

function concatFilter(inputCount) {
  const filters = [];

  for (let index = 0; index < inputCount; index += 1) {
    filters.push(
      `[${index}:v]${sceneFilter(scenes[index])},settb=AVTB,setpts=PTS-STARTPTS[v${index}]`
    );
  }

  const inputs = Array.from({ length: inputCount }, (_, index) => `[v${index}]`).join("");
  filters.push(`${inputs}concat=n=${inputCount}:v=1:a=0[vout]`);

  return filters.join(";");
}

await rm(workDir, { recursive: true, force: true });
await mkdir(workDir, { recursive: true });

const inputPaths = await Promise.all(scenes.map((scene) => assertAsset(scene.file)));

const storyboardPath = path.join(workDir, "storyboard.json");
await writeFile(
  storyboardPath,
  JSON.stringify(
    {
      durationSeconds: scenes.length * sceneSeconds,
      fps,
      resolution: `${width}x${height}`,
      scenes: scenes.map(({ file, mood }) => ({ file, mood })),
    },
    null,
    2
  )
);

await run("ffmpeg", [
  "-y",
  "-hide_banner",
  ...inputPaths.flatMap((inputPath) => ["-i", inputPath]),
  "-filter_complex",
  concatFilter(inputPaths.length),
  "-map",
  "[vout]",
  "-an",
  "-c:v",
  "libx264",
  "-preset",
  "slow",
  "-crf",
  "22",
  "-r",
  String(fps),
  "-pix_fmt",
  "yuv420p",
  "-movflags",
  "+faststart",
  outputPath,
]);

await run("ffprobe", [
  "-v",
  "error",
  "-show_entries",
  "format=duration,size:stream=codec_type,codec_name,width,height,avg_frame_rate",
  "-of",
  "default=noprint_wrappers=1",
  outputPath,
]);
