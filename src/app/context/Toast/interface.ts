/**
 * @interface Toast
 * @description Interface for a single toast notification
 * @property {string} id - The unique identifier for the toast created using Date.now()
 * @property {React.ReactElement} component - The toast component that'll be appended to the toast list
 */
export interface Toast {
  id: string;
  component: React.ReactElement;
}
