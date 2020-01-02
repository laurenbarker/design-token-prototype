import fs from "fs";
import styleDictionary from "style-dictionary";

import getStylesArtboard from "./getStylesArtboard.mjs";

const StyleDictionary = styleDictionary.extend({
  source: ["src/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "build/web/",
      files: [
        {
          destination: "_colors.scss",
          format: "scss/variables",
          filter: {
            type: "color",
          },
        },
      ],
    },
  },
});

async function getTokens() {
  if (!process.env.FIGMA_API_KEY) {
    throw Error("Figma API Key is required. Please set FIGMA_API_KEY env var.");
  }
  if (!process.env.FIGMA_ID) {
    throw Error("Figma file ID is required. Please set FIGMA_ID env var.");
  }
  const tokens = await getStylesArtboard(
    process.env.FIGMA_API_KEY,
    process.env.FIGMA_ID,
  );
  const jsonTokens = JSON.stringify(tokens, null, 4);
  console.log(jsonTokens);
  fs.writeFile("src/base.json", jsonTokens, err => {
    if (err) throw err;
    StyleDictionary.buildAllPlatforms();
  });
}

async function build() {
  await getTokens();
  console.log("done!");
}

build();
