# design-token-prototype
Testing the ability to pull design tokens from Figma files and generate different formats using [style-dictionary](https://github.com/amzn/style-dictionary).

Based on https://medium.com/@PavelLaptev/design-tokens-with-figma-aef25c42430f

## Setup
Get a personal API token for Figma then add `FIGMA_API_TOKEN` as an environment variable.

I can give you the figma ID that needs to be added as `FIGMA_ID`.

## Install
```
npm i
```

## Run the build script
```
npm run build
```

## References

- explanation of design tokens (shared by Jeremy)
    - [https://spectrum.adobe.com/page/design-tokens/](https://spectrum.adobe.com/page/design-tokens/)
- build system for transforming design tokens into different formats
    - [https://amzn.github.io/style-dictionary/#/README](https://amzn.github.io/style-dictionary/#/README)
- generating design tokens using Figma API
    - [https://blog.prototypr.io/design-tokens-with-figma-aef25c42430f](https://blog.prototypr.io/design-tokens-with-figma-aef25c42430f)
- scaling design token usage
    - [https://badootech.badoo.com/design-tokens-beyond-colors-typography-and-spacing-ad7c98f4f228](https://badootech.badoo.com/design-tokens-beyond-colors-typography-and-spacing-ad7c98f4f228)
- managing design tokens with style dictionary & migrating from Theo to Style Dictionary and why
    - [https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa](https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa)
