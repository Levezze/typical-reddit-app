import { ReactNode } from "react";

export const createUnorderedList = (length: number, element: ReactNode) => {
  return Array(length).fill(element);
};