const http = require('http');
const port = 3000; // Порт, на якому буде працювати сервер

// Створення HTTP-сервера
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Повідомлюємо що формат буде HTML
    const url = req.url;

    if (url === '/about') {
        res.write('<h1>about us page<h1>'); // Write a response
        res.end(); // End the response
    } else if (url === '/contact') {
        res.write('<h1>contact us page<h1>'); // Write a response
        res.end(); // End the response
    } else {
        res.write('<h1>Hello World!<h1>'); // Write a response
        res.write('<h2>My name is Myron<h2>'); // Write a response
        res.write('<p>Don\'t forget to visit my <a href="https://mryzleitsev.space/" target="_blank">personal website</a>.</p>');
        res.end(); // End the response
    }
});

// Прослуховування порту та адреси сервера
server.listen(port, () => {
    console.log(`server start at http://localhost:${port}/`);
});
