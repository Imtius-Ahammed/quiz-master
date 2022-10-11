import React from 'react';

const Blog = () => {
  return (
    <div>
      <h1 className='text-3xl p-5 bg-green-200 m-2 rounded-xl'>This is Blogs</h1>
      <div tabIndex={0} className="collapse collapse-arrow border  bg-blue-400 rounded-box m-2">
  <div className="collapse-title text-3xl font-medium">
  What is useRef?
  </div>
  <div className="collapse-content"> 
    <p className='text-white text-2xl'>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.</p>
   
  </div>
 
</div>
      <div tabIndex={0} className="collapse collapse-arrow border  bg-blue-400 rounded-box m-2">
  <div className="collapse-title text-3xl font-medium">
  What is the purpose of react router?
  </div>
  <div className="collapse-content"> 
    <p className='text-white text-2xl'>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
  
  </div>
 
</div>
      <div tabIndex={0} className="collapse collapse-arrow border  bg-blue-400 rounded-box m-2">
  <div className="collapse-title text-3xl font-medium">
  How does context api works?
  </div>
  <div className="collapse-content"> 
    <p className='text-white text-2xl'>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.</p>
   
  </div>
 
</div>
      
    </div>
  );
};

export default Blog;