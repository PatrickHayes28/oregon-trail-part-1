/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Objects here.

//this is creating a traveler using a constructor function
function Traveler(name){
      this.name = name;
      this.food = 1;
      this.isHealthy = true
    }
//this is giving the prototype hunt to traveler and returns a food property increasing it by 2
    Traveler.prototype.hunt = function() {
     return this.food += 2
    }
    //this is giving the prototype eat to traveler and checking the traveler's isHealthy property 
    Traveler.prototype.eat = function() {
    if (this.food <= 0){ //if food is empty 
    this.isHealthy = false //the traveler is not healthy 
    return this.food // if false the traveler still has food
    }
    return this.food -=1 //if food is not empty then subtract 1 food
    }


    //creates a wagon object using a constructor function with 2 properties capacity and passengers 
function Wagon(capacity){
    this.capacity = capacity; //capacity is a parameter where we will pass in a value of 2
    this.passengers = []; // passengers will initially be a empty array that will fill up with our travelers
    }

// this checks for available seats on the wagon  
    Wagon.prototype.getAvailableSeatCount = function() { 
      let availableSeats = this.capacity - this.passengers.length
      return availableSeats
    }
    // this is adding passengers to the wagon
    Wagon.prototype.join = function(Traveler) {
      if (this.getAvailableSeatCount()>0) {
        this.passengers.push(Traveler)
        console.log(`${Traveler.name} is boarding!`)
      } else {
        console.log ("wagon is full!")
      }
    }
//this is checking if a passenger is sick. if sick then quarantine
Wagon.prototype.shouldQuarantine = function(){
  for (let i = 0;i < this.passengers.length; i += 1){ //
    let Traveler = this.passengers[1]
    if(Traveler.isHealthy === false){
      return true
    }
  }
  return false
}

//ths is adding up all of the food that the passengers put in the wagon 
Wagon.prototype.totalFood = function(){
  let foodTotal = 0
  for (let i = 0;i <this.passengers.length; i += 1){ 
    let traveler = this.passengers[i].food
    return foodTotal += traveler
   }
}