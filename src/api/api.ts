import axios, { AxiosResponse } from "axios";

const baseURL = "https://staging17.o9solutions.com/wp-json/o9/v1/page";

const API = axios.create({
  baseURL,
});

export const getAgenda = async (): Promise<Api.EventAgenda.IFetchResults>  => {
  try {
    const response: AxiosResponse<Api.EventAgenda.IFetchResults> = await API.request({
      url: "/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        post_id: 41298,
      },
    });

    console.log("Data fetched successfully");
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching data:", error);
    throw new Error("Network response was not ok");
  }
};
