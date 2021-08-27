import React  from "react"      
export type QuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
}

export type Quiz = {
    question: string
    answer: string
    option: string[]
    correct_answer: string
}


//question card ka liya banae ha yeh type o questions.tsx ma ha
export type questionproptype = {
    question: string
    options: string[]
    callback: (e:React.FormEvent<EventTarget> , ans:string) => void
}
