function writeCards(names, eventName){
   const newArray = []
    for(let i = 0; i < names.length; i++){
        //inside the loop, do something with each individual element
     newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    
    }
    return newArray
    //after the loop, return some result of what occured above
}


function countDown(num){
    while(num >- 1) {
       console.log(num --)
    }
}
       
//function countDown(num){

    //for(let i = num; i > num.length; i --){
       // console.log(num)
    //}
//}


