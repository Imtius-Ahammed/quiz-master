import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const HomeDetails = ({quiz}) => {
  
  return (
    <div>
      <div className=" border p-3 card card-compact w-96 shadow-xl">
  <figure><img className='bg-blue-50 ' src={quiz.logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{quiz.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Start Practice <ArrowRightIcon className="h-5 w-5  text-white"></ArrowRightIcon> </button>
    </div>
  </div>
</div>
      
      
    </div>
  );
};

export default HomeDetails;