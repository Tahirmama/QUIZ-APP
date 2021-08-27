import { Quiz, QuestionType } from "../Types/types";

//this 4&5 line will shuffle the answers
const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

//getting data from api....
export const Quiz_Details = async (): Promise<Quiz[]> => {
    const res = await fetch('https://opentdb.com/api.php?amount=10')
    let { results } = await res.json() //destructure kiya ha result ma ha answers isliya  

    //printing it through map
    const quiz: Quiz[] = results.map((quizObj: QuestionType) => {    //using this for printing questions and their answers
        return {
            question: quizObj.question,
            correct_answer: quizObj.correct_answer,
            answer: quizObj.correct_answer,
            option: shuffleArray(quizObj.incorrect_answers.concat(quizObj.correct_answer))//correct answer or incorrect answer ko pehla concat(join kiya) kiya phir shuffle krdiya answers
        }
    })
    return quiz;
}