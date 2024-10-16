import ToastContext from "./ToastContext";
import React, { ReactElement, useState } from "react";
import { Toast } from "./interface";

/**
 * @TODO Render Toast List into the div
 * @TODO daily commit
 */

/**
 * @interface ToastProviderProps interface for ToastProvider props
 * @property {React.ReactNode} children
 */

interface ToastProviderProps {
  children: React.ReactNode;
}

/**
 * @description A context provider for managing toast notifications in the application
 * @type {ToastProviderProps}
 */
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Array<Toast>>([]);

  //Adds a new toast to the toasts state <Array> and removes it from the state
  //after 5 seconds
  const openToast = (component: ReactElement, timeout = 5000) => {
    //Creates a unique id for the toast element since it'll be rendered in a list
    const id = Date.now();
    const toastArray = [...toasts, { id, component }];
    setToasts(toastArray);
    setTimeout(() => closeToast(id), timeout);
  };

  //Function removes the item that has an id that matches the argument and sets the
  //new array with the removed item as the new toast state
  const closeToast = (id: number) => {
    //Returns an array WITHOUT the item of the id provided
    const filteredArray = toasts.filter((toast) => {
      toast.id === id;
    });
    //Changes toast state to the new array with the removed item
    setToasts(filteredArray);
  };

  return (
    <ToastContext.Provider value={{ openToast, closeToast }}>
      {children}
      <div className="space-y-2 absolute bottom-4 right-4"></div>
    </ToastContext.Provider>
  );
};
