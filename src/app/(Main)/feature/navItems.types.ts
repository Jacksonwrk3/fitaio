/**
 * @typedef {Object} navItem
 * @property {string} name - The name of the navigation item.
 * @property {string} path - The path to navigate to when the item is clicked.
 * @property {string} iconPassive - The URL or path to the passive state icon.
 * @property {string} iconActive - The URL or path to the active state icon.
 * @property {string} alt - The alt text for the icon, used for accessibility.
 */
export type NavigationItem = {
  name: string;
  path: string;
  iconPassive: string;
  iconActive: string;
  alt: string;
};

/**
 * @typedef {navItem[]} NavItems
 * Represents an array of navigation items.
 */
export type NavigationItems = NavigationItem[];
