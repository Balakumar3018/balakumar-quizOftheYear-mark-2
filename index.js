//package
const readlineSync = require("readline-sync");
const username=readlineSync.question("What is your name ? ")
console.log("Welcome "+username+" To 'Quiz of the year '")
//function writing to check question and answer
let score=0;
// function checkAnswer(question,answer){
  const checkAnswer=(question,answer)=>{
  const useranswer=readlineSync.question(question);
  if(useranswer === answer){
    console.log("You are answered: "+ useranswer +" is Right !")
    score=score+1;
  }else{
    console.log("You are answered: "+ useranswer +                       " is Wrong !");
  }
  console.log("--------------")
  
}

let HighScores=[
    {
      name:"Bala",
      score:10
    },
    {
      name:"Ajith",
      score:9
    }
]

//list of questions answer storeing in objects
let QuestionOne={
  question:'how many world cup india won in cricket ? \n a.1  \n b.2 \n c.3 \n ',
  answer:"a"
}
let QuestionTwo={
 question:'How we call corona virus ?  \n a.covid-20  \n b.covid-21 \n c.covid-19 \n',
  answer:"c"
}
let QuestionThree={
  question:'How we avoid corona virus ?  \n a.vaccine \n b.mask \n c.both \n',
  answer:"c"
}
let QuestionFour={
  question:'What is JS means  ? \n a.Javasenior  \n b.Javascript   \n c.Javasack \n',
  answer:"b"
}
let QuestionFive={
  question:'Which is used for frontend ? \n a.ReactJS  \n b.NodeJS   \n c.MongoDB \n',
  answer:"a"
}
let QuestionSix={
  question:'Which is used for database ? \n a.ReactJS  \n b.NodeJS   \n c.MongoDB \n',
  answer:"c"
}
let QuestionSeven={
  question:'Which OTT money heist release ? \n a.Hotstar  \n b.Netflix   \n c.Amazonprime \n',
  answer:"b"
}
let QuestionEight={
  question:'Which OTT IPL is streaming ? \n a.Hotstar  \n b.Netflix   \n c.Amazonprime \n',
  answer:"a"
}
let QuestionNine={
  question:'What is dhoni role in T20WC doing ? \n a.player  \n b.coach   \n c.mentor \n',
  answer:"b"
}
let QuestionTen={
  question:'When KGF2 is releasing ? \n a.Nov-2021  \n b.Jan-2022   \n c.Sept-2022 \n',
  answer:"c"
}


//calling functions and passing question and answer
const ListOfQuestions=[QuestionOne,QuestionTwo,QuestionThree,QuestionFour,QuestionFive,QuestionSix,QuestionSeven,QuestionEight,QuestionNine,QuestionTen]
for(let i=0;i<ListOfQuestions.length;i++){
  const QuesAns=ListOfQuestions[i];
  checkAnswer(QuesAns.question,QuesAns.answer);
}
console.log("You have scored "+ score +"! Thanks for playing !!");

//if(score>)
for(let i=0;i<HighScores.length;i++){
  const highscoresList=HighScores[i];
  console.log("Highest scorers of this quiz is " + highscoresList.name+"'s score is " +highscoresList.score+ " out of 10");
}
console.log("If you have scored high please share the screenshot i will update it ")