# HW JS Classes

Suppose that we wanted to create a simple program ('RunTracker') that helps people prepare for running a 5k. Each day that a person runs, they create a record of their run.

The program stores information about the user 
- the user's name
- the user's email address 

The program stores information about each run

- the date and time of the run
- the distance covered, in meters
- the time taken, in seconds

The program can perform some actions
- add run
- compute total distance run
- compute longest distance run so far 
- compute average speed (speed = totalDist / totalTime) 

## Create a Class

The goal should be to have a class that can be used like below:
```js
const runner = new RunTracker("Mike", "mike@mike.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)

runner.totalDistance() // 50 meters

runner.longestDistance() // 30 meters

runner.averageSpeed() // 0.3 meters per second
```
## My solution
```js
class RunTracker {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.dates = [];
        this.distances = [];
        this.times = [];

    }
    addRun(dateAndTime, times, distance) {
        this.dates.push(dateAndTime);
        this.distances.push(distance);
        this.times.push(times)
    }
    totalDistance() {
        const sum = this.distances.reduce((acc, curr) => acc + curr)
        console.log(sum)
    }
    longestDistance() {
        const largest = this.distances.reduce((numLarger, curr) => Math.max(numLarger, curr));
        console.log(largest)
    }
    averageSpeed() {
        const totalDistance = this.distances.reduce((acc, curr) => acc + curr)
        const totalTime = this.times.reduce((acc, curr) => acc + curr)
        const avr = (totalDistance / totalTime)
        console.log(avr)
    }
}


```





## Challenge
- try using `.reduce` for `total distance run` and `average speed`
