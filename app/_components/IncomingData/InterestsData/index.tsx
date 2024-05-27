import { CarouselContextProvider, useCarouselContext } from "./carouselContext";
import { CollageFormat } from "./CollageFormat";
import { CarouselFormat } from "./CarouselFormat";

export const InterestsDataInterior = () => {
  const { currentImage } = useCarouselContext();

  return <div>{currentImage ? <CarouselFormat /> : <CollageFormat />}</div>;
};

export const InterestsData = () => {
  return (
    <CarouselContextProvider>
      <InterestsDataInterior />
    </CarouselContextProvider>
  );
};
