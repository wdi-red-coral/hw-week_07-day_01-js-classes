class RunTracker {
    constructor(name, email){
      this.name = name;
      this.email = email;
      this.distance = [];
      this.date = [];
      this.time = [];
    }
    
    addRun(date, time, distance){
      this.distance.push(distance)
      this.date.push(date)
      this.time.push(time)
    }
    
    totalDistance(){
      return this.distance.reduce((prev, current) => prev + current)
    }
    
    longestDistance(){
      //[5, 7, 9]
      return this.distance.reduce((max, current) => {
        if(max < current){
          return current
        }
        else{
          return max
        }
      })
    }
    averageSpeed(){
      let ave_distance = this.distance.reduce((prev, current) => prev + current) / this.distance.length
      let ave_time = this.time.reduce((prev, current) => prev + current) / this.time.length
      return ave_time / ave_distance
    }
    
  }
  
  const runner = new RunTracker("Mike", "mike@mike.com");
  
  runner.addRun("2017-01-01", 10, 30)
  runner.addRun("2017-01-02", 5, 20)
  console.log(runner.totalDistance())
   // 50 meters
  console.log(runner.longestDistance())
   // 30 meters
  console.log(runner.averageSpeed())
  //runner.averageSpeed() 