import "./midSection.css"
import buttonCyan from "./images/buttonCyan.svg"
// import Sequencer from "./sequencer"
import { useEffect, useState } from "react"
import * as Tone from 'tone'


// listens for the key presses in order to trigger the sound for the synth keyboard
function handleKeyPress(event) {
    if(event.key === 'z') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }
    if(event.key === 'x') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("E4", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }
    if(event.key === 'c') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("G4", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }
    if(event.key === 'v') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("B4", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }
    if(event.key === 'b') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C5", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }
    if(event.key === 'n') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("eb5", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }
    if(event.key === 'm') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("G5", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }
    if(event.key === ',') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("Bb5", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }
    if(event.key === '.') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C6", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }
    if(event.key === '/') {
        console.log("You pressed Z")
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
        setInterval(() => console.log(Tone.now()), 100);
    }

  }

function MidSection(props) {
    
    return (
        <div className="wrapper2">
            <header>
                <div className="hero-content">
                    <h1>Hi, I'm James</h1>
                    <p>
                        I design sick web applications
                    </p>
                </div>

                <div className="hero-image">
                    <button onClick={() => props.playSound1()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                    <button onClick={() => props.playSound2()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                    <button onClick={() => props.playSound3()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                    <button onClick={() => props.playSound4()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                    <button onClick={() => props.playSound5()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                    <button onClick={() => props.playSound6()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                    <button onClick={() => props.playSound7()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                    <button onClick={() => props.playSound8()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                    <button onClick={() => props.playSound9()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                    <button onClick={() => props.playSound10()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                </div>
            </header>
        </div>   
    )
}

export default MidSection