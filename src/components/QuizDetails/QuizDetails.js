
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


  const [message, setMessage] = useState('');

  const handleChange = event => {
    if(event.target.value === correctAnswer){
      alert('correct answer');
    }
    else{
      alert('Wrong answer');
    }
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };




  

  return (
    <div className='border shadow-2xl m-10 p-10 rounded-lg container mx-auto'>
      
      <h1 className='text-3xl font-bold flex justify-between pr-5 mr-5'>Question: {question} ;

      <button onClick={showAnswer}><EyeIcon className='flex h-6 w-6 text-gray-500'></EyeIcon></button>
      
      </h1>
     
       <div className='grid lg:grid-cols-2 md:grid-cols-1 container mx-auto w-full text-2xl md:text-1xl p-10 text-center gap-5 '>
       

        <div className='flex  '>
       <input className='border shadow-md bg-sky-50 hover:bg-sky-400 p-8  rounded lg:w-full md:6/12' onClick={handleChange}  type="button" value={options[0]} name="radio-3"   />
       </div>
       <div className=' '>
       <input className='border shadow-md bg-sky-50 hover:bg-sky-400 p-8 rounded w-full' onClick={handleChange} type="button" value={options[1]} name="radio-3"  />
       </div>
       <div className=''>
       <input className='border shadow-md bg-sky-50 hover:bg-sky-400 p-8 rounded w-full ' onClick={handleChange} type="button" value={options[2]} name="radio-3" />
       </div>
       <div className=' '>
       <input className='border shadow-md bg-sky-50 hover:bg-sky-400 p-8 rounded w-full' onClick={handleChange} type="button" name="radio-3" value={options[3]} />
       </div>
     
        </div>
        {show}
        
        
    </div>
   
      
      
   
  );
};

export default QuizDetails;