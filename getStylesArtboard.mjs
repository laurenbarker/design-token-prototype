import fetch from "node-fetch";

import getPalette from "./getPalette.mjs";

async function getStylesArtboard(figmaApiKey, figmaId) {
  const result = await fetch("https://api.figma.com/v1/files/" + figmaId, {
    method: "GET",
    headers: {
      "X-Figma-Token": figmaApiKey,
    },
  });
  const figmaTreeStructure = await result.json();

  const stylesArtboard = figmaTreeStructure.document.children.filter(item => {
    return item.name === "Global Components & Styles";
  })[0].children;

  const baseTokensJSON = {
    token: {
      grids: {},
      spacers: {},
      colors: {},
      fonts: {},
    },
  };

  // Object.assign(baseTokensJSON.token.grids, getGrids(stylesArtboard));
  // Object.assign(baseTokensJSON.token.spacers, getSpacers(stylesArtboard));
  Object.assign(baseTokensJSON.token.colors, getPalette(stylesArtboard));
  // Object.assign(baseTokensJSON.token.fonts, getFontStyles(stylesArtboard));

  return baseTokensJSON;
}

export default getStylesArtboard;
