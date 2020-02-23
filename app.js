const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.write('Creating a vps, setting up ssh, using nginx');
	res.write('\nfrom local environment');
	res.end()
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
