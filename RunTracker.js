class RunTracker {
	constructor(name , email) {
		this.name= name 
		this.email = email 
		this.run = []; //[{},{}]
	
}

	addRun(date , time , distance){
	
		this.run.push({date:this.date,time:this.time,distance:this.distance})

	}

	totalDistance(){
		// let totalDistance = 0;
		// for (let i = 0 ; i < run.length; i++){
		// 	totalDistance += run[i].distance;
		// }
		return this.run.reduce((prev, curr) => prev + curr.distance , 0)
		
		
	}
	
	longestDistance(){
		
		 this.run.reduce((max,currentValue) => { return Math.max(max,currentValue.distance , 0)  });  

	}


	totalTime () {
		return  this.run.reduce((prev, curr) => prev + curr.time , 0)
		
    }


	averageSpeed(){
		return totalDis / totaltime; 

	}



} 