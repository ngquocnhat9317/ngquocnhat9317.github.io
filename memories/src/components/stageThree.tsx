import React, { memo } from "react";
import styles from "@/styles/stageThree.module.scss";
import { _clx } from "@/utils/common";
import { CrimsonText, DancingText } from "@/fonts/configFont";

function StageThree() {
  return (
    <div className={styles.wrapper_content}>
      <div className={styles.content}>
        <p className={_clx(CrimsonText.className, styles.text_paragraph)}>
          Chào bé vợ Ngáo của tui. Hôm nay là sinh nhật của Thị Ngáo của tui rồi
          đây. Mừng sinh nhật vợ yêu của anh nhaaaa.
        </p>
        <p className={_clx(CrimsonText.className, styles.text_paragraph)}>
          Hehe chắc em đã xem những hình anh lưu trên web anh làm cho em rồi
          nhỉ. Em thích không á. Những tấm hình đó là những tấm hình anh thích
          nhất. Lưu giữ kỹ niệm của chúng ta (thực ra còn nhiều nữa mà sợ vợ
          chửi nên anh cho lên đó :))).
        </p>
        <p className={_clx(CrimsonText.className, styles.text_paragraph)}>
          Trên mỗi tấm anh đều để lại những tâm tư, suy nghĩ và cảm nhận của anh
          ở tại thời điểm đó và cả bây giờ khi anh nhìn lại chúng. Nhiều cái
          giấu kín anh chưa nói anh cũng viết trên đó hết ấy. Dừa lòng chưa
          hehe. Những cái này chính là quà sinh nhật anh gửi cho em đó. Nhìn qua
          những tấm hình, nhất là những tấm hình trong năm rồi. Anh thấy thương
          vợ kinh khủng. Cảm ơn vợ cả năm qua đã vất vã vì anh. Không được đi
          chơi đâu nhiều hết. Không được ăn nhiều đồ ngon mà vợ thích. Dù vậy mà
          vợ cũng vẫn luôn hiểu cho anh và yêu thương anh. Nên anh yêu thương vợ
          lắm luôn. Qua năm anh sẽ bù lại cho vợ nha. Yêu vợ nhất luôn này.
        </p>
        <p className={_clx(CrimsonText.className, styles.text_paragraph)}>
          Chúc vợ của anh sinh nhật thật vui vẻ bên chồng Quắc Tô này. Chúc vợ
          tuổi mới càng xinh đẹp hơn, càng đáng yêu hơn, thành công hơn này
          (thành công chúa của tuiii).
        </p>
        <br/>
        <p className={_clx(CrimsonText.className, styles.text_paragraph)}>
          14/01/2023<br/>Quắc Tô, con khỉ của Ngáo, chồng của Thị Ngáo
        </p>
        <br/>
        <p className={_clx(DancingText.className, styles.text_sign)}>Quắc Tô</p>
      </div>
    </div>
  );
}

export default memo(StageThree);
