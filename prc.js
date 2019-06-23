class runTracker {
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.time = 0;
        this.distance = [];
        this.date = [];
    }

    addRun(date, distance, time){
        this.distance.push(distance);
        this.date.push(date);
        this.time = time;
        console.log('On '+ date +', I have run: ' + distance + ' meters. It took ' + time + ' minutes');
    }

    totalDistance(){
        return this.distance.reduce((prev, current) => prev + current)
    }

    longestDistance(){
        return this.distance.reduce((max, current) => (max < current) ? current : max)

    }
}

const nader = new runTracker('Nader', 'me@althubaity.com');

nader.addRun("10-10-2010", 10, 30);
nader.addRun("12-12-2011", 12, 200);
nader.addRun("12-12-2010", 50, 19);
nader.addRun("12-12-2060", 91, 88);

console.log(nader.totalDistance());
console.log(nader.longestDistance());
