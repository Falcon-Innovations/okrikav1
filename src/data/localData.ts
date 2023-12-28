import { IMAGES } from "../constants";
import { onboardingSlideType } from "../types/types";

export const onboardingSlides: onboardingSlideType[] = [
  {
    title: "Welcome to OKRICA",
    description:
      "We offer optimal conditions for buying and selling second-hand products.",
    image: IMAGES.onboard1,
  },
  {
    title: "Fast and Safe",
    description:
      "We provide the flexibility to choose between picking up products or having them delivered, providing convenience and choice for users.",
    image: IMAGES.onboard2,
  },
  {
    title: "Instant Messaging",
    description:
      "We ensure seamless communication between clients and vendors or Lessors.",
    image: IMAGES.onboard3,
  },
  {
    title: "Easy and Secure Payment",
    description:
      "We guarantee hassle-free transactions that prioritize the safety of your personal and financial information.",
    image: IMAGES.onboard4,
  },
];
