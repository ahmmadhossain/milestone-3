
function validityCheck(inputData){
    if(typeof inputData == 'number' && inputData>=0){
        return true
    }
}


function feetToMile(feet){
    if(validityCheck(feet)==true){
        var mile = feet/5280;
        return mile;
    }else{
        return "Please enter valid positive number."
    }
}


function woodCalculator(chair, table, bed){
    if(validityCheck(chair)==true && validityCheck(table)==true && validityCheck(bed)==true){
        var chairCount = chair * 1;
        var tableCount = table * 3;
        var bedCount = bed * 5;
        var totalWood = chairCount + tableCount + bedCount;
        return totalWood;
    }else{
        return "Please enter valid positive number."
    }
}


function brickCalculator(tier){
    if(validityCheck(tier)==true){
        var totalHight = 0
        var totalBrick = 0
        if(tier<=10){
            totalHight = tier * 15;
        }else if(tier<=20){
            totalHight = 10 * 15 + (tier - 10) * 12;
        }else{
            totalHight = 10 * 15 + 10 * 12 + (tier - 20) * 10;
        }
        return totalBrick = totalHight * 1000;
    }else{
        return "Please enter valid positive number."
    }
}


function tinyFriend(friendList){
    var tinyName = friendList[0];
    for(var i = 1; i < friendList.length; i++){
        if(friendList[i].length < tinyName.length){
            tinyName = friendList[i] ;
        }
    }
    return tinyName;
}


var result1 = feetToMile(7920);
console.log(result1);
var result2 = woodCalculator(4, 2, 3);
console.log(result2);
var result3 = brickCalculator(21);
console.log(result3);
var result4 = tinyFriend(['Kamal', 'Jamali', 'A. k. M. Sobur', 'Kalu', 'Tomal']);
console.log(result4);