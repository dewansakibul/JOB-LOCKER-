const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: #1094ec;
    color: #DC143C;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
  }
  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  
 
  .right {
    float: right;
    width: 60%;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }
  
  .cloud {
    width: 350px;
    height: 120px;
  
    background: #fff;
    background: linear-gradient(top, #fff 100%);
    background: -webkit-linear-gradient(top, #fff 100%);
    background: -moz-linear-gradient(top, #fff 100%);
    background: -ms-linear-gradient(top, #fff 100%);
    background: -o-linear-gradient(top, #fff 100%);
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  
    position: absolute;
    margin: 120px auto 20px;
    z-index: -1;
    transition: ease 1s;
  }
  
  .cloud:after,
  .cloud:before {
    content: "";
    position: absolute;
    background: #fff;
    z-index: -1;
  }
  
  .cloud:after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }
  
  .cloud:before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
  
    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
  }
  
  .x1 {
    top: -50px;
    left: 100px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    opacity: 0.9;
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }
  
  .x1_5 {
    top: -80px;
    left: 250px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    -webkit-animation: moveclouds 17s linear infinite;
    -moz-animation: moveclouds 17s linear infinite;
    -o-animation: moveclouds 17s linear infinite;
  }
  
  .x2 {
    left: 250px;
    top: 30px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6;
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x3 {
    left: 250px;
    bottom: -70px;
  
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x4 {
    left: 470px;
    botttom: 20px;
  
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;
  
    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }
  
  .x5 {
    left: 200px;
    top: 300px;
  
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }
  
  @-webkit-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-moz-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-o-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
   </style>`;
};

const generateHTML = (pageName) => {
return `
  <div id="clouds">
    <div class="cloud x1"></div>
    <div class="cloud x1_5"></div>
    <div class="cloud x2"></div>
    <div class="cloud x3"></div>
    <div class "cloud x4"></div>
    <div class="cloud x5"></div>
  </div>
  <div class='c'>
    <div class='_404'>404</div>
    <hr>
    <br>
    <div class='_1'>You are wrong user.</div>
    <br>
    <br>
    <div class='_2'>Please Contact: > ${pageName}</div>
  </div>
  <div class="jobslisthighlight">
  <span class="jobdone">100/200</span>
  <a href="#">Job 1</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">50/100</span>
  <a href="#">Job 2</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">75/150</span>
  <a href="#">Job 3</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">60/100</span>
  <a href="#">Job 4</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">80/160</span>
  <a href="#">Job 5</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">90/120</span>
  <a href="#">Job 6</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">30/60</span>
  <a href="#">Job 7</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">40/80</span>
  <a href="#">Job 8</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">40/80</span>
  <a href="#">Job 9</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">40/80</span>
  <a href="#">Job 10</a>
</div>
<div class="jobslisthighlight">
  <span class="jobdone">40/80</span>
  <a href="#">Job 11</a>
</div>
   `;
};

var Reactor= document.getElementsByTagName("strong")[2]?.innerText;

if(Reactor=="Member_2324481306 ")
  {
      full();
  }
  else{
    //  action="404.html";
    console.log("404 error");
    switch (window.location.href){
      case "https://www.microworkers.com/jobs.php":
          document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("dewanshakibulislam@gmail.com");
          break;
  }
};


function full()
  {
  findBestJobAndClick();
  acceptStart();
  doTaskAgain();
}



function TaskIfinish(){
document.querySelector(".menu li:nth-child(3) a")?.click();}


function JobsMenu(){
document.querySelector(".menu li:nth-child(1) a")?.click();}

function HGJobs(){
document.querySelector(".menu li:nth-child(2) a")?.click();}

function findBestJobAndClick() {
  // Select all elements with the class 'jobslisthighlight'
  const jobElements = document.querySelectorAll('.jobslisthighlight');

  let bestJobElement = null;
  let highestRemainingDone = -1; // Initialize with -1 to find the job with the highest remaining positions

  // Iterate through each 'jobslisthighlight' element
  for (const jobElement of jobElements) {
    const jobDoneElement = jobElement.querySelector('.jobdone');

    if (jobDoneElement) {
      const positionsText = jobDoneElement.textContent;
      const positionsMatch = positionsText.match(/(\d+)\/(\d+)/);

      if (positionsMatch) {
        const done = parseInt(positionsMatch[1]);
        const total = parseInt(positionsMatch[2]);
        const remainingDone = total - done; // Calculate remaining positions

        if (remainingDone > highestRemainingDone) { // Check for the highest remaining positions
          highestRemainingDone = remainingDone;
          bestJobElement = jobElement.querySelector('a');
        }
      }
    }
  }

  // Click the job element with the highest remaining positions
  if (bestJobElement) {
    bestJobElement.click();
    console.log(`Clicked on the job: ${bestJobElement.textContent}`);
  } else {
    console.log("No eligible jobs found.");
  }
}  

function acceptStart () {
document.querySelector('[name="CampaignId"]+button')?.click();}

function doTaskAgain () {
document.querySelector('.glyphicon.glyphicon-repeat')?.click();}

function dataCollection(){
document.querySelector(".jobcategoryarea li:nth-child(9) a")?.click();
}