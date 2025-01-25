import { ReactNode } from "react";

export const createUnorderedList = (length: number, element: ReactNode) => {
  return Array(length).fill(element);
};

export const decodeHTML = (html:string):string => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(html, 'text/html').documentElement.textContent;
  return decodedString || '';
};