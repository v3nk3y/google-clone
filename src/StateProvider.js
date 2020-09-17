// React Context API Builder

// Import the dependices
import React, { createContext, useContext, useReducer } from "react";

// Prep the DataLayer
export const StateContext = createContext();

// StateProvider: Higer Order Component
// initialState:  refers to "What the Data layer looks like when the app is loaded"
// reducer: Listen to the changes
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* children:  refers to the <App/> in index.js */}
    {children}
  </StateContext.Provider>
);

// Hook -> Allows us to pull info from the DataLayer
export const useStateValue = () => useContext(StateContext);
