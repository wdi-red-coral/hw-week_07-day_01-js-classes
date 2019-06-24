class RunTracker{
    constructor(username ,email){
        this.username =username;
		this.email=email;
        this.array=[];
        this.arrayT=[];
    }

	addRun(date,time,dist){
		this.date=date;
		this.time=time;
		this.dist=dist;
        this.array.push(dist);	
        this.arrayT.push(time);

		}

totalDistance(){
const totalD = this.array.reduce((prev, curr) => prev + curr)
return totalD;

}

longestDistance(){
const longest = this.array.reduce((prev, curr) =>Math.max(prev, curr)) ;
console.log(longest);

}

averageSpeed(){
// const totalT = this.array.reduce((prev, curr) => prev + curr)
// totalD=totalDistance();
// const speed= totalD/totalT;
// return speed;

}

// const totalDistance = (prev, curr) => prev + curr;

}