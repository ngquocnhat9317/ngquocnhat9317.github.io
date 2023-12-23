import useWrapperApi from "@/hooks/wrapperApi";
import { checkIp, verifyAccountRequest } from "@/services/login";
import { useEffect, useState } from "react";

const useCheckAuth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const verifyLogin = useWrapperApi(async () => {
    const ip = await checkIp();
    const check = await verifyAccountRequest({ ip });
    setIsAuth(check.result.check_status);
  }, []);

  useEffect(() => {
    verifyLogin();
  }, [verifyLogin]);

  return isAuth;
};

export default useCheckAuth;
