function add(){
  let total=0;
  for(let i=0;i<arguments.length;i++){
    total +=arguments[i];
  }
  return total;;
}

function subtract(){
  let total=arguments[0];
  for(let i=1;i<arguments.length;i++){
    total -=arguments[i];
  }
  return total;;
}

function multiply(){
  let total=arguments[0];
  for(let i=1;i<arguments.length;i++){
    total *=arguments[i];
  }
  return total;;
}

function divide(){
  let total=arguments[0];
  for(let i=1;i<arguments.length;i++){
    total /=arguments[i];
  }
  return total;;
}

function operate(){
  const operator=arguments[0];
  args=Array.from(arguments);
  args.splice(0,1);

  if(operator==="+"){
    add(...args);
  }
  if(operator==="-"){
    subtract(...args);
  }
  if(operator==="*"){
    multiply(...args);
  }
  if(operator==="/"){
    divide(...args);
  }
}