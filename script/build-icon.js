const fs = require('fs');
const svgicons2svgfont = require('svgicons2svgfont');
const custom = require(`${__dirname}/../src/component/Icon/custom.js`);
const forEach = require('lodash/forEach');

const fontStream = svgicons2svgfont({
  fontName: 'CustomIcons',
});

fontStream
  .pipe(fs.createWriteStream(`${__dirname}/../font/CustomIcons.svg`))
  .on('finish', () => {
    console.log('Font successfully created!');
  })
  .on('error', (err) => {
    console.log(err);
  });

forEach(custom, (unicode, name) => {
  console.log(name, unicode);
  const glyph = fs.createReadStream(`${__dirname}/svg/${name}.svg`);
  glyph.metadata = {
    name,
    unicode: [String.fromCharCode(unicode)],
  };
  fontStream.write(glyph);
});

fontStream.end();
