import React, { useState } from 'react'
import { questionproptype } from '../Types/types'
import "./../App.css"



const QuestionCard: React.FC<questionproptype> = ({ question, options, callback }) => {      //destructure kiya ha ha //questionproptype type.ts me definfe kiya ha
    
    let [selected_ans , set_selected_ans] = useState("");
    
    const handleSelection = (ev:any) =>{
        set_selected_ans(ev.target.value);
    }
    return (
        <div className="display">
            <div className="question">       {/*  question or option app.tsx sa prop ka through bheja ha */}
             
                {question}
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e , selected_ans)}>
                {
                    options.map((opt: string, ind: number) => {  //using it to print options
                        return (
                            <div key={ind} className="options" >
                                <label >
                                    <input
                                        type="radio"
                                        name="Options"
                                        value={opt}
                                        onChange = {handleSelection}    //jaisa submit pr click karanga value save hoti jaegi
                                        required
                                        checked= {selected_ans === opt} //selected answer agr option ka equal ha to usa checked krdi
                                  className= "radio"
                                  />
                                    {opt}  {/*printing options here */}
                                </label>
                            </div>
                        )
                    })
                }
                <input type="submit"  className="submit"/>
            </form>
        </div>
    )
}

export default QuestionCard;