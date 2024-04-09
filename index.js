function promisefiedMyWonsetTimeout(duration) {
	let p = new Promise(function(resolve) {
		setTimeout(function() {

			resolve();

		}, duration);

	});
	return p;
}

const ans = promisefiedMyWonsetTimeout(10000);
ans.then(function() {
	console.log("Time out is done");
        });


//Async Await
 async function main() {
let value = await promisefiedMyWonsetTimeout()
	 console.log(value);
 }

main();
console.log('After main');
