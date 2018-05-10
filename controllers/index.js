// home page
exports.home = function(req, res) {
	res.sendFile('index.html', {root: './public'})
}

// 404
exports.fourZeroFour = function(req, res) {
	res.sendFile('404.html', {root: './public'})
}
