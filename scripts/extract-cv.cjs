const fs = require('fs');
const pdfPkg = require('pdf-parse');
const pdf = pdfPkg.default || pdfPkg;

const file = process.argv[2] || 'context_rsc/Cv Hernny Malaver.pdf';
const dataBuffer = fs.readFileSync(file);

pdf(dataBuffer)
  .then(res => {
    process.stdout.write(res.text);
  })
  .catch(err => {
    console.error('Failed to parse PDF:', err.message);
    process.exit(1);
  });
