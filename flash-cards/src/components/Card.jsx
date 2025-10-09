import { useState } from 'react';

function Card({ question }){
    const [showAnswer, setShowAnswer] = useState(false);

    return(
        <>
            <div className='container-flash-cards'>
                <h2 className='title'>Flash Cards</h2>
                <div className='loading-border'>
                    <div className='loading-bar'>
                    </div>
                    <span className='percentage'>25%</span>
                    <span className='question-list'> <span className='question'>5</span> of 20</span>
                </div>
                <div className='body-card'>
                    <div className='background-body'>
                        <p className='body-question'>
                        {showAnswer ? question.ansquer : question.question}
                        </p>
                    </div>
                    <div className='options-buttons'>
                        <button className='border-left'> <i className='bi bi-arrow'></i> Previous </button>
                        <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
                        <button className='border-right'> Next  <i className='bi bi-arrow'></i> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card