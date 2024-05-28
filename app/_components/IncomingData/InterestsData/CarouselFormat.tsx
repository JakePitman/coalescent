import Image from "next/image";
import { createPortal } from "react-dom";
import { Carousel } from "react-responsive-carousel";

import { useCarouselContext } from "./carouselContext";

export const CarouselFormat = () => {
  const { currentImage, setCurrentImage } = useCarouselContext();
  if (!currentImage) return null;

  return (
    <>
      {createPortal(
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/30 z-[inherit] ">
          <p>Hello carousel</p>
          <button onClick={() => setCurrentImage(null)}>x</button>
        </div>,
        document.getElementById("portal") as HTMLElement
      )}
    </>
  );
};
