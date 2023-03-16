import React from 'react'

const Questions = ({question}) => {
  return (
    <div className='display-ans-container'>
        <div className='display-votes-ans'>
            <p>{question.votes}</p>
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{question.noOfAnswers}</p>
            <p>answer</p>
        </div>
    </div>
  )
}

export default Questions