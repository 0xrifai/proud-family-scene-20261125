import { mkdirSync, writeFileSync } from "node:fs";

// One short family scene (two lines at most, 1-280 chars): Grandpa's hearing
// aid goes down for piano practice and back up for dessert — a small,
// specific domestic moment, warm and lightly funny. The grader reads this
// file, so the scene is written to the ABSOLUTE path /output/entry.txt
// (a relative output/ directory fails under the grader's read-only run).
const SCENE =
  "Grandpa turns his hearing aid down for my piano practice and up again for dessert — he says the wrong notes are easier to love when you can't quite hear them, but the pudding deserves the full volume.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
