import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
  const quizDetails = useLoaderData();
  const qz = quizDetails.data
  console.log(qz)
  const { total, questions}=qz;
 
  return (
    <div>
      <h1 className='text-2xl font-bold p-8 bg-sky-200'>Total Questions : {total}</h1>
      <p>{questions.map(qs=><QuizDetails key={qs.id} qs={qs}></QuizDetails>)}</p>
      
    </div>
  );
};

export default Quiz;