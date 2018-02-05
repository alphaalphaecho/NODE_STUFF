var fs = require('fs');
var https=require('https');

fs.writeFile('newpart.html', '<h1>Header Placement</h1>', function (err) {
  if (err) throw err;
  console.log('HTML page part created');
});

var PhotoLocation = 'https://fortunedotcom.files.wordpress.com/2017/10/172216844.jpg'
https.get(PhotoLocation, function(response) {
	response.pipe(fs.createWriteStream('moon.jpg'));
});