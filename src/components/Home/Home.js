import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HomeDetails from '../HomeDetails/HomeDetails';
import img from '../../banner.jpg'
import img1 from '../../my.jpg'

const Home = () => {
  const allQuiz = useLoaderData();
  const qzTopics = allQuiz.data;
  
  
  return (
    <div>
      <section className="bg-sky-200 text-black body-font ">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={img}/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img className='rounded-full' src={img1} alt=''></img>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Md: Imtius Ahammed</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">A programming language is a way for programmers (developers) to communicate with computers.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.

          This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs that are specific to Web pages, please see Web APIs and DOM..</p>
          <Link to='/statistics' className="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
      

   
    <div className='bg-sky-100' >

      
     
      
      <div className='w-4/5 lg:w-full container mx-auto  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-5 pt-10'>
      {
        qzTopics.map(quiz=><HomeDetails key={quiz.id} quiz={quiz}></HomeDetails>)
      }

      </div>
      
    </div>
    </div>
  );
};

export default Home;