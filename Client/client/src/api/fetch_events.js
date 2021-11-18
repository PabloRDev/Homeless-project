import { USER_EVENTS } from "./fetch_routes";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const userEvents = async (form) => {
  const userEventsFetch = await fetch(USER_EVENTS, {
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify(form),
  });
  const res = await userEventsFetch.json();
  localStorage.setItem("name", JSON.stringify(res.data.name));
  localStorage.setItem("type", JSON.stringify(res.data.type));
  localStorage.setItem("place", JSON.stringify(res.data.place));
  localStorage.setItem("date", JSON.stringify(res.data.date));
  localStorage.setItem("time", JSON.stringify(res.data.time));

  if (!userEventsFetch.ok) {
    throw new Error("No se ha podido introducir el evento", res.message);
  }
  return res;
};
