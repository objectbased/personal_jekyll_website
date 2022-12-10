const togglePython = document.querySelector('.toggle')
const divList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"]`)
var arrayLength = divList.length;


togglePython.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < arrayLength; i++) {
    console.log(divList[i]);
    if(divList[i].style.display == 'none') {
      divList[i].style.display = 'block';
    } else {
      divList[i].style.display = 'none'
  }
  }
});