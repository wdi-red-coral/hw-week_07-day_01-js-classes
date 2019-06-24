class Runner{

    constructor(name,email){
        this.name = name
        this.email = email
        this.arrtime = []
        this.arrdistance = []
    }

    addRun(date,distance, time){
        this.arrdistance.push(distance)
        this.arrtime.push(time)
    
        
    }
    totalDistance(){
        return this.arrdistance.reduce((prev, current) => prev + current)
    }
    longestDistance(){
        
        return this.arrdistance.reduce((max, current) => {
        if(max < current){
            return current
        }
        else{
            return max
        }
        })
    }
    lowestDistance(){
        
        return this.arrdistance.reduce((max, current) => {
        if(max > current){
            return current
        }
        else{
            return max
        }
        })
    }
    averageSpeed(){
        let average_distance = this.arrdistance.reduce((prev, current) => prev + current) / this.arrdistance.length
        let average_time = this.arrtime.reduce((prev, current) => prev + current) / this.arrtime.length
        return average_time / average_distance
      }
}




