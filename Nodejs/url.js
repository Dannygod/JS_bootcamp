const url = require('url');
const myurl = 
'http://127.0.0.1:5502/LV7/LV7.5-datalist.html?name=%E8%A8%B1%E5%AE%B8%E7%A0%94&email=danny539425%40gmail.com&food=%E5%86%B0%E6%B7%87%E6%B7%8B&password=123456789';
const parsedUrl = url.parse(myurl, true);
console.log(parsedUrl);
console.log(parsedUrl.query);
console.log(parsedUrl.query.food);

// more : https://chat.openai.com/share/4421e5ed-52e8-4ec7-94fc-2d61b31aec4a
// https://nodejs.org/docs/latest/api/url.html