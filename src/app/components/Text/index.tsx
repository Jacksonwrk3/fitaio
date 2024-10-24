import { create } from "domain";
import React, { createElement } from "react";
import { text } from "stream/consumers";
/**
 * @interface TextProps
 * @property {string} children - Text to be displayed
 * @property {string} as - Which html element the component will represent
 * @property {string} fontSize = One of the tailwind css font size classes
 * @property {string} casing - Text-transform property
 */

interface TextProps {
  fontSize?:
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
  children?: string;
  as?:
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
  casing?: "uppercase" | "lowercase" | "capitalize" | "normal-case";
  align?:
    | "text-left"
    | "text-center"
    | "text-right"
    | "text-justify"
    | "text-start"
    | "text-end";
  color?: "white" | "red";
}

/**
 * @description Text Component
 * @param {string} children - Text to be displayed
 * @param {string} [as="p"] - Which HTML element the component will represent
 *    - Defaults to "p".
 * @param {string} [fontSize="text-base"] - Tailwind CSS font size class
 *    - Options: "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"
 *    - Defaults to "text-base".
 *    - See the [Font Size Documentation](https://tailwindcss.com/docs/font-size).
 * @param {string} [casing="normal-case"] - Text-transform property
 *    - Options: "uppercase", "lowercase", "capitalize", "normal-case".
 *    - Defaults to "normal-case".
 *    - See the [Text Transform Documentation](https://tailwindcss.com/docs/text-transform).
 * @param {string} [align="text-left"] - Text alignment class
 *    - Options: "text-left", "text-center", "text-right", "text-justify", "text-start", "text-end".
 *    - Defaults to "text-left".
 *    - See the [Text Alignment Documentation](https://tailwindcss.com/docs/text-align).
 * @param {string}
 */

const Text: React.FC<TextProps> = ({
  children,
  as = "p",
  fontSize = "text-base",
  casing = "normal-case",
  align = "text-left",
  color,
}) => {
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
  switch (color) {
    case "white":
      textColor = "text-white";
      break;
    case "red":
      textColor = "text-red-500";
  }
  const className = `${textColor} ${fontSize} ${casing} ${align}`;
  return createElement(as, { className: className }, children);
};

export default Text;
