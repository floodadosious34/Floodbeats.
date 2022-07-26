
import * as Tone from 'tone'
import React, { useEffect, useState, Component  } from 'react';
import './sequencer.css'
import Play from './images/Play.svg'
import Stop from './images/Stop.svg'
import Record from './images/Record.svg'

const synths = [
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth(),
    new Tone.Synth()
];



// document.documentElement.addEventListener('mousedown', () => {
//             if (Tone.context.state !== 'running') Tone.context.resume()
//         });

synths[0].oscillator.type = 'triangle';
synths[1].oscillator.type = 'sine';
synths[2].oscillator.type = 'sine';
synths[3].oscillator.type = 'sine';
synths[4].oscillator.type = 'sine';
synths[5].oscillator.type = 'sine';
synths[6].oscillator.type = 'sine';

const gain = new Tone.Gain(0.6);
gain.toDestination();

synths.forEach(synth => synth.connect(gain));

const $rows = document.body.querySelectorAll('#tracks > .pads'),
    notes = ['C4', 'G4', 'D4', 'E4', 'F4', 'D4', 'D2'];
let index = 0;
console.log($rows)

Tone.Transport.scheduleRepeat(repeat, '8n');

function repeat(time) {
    let step = index % 32;
    for (let i = 0; i < $rows.length; i++) {
        let synth = synths[i],
            note = notes[i],
            $row = $rows[i],
            $input = $row.querySelector(`input:nth-child(${step + 1})`);
        if ($input.checked) synth.triggerAttackRelease(note, '8n', time);
    }
    index++
}

function Sequencer() {

    const {value, onChange}=useState(1)

    useEffect(()=>{
        const ele = document.querySelector('.buble');
        if (ele) {
        
        }
    })

    return (
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
                    <button className="play" onClick={() => Tone.Transport.start()}><img src={Play} id="play"></img></button>
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
    )
}

export default Sequencer
