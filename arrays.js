var chocolateBars = [
  'snickers',
  'hundred grand',
  'skit kat',
  'skittles',
]

function addElementToBeginningOfArray(array, element){
  var array
  var element
  var newArray
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
<<<<<<< HEAD
  array.unshift(element)
=======
  var array
  var element
  array = [element, ...array]
>>>>>>> d229ea001d939884586a7375357c37fae24a6bd6
  return array
}

function addElementToEndOfArray(array, element){
  var array
  var element
  var newArray
  newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
<<<<<<< HEAD
  array.push(element)
=======
  var array
  var element
  array = [...array, element]
>>>>>>> d229ea001d939884586a7375357c37fae24a6bd6
  return array
}

function accessElementInArray(array, index){
  
  return array[index]
<<<<<<< HEAD
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  var newArray
  newArray = array.slice(0, array.length - 1)
  return newArray
}

function removeElementFromBeginningOfArray(array){
  var newArray
  newArray = array.slice(1)
  return newArray
=======
>>>>>>> d229ea001d939884586a7375357c37fae24a6bd6
}