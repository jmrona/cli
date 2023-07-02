export const API = async (params = {}) => {
  const { endpoint, method = "GET", payload } = params;

  return await fetch(`https://api.forthwithlife.co.uk${endpoint}`, {
    method: method,
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
