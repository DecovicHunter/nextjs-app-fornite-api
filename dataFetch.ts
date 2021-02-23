const baseUrl = "https://fortnite-api.theapinetwork.com";

export const fetchData = async (endPoint:string) => {
  const response = await fetch(baseUrl + endPoint, {
    headers: { Authorization: process.env.APIKEY },
  });

  if (!response.ok) {
    throw new Error("Error: "+response.status);
  }
  return (await response.json()).data
};
