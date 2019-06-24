class RunTracker {
    constructor(name,email){
        this.name = name
        this.email = email
        this.arr = []
    }
    addRun(date,timeInSec,distanceInMeter){
        this.arr.push({date: date , timeInSec: timeInSec , distanceInMeter: distanceInMeter})
    }
    totalDistance(){
        return this.arr.reduce((total,distanceInMeter) => total+distanceInMeter.distanceInMeter,0)
    }
    longestDistance(){
        return this.arr.reduce((prev,curr) => prev>curr.distanceInMeter? prev:curr.distanceInMeter , 0)
    }
    averageSpeed(){
        return this.totalDistance()/this.arr.reduce((total,timeInSec) => total + timeInSec.timeInSec , 0)
    }
}
const runner = new RunTracker("Mike", "mike@mike.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)

runner.totalDistance() // 50 meters

runner.longestDistance() // 30 meters

runner.averageSpeed() // 3.3 meters per second