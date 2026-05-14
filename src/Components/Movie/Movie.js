import React, { useRef, useState, useEffect } from "react";
import "./movie.scss";

const Movie = ({ src, loop = false, preload = "auto" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current; // Copiez videoRef.current dans une variable

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !videoElement.ended) {
          const playPromise = videoElement.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {
              setIsPlaying(false);
            });
          }
          setIsPlaying(true);
        } else {
          videoElement.pause();
          setIsPlaying(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    // Gestionnaire d'événement pour réinitialiser isPlaying lorsque la vidéo est terminée
    const handleVideoEnd = () => setIsPlaying(false);
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  // const togglePlayPause = () => {
  //     if (videoRef.current) {
  //         if (videoRef.current.paused || videoRef.current.ended) {
  //             videoRef.current.play();
  //             setIsPlaying(true);
  //         } else {
  //             videoRef.current.pause();
  //             setIsPlaying(false);
  //         }
  //     }
  // };

  return (
    <div className="movie">
      <video
        className="responsive-video"
        muted
        ref={videoRef}
        autoPlay
        playsInline
        loop={loop ? true : undefined}
        preload={preload}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isPlaying && <button className="play-button">Play</button>}
    </div>
  );
};

export default Movie;
