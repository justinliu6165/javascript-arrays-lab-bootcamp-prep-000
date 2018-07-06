const app = "I don't do much."

function destructivelyAppendKitten(name){
   kittens.push(name);
   return kittens;
}
<<<<<<< HEAD

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
}

function prependKitten(name){
  var newArray = kittens.slice();
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten(name){
  var newArray = kittens.slice();
  newArray.pop(name);
  return newArray;
}

function removeFirstKitten(name){
  var newArray = kittens.slice();
  newArray.shift(name);
  return newArray;
}

=======
>>>>>>> 4fe9829ba61fdb53f34eca6cef952ac1ec6361e5
