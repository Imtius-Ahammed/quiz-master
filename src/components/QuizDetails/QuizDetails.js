
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';



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
     alert('Correct Answer')
    }
    else{
      alert('Wrong answer');
    }
    setMessage(event.target.value);

    // console.log('value is:', event.target.value);
  };




  

  return (
    <div className='border shadow-2xl m-10 p-10 rounded-lg w-5/6 mx-auto '>
      
      <h1 className='w-5/6 mx-auto text-1xl lg:text-3xl font-bold flex justify-between pr-5 mr-5'>Question: {question} ;

      <button onClick={showAnswer}><EyeIcon className='flex h-6 w-6 text-gray-500'></EyeIcon></button>
      
      </h1>
     
       <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 mx-auto w-full  p-10  gap-5 '>
       

        <div >
       <input className='border shadow-md bg-sky-50 hover:bg-sky-400 p-8 whitespace-normal  rounded w-full text-1xl' onClick={handleChange}  type="button" value={options[0]} name="radio-3"   />
       </div>
       <div>
       <input className='border shadow-md bg-sky-50 hover:bg-sky-400 p-8 whitespace-normal rounded w-full' onClick={handleChange} type="button" value={options[1]} name="radio-3"  />
       </div>
       <div>
       <input id='box' className='border shadow-md bg-sky-50 hover:bg-sky-400 p-8 whitespace-normal rounded w-full ' onClick={handleChange} type="button" value={options[2]} name="radio-3" />
       </div>
       <div>
       <input className='border shadow-md bg-sky-50 hover:bg-sky-400 p-8 whitespace-normal rounded w-full' onClick={handleChange} type="button" name="radio-3" value={options[3]} />
       </div>
     
        </div>
        {show}
        
        
    </div>
   
      
      
   
  );
};

export default QuizDetails;