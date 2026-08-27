const fs = require('fs');
const html = fs.readFileSync('c:\\Users\\PC\\Downloads\\Kylewebsite\\services.html', 'utf8');
const start = html.indexOf('<div class="relative flex flex-col items-center justify-center');
console.log(html.substring(start, start + 3000));
