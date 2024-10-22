import { create } from "domain";
import React, { createElement } from "react";

/**
 * @interface TypographyProps
 * @property {string} children - Text to be displayed
 * @property {string} as - Which html element the component will represent
 */

interface TypographyProps {
  FontSize:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl";
  children: string;
  as:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "strong"
    | "em"
    | "small"
    | "mark"
    | "del"
    | "ins";
}

/**
 * @description Typography Component
 * @param {string} children - Text to be displayed
 * @param {string} as - Which html element the component will represent
 */
const Typography: React.FC<TypographyProps> = ({ children, as }) => {
  let textColor;
  switch (as) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      textColor = "text-dark";
      break;
    case "p":
    case "span":
    case "strong":
    case "em":
    case "small":
    case "mark":
    case "del":
    case "ins":
      textColor = "text-primary";
      break;
    default:
      textColor = "text-primary";
      break;
  }

  let classes =
  return createElement(as, classes, children);
};

export default Typography;
