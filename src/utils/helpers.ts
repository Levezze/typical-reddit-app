import { ReactNode } from "react";
import defaultImg from '../img/logo/editedLogo.png'

export const createUnorderedList = (length: number, element: ReactNode) => {
  return Array(length).fill(element);
};

export const decodeHTML = (html:string):string => {
  const parser = new DOMParser();
  const decodedString = parser.parseFromString(html, 'text/html').documentElement.textContent;
  return decodedString || '';
};

export const subSubImg = (subIcon:string | undefined):string => {
  return subIcon
    ? subIcon.includes('http') 
    ? subIcon
    : defaultImg
    : defaultImg;
};