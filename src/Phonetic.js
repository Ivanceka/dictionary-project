import React from "react";
import { VolumeNotice } from "@icon-park/react";
import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio(event) {
    event.preventDefault();
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }
  return (
    <div className="Phonetic">
      <a href="/" rel="noreferrer" onClick={playAudio} title="Sound">
        <VolumeNotice theme="outline" size="24" />
      </a>
      {props.phonetic.text}
    </div>
  );
}
