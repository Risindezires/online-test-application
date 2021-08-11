   //if we click on start/reset button
//if we are playing
//reload
//if we are not playing
//set score to 0
//show countdown box
//reduce time by 1 second in loop
//if time left?
//yes->continue
//otherwise n->gameover
//change button text to reset
//generate a new question and ans
//if we click on ans box
//if we are playing
//correct
//if the ans is wrong
//show try agagin box for 1 second
var CorrectAnswer;
var action;
var timeremaining;
var playing=false;
var score;
document.getElementById("startreset").onclick=function()
{
	//if we are playing
	if(playing==true)
	{
		location.reload(); //to reload the page
	}
	else
	{
		//if we are not playing
		playing=true;
		score=0;
		document.getElementById("scorevalue").innerHTML=score;
		//show countdown
		document.getElementById("timeremaining").style.display="block";
        timeremaining=60;
        document.getElementById('timeremainingvalue').innerHTML=timeremaining;
        document.getElementById("gameover").style.display="none";
		//change button to reset
		document.getElementById("startreset").innerHTML="reset test";
		//start countdown
		startcountdown();
		//generate Q and A
		generateQA();
	}
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing
    if(playing == true){//yes
        if(this.innerHTML == CorrectAnswer){
        //correct answer

            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            document.getElementById("wrong").style.display="none";
            document.getElementById("correct").style.display="block";
            setTimeout(function(){
                document.getElementById("correct").style.display="none";
            }, 1000);

            //Generate new Q&A

            generateQA();
        }else{
        //wrong answer
            document.getElementById("correct").style.display="none";
            document.getElementById("wrong").style.display="block";
            setTimeout(function(){
                 document.getElementById("wrong").style.display="none";
            }, 1000);
        }
    }
}
}
function startcountdown()//startcounter
{
   action=setInterval(function()
   {
   	timeremaining-=1;
   	document.getElementById("timeremainingvalue").innerHTML=timeremaining;
   	if(timeremaining==0)
   	{
   		stopcountdown();
   		document.getElementById("gameover").style.display="block";
   		document.getElementById("gameover").innerHTML="<p>Test completed!</p><p>your  test score is " + score + ". </p>"
   	  document.getElementById("correct").style.display="none";
   	  document.getElementById("wrong").style.display="none";
   	document.getElementById("timeremaining").style.display="none";
   	playing=false;
   	document.getElementById("startreset").innerHTML="start test";
  }
   },1000)
}//stop counter
function stopcountdown()
{
	clearInterval(action);
}
function generateQA()
{
	var x=1+Math.round(9*Math.random());
	var y=1+Math.round(9*Math.random());
	CorrectAnswer=x*y;
	document.getElementById("question").innerHTML=x+"x"+y;
	var correctposition=1+Math.round(3*Math.random());
	document.getElementById("box"+correctposition).innerHTML=CorrectAnswer;//fill one box with the  correct aswer
    for(i=1;i<5;i++)
    {
    	if(i!=correctposition)
    	{
    		var wrongAnswer;
    		do
    		{//everytime wrong ans should be diff from correect answer otherwise a clash would be there
    			wrongAnswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
    		}while(wrongAnswer==CorrectAnswer);
    		//wrong answer
    		document.getElementById("box"+i).innerHTML=wrongAnswer;
    	}
    }
}
