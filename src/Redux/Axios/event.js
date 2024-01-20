import axios from "axios";

export const event = axios.create({
    baseURL: "https://calendara-65xh.onrender.com/api/events"
  });

