import React from "react";
import { VolumeNotice } from "@icon-park/react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <VolumeNotice theme="outline" size="24" fill="#3d84b8" />
      </a>{" "}
      {props.phonetic.text}
    </div>
  );
}
