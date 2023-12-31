import useWrapperApi from "@/hooks/wrapperApi";
import { checkIp, verifyAccountRequest } from "@/services/login";
import { useCallback, useEffect, useState } from "react";

type AuthCheck = {
  isAuth: boolean;
  isVerifying: boolean;
  triggerVerify: () => void;
};

const useCheckAuth = (): AuthCheck => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);

  /** Verify function when user go to home page */
  const verifyLogin = useWrapperApi(() => {
    checkIp().then(async (ip) => {
      const check = await verifyAccountRequest({ ip });
      setIsAuth(check.result.check_status);
      setIsVerifying(false);
    });
  }, []);

  /** Trigger verify for login modal */
  const triggerVerify = useCallback(() => {
    setIsVerifying(true);

    checkIp().then(async (ip) => {
      const check = await verifyAccountRequest({ ip });
      setIsAuth(check.result.check_status);
      setIsVerifying(false);
    });
  }, []);

  useEffect(() => {
    verifyLogin();
  }, [verifyLogin]);

  return {
    isAuth,
    isVerifying,
    triggerVerify: triggerVerify,
  };
};

export default useCheckAuth;
