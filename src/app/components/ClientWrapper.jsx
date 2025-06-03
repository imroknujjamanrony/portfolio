"use client";
import { useState } from "react";
import { LoadingScreen } from "./loading/LoadingScreen";

export default function ClientWrapper({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleComplete = () => {
    setIsLoaded(true);
  };

  if (!isLoaded) return <LoadingScreen onComplete={handleComplete} />;

  return <>{children}</>;
}
