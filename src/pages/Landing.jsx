import React from 'react';

function Landing() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-red-700 to-white">
      <div className="text-center flex justify-center items-center flex-col">
        <h1 className="text-4xl font-bold text-white">Will you be my valentine</h1>
        <div className='pt-16'>
            <div className=" heart"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
