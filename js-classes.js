class RunTracker {
constructor(name, email){
this.time = [];
this.date = [];
this.distance = [];
this.email = email;
this.name = name; }

addRun(date, time, distance) {
this.date.push(date)
this.distance.push(distance)
this.time.push(time)         }

totalDistance()   {
return this.distance.reduce((init, next) => init + next)}
longestDistance() {

return this.distance.reduce((max, next) => {
if(max < next){ return next }
else{ return max } } ) }

averageSpeed(){
let average_distance = this.distance.reduce((init, next) => init + next) / this.distance.length
let average_time = this.time.reduce((init, next) => init + next) / this.time.length
return average_time / average_distance } }

const RunTracker = new RunTracker("Taha Sindi","taha@sindi.com");
RunTracker.addRun("2019-06-24", 30, 50)
RunTracker.addRun("2019-06-24", 280, 700)

console.log(RunTracker.totalDistance())
console.log(RunTracker.longestDistance())
console.log(RunTracker.averageSpeed())