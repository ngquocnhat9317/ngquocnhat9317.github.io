type Content = {
  page_login: {
    label: string;
    button_1: string;
    button_2: string;
  };
  page_one: {
    welcome_first: string;
    welcome_second: string;
    next: string;
  };
};

type ContentGroup = {
  DEV: Content;
  PROD: Content;
};

const DEV_TEXT = {
  page_login: {
    label: "Cras vehicula in erat",
    button_1: "Clear",
    button_2: "Submit",
  },
  page_one: {
    welcome_first: "Lorem ipsum dolor sit amet consectetur.",
    welcome_second: "Pellentesque habitant morbi tristique senectus et netus?",
    next: "Cras vehicula in erat eleifend ornare. Nullam.",
  },
} as Content;

const PROD_TEXT = {
  page_login: {
    label: "Anh hay gọi Ngáo là gì nào?",
    button_1: "Xoá",
    button_2: "Xác Nhận",
  },
  page_one: {
    welcome_first: "Xin chào cục ngáo của tui.",
    welcome_second: "Em đã sẳn sàng khám phá chưa nào?",
    next: "Nhấn bất kỳ để đi đến trang tiếp nhé.",
  },
} as Content;

export const TEXT_CONTENT = {
  DEV: DEV_TEXT,
  PROD: PROD_TEXT,
};

const ENV_VARIABLE = process.env.NEXT_PUBLIC_ENV_VARIABLE ?? "DEV";

export const CONTENT: Content =
  TEXT_CONTENT[ENV_VARIABLE as keyof ContentGroup];
