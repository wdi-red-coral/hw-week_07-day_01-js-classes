class Run{

    constructor(date,time, distance){
        this.date = date
        this.time = time
        this.distance = distance
    }

}

class Runner{

    constructor(name, email){
        this.name = name
        this.email = email
        this.runs=[]
    }

    addRun(date,distance,time){
        let run = new Run(date,distance,time)
        this.runs.push(run)
    }
    
    totalDistance(){
        // this to allow for object to be created before any runs are added
        if(this.runs.length==0)
            console.log('you did not run any runs');
        else{
            let sum = this.runs.reduce((prev, cur) => prev + cur.distance, 0);
            return sum;
        }
        
    }

    longestDistance(){
        // this to allow for object to be created before any runs are added
        if(this.runs.length==0)
            console.log('you did not run any runs');
        else{
            let longest = this.runs.reduce((prev, cur) =>  prev.distance > cur.distance ? prev : cur);
            return longest.distance;
        }
        
    }

    averageSpeed(){
        if(this.runs.length==0)
        console.log('you did not run any runs');
        else{
            let totalTime = this.runs.reduce((prev, cur) => prev + cur.time, 0);
            return this.totalDistance()/totalTime;
        }
    }

}
