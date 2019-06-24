class RunTracker {
    constructor(name, email) {
        this.name=name;
        this.email=email;
        this.run = []
    }
    addRun (date,time ,distance)
    {
        this.date=date;
        this.time=time;
        this.distance=distance;
        this.run.push({
            date: this.date ,
            time: this.time,
            distance: this.distance,
      })
    }
        totalDistance() {
        let total =0 ;
        this.run.forEach(run => {
            total +=run.distance
          
        })
        return total

    }
    longestDistance() {
        let max = this.run[0].distance;
        this.run.forEach(run => {
            if (max < run.distance)
            max=run.distance

        })
         return max
    }
    averageSpeed() {
        let total =0 ;
        this.run.forEach(run => {
            total +=run.distance
          
        })
         let aveDestance = total/this.run.length

          total =0 ;
         this.run.forEach(run => {
             total +=run.time
           
         })
          let aveTime = total/this.run.length
          return aveTime/aveDestance
    }
 
    }

