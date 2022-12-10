const togglePython = document.querySelector('#python')
const PythonDivList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"], [id^="github"]`)
var PythonArrayLength = PythonDivList.length;

const toggleBash = document.querySelector('#bash')
const BashnDivList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="python"], [id^="terraform"], [id^="github"]`)
var BashArrayLength = BashnDivList.length;




// Python
togglePython.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < arrayLength; i++) {
    console.log(PythonDivList[i]);
    if(PythonDivList[i].style.display == 'none') {
      PythonDivList[i].style.display = 'block';
    } else {
      PythonDivList[i].style.display = 'none'
  }
  }
});

//Bash
toggleBash.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < arrayLength; i++) {
    console.log(BashnDivList[i]);
    if(BashnDivList[i].style.display == 'none') {
      BashnDivList[i].style.display = 'block';
    } else {
      BashnDivList[i].style.display = 'none'
  }
  }
});