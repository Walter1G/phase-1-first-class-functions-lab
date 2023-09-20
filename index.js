// Code your solution in this file!
 const returnFirstTwoDrivers =  function(arr){ return arr.slice(0,2)};
 const returnLastTwoDrivers =  function(arr){ return arr.slice(-2)};

 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

 function createFareMultiplier(val){
        return val => val*val;
 }

 function fareDoubler(fare){
    const doubler = createFareMultiplier();

    return fare*2;

 }
 function fareTripler(fare){
    const tripl = createFareMultiplier();
    return fare*3;
 }

 const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

 function selectDifferentDrivers(driver, func){

    if(func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(driver);
    }else if (func === returnLastTwoDrivers){
        return returnLastTwoDrivers(driver);
    }

 }

// console.log(typeof(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],"returnFirstTwoDrivers")));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

 