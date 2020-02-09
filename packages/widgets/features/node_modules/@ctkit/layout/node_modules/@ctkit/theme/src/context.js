import React, { createContext } from 'react'

export const { Provider, Consumer } = createContext({});

const ThemeProvider = Provider
const ThemeConsumer = Consumer

export { ThemeProvider, ThemeConsumer };
