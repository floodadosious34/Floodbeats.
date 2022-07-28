import "./midSection.css"
import buttonCyan from "./images/buttonCyan.svg"
// import Sequencer from "./sequencer"
import { useEffect, useState } from "react"
import * as Tone from 'tone'


// listens for the key presses in order to trigger the sound for the synth keyboard
function handleKeyPress(event) {
    if(event.key === 'q') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
    }
    if(event.key === 'w') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("db4", "8n");
    }
    if(event.key === 'e') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("D4", "8n");
    }
    if(event.key === 'r') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("eb4", "8n");
    }
    if(event.key === 't') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("E4", "8n");
    }
    if(event.key === 'y') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("F4", "8n");
    }
    if(event.key === 'u') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("gb4", "8n");
    }
    if(event.key === 'i') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("G4", "8n");
    }
    if(event.key === 'o') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("ab4", "8n");
    }
    if(event.key === 'p') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("A4", "8n");
    }
    if(event.key === '[') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("bb4", "8n");
    }
    if(event.key === ']') {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("B4", "8n");
    }
    if(event.key === "'") {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C5", "8n");
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
                   <span>C4</span><button onClick={() => props.playSound1()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>Db4</span><button onClick={() => props.playSound2()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>D4</span><button onClick={() => props.playSound3()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>Eb4</span><button onClick={() => props.playSound4()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>E4</span><button onClick={() => props.playSound5()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>F4</span><button onClick={() => props.playSound6()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>Gb4</span><button onClick={() => props.playSound7()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>G4</span><button onClick={() => props.playSound8()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>Ab4</span><button onClick={() => props.playSound9()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>A4</span><button onClick={() => props.playSound10()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>Bb4</span><button onClick={() => props.playSound11()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>B4</span><button onClick={() => props.playSound12()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                   <span>C5</span><button onClick={() => props.playSound13()} onKeyDown={handleKeyPress}><img src={buttonCyan} alt="" srcset="" /></button>
                </div>
            </header>
        </div>   
    )
}

export default MidSection