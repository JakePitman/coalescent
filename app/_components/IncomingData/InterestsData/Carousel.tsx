import Image from "next/image";
import { createPortal } from "react-dom";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoCloseSharp } from "react-icons/io5";

import { useCarouselContext } from "./carouselContext";
import { IMAGES } from "./imageData";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const Carousel = () => {
  const { currentImage, setCurrentImage } = useCarouselContext();

  if (!currentImage) return null;

  // Reorder images so that the carousel opens to the current image
  // i.e, the one that was clicked.
  // goToSlide exhibits strange indexing of images that doesn't reflect
  // the order they're given to the Carousel component, and required a
  // setTimeout to work anyway.
  const currentImageIndex = IMAGES.findIndex(
    (image) => image.imageURL === currentImage
  );
  const firstHalf = IMAGES.slice(0, currentImageIndex);
  const secondHalf = IMAGES.slice(currentImageIndex);
  const REORDERED_IMAGES = [...secondHalf, ...firstHalf];

  return (
    <>
      {createPortal(
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/80 z-[inherit] flex justify-center items-center">
          <button
            onClick={() => setCurrentImage(null)}
            className="absolute top-6 right-8"
          >
            <IoCloseSharp color="white" fontSize={30} />
          </button>
          <MultiCarousel
            responsive={responsive}
            swipeable={true}
            draggable={false}
            showDots={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container w-[80vw] "
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {REORDERED_IMAGES.map(({ imageURL, alt }) => (
              <div
                className="relative h-[80vh] w-full border-solid border-white"
                key="imageURL"
              >
                <Image
                  src={imageURL}
                  fill
                  style={{ objectFit: "contain" }}
                  alt={alt}
                />
              </div>
            ))}
          </MultiCarousel>
        </div>,
        document.getElementById("portal") as HTMLElement
      )}
    </>
  );
};
