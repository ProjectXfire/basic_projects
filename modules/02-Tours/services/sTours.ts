import axios from "axios";
import { ITour } from "../interfaces";

export const getTours = async (url: string) => {
  try {
    const { data } = await axios.get<ITour[]>(url);
    return data;
  } catch (error) {
    return [];
  }
};
