# spicy-docs
Pepper in useful interactivity to Google Doc HTML exports.

## Requirements
- Node.js v18.11.0 or higher

## Development
1. Export a Google Doc as HTML
2. Rename the Google Doc `input.html` and place it into the `src` directory
3. Run `npm run watch` to inject `spice.js` into the page every time you save
4. Open the output file `output/output.html` in your browser

## Production
1. Export a Google Doc as HTML
2. Rename the Google Doc `input.html` and place it into the `src` directory
3. Run `npm run build` to inject `spice.js` into the page
4. Run `npm run encrypt` to encrypt the page with a password
5. Host the page on GitHub or wherever you want

