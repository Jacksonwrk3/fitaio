"use client";
import ToastContext from "./ToastContext";
import React, { ReactElement, useState } from "react";
import { Toast } from "./interface";
import { nanoid } from "nanoid";

/**
 * @interface ToastProviderProps interface for ToastProvider props
 * @property {React.ReactNode} children
 * @TODO center tosts for mobile, and have it on bottom right for bigger screens
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
    const id = nanoid();
    const toastArray = [...toasts, { id, component }];
    setToasts(toastArray);
    setTimeout(() => closeToast(id), timeout);
  };

  //Function removes the item that has an id that matches the argument and sets the
  //new array with the removed item as the new toast state
  const closeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ openToast, closeToast }}>
      {children}
      <ul className="space-y-2 absolute bottom-4 right-4">
        {/* Renders all the toasts */}
        {toasts.map(({ id, component }) => (
          <li key={id} className="relative">
            {component}
          </li>
        ))}
      </ul>
    </ToastContext.Provider>
  );
};
