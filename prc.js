class runTracker {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.distance = [];
        this.date = [];
    }

    addRun(date, distance, time){
        this.distance.push(distance);
        this.date.push(date);
    }

    totalDistance(){
        return this.distance.reduce((prev, current) => prev + current)
    }

    longestDistance(){
        return this.distance.reduce((max, current) => {
            if(max < current){
                return current
            }
            else{
                return max
            }
        })
    }
}

const nader = new runTracker('Nader', 'me@althubaity.com');

nader.addRun("10-10-2010", 10, 30);
nader.addRun("12-12-2012", 5, 20);
console.log(nader.totalDistance());
console.log(nader.longestDistance());
