import React, { memo, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

import { ReducerStore } from "@/redux";
import { addQueue, removeQueue } from "@/redux/loadingSlide";
import { useDispatch } from "@/hooks/customDispatch";
import styles from "@/styles/loading.module.scss";

type Props = {
  id: string;
};

const Loading = memo(({ id }: Props) => {
  const current = useSelector(({ loading }: ReducerStore) => loading.current);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addQueue(id));

    return () => dispatch(removeQueue(id));
  }, [dispatch, id]);

  if (current === id)
    return (
      <div className={styles.loading_background}>
        <Image
          src='/images/loading.svg'
          alt='loading'
          height={40}
          width={40}
          priority
        />
      </div>
    );

  return <></>;
});

Loading.displayName = "Loading";

export default Loading;
