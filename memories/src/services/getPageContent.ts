import request from "@/config/apiConfig";

export type PageContent = {
  id: number;
  path: string;
  date?: string;
  label: string;
  context?: string;
};

type PageContentResponse = {
  status: number;
  result: PageContent[];
};

export const getPageContentRequest = async (): Promise<PageContentResponse> => {
  const res = await request({
    url: "/get-context",
    method: "GET",
  });

  return res.data;
};
