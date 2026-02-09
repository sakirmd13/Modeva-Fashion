import { useState } from "react";
import { Container, Image } from "react-bootstrap";
import FooterImage from "../assets/image/footerimage.png";
import PlayIcon from "../assets/image/icon/play-circle.svg";

const YouTubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeID = "WCPIQZcfxao"; // updated video ID

  const handlePlay = () => setIsPlaying(true);

  return (
    <Container fluid="lg">
      <section className="py-5 bg-white">
        {!isPlaying ? (
          <div className="video-wrapper position-relative rounded-4 overflow-hidden shadow-sm">
            <Image src={FooterImage} fluid alt="Video Thumbnail" />
            <button
              onClick={handlePlay}
              className="play-button position-absolute top-50 start-50 translate-middle border-0 bg-transparent"
              style={{ cursor: "pointer" }}
            >
              <Image src={PlayIcon} alt="Play" />
            </button>
          </div>
        ) : (
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </section>
    </Container>
  );
};

export default YouTubeVideo;
