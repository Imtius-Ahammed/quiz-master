
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

import CorrectAnswer from '../CorrectAnswer/CorrectAnswer';

const QuizDetails = ({qs}) => {
  
  const {id, options,question,correctAnswer} = qs;
  // console.log(options);
  
  const [show, setShow] = useState('');
  const showAnswer=()=>{
    setShow(<h3 className='text-3xl font-bold  bg-sky-100 py-3 rounded-lg text-red-400'> Answer: {correctAnswer} </h3>);

  }
 const [compare, setCompare] = useState('');

 const compareAns = ()=>{
  const value1 = options[0];
  const value2 = options[1];
  const value3= options[2];
  const value4= options[3];
  console.log(value4)
 
  
  if(value4 === correctAnswer){
    alert ('correct');
   
  }
  else{
    alert('wrong answer');
  }

 }

  

  return (
    <div className='border shadow-2xl m-10 p-10 rounded-lg'>
      
      <h1 className='text-3xl font-bold flex justify-between pr-5 mr-5'>Question: {question} ;

      <button onClick={showAnswer}><EyeIcon className='flex h-6 w-6 text-gray-500'></EyeIcon></button>
      
      </h1>
     
       <div className='grid lg:grid-cols-2 md:grid-cols-1 container mx-auto  text-2xl py-10 gap-8 '>
       

        <div className='flex items-center '>
       <input onClick={compareAns}  type="radio" name="radio-3" className="radio radio-secondary"  /><p className='mx-4'>{options[0]}</p> 
       </div>
       <div className='flex items-center '>
       <input onClick={compareAns} type="radio" name="radio-3" className="radio radio-secondary"  /><p className='mx-4'>{options[1]}</p> 
       </div>
       <div className='flex items-center '>
       <input onClick={compareAns} type="radio" name="radio-3" className="radio radio-secondary"  /><p className='mx-4'>{options[2]}</p> 
       </div>
       <div className='flex items-center '>
       <input onClick={compareAns} type="radio" name="radio-3" className="radio radio-secondary" /><p className='mx-4'>{options[3]}</p> 
       </div>
     
        </div>
        {show}
        
        
    
    </div>
      
      
   
  );
};

export default QuizDetails;