
const cheerio = require('cheerio');
const fs = require('fs');
const $ = cheerio.load(fs.readFileSync('input.html'));
const spice = fs.readFileSync('spice.js').toString()
$('body').append('<script>'+ spice +'</script>');
fs.existsSync('output') && fs.rmdirSync('output', { recursive: true });
fs.mkdirSync('output');
fs.writeFileSync('output/output.html', $.html());