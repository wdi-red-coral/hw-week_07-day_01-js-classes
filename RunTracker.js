/**
*Create a simple program ('RunTracker') that helps people prepare for 
running a 5k. Each day that a person runs, they create a record of their run.

** The program stores information about the user
    - the user's name
    - the user's email address

** The program stores information about each run
    - the date and time of the run
    - the distance covered, in meters
    - the time taken, in seconds

** The program can perform some actions
    - add run
    - compute total distance run
    - compute longest distance run so far
    - compute average speed (speed = totalDist / totalTime)
 */

 class RunTracker{
     /**
      * constructor that take two args 
      * @param {runner name} name 
      * @param {runner email} email 
      */
    constructor(name, email){
        this.name = name ;
        this.email= email ; 
        /*saveing the runner information in the following arrays  */
        this.distance = [];//in meters 
        this.date = [];
        this.time = [];//in min 
    }
    /*
     *an action that take 3 args to save it in thier arrays  
     */
    addRun(date, time, distance){
        this.date.push(date);
        this.time.push(time);
        this.distance.push(distance)
    }
    /**
     * calculate the sum o distance using reduce()
     */
    totalDistance(){
        return this.distance.reduce( (accumlator,next) => accumlator + next, 0)
    }
    /**
     * calculate the longest distance using reduce()
     */
    longestDistance(){
        const longest = this.distance.reduce((max,current) => {
            /*
            *checking between 2 numbers in the distance array
            * and return the longest number 
            */
            return (max > current) ? max : current 
            }
        )
        return (longest)
    }
    /**
     * calculate the speed average using this formula 
     * speed = totalDist / totalTime
     * and return the average, here using reduce()
     */
    averageSpeed(){
        let timeSum = this.time.reduce((accumlator, next) => accumlator + next , 0 )
        /**
         * divide total time by total distance 
         * HERE: I call the totalDistance() rather than 
         * writing the calculation and repeating the code. 
         */
        let speedAvg = timeSum/totalDistance()
        return "Average Speed is: "+ speedAvg
    } 
 }