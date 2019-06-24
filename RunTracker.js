class RunTracker {
    constructor (uName, uEmail){
        this.uName = uName;
        this.uEmail = uEmail;
        this.run = []; //[{date:"2017-01-01",time:60,meters:10}]
        //[{},{},{}]
    }

    addRun(date,time,distance){
        this.date = date;
        this.time = time;
        this.distance = distance;
        this.run.push({date:this.date,time:this.time,distance: this.distance}); //{date: this.date,time:}
    }

    totelDistance(){
        let totol = 0;
        for (let i = 0; i < this.run.length; i++)
        {
            totol = totol + this.run[i].distance
        }
        return totol;
    }

    longestDistance (){
        let max = this.run[0].distance
        for (let i = 1; i < this.run.length; i++){
          if(max < this.run[i].distance){
            max = this.run[i].distance
          }
        }
        return max;

    }

    averageSpeed (){
      let totol_distance = 0;
      for (let i = 0; i < this.run.length; i++)
      {
          totol_distance = totol_distance + this.run[i].distance
      }
      
      let totol_time = 0;
      for (let i = 0; i < this.run.length; i++)
      {
          totol_time = totol_time + this.run[i].time
      }
      
      let ave_distance = totol_distance / this.run.length
      let ave_time = totol_time / this.run.length
      let ave_speed = ave_time / ave_distance
      return ave_speed
        
    }






    }
    
    
    
    
    
    
    const runner = new RunTracker("Mike", "mike@mike.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)
console.log(runner.totelDistance() )
// 50 meters
console.log(runner.longestDistance())
 // 30 meters
console.log(runner.averageSpeed())
// 0.3 meters per second

    