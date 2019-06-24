class RunTracker {
    constructor(name, email){
      this.name = name;
      this.email = email;
      this.distance = [];
      this.date = [];
      this.time = [];
    }

    addRun(distance,date,time){
      this.distance.push(distance)
      this.date.push(date)
      this.time.push(time)
    }

    totalDistance(){
      return this.distance.reduce((prev, current) => prev + current)
    }}
