import axios from "axios";
import { IExperience } from "../interfaces";

export const getExperiences = async (url: string) => {
  try {
    const { data } = await axios.get<IExperience[]>(url);
    return data;
  } catch (error) {
    return [];
  }
};
