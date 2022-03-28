import axios from "axios";

export default async function makePostRequest(payload, url) {
  const baseUrl =
    "http://couriax-saas-api.eba-huvccy4z.us-east-1.elasticbeanstalk.com/api/v1";

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify(payload);

  try {
    const response = await axios.post(`${baseUrl}${url}`, body, config);
    if (response) {
      return response;
    }
    throw new Error("failed request");
  } catch (e) {
    console.log("error");
  }
}
