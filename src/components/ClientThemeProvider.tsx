"use client";
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';

interface ClientThemeProviderProps {
  children: React.ReactNode;
}

export default function ClientThemeProvider({ children }: ClientThemeProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

