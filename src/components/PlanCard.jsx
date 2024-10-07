import React from 'react';

const PlanCard = ({ plan, handleSelectPlan }) => {
  return (
    <div
      className={`relative flex-1 flex items-stretch flex-col mt-6  text-gray-800  border-gray-800  sm:mt-0 sm:max-w-md ${plan.isMostPop ? 'backdrop-blur shadow-lg sm:border' : ''}`}
    >
      <div className="p-4 py-8 space-y-4 border-b md:p-8  border-gray-800 ">
        <span className="text-orange-600 font-medium">{plan.name}</span>
        <div className=" text-gray-800  text-5xl font-semibold">
          ${plan.price} <span className="text-xl  text-gray-800  font-normal">/mo</span>
        </div>
        <p >{plan.desc}</p>
      </div>
      <ul className="p-4 py-8 space-y-3 md:p-8">
        <li className="pb-2  text-gray-800  font-medium">
          <p>Features</p>
        </li>
        {plan.features.map((featureItem, idx) => (
          <li key={idx} className="flex items-center gap-5 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {featureItem}
          </li>
        ))}
      </ul>
      <div className="p-4">
        <button onClick={() => handleSelectPlan(plan)} className="block w-full text-center text-white bg-orange-600 hover:bg-orange-500 py-3">
          Select Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
