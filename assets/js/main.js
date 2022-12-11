const togglePython = document.querySelector('#skill_python')
const PythonProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"], [id^="github"]`)
var PythonProjectListLength = PythonProjectList.length;

const toggleBash = document.querySelector('#skill_bash')
const BashProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="python"], [id^="terraform"], [id^="github"]`)
var BashProjectListLength = BashProjectList.length;

const toggleAnsible = document.querySelector('#skill_ansible')
const AnsibleProjectList = document.querySelectorAll(`[id^="splunk"], [id^="python"], [id^="aws"], [id^="bash"], [id^="terraform"], [id^="github"]`)
var AnsibleProjectListLength = AnsibleProjectList.length;

const toggleAws = document.querySelector('#skill_aws')
const AwsProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="python"], [id^="bash"], [id^="terraform"], [id^="github"]`)
var AwsProjectListLength = AwsProjectList.length;

const toggleGithub = document.querySelector('#skill_github')
const GithubProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"], [id^="python"]`)
var GithubProjectListLength = GithubProjectList.length;

const toggleTerraform = document.querySelector('#skill_terraform')
const TerraformProjectList = document.querySelectorAll(`[id^="splunk"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="python"], [id^="github"]`)
var TerraformProjectListLength = TerraformProjectList.length;

const toggleSplunk = document.querySelector('#skill_splunktest')
const SplunkProjectList = document.querySelectorAll(`[id^="python"], [id^="ansible"], [id^="aws"], [id^="bash"], [id^="terraform"], [id^="github"]`)
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
toggleAnsible.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < AnsibleProjectListLength; i++) {
    console.log(AnsibleProjectList[i]);
    if(AnsibleProjectList[i].style.display == 'none') {
      AnsibleProjectList[i].style.display = 'block';
    } else {
      AnsibleProjectList[i].style.display = 'none'
  }
  }
});

// AWS
toggleAws.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < AwsProjectListLength; i++) {
    console.log(AwsProjectList[i]);
    if(AwsProjectList[i].style.display == 'none') {
      AwsProjectList[i].style.display = 'block';
    } else {
      AwsProjectList[i].style.display = 'none'
  }
  }
});

// GitHub
toggleGithub.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < GitHubProjectListLength; i++) {
    console.log(GithubProjectList[i]);
    if(GithubProjectList[i].style.display == 'none') {
      GithubProjectList[i].style.display = 'block';
    } else {
      GithubProjectList[i].style.display = 'none'
  }
  }
});

// Terraform
toggleTerraform.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < TerraformProjectListLength; i++) {
    console.log(TerraformProjectList[i]);
    if(TerraformProjectList[i].style.display == 'none') {
      TerraformProjectList[i].style.display = 'block';
    } else {
      TerraformProjectList[i].style.display = 'none'
  }
  }
});

// Splunk
toggleSplunk.addEventListener('click', () => {
  if(event.target.style.backgroundColor == 'blue') {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
  for (var i = 0; i < SplunkProjectListLength; i++) {
    console.log(SplunkProjectList[i]);
    if(SplunkProjectList[i].style.display == 'none') {
      SplunkProjectList[i].style.display = 'block';
    } else {
      SplunkProjectList[i].style.display = 'none'
  }
  }
});