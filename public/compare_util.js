/*
 * Author: Prakhar Pal (https://github.com/lawki)
 *
 This file tries to compare the inbuilt push methods for javascript Array versus newer spread operator.
 Times are in milliseconds
 */
const Compare = function(iterationCount){
	const iterCount = iterationCount || 10**3;
	console.log("Iteration count",iterationCount);
	let arr = [];
	const seed = ["Thubarahalli","Marathahalli","Nallurhalli","Indira Nagar","BTM Layout","Electronic City","Yelahanka"];

	const usingPush = ()=>{
		/*Using Array.push method*/
		let i=0;
		const startTime1 = new Date();
		while(i<iterCount){
		    i++;
		    for(val of seed) arr.push(val);
		}
		const endTime1 = new Date();
		const totalTime = endTime1-startTime1;
		console.debug(`Time took via Array.push for insertion of
				 ${iterCount*seed.length} elements: ${totalTime} ms.`);
		return totalTime;
	}

	const usingSpread = ()=>{
		/*Using spread operator e.g. Array = [...Array,el] method*/
		let i=0;
		const startTime2 = new Date();
		let arr=[];
		while(i<iterCount){
		    i++;
		    for(val of seed) arr = [...arr, val];
		}
		const endTime2 = new Date();
		const totalTime = endTime2-startTime2;
		console.debug(`Time took via Array.push for insertion of ${iterCount*seed.length} elements: ${totalTime} ms.`);
		return totalTime;
	}
	const getSeedSize = ()=>{ return seed.length;}
	return { usingPush:usingPush,usingSpread:usingSpread, getSeedSize:getSeedSize };
};
