

function checkAnswer(){
  let answer = document.getElementById('inputID').value;
  let answerOut = document.getElementById('outputID');
  let bio = document.getElementById('bioID');
  
  if(answer === 'Shuji Nakamura'){
    answerOut.innerHTML = 'You were Correct';
  }
  
  else if(answer === 'shuji nakamura'){
    answerOut.innerHTML = 'You were Correct';
  }
  
  else if(answer === 'Shuji nakamura'){
    answerOut.innerHTML = 'You were Correct';
  }
  
  else if(answer === 'shuji Nakamura'){
    answerOut.innerHTML = 'You were Correct';
  }
  
  else{
    answerOut.innerHTML = 'You were Incorrect';
  };
  
  if(answer === 'Shuji Nakamura'){
    answerOut.innerHTML = 'You were Correct';
  }
  
  else if(answer === 'shuji nakamura'){
    answerOut.innerHTML = 'You were Correct';
  }
  
  else if(answer === 'Shuji nakamura'){
    answerOut.innerHTML = 'You were Correct';
  }
  
  else if(answer === 'shuji Nakamura'){
    answerOut.innerHTML = 'You were Correct';
  }
  
  else{
    answerOut.innerHTML = 'You were Incorrect';
  };
  
  bio.innerHTML = 'This paragraph serves as the primary biography. It should describe the early life, the main scientific or creative struggle, and the breakthrough moment. Use this space to explain the "Why" behind their vision and the obstacles they had to overcome to succeed.<br><br>● Key Achievement: A short summary of their biggest hit.<br><br>● Impact: How the world is different because of them.<br><br>● Legacy: Why we still talk about them today.';
};
