function check(){
    var question1= document.quiz.question1.value;
    var question2= document.quiz.question2.value;
    var question3= document.quiz.question3.value;
    var question4= document.quiz.question4.value;
    var question5= document.quiz.question5.value;
    var question6= document.quiz.question6.value;
    var question7= document.quiz.question7.value;
    var question8= document.quiz.question8.value;
    var correct = 0; 
    

    if (question1 == "Emma Stone"){
        correct++;
    }
    if (question2 == "Idris Elba"){
        correct++;
    }
    if (question3 == "The Wolf of Wall Street"){
        correct++;
    }
    if (question4 == "Los Angeles"){
        correct++;
    }
    if (question5 == "Donald Glover"){
        correct++;
    }
    if (question6 == "Kill Bill"){
        correct++;
    }
    if (question7 == "Anna"){
        correct++;
    }
    if (question8 == "1997"){
        correct++;
    }
document.getElementById("after").style.visibility = "visible";
document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";
}
