import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
  const quizDetails = useLoaderData();
  const qz = quizDetails.data
  const {options, id, questions, correctAnswer}=qz;
 
  return (
    <div>
      <h1>This is quiz {id}</h1>
      <p>{questions.map(qs=><QuizDetails key={qs.id} qs={qs}></QuizDetails>)}</p>
      
    </div>
  );
};

export default Quiz;