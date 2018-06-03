'use strict'
 
function Main(input) {
  const takahashi = Number(input.split(' ')[0]);
  const chuhashi = Number(input.split(' ')[1]);
  const syohashi = Number(input.split(' ')[2]);
  const K = input.split(' ')[3];
  const Ka = Number(K.slice(-1));
 
  const answer = chuhashi - takahashi;
  
  if(Ka % 2 === 0 && answer !== 0) {
    console.log(answer * -1);
  } else {
    console.log(answer);
  }
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());