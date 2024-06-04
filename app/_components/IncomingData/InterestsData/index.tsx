import { CarouselContextProvider } from "./carouselContext";
import { Collage } from "./Collage";
import { Carousel } from "./Carousel";

export const InterestsData = () => {
  return (
    <CarouselContextProvider>
      <Collage />
      <Carousel />
    </CarouselContextProvider>
  );
};
