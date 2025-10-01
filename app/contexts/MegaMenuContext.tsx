"use client";

import React, { createContext, useContext, useState } from "react";

interface MegaMenuContextType {
  isOverlayActive: boolean;
  setIsOverlayActive: (active: boolean) => void;
}

const MegaMenuContext = createContext<MegaMenuContextType | undefined>(undefined);

export const MegaMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  return (
    <MegaMenuContext.Provider value={{ isOverlayActive, setIsOverlayActive }}>
      {children}
    </MegaMenuContext.Provider>
  );
};

export const useMegaMenu = () => {
  const context = useContext(MegaMenuContext);
  if (!context) {
    throw new Error("useMegaMenu must be used within a MegaMenuProvider");
  }
  return context;
};