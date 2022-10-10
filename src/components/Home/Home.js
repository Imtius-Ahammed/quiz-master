import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeDetails from '../HomeDetails/HomeDetails';


const Home = () => {
  const allQuiz = useLoaderData();
  const qzTopics = allQuiz.data;
  
  return (
    <div >
     
      <h1>THis is Home : {qzTopics.length} </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 container mx-auto gap-10   m-10'>
      {
        qzTopics.map(quiz=><HomeDetails key={quiz.id} quiz={quiz}></HomeDetails>)
      }

      </div>
      
    </div>
  );
};

export default Home;