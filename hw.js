
class RunTracker {
    constructor(name,email){
    this.name=name;
    this.email=email;
    this.date=[];
    this.timetaken=[];
    this.distance=[];
    }
    addRun(date, timetaken, distance){
          this.distance.push(distance)
          this.date.push(date)
          this.timetaken.push(timetaken)
        }
    
    totaldistance(){
    return this.distance.reduce((prev, curr) => prev + curr)
    }
     totaltime(){
    return this.timetaken.reduce((prev, curr) => prev + curr)
    }
    avg(){
    return this.totaldistance()/this.totaltime();
    
    }
    longestDistance() {
            return this.distance.reduce((large, small) => Math.max(large, small));
        }
    }