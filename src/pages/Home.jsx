import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Landing() {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 200, y: 200 }); // Initial position of "No" button
    const [noPos, setNoPos] = useState(false);
    const { id } = useParams();
    console.log(id,"sdgsg")
    const [isOpen, setIsOpen] = useState(false);

    

    const handleNoClick = () => {
        // Randomly generate new x and y coordinates within the screen bounds
        setNoPos(true)
        const newX = Math.random() * (window.innerWidth - 100); // Adjust 100 based on button width
        const newY = Math.random() * (window.innerHeight - 100); // Adjust 100 based on button height
        setNoButtonPosition({ x: newX, y: newY });
    };
    const handleYesClick = () => { 
        setIsOpen(true)
    }

    return (
    <React.Fragment>
       {!isOpen ? ( <div className="flex justify-center items-center h-screen bg-gradient-to-br from-red-700 to-white">
            <div className="text-center flex items-center flex-col">
                <h1 className="text-4xl font-bold text-white">Will you be my valentine , {id}</h1>
                <div className='pt-16'>
                    <div className="heart1"></div>
                </div>
                <div className='pt-10 gap-9 flex'>
                    <button className='px-14 py-3 bg-red-700 rounded-lg text-white' onClick={handleYesClick}>Yes</button>
                    {noPos ? (
                        <button
                            className='px-14 py-3 border-white border-2 rounded-lg text-white'
                            style={{ position: 'absolute', left: noButtonPosition.x, top: noButtonPosition.y }}
                            onClick={handleNoClick}
                        >
                            No
                        </button>
                    ) : (
                        <button
                            className='px-14 py-3 border-white border-2 rounded-lg text-white'
                            onClick={handleNoClick}
                        >
                            No
                        </button>
                    )}
                </div>
            </div>
        </div> ) : (
                <div className="flex justify-center items-center  h-screen bg-gradient-to-br from-red-700 to-white">
                         <div class="container">
                            <div class="valentines ">
                                <div class="envelope">
                                    <div class="card">
                                        <div class="text">
                                            Happy  Valentines's Day
                                        </div>
                                        <div class="heart"></div>
                                    </div>
                                </div>
                                <div class="front mx-auto"></div>
                            </div>
                        </div>
                    </div>
            )
        }
        </React.Fragment>
    );
}

export default Landing;
