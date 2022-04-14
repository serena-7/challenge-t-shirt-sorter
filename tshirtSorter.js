// Write your solution below:
function tShirtSorter(str){
    let small = 0;
    let med = 0;
    let large = 0;
  
    for(let i = 0; i < str.length; i++){
      if (str[i] === 's'){
        small++;
      }else if (str[i] === 'm'){
        med++;
      }else if (str[i] === 'l'){
        large++
      }
    }
    return 's'.repeat(small) + 'm'.repeat(med) + 'l'.repeat(large);
  }
  
  console.log(tShirtSorter('mlssllmls'))