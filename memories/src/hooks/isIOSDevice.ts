"user client";
import { useEffect, useState } from "react";

type IosCheck = {
  isIPhone: boolean;
  isIPad: boolean;
  isMac: boolean;
  isSafari: boolean;
};

const useIsIOSDevice = () => {
  const [iosCheck, setIOSCheck] = useState<IosCheck>({
    isIPhone: false,
    isIPad: false,
    isMac: false,
    isSafari: false,
  });

  useEffect(() => {
    const userAgent: string = window.navigator.userAgent;
    setIOSCheck({
      isIPhone: userAgent.includes("iPhone"),
      isIPad: userAgent.includes("iPad"),
      isMac: userAgent.includes("Mac"),
      isSafari: userAgent.includes("Safari"),
    });
  }, []);

  return iosCheck;
};

export default useIsIOSDevice;
