const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const host = req.headers.host || '';
  let file = 'aa1';
  
  if (host.includes('aa2.')) file = 'aa2';
  else if (host.includes('aa3.')) file = 'aa3';
  
  const filePath = path.join(process.cwd(), file, 'index.html');
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(content);
  } catch (e) {
    res.status(500).send('Error loading page');
  }
};
