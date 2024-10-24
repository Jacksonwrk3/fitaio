import React, { createElement } from "react";

/**
 * @interface TextProps
 * @property {React.ReactNode} children - Text to be displayed
 * @property {string} [as] - Which HTML element the component will represent. Defaults to "p".
 * @property {string} [fontSize] - One of the Tailwind CSS font size classes.
 * @property {string} [casing] - Text-transform property.
 * @property {string} [align] - Text alignment class.
 * @property {string} [color] - Color of text.
 * @property {string} [fontWeight] - Tailwind CSS font weight class.
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
  children?: React.ReactNode; // Updated to allow any React node
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
  color?: "white" | "red" | "primary" | "black";
  fontWeight?:
    | "font-thin"
    | "font-extralight"
    | "font-light"
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold"
    | "font-black";
}

/**
 * @deprecated Don't see the point since I only use 3 different colors and a bunch of tailwind classes
 * @description Text Component
 * @param {React.ReactNode} children - Text to be displayed.
 * @param {string} [as="p"] - Which HTML element the component will represent. Defaults to "p".
 * @param {string} [fontSize="text-base"] - Tailwind CSS font size class.
 *    - Options: "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl".
 *    - Defaults to "text-base".
 *    - See the [Font Size Documentation](https://tailwindcss.com/docs/font-size).
 * @param {string} [casing="normal-case"] - Text-transform property.
 *    - Options: "uppercase", "lowercase", "capitalize", "normal-case".
 *    - Defaults to "normal-case".
 *    - See the [Text Transform Documentation](https://tailwindcss.com/docs/text-transform).
 * @param {string} [align="text-left"] - Text alignment class.
 *    - Options: "text-left", "text-center", "text-right", "text-justify", "text-start", "text-end".
 *    - Defaults to "text-left".
 *    - See the [Text Alignment Documentation](https://tailwindcss.com/docs/text-align).
 * @param {string} [color] - Color of text.
 *    - Options: "red", "white", "primary", "black".
 *    - Color determined by element type if prop not provided.
 * @param {string} [fontWeight] - Tailwind CSS font weight class.
 *    - Options: "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black".
 *    - Defaults to "font-normal".
 *    - See the [Font Weight Documentation](https://tailwindcss.com/docs/font-weight)
 */
const Text: React.FC<TextProps> = ({
  children,
  as = "p",
  fontSize = "text-base",
  casing = "normal-case",
  align = "text-left",
  color = "black",
  fontWeight = "font-normal",
}) => {
  let textColor;
  switch (as) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      textColor = "text-black";
      break;
    case "p":
    case "span":
    case "strong":
    case "em":
    case "small":
    case "mark":
    case "del":
    case "ins":
      textColor = "text-black";
      break;
    default:
      textColor = "text-black";
      break;
  }
  switch (color) {
    case "white":
      textColor = "text-white";
      break;
    case "red":
      textColor = "text-red-500";
      break;
    case "primary":
      textColor = "text-primary";
      break;
    case "black":
      textColor = "text-black";
      break;
  }
  const className = `${textColor} ${fontSize} ${casing} ${align} ${fontWeight}`;
  return createElement(as, { className: className }, children);
};

export default Text;
