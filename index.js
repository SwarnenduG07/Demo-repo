function promisefiedMyWonsetTimeout(duration) {
	let p = new Promise(function(resolve) {
		setTimeout(function() {

			resolve();

		}, deration);

	});
	return p;
}

const ans = promisefiedMyWonsetTimeout(10000);
ans.then(function() {
	console.log("Time out is done");
        });
