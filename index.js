function takeANumber (currentLine, name ){
  
  currentLine.push(name);
  
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing (currentLine){
  if (currentLine.length > 0) {
 
    var firstPerson = currentLine[0];
    currentLine.shift();
    return `Currently serving ${firstPerson}.`;
  } else {
    return `There is nobody waiting to be served!`}
}


function currentLine(current){
  if (current.length > 0) {
    var line = [];
    
    for (var i = 0; i < current.length; i++){
    line.push(` ${i+1}. ${current[i]}`)
    }
    return (`The line is currently:` + line);
  } else {
    return `The line is currently empty.`;
  }
}




