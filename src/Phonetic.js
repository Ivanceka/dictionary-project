import React from "react";
import { VolumeNotice } from "@icon-park/react";
import useSound from "use-sound";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = props.phonetic.audio;
  const [play] = useSound(audio, {
    volume: 0.5,
  });
  function playAudio(event) {
    event.preventDefault();
    play();
  }
  return (
    <div className="Phonetic">
      <a href="/" rel="noreferrer" onClick={playAudio}>
        <VolumeNotice theme="outline" size="24" />
      </a>
      {props.phonetic.text}
    </div>
  );
}
