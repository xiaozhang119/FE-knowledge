const fs = require('fs')
const MarkdownAnalyse = require('@juexro/markdown2html')

const complier = new MarkdownAnalyse({
  cleanDir: true,
  filePath: 'src/HTML/HTML4和HTML5的区别/语法.md',
  outputPath: 'dist',
});
complier.run();
// console.log(compiler);
