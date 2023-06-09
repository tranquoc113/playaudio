import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./audio.css";

export default function PlayAudio({ audio_list }) {
  const [play_list, setPlayList] = React.useState(JSON.parse(audio_list))
  const [currentTrack, setTrackIndex] = React.useState(0);
  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < play_list.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack > play_list.length - 1 ? currentTrack - 1 : 0
    );
  };
  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < play_list.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handItemChange = (index)  => {
    setTrackIndex(index)
  };

  return (
    <div>
      <AudioPlayer
        src={play_list[currentTrack].src}
        showSkipControls
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleEnd}
      />
      <ol className="list-item-audio">
        {play_list.map((props, idx) => (
          <li key={idx} className={currentTrack == idx ? 'active' : ""} onClick={() => handItemChange(idx)}>{props.title}</li>
        ))}
      </ol>
    </div>
  );
}
