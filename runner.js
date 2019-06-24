
class RunTracker{
    constructor(name, email, date, distance, time){
        this.name = name;
        this.email = email;

	
    }
    addRun(date, time, distance){
        this.distance = distance
        this.time = time
        this.date = date
        
    }
}

undefined
const runner1 = new RunTracker("Mike", "mike@mike.com");
const runner2 = new RunTracker("Omar", "omar@omar.com");

runner1.addRun("2017-01-01", 10, 30)
runner2.addRun("2017-01-01", 5, 20)
