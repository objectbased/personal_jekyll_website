const togglePython = document.querySelector('#skill_python')
const PythonProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"]`)
var PythonProjectListLength = PythonProjectList.length;

const toggleBash = document.querySelector('#skill_bash')
const BashProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"]`)
var BashProjectListLength = BashProjectList.length;

const toggleAnsible = document.querySelector('#skill_ansible')
const AnsibleProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"]`)
var AnsibleProjectListLength = AnsibleProjectList.length;

const toggleAws = document.querySelector('#skill_aws')
const AwsProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"]`)
var AwsProjectListLength = AwsProjectList.length;

const toggleGithub = document.querySelector('#skill_github')
const GithubProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"]`)
var GithubProjectListLength = GithubProjectList.length;

const toggleTerraform = document.querySelector('#skill_terraform')
const TerraformProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"]`)
var TerraformProjectListLength = TerraformProjectList.length;

const toggleSplunk = document.querySelector('#skill_splunk')
const SplunkProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"]`)
var SplunkProjectListLength = SplunkProjectList.length;


// Python
togglePython.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < PythonProjectListLength; i++) {
    console.log(PythonProjectList[i]);
    if(PythonProjectList[i].style.display == 'none') {
      PythonProjectList[i].style.display = 'block';
    } else {
      PythonProjectList[i].style.display = 'none'
  }
  }
});

// Bash
toggleBash.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < BashProjectListLength; i++) {
    console.log(BashProjectList[i]);
    if(BashProjectList[i].style.display == 'none') {
      BashProjectList[i].style.display = 'block';
    } else {
      BashProjectList[i].style.display = 'none'
  }
  }
});

// Ansible

// AWS

// GitHub

// Terraform

// Splunk