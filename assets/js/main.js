const togglePython = document.querySelector('#python')
const PythonDivList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"], [id^="github"]`)
var PythonArrayLength = PythonDivList.length;

const toggleBash = document.querySelector('#bash')
const BashDivList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="python"], [id^="terraform"], [id^="github"]`)
var BashArrayLength = BashDivList.length;

const toggleAnsible = document.querySelector('#ansible')
const AnsibleDivList = document.querySelectorAll(`[id^="splunk"], [id^="bash"], [id^="aws"], [id^="python"], [id^="terraform"], [id^="github"]`)
var AnsibleArrayLength = AnsibleDivList.length;


// Python
togglePython.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < PythonArrayLength; i++) {
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
  for (var i = 0; i < BashArrayLength; i++) {
    console.log(BashDivList[i]);
    if(BashDivList[i].style.display == 'none') {
      BashDivList[i].style.display = 'block';
    } else {
      BashDivList[i].style.display = 'none'
  }
  }
});

//Ansible
toggleAnsible.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < AnsibleArrayLength; i++) {
    console.log(AnsibleDivList[i]);
    if(AnsibleDivList[i].style.display == 'none') {
      AnsibleDivList[i].style.display = 'block';
    } else {
      AnsibleDivList[i].style.display = 'none'
  }
  }
});