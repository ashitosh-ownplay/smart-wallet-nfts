/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, createContext, useState, useCallback } from "react";

export interface ToastStates {
  title: string;
  isOpen: boolean;
  text?: any;
  heading?: any;
}

interface ToastStatesProps {
  toastState: ToastStates;
  setOpenToast: (args: ToastStates) => void;
  handleCloseToast: () => void;
}

const initialValues = {
  toastState: { title: "", isOpen: false, text: "" },
  setOpenToast: () => null,
  handleCloseToast: () => null,
};

export const SnackbarContext = createContext<ToastStatesProps>(initialValues);

export const SnackbarContextProvider = ({ children }: any) => {
  const [toastState, setOpenToast] = useState<ToastStates>(
    initialValues.toastState
  );

  const handleCloseToast = useCallback(() => {
    setOpenToast({ ...toastState, isOpen: false });
  }, [toastState]);

  return (
    <SnackbarContext.Provider
      value={{
        toastState,
        setOpenToast,
        handleCloseToast,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
export default SnackbarContext;

export function useSnackbarContext() {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
