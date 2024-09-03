// "use server"
import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://api.rawg.io/api", params: {
    key: process.env.NEXT_PUBLIC_RAWG_KEY!
  }
})


