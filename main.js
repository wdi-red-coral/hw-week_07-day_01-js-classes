class RunTracker{

    constructor(name,email){
        this.name = name
        this.email = email
        this.dis = []
        this.time = []
    }

addRun(date,time,distance ){
      this.dis.push(distance)
        this.time.push(time)
}
totalDistance(){
   
  return this.dis.reduce((prev, curr) => prev + curr) 
  
}
longest(){
    const largest = this.dis.reduce((prev, curr) => prev > curr ? prev : curr)
    
   return largest
     
}
averageSpeed(){
    const totalDis = this.dis.reduce((prev, curr) => prev + curr) 
    const totalT = this.time.reduce((prev, curr) => prev + curr) 
   return totalDis / totalT
 
  
}


}

const a = new RunTracker('Ahmed','a@123')
a.addRun('2017-10-10', 10 , 30);
a.addRun('2007-01-10', 5 , 20);
a.totalDistance()
a.longest()
a.averageSpeed()

