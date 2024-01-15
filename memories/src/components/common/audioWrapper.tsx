import React, { ElementRef, memo, useCallback, useRef } from "react";

const AudioWrapper = memo((props: React.PropsWithChildren) => {
  const audioRef = useRef<ElementRef<"audio">>();

  const triggerPlayAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/angelbaby.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  }, []);

  return <div onClick={triggerPlayAudio}>{props.children}</div>;
});

AudioWrapper.displayName = "AudioWrapper";

export default AudioWrapper;
