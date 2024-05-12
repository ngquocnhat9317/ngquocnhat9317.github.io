import { ElementRef, memo, useCallback, useEffect, useRef, useState } from "react";

import styles from "@/styles/Layout.module.scss";
import { _clsx } from "@/utilities/common";

const MusicBox = memo(() => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const audioRef = useRef<ElementRef<"audio">>();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audios/Ed_Sheeran_Photograph.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }
  }, []);

  const triggerPlayAudio = useCallback(() => {
    if (audioRef.current) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlay(false);
      } else {
        audioRef.current.play();
        setIsPlay(true);
      }
    }
  }, [audioRef]);

  return (
    <button
      type="button"
      className={_clsx(
        "absolute bottom-[65px] right-[15px] md:bottom-[15px]",
        "w-[35px] h-[35px]",
        "opacity-70 md:opacity-50 md:hover:opacity-70",
        styles.icon,
        isPlay ? styles.icon_pause : styles.icon_play,
      )}
      onClick={triggerPlayAudio}
    />
  );
});

MusicBox.displayName = "MusicBox";

export default MusicBox;
