// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0, 2);
}


//should return an array of the last two drivers
const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}


    
//has the `returnFirstTwoDrivers` function to as its first element
//has the `returnLastTwoDrivers` function to as its last element
//allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//returns a function
//should multiply a given value using the created multiplier
function createFareMultiplier(x){
    return function (fare){
        return fare * x;
    };

};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(drivers, func){
    return func(drivers);
}