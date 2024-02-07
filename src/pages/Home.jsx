import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Landing() {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 200, y: 200 }); // Initial position of "No" button
    const [noPos, setNoPos] = useState(false);
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    let [data,setData] = useState({})

    useEffect(() => {
        // Extract the encoded data from the URL
        // Convert the hexadecimal data back to its original form
        const decodedData = JSON.parse(hexToAscii(id));
        
        setData(JSON.parse(decodedData))
        decodedData && console.log(data)
      }, []);
    
      // Function to convert hexadecimal to ASCII
      const hexToAscii = (hex) => {
        const bytes = [];
        for (let i = 0; i < hex.length; i += 2) {
          bytes.push(parseInt(hex.substr(i, 2), 16));
        }
        return new TextDecoder().decode(new Uint8Array(bytes));
      };

    

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
       {!isOpen ? ( <div className="flex justify-center items-center h-screen ">
            <div className="text-center flex items-center flex-col">
                <h1 className="text-4xl font-bold text-red-500 drop-shadow-md">Will you be my valentine , {data?.name} ? </h1>
                <div className='pt-16'>
                    <div className="heart1 drop-shadow-md"></div>
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
                <div className="flex justify-center items-center  h-screen">
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
