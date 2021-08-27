import React, { useEffect, useState  } from 'react';
import { Quiz_Details } from './services/services';
import './App.css';
import { Quiz } from "./Types/types"
import QuestionCard from './components/Question';
function App() {

  let [quiz, setquiz] = useState<Quiz[]>([])
  let [Current_Step, Set_Current_Step] = useState(0)  //handlesubmit ka liya //step bataega or next step jana ka liya
  let [score, set_score] = useState(0)
  let [show_result, Set_show_result] = useState(false)
  useEffect(() => {
    async function fetchdata() {
      const questions: Quiz[] = await Quiz_Details()  //quiz details(api ha isma) sa jo answers araha ha usa save krwa raha ha 
      setquiz(questions)
    };
    fetchdata();
  }, [])


  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {  //useAns ka andar answer save horaha ha 
    e.preventDefault();   //page reload na ho bar bar

    const current_Question: Quiz = quiz[Current_Step]   //current questions ka correct answer hoga (Full data hoga)
    if (userAns === current_Question.correct_answer) {
      set_score(++score);
    }

    if (Current_Step !== quiz.length - 1)  //aa check krsa ka quiz complete thayo ka nahe quiz.length ni help c jawo complete thaasa else pr chlo jaasa
      Set_Current_Step(++Current_Step);   //next questions khud ba khud aota rehsa
    else {
      Set_Current_Step(0) //jaisa he 10 hojaenga phir woh wapis sa zero sa start hojaega
      Set_show_result(true)
    }
  }

  if (!quiz.length) //creating loading state
    return <h2 className="result">Wait a minute. It's Loading......</h2>

  if (show_result) {
    return (
      <div className ="result">
        <p>
          CONGRATS! YOU HAVE COMPLETED ALL QUESTIONS
          </p>
          <br/>
          <h2>RESULT</h2>
          <br />
          Your finals score is : <strong> {score} </strong>out of <strong>{quiz.length}</strong>
          <br/>
          <br/>
          <span className="cpr">
        © reserved by Tahir
      </span>
      </div>
    )
  }

  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  
  //for date
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  return (
    <div className="head">

      <h1 className="quiz">QUIZ APP</h1>
      <br />
      <h4 className="date">
        Date :{" "}
        {n}{" "} {date}{"-"}{month}{"-"}{year}
      </h4>
      <br />
      <h2 className="date">YOU ARE ON QUESTION NUMBER : {Current_Step + 1}</h2>
      <QuestionCard
        options={quiz[Current_Step].option}
        question={quiz[Current_Step].question}
        callback={handleSubmit}
      />
      <br />
      <span className="cpr">
        © reserved by Tahir

      </span>
      <br />
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
