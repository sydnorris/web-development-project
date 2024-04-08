const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const name = req.body.name; // access form data
    const email = req.body.email;
    const message = req.body.message;

    // Validation logic
    const errors = {};
	
	if (!String(data.name).trim()) {
		errors.name = ['Please enter your name'];
	}

    if (!String(data.email).trim()) {
		errors.email = ['Please enter your email'];
	}

    if (!String(data.message).trim()) {
		errors.email = ['Please enter your message'];
	}

    res.send(name, email, message);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
