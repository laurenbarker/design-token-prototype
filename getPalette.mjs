function getPalette(stylesArtboard) {
  // empty "palette obj" wheree we will store all colors
  const palette = {};
  // get "Color" artboard
  const paletteArtboard = stylesArtboard.filter(item => {
    return item.name === "Color";
  })[0].children;

  /* names have only been edited for color-blue group
   * could easily be extended to all color groups
   */
  const colorGroups = paletteArtboard.filter(
    item => item.name === "color-blue",
  )[0].children;

  // get colors from each children
  colorGroups
    .filter(item => item.type === "RECTANGLE")
    .map(item => {
      function rbaObj(obj) {
        return item.fills[0].color[obj] * 255;
      }

      const colorObj = {
        [item.name]: {
          value: `rgba(${rbaObj("r")}, ${rbaObj("g")}, ${rbaObj("b")}, ${
            item.fills[0].color.a
          })`,
          type: "color",
        },
      };

      Object.assign(palette, colorObj);
    });

  return palette;
}

export default getPalette;
