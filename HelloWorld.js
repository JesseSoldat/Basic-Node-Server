var http = require('http'),
	fs   = require('fs'),
	path = require('path'),
	host = '127.0.0.1',
	port = '9000';

var mimes = {
	'.html' : 'text/html',
	'.css'  : 'text/css',
	'.js'	: 'text/javascript',
	'.gif'	: 'image/gif',
	'.jpg'	: 'image/jpeg',
	'.png'	: 'image/png'

};

var server = http.createServer(function(req, res){
	var filepath = (req.url === '/') ? ('./index.html') : ('.' + req.url);
 
	var contentType = mimes[path.extname(filepath)];

	
	fs.readFile(filepath, function(error, content){
			if(error){
				res.writeHead(500);
				res.end();
		} else {
				res.writeHead(200, {'Content-Type' : contentType })
				res.end(content, 'utf-8');
			}
	});
	

	// res.writeHead(200, {'Content-Type': 'text/html'});
	// res.end('<h1>Hello World!</h1>');
}).listen(port,host,function(){
	console.log('Server Running on http://'+host+':'+port);
});