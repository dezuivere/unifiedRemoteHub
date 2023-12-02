import React, { useEffect, useState } from 'react';
import "./Well.css"
const AudioCard = ({ running }) => {
  const [audioElement, setAudioElement] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      const audio = new Audio(URL.createObjectURL(selectedFile));
      setAudioElement(audio);
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const playAudio = () => {
    if (audioElement) {
      audioElement.play();
      setIsAudioPlaying(true);
    }
  };

  useEffect(() => {
    if (!running && isAudioPlaying) {
      audioElement.pause();
      setIsAudioPlaying(false);
    }
  }, [isAudioPlaying, audioElement]);
  

  return (
    <div className='audio-card'>
      <h2>Listen to music</h2>
      <h6>-------------   *  -------------</h6>
      <h6>Music is the rhythm of the soul, the harmony of the mind, and the symphony of remote collaboration. It’s the soothing melody that relaxes us, no matter where we are!</h6>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={playAudio}>Play Audio</button>
      </div>
    </div>
  );
};

export default AudioCard;