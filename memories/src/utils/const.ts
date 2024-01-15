import { PageContent } from "@/services/getPageContent";
import { faker } from "@faker-js/faker";

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
  page_two: PageContent[] | null;
};

type ContentGroup = {
  DEV: Content;
  PROD: Content;
};

export const IMAGE_KIT_URL = process.env.NEXT_PUBLIC_IMAGE_KIT ?? "";

export const IMAGE_LIST_DEV: PageContent[] = [
  {
    id: 1,
    path: "sample_1",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 2,
    path: "sample_2",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 3,
    path: "sample_3",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 4,
    path: "sample_4",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 5,
    path: "sample_1",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 6,
    path: "sample_2",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 7,
    path: "sample_3",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 8,
    path: "sample_4",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 9,
    path: "sample_1",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 10,
    path: "sample_2",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 11,
    path: "sample_3",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 12,
    path: "sample_4",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 13,
    path: "sample_1",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 14,
    path: "sample_2",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 15,
    path: "sample_3",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 16,
    path: "sample_4",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 17,
    path: "sample_1",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 18,
    path: "sample_2",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 19,
    path: "sample_3",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 20,
    path: "sample_4",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 21,
    path: "sample_1",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 22,
    path: "sample_2",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 23,
    path: "sample_3",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 24,
    path: "sample_4",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 25,
    path: "sample_1",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 26,
    path: "sample_2",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 27,
    path: "sample_3",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 28,
    path: "sample_4",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 29,
    path: "sample_1",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 30,
    path: "sample_2",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 31,
    path: "sample_3",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
  },
  {
    id: 32,
    path: "sample_4",
    label: faker.lorem.words({ min: 4, max: 10 }),
    context: faker.lorem.paragraphs(),
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
  page_two: null,
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
  page_two: null,
} as Content;

export const TEXT_CONTENT = {
  DEV: DEV_TEXT,
  PROD: PROD_TEXT,
};

const ENV_VARIABLE = process.env.NEXT_PUBLIC_ENV_VARIABLE ?? "DEV";

export const CONTENT: Content =
  TEXT_CONTENT[ENV_VARIABLE as keyof ContentGroup];
