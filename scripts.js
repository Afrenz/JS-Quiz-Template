function submitAnswer(){
  var total = 9;
  var score = 0;

  // get user input
  var q1 = document.forms["InterviewQuestions"]["q1"].value;
  var q2 = document.forms["InterviewQuestions"]["q2"].value;
  var q3 = document.forms["InterviewQuestions"]["q3"].value;
  var q4 = document.forms["InterviewQuestions"]["q4"].value;
  var q5 = document.forms["InterviewQuestions"]["q5"].value;
  var q6 = document.forms["InterviewQuestions"]["q6"].value;
  var q7 = document.forms["InterviewQuestions"]["q7"].value;
  var q8 = document.forms["InterviewQuestions"]["q8"].value;
  var q9 = document.forms["InterviewQuestions"]["q9"].value;


  //validation
  if(q1 == null || q1 ==''){
    alert("You missed question1");
    return false;
  };

}