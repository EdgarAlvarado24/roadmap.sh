import { useState } from 'react';

function Card({ questions }){
    const [showAnswer, setShowAnswer] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);

    function nextQuestion(){
        // console.log(questionIndex +'>='+ (questions.length - 1))
        setQuestionIndex(questionIndex + 1);
        if(questionIndex >= (questions.length - 1)){
            setQuestionIndex(0);
        }
    }

    function previousQuestion(){
        setQuestionIndex(questionIndex - 1);

        if(questionIndex < (questions.length - 1)){
            setQuestionIndex(1);
        }
    }

    return(
        <>
            <div className='container-flash-cards'>
                <h2 className='title'>Flash Cards</h2>
                <div className='loading-border'>
                    <div className='loading-bar' style={{width:`${(questionIndex + 1) / questions.length * 100}%`}}>
                    </div>
                    <span className='percentage'>{(questionIndex + 1) / questions.length * 100}%</span>
                    <span className='question-list'> <span className='question'>{questionIndex + 1}</span> of {questions.length}</span>
                </div>
                <div className='body-card'>
                    <div className='background-body'>
                        <p className={showAnswer ? 'body-answer' : 'body-question'}>
                        {showAnswer ? questions[questionIndex].ansquer : questions[questionIndex].question}
                        </p>
                    </div>
                    <div className='options-buttons'>
                        <button className='border-left' onClick={previousQuestion}> <i className='bi bi-arrow'></i> Previous </button>
                        <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
                        <button className='border-right' onClick={nextQuestion}> Next  <i className='bi bi-arrow'></i> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card