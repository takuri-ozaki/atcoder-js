'use strict'
 
function Main(input) {
  const N = Number(input.split('\n')[0]);
  const S = input.split('\n')[1].split('');
 
  let S_left, S_right;
  let change = 0;
  let changemin = 0;
 
  for(let i=0; i<N; i++){
    if(S[i+1] === 'E'){
      change++;
    }
  }
  changemin = change;
 
  for(let j=1; j<N; j++){
    if(S[j-1] === 'W'){
      change++;
    }
    if(S[j] === 'E'){
      change--;
    }
    if(changemin > change) {
      changemin = change;
    }
  }
  console.log(changemin);
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());