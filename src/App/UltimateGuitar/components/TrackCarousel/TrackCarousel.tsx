import React, { useEffect, useState } from "react";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import ReplayIcon from "@mui/icons-material/Replay";
import "./style.scss";
import { PlayArrow } from "@mui/icons-material";

type CarouselTrack = {
  title: string;
  artist: string;
  rate: 1 | 2 | 3 | 4 | 5;
  picture: string;
};

const CarouselTracks: CarouselTrack[] = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    rate: 5,
    picture: "/ed-sheeran-concert-manille.jpg",
  },
  {
    title: "One",
    artist: "U2",
    rate: 4,
    picture: "/Bono_singing.jpg",
  },
  {
    title: "Hey Joe",
    artist: "Jimi Hendrix",
    rate: 5,
    picture: "/Jimi_Hendrix.jpg",
  },
];

function TrackCarousel() {
  let [trackIndex, setTrackIndex] = useState<number>(0);

  useEffect(() => {
    let carouselInterval = setInterval(() => {
      return trackIndex === CarouselTracks.length - 1
        ? setTrackIndex(0)
        : setTrackIndex(trackIndex + 1);
    }, 5000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [trackIndex]);

  return (
    <div id="track-carousel">
      {CarouselTracks.map((track, i) => (
        <div key={i}>
          {i === trackIndex && (
            <div>
              <section className="track-box">
                <div
                  style={{
                    backgroundImage: `url(${track.picture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: 160,
                    height: 160,
                    position: "relative",
                  }}
                >
                  <button
                    onClick={() => alert("Not a real link!")}
                    className="fake-player"
                  >
                    <div className="player-element">
                      <FastRewindIcon />
                    </div>
                    <div className="player-element">
                      <PlayArrow />
                    </div>
                    <div style={{ margin: "10px solid red" }}></div>
                    <div className="player-element">
                      <ReplayIcon />
                    </div>
                  </button>

                  <div className="timer-bar"></div>
                </div>
              </section>

              <section className="track-details">
                <div>
                  <div className="ult-tab-track-title">{track.title}</div>
                  <div>{track.artist}</div>
                </div>

                <div className="track-rate"></div>
              </section>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TrackCarousel;
