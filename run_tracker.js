class RunTracker {

    constructor (username,email){
  
        this.username = username
        this.email= email
        this.tracker=[]
        
    }
  
    addRun(dat,tm,dis){
      
       
            //this.tracker.push(dat +"," +tm + "," + dis);
           this.tracker.push(dat)
           this.tracker.push(tm)
           this.tracker.push(dis)
           
    }

    
     totalD() {
     // const reducer = (iterator, current) => iterator + current

      //const sum = this.tracker.reduce(reducer)
      
      //console.log(sum)


     }
     
    
  }
  const runner = new RunTracker("test", "test@y.com");