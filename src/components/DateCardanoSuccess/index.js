import React from "react";
import 'react-h5-audio-player/lib/styles.css';
import audios from "./audios";
import PlayAudio from "../core/audio";

export default function index() {
  return (
    <PlayAudio audio_list={audios}/>
  );
}
