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

export const formatNumber = (value: number | string):string => {
  if (typeof value === 'string') value = parseInt(value, 10);
  if (value > 1000) return `${Math.round(value / 1000)}K`;
  return `${value.toString()}K`;
}

export const themeSwitcher = (value: boolean) => {
  const root = document.documentElement;
  if (value) {
    root.style.setProperty('--primary-color', '#fff')
    root.style.setProperty('--secondary-color', '#EF6D58')
    root.style.setProperty('--text-color', '#B4B5BC')
    root.style.setProperty('--bg-color', '#1C1D2A')
    root.style.setProperty('--secondary-bg-color', '#303146')
    root.style.setProperty('--container-bg-color', '#303146')
    root.style.setProperty('--border-color', '#ADADB2')
    root.style.setProperty('--switch-btn-bg', '#F6F6F6')
  } else {
    root.style.setProperty('--primary-color', '#5A5A5A')
    root.style.setProperty('--secondary-color', '#EF6D58')
    root.style.setProperty('--text-color', '#67676E')
    root.style.setProperty('--bg-color', '#F6F6F6')
    root.style.setProperty('--secondary-bg-color', '#ECECEC')
    root.style.setProperty('--container-bg-color', '#F6F6F6')
    root.style.setProperty('--border-color', '#696969')
    root.style.setProperty('--switch-btn-bg', '#1C1D2A')
  }
};