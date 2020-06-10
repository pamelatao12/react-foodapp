import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";

// Set up styling engine for baseUI
const engine = new Styletron();

export const ThemeInitializer = ({ children }) => {
  return <StyletronProvider value={engine}>{children}</StyletronProvider>;
};
