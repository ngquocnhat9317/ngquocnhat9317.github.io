import React, {
  SyntheticEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { CONTENT } from "@/utils/const";
import styles from "@/styles/loginComponent.module.scss";
import { _clx } from "@/utils/common";
import { checkIp, loginRequest } from "@/services/login";
import { BalooText, SignikaNegativeText } from "@/fonts/configFont";
import { useRouter } from "next/router";

const LoginComponent = memo(() => {
  const [stylesContent, setStylesContent] = useState<string>(
    styles.login_content,
  );
  const router = useRouter()
  const nameRef = useRef<string>("");
  const inputRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    const timeout = setTimeout(
      () => setStylesContent(_clx(styles.login_content, styles.actived)),
      200,
    );
    return () => clearTimeout(timeout);
  }, []);

  const loginHandle = useCallback((name: string) => {
    checkIp().then((ip) => {
      loginRequest({ ip, name }).then(() => {
        router.reload()
      });
    });
  }, []);

  const submitHandle = useCallback(async (event: SyntheticEvent) => {
    event.preventDefault();
    loginHandle(nameRef.current);
  }, [loginHandle]);

  const onChangeHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      nameRef.current = event.target.value;
    },
    [],
  );

  const clearInputHandle = useCallback(() => {
    nameRef.current = "";
    inputRef.current.value = "";
  }, []);

  return (
    <div className={styles.wrapper_login}>
      <div className={stylesContent}>
        <form className={styles.form}>
          <label className={_clx(styles.label, SignikaNegativeText.className)}>
            {CONTENT.page_login.label}
          </label>
          <input
            type='text'
            className={_clx(styles.input_text, BalooText.className)}
            defaultValue={""}
            onChange={onChangeHandle}
            ref={inputRef as any} // eslint-disable-line @typescript-eslint/no-explicit-any
          />
          <div className={_clx(styles.button_group)}>
            <button
              type='button'
              className={_clx(styles.button, BalooText.className)}
              onClick={clearInputHandle}
            >
              {CONTENT.page_login.button_1}
            </button>
            <button
              type='submit'
              className={_clx(styles.button, BalooText.className)}
              onClick={submitHandle}
            >
              {CONTENT.page_login.button_2}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

LoginComponent.displayName = "LoginComponent";

export default LoginComponent;
