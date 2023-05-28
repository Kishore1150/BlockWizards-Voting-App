import axois from "axios";

const baseURL = "http://localhost:8080";
export const axios = axois.create({
    baseURL:baseURL
})