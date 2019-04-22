//|  BURIED ALIVE  |\\

//| Start by creating a const named myName, and set its value equal to the string of your name.
//| Code Below:



//| Review this object:

const objectOne = {
  myName
}

//| We've buried your myName const inside the objectOne object. Access the myName value in objectOne. 
//| Code Below:



//| Review this array:

const arrayOne = [
  objectOne
]

//| Access the myName property through arrayOne.
//| Code Below:



//| Review this object:

const objectTwo = {
  functionOne: function(){
    return arrayOne
  }
}

//| Access myName via objectTwo.
//| Code Below:



//| Nice! Ready for some higher-order methods? Briefly review the code below before reading the explanation:

function randomNumber(){
  return Math.floor(Math.random() * 10)
}

function sortCallback(){
  return randomNumber() - randomNumber()
}

function scramble(arr){
  arr.push({myName: `Not ${myName}`} , {myName: `Not ${myName}`} , {myName: `Not ${myName}`} , {myName: `Not ${myName}`} , {myName: `Not ${myName}`} , {myName: `Not ${myName}`})
  return arr.sort(sortCallback)
}

//| The three functions above work together to add six object elements to any array and then randomly scramble it. You don't need to understand exactly how they work; you just need to know that arrayTwo will be an array of seven elements, including objectOne. Declare the const arrayTwo, and set its value equal to scramble(arrayOne). Code Below:



//| Now, access myName via arrayTwo in such a way that it will work every time. You may use find, filter, or any other higher-order method of your choice. Code Below:



//| Review the code below:

const finalObject = {
  finalArray: scramble(arrayOne)
}

function finalFunction(cb){
  return cb(finalObject)
}

//| Now, study the invocation of finalFunction below, which has been commented out;

// finalFunction(myCallback)

//| Your final challenge will be to code a function called myCallback. When writing the function, do not reference any other functions, objects, arrays, or variables above directly. myCallback should operate strictly on what gets passed into it.
//| When you're ready, invoke finalFunction and pass in myCallback, exactly as demonstrated above. The return should be your name.
//| Ready? Code below:

