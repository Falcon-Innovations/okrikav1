import { IMAGES } from "../constants";
import { categoryTypes } from "../types/common";
import { onboardingSlideType } from "../types/onboarding";

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

export const carouselData = [
  {
    id: "1",
    title: "New Collection",
    description: "Get a free delivery on your first purchase",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704157141/medium-shot-women-clothes-shopping_jbbw3f-removebg-preview_rkwu14.png",
  },
  {
    id: "2",
    title: "New Collection",
    description: "Get a free delivery on your first purchase",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704157141/medium-shot-women-clothes-shopping_jbbw3f-removebg-preview_rkwu14.png",
  },
  {
    id: "3",
    title: "New Collection",
    description: "Get a free delivery on your first purchase",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704157141/medium-shot-women-clothes-shopping_jbbw3f-removebg-preview_rkwu14.png",
  },
  {
    id: "4",
    title: "New Collection",
    description: "Get a free delivery on your first purchase",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704157141/medium-shot-women-clothes-shopping_jbbw3f-removebg-preview_rkwu14.png",
  },
];

export const categories = [
  {
    id: "1",
    name: "Fashion",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704231956/trendy-top-design-mockup-presented-wooden-hanger_t3je7o.jpg",
  },
  {
    id: "2",
    name: "Male Dresses",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704231959/female-outfits-sunglasses-pair-sandal-travelling-bag_tfawnw.jpg",
  },
  {
    id: "3",
    name: "Shoes",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704231953/fashion-shoes-sneakers_yyb6ut.jpg",
  },
  {
    id: "4",
    name: "Jackets",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704232313/still-life-rendering-jackets-display_1_u3wxin.jpg",
  },
  {
    id: "5",
    name: "Trousers",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704231956/trendy-top-design-mockup-presented-wooden-hanger_t3je7o.jpg",
  },
  {
    id: "6",
    name: "Electronics",
    image:
      "https://res.cloudinary.com/dsn9fbo1z/image/upload/v1704231959/female-outfits-sunglasses-pair-sandal-travelling-bag_tfawnw.jpg",
  },
];

// interface MasonryList {
//   id: string;
//   imgURL: string;
//   name: string;
// }

export const MasonryListData = [
  {
    id: '1',
    imgURL: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww',
    name: 'T-shirt',
  },
  {
    id: '2',
    imgURL: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVub3ZvJTIwbGFwdG9wfGVufDB8fDB8fHww',
    name: 'Laptop'
    
  },
  {
    id: '3',
    imgURL: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww',
    name: 'Hand Bag',
  },
  {
    id: '4',
    imgURL: 'https://images.unsplash.com/photo-1637069585336-827b298fe84a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplYW5zfGVufDB8fDB8fHww',
    name: 'Jeans'
    
  },
  {
    id: '5',
    imgURL: 'https://images.unsplash.com/photo-1637069585336-827b298fe84a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplYW5zfGVufDB8fDB8fHww',
    name: 'Jeans'
    
  },
  {
    id: '6',
    imgURL: 'https://images.unsplash.com/photo-1637069585336-827b298fe84a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGplYW5zfGVufDB8fDB8fHww',
    name: 'Jeans'
    
  }
];
