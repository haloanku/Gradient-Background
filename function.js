function keylesscar(age) {
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    
}
function keylesscar2(age2) {
    if (Number(age2) === 92){
        console.log("Powering On. Enjoy the ride!")
    }
    
}

keylesscar();
keylesscar2();