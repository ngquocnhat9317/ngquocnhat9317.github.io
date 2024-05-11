/* eslint max-len: 0 */

type Section = {
  label: string;
  id: string;
};

type HeaderSection = {
  section_1: Section;
  section_2: Section;
  section_3: Section;
  section_4: Section;
  section_5: Section;
  section_6: Section;
};

export const HEADER: HeaderSection = {
  section_1: {
    label: "Trang chủ",
    id: "section_one",
  },
  section_2: {
    label: "Về chúng tôi",
    id: "section_two",
  },
  section_3: {
    label: "Love Story",
    id: "section_three",
  },
  section_4: {
    label: "Tiệc cưới",
    id: "section_four",
  },
  section_5: {
    label: "Tiền mừng",
    id: "section_five",
  },
  section_6: {
    label: "Lời chúc",
    id: "section_six",
  },
};

export const BLUR_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNc0lZcDwAFkQIewTh1nQAAAABJRU5ErkJggg==";
