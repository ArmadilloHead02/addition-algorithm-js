function delay(ms) {
	const startTime = new Date().getTime();
	while (new Date().getTime() - startTime <= ms) {};
};

function add(num1, num2) {
	const startTime = Date.now();
	const waitTime = 1000 * (parseInt(num1) + parseInt(num2));

	delay(waitTime);
	return (Math.floor((parseInt(Date.now()) - parseInt(startTime)) / 1000));
};

module.exports = {
	add: add
};