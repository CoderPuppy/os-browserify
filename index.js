exports.hostname = function() {
	return "browser";
};

exports.EOL = '\n';

function unsupported() {
	throw new Error('Unsupported Feature');
}

exports.type = unsupported;
exports.platform = unsupported;
exports.arch = unsupported;
exports.uptime = unsupported;
exports.loadavg = unsupported;
exports.totalmem = unsupported;
exports.freemem = unsupported;
exports.tmpDir = unsupported;
exports.cpus = unsupported;
exports.networkInterfaces = unsupported;
