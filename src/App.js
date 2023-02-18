import React, {useState, useEffect, useRef} from "react"
import useGameLogic from "./useGameLogic"


function App() {

const [textBoxRef, handleChange,text,timeRemaining,startGame,isTimeRunning,wordCount] = useGameLogic()    
    return (
        <>
            <div>
                <h1>How many words can you type in 30 seconds?</h1>
                <textarea
                    ref={textBoxRef}
                    onChange={handleChange}
                    value={text}
                    disabled={!isTimeRunning} />
                <h4>Time remaining: {timeRemaining}</h4>
                <button
                    onClick={startGame}
                    disabled={isTimeRunning}
                >
                    Start
                </button>
                <h1>Word count: {wordCount}</h1>
            </div>
            <div id="footer">
                <h3>&copy; Copyrights 2023. <a className="link" href="https://theadnan.vercel.app" target="_blank">Muhammad Adnan</a></h3>
            </div>
        </>
    )
}

export default App
