const baseUrl = "https://fortnite-api.theapinetwork.com";

export const fetchData = async (endPoint:string) => {
  const response = await fetch(baseUrl + endPoint, {
    headers: { Authorization: process.env.APIKEY },
  });

  if (response.status !== 200) {
    return Promise.reject(response.statusText);
  }

  const json = await response.json();
  return Promise.resolve(json.data);
};