var http = require('http');
var fs = require('fs');

// middleware
app.use(express.static('public'));

// route
app.get('/', (req, res) => {
    // code inside the route handler
}); // Add this closing curly brace

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

