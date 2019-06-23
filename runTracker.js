class Tracker {

     arrDis =[]; 
     arrTime = []; 
    constructor(name, email){
        this.name = name; 
        this.email = email; 
      }
    
      addRun(dateTime, distance, timeToken) {
        this.dateTime = dateTime; 
        this.distance = distance; 
        this.timeToken = timeToken;  
        this.arrDis.push(this.distance);
        this.arrTime.push(this.timeToken);  
      }
      
      totalDistance () {
          this.distance += this.distance; 
           return  this.distance; 
      }

      //totalTokenTime () {
       // this.timeToken += this.timeToken; 
   // }
     longestistance (){
    let largest = this.arrDis.reduce((larg, curr)=> Math.max(larg, curr))
    return largest; 
  }  

     avgSpeed () {
        totalTime= this.arrTime.reduce((time, curr)=> time + curr)
        totalDis= this.arrDis.reduce((dis, curr)=> dis + curr) 

       return totalDis / totalTime; 
         
    }

} 
