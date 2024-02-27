// Code your solution in this file!


const distanceFromHqInBlocks = function (pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

const distanceFromHqInFeet = function (pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}


const distanceTravelledInFeet = function (start, destination) {
    return Math.abs(start - destination) * 264;
}

const calculatesFarePrice = function (start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);

    if (distanceTravelled <= 400) {
        return 0;
    }
    else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * 0.02;
    }
    else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

}
