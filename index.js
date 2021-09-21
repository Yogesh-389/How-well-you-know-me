var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName=readlineSync.question("Your name please ? ");
console.log( chalk.blue("Welcome ! ")+chalk.yellow(userName));

var score=0;
var highscores=[
  {
    name:"Yogesh",
    score:10
  },
  {
    name:"Shakira",
    score:08
  }


]

function play(question,answer)
{
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.blue("Right ! "));
    score=score+2;
  }
  else
  {
    console.log(chalk.red("Wrong answer ! "));
  }

  console.log("___________________________________________");
}

//play("Where do I live ? ","Uttarakhand");

var questionOne={    question:"Where do I live ? ",
                     answer:"Uttarakhand"
                     
}
var questionTwo={    question:"Who is my favourite marvel hero ? ",
                     answer:"Thor"
                     
}
var questionThree={    question:"Where do I study ? ",
                     answer:"GBPIET"
                     
}
var questionFour={    question:"What is my favourite color ? ",
                     answer:"Black"
                     
}
var questionFive={    question:"What musical instrument I play the most ? ",
                     answer:"Guitar"
                     
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive];

for(var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer);
}


console.log(chalk.green("YAY ! You Scored : ")+chalk.yellowBright(score));

for(var i=1;i<highscores.length;i++)
{
  if(score>=highscores[i].score)
  {
     console.log(chalk.magentaBright("Congratulations ! ")+"you made it to the SCOREBOARD ! ");
     console.log(chalk.blue("Till then checkout previous scores and send me screenshot of your score so that i can update it ! "));
  }
}

console.log("Check out the high score ! ");

for(var i=0;i<highscores.length;i++)
{
  console.log("High Score : ",chalk.yellowBright(highscores[i].score)," By "+chalk.yellow(highscores[i].name));
}
