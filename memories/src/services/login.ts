import request from "@/config/apiConfig";
import axios from "axios";

type VerifyDataRequest = {
  ip: string,
}

type LoginRequest = {
  ip: string,
  name: string,
}

type CheckStatus = {
  check_status: boolean,
  message?: string
}

type VerifyResponse = {
  status: number,
  result: CheckStatus
}

export const verifyAccountRequest = async (data: VerifyDataRequest): Promise<VerifyResponse> => {
  const res = await request({
    url: "/verify",
    method: "GET",
    params: data,
  });

  return res.data;
};

export const loginRequest = async (data: LoginRequest): Promise<VerifyResponse> => {
  const res = await request({
    url: "/login",
    method: "POST",
    data: data,
  });

  return res.data;
};

export const checkIp = async (): Promise<string> => {
  const res = await axios.get("https://api.ipify.org/?format=json");
  return res.data.ip ?? "";
};
