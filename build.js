const cheerio = require('cheerio');
const fs = require('fs');
const spice = fs.readFileSync('src/spice.js').toString()
const pickNMix = cheerio.load(fs.readFileSync('src/input.html'));
const buildUI = cheerio.load(fs.readFileSync('src/build-ui.html'));
const htmlToText = fs.readFileSync('src/textversion.js').toString();

// Add scripts to pick n mix
pickNMix('body').append('<script>'+ htmlToText +'</script>');
pickNMix('body').append('<script>'+ spice +'</script>');

// Add scripts to build UI
buildUI('body').append('<template id="spice">' + btoa(htmlToText) +'</template>');
buildUI('body').append('<template id="html-to-text">' + btoa(spice) +'</template>');

// Write output files to disk
fs.existsSync('output') && fs.rmSync('output', { recursive: true });
fs.mkdirSync('output');
fs.writeFileSync('output/pick-n-mix.html', pickNMix.html());
fs.writeFileSync('./index.html', buildUI.html());