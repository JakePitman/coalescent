import { CarouselContextProvider, useCarouselContext } from "./carouselContext";
import { CollageFormat } from "./CollageFormat";
import { CarouselFormat } from "./CarouselFormat";

export const InterestsData = () => {
  return (
    <CarouselContextProvider>
      <CollageFormat />
      <CarouselFormat />
    </CarouselContextProvider>
  );
};
