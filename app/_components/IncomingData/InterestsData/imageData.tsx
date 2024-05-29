type GroupName = "EXPLORING" | "DIVING" | "DRONES" | "GUITAR";

export type ImageData = {
  group: GroupName;
  imageURL: string;
  alt: string;
};

export const ExploringImages: ImageData[] = [
  {
    group: "EXPLORING",
    imageURL: "/images/exploring/mountain.jpg",
    alt: "Mountain",
  },
  {
    group: "EXPLORING",
    imageURL: "/images/exploring/taylors_mistake.jpeg",
    alt: "Taylor's mistake",
  },
  {
    group: "EXPLORING",
    imageURL: "/images/exploring/brewster.jpeg",
    alt: "Brewster",
  },
];

export const DivingImages: ImageData[] = [
  {
    group: "DIVING",
    imageURL: "/images/diving/GBR.jpeg",
    alt: "Great Barrier Reef",
  },
  {
    group: "DIVING",
    imageURL: "/images/diving/whale_shark.jpeg",
    alt: "Whale shark",
  },
  {
    group: "DIVING",
    imageURL: "/images/diving/thailand.jpeg",
    alt: "Thailand",
  },
];

export const DronesImages: ImageData[] = [
  {
    group: "DRONES",
    imageURL: "/images/drones/drone_repair.jpeg",
    alt: "Drone repair",
  },
  { group: "DRONES", imageURL: "/images/drones/drone.jpeg", alt: "Drone" },
  { group: "DRONES", imageURL: "/images/drones/fpv.jpeg", alt: "fpv" },
];

export const GuitarImages: ImageData[] = [
  {
    group: "GUITAR",
    imageURL: "/images/guitar/ibanez.png",
    alt: "Ibanez guitar",
  },
  { group: "GUITAR", imageURL: "/images/guitar/guitar.jpg", alt: "Guitar" },
];

export const images: ImageData[] = [
  ...ExploringImages,
  ...DivingImages,
  ...DronesImages,
  ...GuitarImages,
];
