import axios from "axios";

export default async function makePostRequest(url) {
  const baseUrl =
    "http://couriax-saas-api.eba-huvccy4z.us-east-1.elasticbeanstalk.com/api/v1";

  try {
    const response = await axios.get(`${baseUrl}${url}`);
    if (response) {
      return response;
    }
    throw new Error("failed request");
  } catch (e) {
    console.log("error");
  }
}
