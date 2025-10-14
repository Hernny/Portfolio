import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

const file = process.argv[2] || 'context_rsc/Cv Hernny Malaver.pdf';
const dataBuffer = fs.readFileSync(file);

try {
  const res = await pdf(dataBuffer);
  console.log(res.text);
} catch (e) {
  console.error('Failed to parse PDF:', e.message);
  process.exit(1);
}
