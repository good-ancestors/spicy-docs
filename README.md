# spicy-docs
Pepper in useful interactivity to Google Doc HTML exports.

## How it works
1. Export a Google Doc as HTML
2. Rename the Google Doc `input.html` and place it at the root of this directory
3. Run `npm run build` to inject `spice.js` into the page
4. Run `npm run encrypt` to encrypt the page with a password
5. Host the page on GitHub or wherever you want