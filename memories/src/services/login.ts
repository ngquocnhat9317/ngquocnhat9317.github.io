import request from "@/config/apiConfig"

type VerifyDataRequest = {
  ip: string
}

export const verifyAccountRequest = (data: VerifyDataRequest) => {
  return request({
    url: "/verify",
    method: "GET",
    data: data,
  })
}