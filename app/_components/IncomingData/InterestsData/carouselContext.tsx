"use client";

import { createContext, useContext, useState } from "react";

type CurrentImage = string | null;
type CarouselContext = {
  currentImage: CurrentImage;
  setCurrentImage: React.Dispatch<React.SetStateAction<null | string>>;
};

const CarouselContext = createContext<CarouselContext | null>(null);

type Props = {
  children: React.ReactNode;
};

export const CarouselContextProvider = ({ children }: Props) => {
  const [currentImage, setCurrentImage] = useState<CurrentImage>(null);

  return (
    <CarouselContext.Provider value={{ currentImage, setCurrentImage }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(
      "usePageContext must be used within a CarouselContextProvider"
    );
  }
  return context;
};
