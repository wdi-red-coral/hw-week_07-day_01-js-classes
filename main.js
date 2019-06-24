class RunTracker {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.runs = []
    }
    addRun(dt, t, ds){
        const x = { date: dt, time: t, distance: ds}
        this.runs.push(x)
    }
    totalDistance(){
        const total = this.runs.reduce((accumelator, curr) => accumelator + curr.distance, 0)
        return total; 
    }
    longestDistance(){
        const longestd = (accumelator, curr) => accumelator > curr.distance? accumelator : curr.distance;
        const long = this.runs.reduce(longestd, 0)
        return long + " meters.";
    }
    averageSpeed(){
        const totald = this.totalDistance();
        const totalt = this.runs.reduce((accumelator, curr) => accumelator + curr.time, 0)
        const avrg = totald/totalt
        return avrg;
    }
}

const runner = new RunTracker("Mike", "mike@mike.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)

runner.totalDistance() // 50 meters

runner.longestDistance() // 30 meters

runner.averageSpeed() // 0.3 meters per second
// 3.3333333333333335