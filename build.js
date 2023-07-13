
const cheerio = require('cheerio');
const fs = require('fs');
const spice = fs.readFileSync('spice.js').toString()
const pickNMix = cheerio.load(fs.readFileSync('input.html'));
const buildUI = cheerio.load(fs.readFileSync('build-ui.html'));

pickNMix('body').append('<script>'+ spice +'</script>');
buildUI('body').append('<template id="spice">' + btoa(spice) +'</script>');

fs.existsSync('output') && fs.rmSync('output', { recursive: true });
fs.mkdirSync('output');
fs.writeFileSync('output/pick-n-mix.html', pickNMix.html());
fs.writeFileSync('./index.html', buildUI.html());