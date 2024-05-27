import { useCarouselContext } from "./carouselContext";

export const CarouselFormat = () => {
  const { setCurrentImage } = useCarouselContext();

  return (
    <div>
      <h1>CarouselFormat</h1>
      <button onClick={() => setCurrentImage(null)}>x</button>
    </div>
  );
};
