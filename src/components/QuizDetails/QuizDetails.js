import React from 'react';

const QuizDetails = ({qs}) => {
  console.log(qs)
  const {id, options,question,correctAnswer} =qs;
  

  return (
    <div className='border shadow-2xl m-10 p-10 rounded-lg '>
      
      <h1 className='text-3xl font-bold'>Question: {question}</h1>
     
       <div className='grid lg:grid-cols-2 md:grid-cols-1 container mx-auto  text-2xl py-10 gap-8 '>
       

        <div className='flex items-center '>
       <input type="radio" name="radio-3" className="radio radio-secondary" checked /><p className='mx-4'>{options[0]}</p> 
       </div>
       <div className='flex items-center '>
       <input type="radio" name="radio-3" className="radio radio-secondary" checked /><p className='mx-4'>{options[1]}</p> 
       </div>
       <div className='flex items-center '>
       <input type="radio" name="radio-3" className="radio radio-secondary" checked /><p className='mx-4'>{options[2]}</p> 
       </div>
       <div className='flex items-center '>
       <input type="radio" name="radio-3" className="radio radio-secondary" checked /><p className='mx-4'>{options[3]}</p> 
       </div>
     
        </div>
        <h3 className='text-3xl font-bold bg-sky-100 py-3 rounded-lg text-red-400 '> Answer:  {correctAnswer}</h3>
    
    
    </div>
      
      
   
  );
};

export default QuizDetails;<h1>Welcome to quiz Details</h1>