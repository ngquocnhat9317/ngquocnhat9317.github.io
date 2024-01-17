import React, {
  ElementRef,
  memo,
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { CONTENT } from "@/utils/const";
import { _clx } from "@/utils/common";
import { checkIp, loginRequest } from "@/services/login";
import { BalooText, SignikaNegativeText } from "@/fonts/configFont";
import styles from "@/styles/loginComponent.module.scss";

type Props = {
  triggerVerifyFunction: (_isSkip?: boolean) => void;
};

type CandleProps = {
  left: number;
  color: string;
  delay: number;
};

const LoginComponent = memo(({ triggerVerifyFunction }: Props) => {
  const [stylesContent, setStylesContent] = useState<string>(
    styles.login_content,
  );
  const listCandles = useMemo<CandleProps[]>(
    () =>
      [
        "#FFE7BE",
        "#F7CCCD",
        "#EFB1DB",
        "#FFBEAF",
        "#FBBECA",
        "#F7BEE4",
        "#D789E7",
      ].map((color, index) => ({
        color: color,
        left: Math.floor((100 / 8) * (index + 1)),
        delay: 0.2 * index,
      })),
    [],
  );
  const nameRef = useRef<string>("");
  const inputRef = useRef<ElementRef<"input">>(null); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    const timeout = setTimeout(
      () => setStylesContent(_clx(styles.login_content, styles.actived)),
      200,
    );
    return () => clearTimeout(timeout);
  }, []);

  const loginHandle = useCallback(
    (name: string) => {
      checkIp().then((ip) => {
        loginRequest({ ip, name }).then(() => triggerVerifyFunction());
      });
    },
    [triggerVerifyFunction],
  );

  const submitHandle = useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();
      loginHandle(nameRef.current);
    },
    [loginHandle],
  );

  const onChangeHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      nameRef.current = event.target.value;
    },
    [],
  );

  const clearInputHandle = useCallback(() => {
    nameRef.current = "";
    if (inputRef.current !== null) {
      inputRef.current.value = "";
    }
  }, []);

  return (
    <div className={styles.wrapper_login}>
      <div className={stylesContent}>
        {listCandles.map((candle) => (
          <Candle
            key={candle.color}
            left={candle.left}
            color={candle.color}
            delay={candle.delay}
          />
        ))}
        <div className={styles.wrapper_form}>
          <form className={styles.form}>
            <label
              className={_clx(styles.label, SignikaNegativeText.className)}
            >
              {CONTENT.page_login.label}
            </label>
            <input
              type='text'
              className={_clx(styles.input_text, BalooText.className)}
              defaultValue={""}
              onChange={onChangeHandle}
              ref={inputRef} // eslint-disable-line @typescript-eslint/no-explicit-any
            />
            <div className={_clx(styles.button_group)}>
              <button
                type='button'
                className={_clx(
                  styles.button,
                  styles.button_cancel,
                  BalooText.className,
                )}
                onClick={clearInputHandle}
              >
                {CONTENT.page_login.button_1}
              </button>
              <button
                type='submit'
                className={_clx(
                  styles.button,
                  styles.button_submit,
                  BalooText.className,
                )}
                onClick={submitHandle}
              >
                {CONTENT.page_login.button_2}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

LoginComponent.displayName = "LoginComponent";

const Candle = memo(({ left, color, delay }: CandleProps) => {
  return (
    <>
      <span
        className={styles.candle}
        style={{
          left: `${left}%`,
          backgroundColor: color,
        }}
      />
      <span
        className={styles.fire}
        style={{ left: `${left}%`, animationDelay: `${delay}s` }}
      >
        <span />
      </span>
    </>
  );
});

Candle.displayName = "Candle";

export default LoginComponent;
