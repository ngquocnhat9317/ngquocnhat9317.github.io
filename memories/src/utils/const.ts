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
  page_two: {
    url: string;
    label: string;
  }[];
};

type ContentGroup = {
  DEV: Content;
  PROD: Content;
};

export const IMAGE_KIT_URL = process.env.NEXT_PUBLIC_IMAGE_KIT ?? "";

export const IMAGE_LIST_PROD = [
  {
    url: "/20-09-2020-airport",
    label: "",
  },
  {
    url: "/30-04-2021-part-1",
    label: "",
  },
  {
    url: "/30-04-2021-part-2",
    label: "",
  },
  {
    url: "/30-04-2021-part-3",
    label: "",
  },
  {
    url: "/30-04-2021-part-4",
    label: "",
  },
  {
    url: "/02-05-2021-part-1",
    label: "",
  },
  {
    url: "/02-05-2021-part-2",
    label: "",
  },
  {
    url: "/02-05-2021-part-3",
    label: "",
  },
  {
    url: "/02-05-2021-part-4",
    label: "",
  },
  {
    url: "/02-05-2021-part-5",
    label: "",
  },
  {
    url: "/19-06-2021-danang",
    label: "",
  },
  {
    url: "/10-10-2021-hanoi",
    label: "",
  },
  {
    url: "/07-11-2021-hanriver",
    label: "",
  },
  {
    url: "/07-11-2021-airport",
    label: "",
  },
  {
    url: "/15-01-2022-airport",
    label: "",
  },
  {
    url: "/14-02-2022-valentine",
    label: "",
  },
  {
    url: "/26-03-2022-hue",
    label: "",
  },
  {
    url: "/12-05-2022-saigon",
    label: "",
  },
  {
    url: "/18-03-2023",
    label: "",
  },
  {
    url: "/19-03-2023-hoian",
    label: "",
  },
  {
    url: "/30-03-2023",
    label: "",
  },
  {
    url: "/21-04-2023",
    label: "",
  },
  {
    url: "/04-05-2023",
    label: "",
  },
  {
    url: "/07-05-2023-beautiful-day",
    label: "",
  },
  {
    url: "/27-05-2023",
    label: "",
  },
  {
    url: "/29-07-2023-mangden-travel",
    label: "",
  },
  {
    url: "/23-09-2023",
    label: "",
  },
  {
    url: "/30-09-2023",
    label: "",
  },
  {
    url: "/23-11-2023",
    label: "",
  },
  {
    url: "/02-12-2023-prepare-for-exam",
    label: "",
  },
  {
    url: "/24-12-2023-xmas",
    label: "",
  },
  {
    url: "/26-04-2023-ngaongo",
    label: "",
  },
];

export const IMAGE_LIST_DEV = [
  {
    url: "/sample_1",
    label: "",
  },
  {
    url: "/sample_2",
    label: "",
  },
  {
    url: "/sample_3",
    label: "",
  },
  {
    url: "/sample_4",
    label: "",
  },
  {
    url: "/sample_1",
    label: "",
  },
  {
    url: "/sample_2",
    label: "",
  },
  {
    url: "/sample_3",
    label: "",
  },
  {
    url: "/sample_4",
    label: "",
  },
  {
    url: "/sample_1",
    label: "",
  },
  {
    url: "/sample_2",
    label: "",
  },
  {
    url: "/sample_3",
    label: "",
  },
  {
    url: "/sample_4",
    label: "",
  },
  {
    url: "/sample_1",
    label: "",
  },
  {
    url: "/sample_2",
    label: "",
  },
  {
    url: "/sample_3",
    label: "",
  },
  {
    url: "/sample_4",
    label: "",
  },
  {
    url: "/sample_1",
    label: "",
  },
  {
    url: "/sample_2",
    label: "",
  },
  {
    url: "/sample_3",
    label: "",
  },
  {
    url: "/sample_4",
    label: "",
  },
  {
    url: "/sample_1",
    label: "",
  },
  {
    url: "/sample_2",
    label: "",
  },
  {
    url: "/sample_3",
    label: "",
  },
  {
    url: "/sample_4",
    label: "",
  },
  {
    url: "/sample_1",
    label: "",
  },
  {
    url: "/sample_2",
    label: "",
  },
  {
    url: "/sample_3",
    label: "",
  },
  {
    url: "/sample_4",
    label: "",
  },
  {
    url: "/sample_1",
    label: "",
  },
  {
    url: "/sample_2",
    label: "",
  },
  {
    url: "/sample_3",
    label: "",
  },
  {
    url: "/sample_4",
    label: "",
  },
];

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
  page_two: IMAGE_LIST_DEV,
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
  page_two: IMAGE_LIST_PROD,
} as Content;

export const TEXT_CONTENT = {
  DEV: DEV_TEXT,
  PROD: PROD_TEXT,
};

const ENV_VARIABLE = process.env.NEXT_PUBLIC_ENV_VARIABLE ?? "DEV";

export const CONTENT: Content =
  TEXT_CONTENT[ENV_VARIABLE as keyof ContentGroup];
