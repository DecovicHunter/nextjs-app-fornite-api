const baseUrl = "https://fortnite-api.theapinetwork.com";

export const fetchData = async (endPoint:string) => {
  const response = await fetch(baseUrl + endPoint, {
    headers: { Authorization: process.env.APIKEY },
  });

  if (!response.ok) {
<<<<<<< HEAD
    throw new Error("Error: "+response.status);
  }
  return (await response.json()).data
};
=======
    throw new Error("Error"+response.status)
  }

  return  (await response.json()).data;
  
};
>>>>>>> 53d1e99f9f5d9c728e3a62f6d15f1eab0e873be8
