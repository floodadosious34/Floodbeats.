import React from 'react';
import MidSection from '../midSection';
import Sequencer from '../sequencer';
import { Component } from 'react'
import * as Tone from 'tone';
  
class Home extends Component {
  constructor(props) {
    super(props)

    this.playNote1 = this.playNote1.bind(this)
    this.playNote2 = this.playNote2.bind(this)
    this.playNote3 = this.playNote3.bind(this)
    this.playNote4 = this.playNote4.bind(this)
    this.playNote5 = this.playNote5.bind(this)
    this.playNote6 = this.playNote6.bind(this)
    this.playNote7 = this.playNote7.bind(this)
    this.playNote8 = this.playNote8.bind(this)
    this.playNote9 = this.playNote9.bind(this)
    this.playNote10 = this.playNote10.bind(this)
    this.playNote11 = this.playNote11.bind(this)
    this.playNote12 = this.playNote12.bind(this)
    this.playNote13 = this.playNote13.bind(this)
  }


  playNote1() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
  }
  playNote2() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Db4", "8n");
  }
  playNote3() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4", "8n");
  }
  playNote4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("eb4", "8n");
  }
  playNote5() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4", "8n");
  }
  playNote6() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4", "8n");
  }
  playNote7() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("gb4", "8n");
  }
  playNote8() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G4", "8n");
  }
  playNote9() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("ab4", "8n");
  }
  playNote10() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4", "8n");
  }
  playNote11() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("bb4", "8n");
  }
  playNote12() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B4", "8n");
  }
  playNote13() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C5", "8n");
  }

  render() {
    return (
      <>
      <MidSection

                playSound1={this.playNote1}
                playSound2={this.playNote2}
                playSound3={this.playNote3}
                playSound4={this.playNote4}
                playSound5={this.playNote5}
                playSound6={this.playNote6}
                playSound7={this.playNote7}
                playSound8={this.playNote8}
                playSound9={this.playNote9}
                playSound10={this.playNote10}
                playSound11={this.playNote11}
                playSound12={this.playNote12}
                playSound13={this.playNote13}
              />
        <Sequencer />
      </>
    );
  }
};
  
export default Home;