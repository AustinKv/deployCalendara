import axios from "axios";

export const event = axios.create({
    baseURL: "https://calendarabackend.onrender.com/api/events"
  });

