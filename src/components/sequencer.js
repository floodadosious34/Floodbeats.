
import * as Tone from 'tone'
import React, { useEffect, useState, Component  } from 'react';
import './sequencer.css'
import Play from './images/Play.svg'
import Stop from './images/Stop.svg'
import Record from './images/Record.svg'


// Create 7 independent synth sounds for the keyboard
// const synths = [
//     new Tone.Synth(),
//     new Tone.Synth(),
//     new Tone.Synth(),
//     new Tone.Synth(),
//     new Tone.Synth(),
//     new Tone.Synth(),
//     new Tone.Synth()
// ];


// Assign a wave form to each synth audio sound
// synths[0].oscillator.type = 'triangle';
// synths[1].oscillator.type = 'sine';
// synths[2].oscillator.type = 'sine';
// synths[3].oscillator.type = 'sine';
// synths[4].oscillator.type = 'sine';
// synths[5].oscillator.type = 'sine';
// synths[6].oscillator.type = 'sine';

// Create a gain instance to boost the volume of the output audio
// const gain = new Tone.Gain(0.6);

// Send the gain to main output
// gain.toDestination();

// Connect each synth sound to gain bus in order to send all synth sound out to main output.
// synths.forEach(synth => synth.connect(gain));

// Capture the pad rows from the DOM and create a array wih the selected notes for tha pads.

const notes = ['C4', 'G4', 'D4', 'E4', 'F4', 'D4', 'D2'];
let index = 0;

// Assign the scheduleRepeat method to the transport and pass in the repeat function, and selected note duration

function Sequencer() {
    function playBack() {
        // Create 7 independent synth sounds for the keyboard
        const synths = [
            new Tone.Synth(),
            new Tone.Synth(),
            new Tone.Synth(),
            new Tone.Synth(),
            new Tone.Synth(),
            new Tone.Synth(),
            new Tone.Synth()
        ];

        // Assign a wave form to each synth audio sound
        synths[0].oscillator.type = 'triangle';
        synths[1].oscillator.type = 'sine';
        synths[2].oscillator.type = 'sine';
        synths[3].oscillator.type = 'sine';
        synths[4].oscillator.type = 'sine';
        synths[5].oscillator.type = 'sine';
        synths[6].oscillator.type = 'sine';

        // Create a gain instance to boost the volume of the output audio
        const gain = new Tone.Gain(0.6);
        // Connect each synth sound to gain bus in order to send all synth sound out to main output.
        synths.forEach(synth => synth.connect(gain));
        // Send the gain to main output
        gain.toDestination();
    // repeated event every 8th note
        Tone.Transport.scheduleRepeat((time) => {
            const $rows = document.body.querySelectorAll('#tracks > .pads')
            let step = index % 32;
            console.log(time)
            for (let i = 0; i < $rows.length; i++) {
                let synth = synths[i],
                    note = notes[i],
                    $row = $rows[i],
                    $input = $row.querySelector(`input:nth-child(${step + 1})`);
                if ($input.checked) synth.triggerAttackRelease(note, '8n');
                console.log($input.checked)
            }
            index++

        }, "8n");
    // transport must be started before it starts invoking events
    Tone.Transport.start();  
    }

    // This was needed to get the input range to work. This is for the volume. Currently not working.
    const {value, onChange}=useState(1)



    return (
        <div>
        <audio controls></audio>
        <div id="tracks">
            <h2>C4</h2>
            <section className="pads">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </section>

            <span><h2>G4</h2></span>
            <section className="pads">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </section>

            <span><h2>D4</h2></span>
            <section className="pads">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </section>

            <span><h2>E4</h2></span>
            <section className="pads">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </section>

            <span><h2>F4</h2></span>
            <section className="pads">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </section>

            <span><h2>S4</h2></span>
            <section className="pads">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </section>

            <span><h2>K4</h2></span>
            <section className="pads">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </section>
            <br></br>
            <div className="tape-play">
                <header>Tape Play</header>
                <div>
                    <button className="play" onClick={playBack}><img src={Play} id="play"></img></button>
                    <label>Play</label>
                    <button className="play" onClick={() => Tone.Transport.stop()}><img src={Stop} id="stop"></img></button>
                    <label>Stop</label>
                    <button className="play"><img src={Record} id="record"></img></button>
                    <label>Record</label>
                </div>
                <div>
                    <input
                        onChange={({ target: {value: radius } }) => {onChange(radius)}}
                        name="volume"
                        id="volume"
                        type="range"
                        min="0"
                        max="180"
                        value={value}
                        step="1"
                    />
                    <label for="volume">Volume</label>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Sequencer
