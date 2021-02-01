const http = require('http')

let argv = Array.from(process.argv.splice(2))
if(argv.length == 3) {
	let [urlString, name, pass] = argv

	http.get(`${urlString}?gid=205700800&d=[${new Date()}]发生了提交动作`,{
		auth: `${name}:${pass}`
	}, res => {
		res.setEncoding('utf8');
		let rawData = '';
		res.on('data', (chunk) => { rawData += chunk; });
		res.on('end', () => {
			try {
				console.log(rawData);
			} catch (e) {
				console.error(e.message);
			}
		});
	}).on('error', (e) => {
		console.error(`Got error: ${e.message}`);
	});

} else {
	throw new Error('argv error')
}