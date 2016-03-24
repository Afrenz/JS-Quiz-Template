function submitAnswers(){
  var total = 10;
  var score = 0;

  // get user input
  var q1 = document.forms["quizForms"]["q1"].value;
  var q2 = document.forms["quizForms"]["q2"].value;
  var q3 = document.forms["quizForms"]["q3"].value;
  var q4 = document.forms["quizForms"]["q4"].value;
  var q5 = document.forms["quizForms"]["q5"].value;
  var q6 = document.forms["quizForms"]["q6"].value;
  var q7 = document.forms["quizForms"]["q7"].value;
  var q8 = document.forms["quizForms"]["q8"].value;
  var q9 = document.forms["quizForms"]["q9"].value;
  var q10 = document.forms["quizForms"]["q9"].value;


  //validation
  for(i = 1; i <= total;i++){
  if eval('q'+i) == null || eval('q'+i) ==''){
    alert("You missed question1");
    return false;
    alert('You missed the question '+ i);
    return false;
  }
 }

 //set correct answers
 var answer = ["b","a", "c", "d", ];

 //check answers given
 var submitAnswers =


}