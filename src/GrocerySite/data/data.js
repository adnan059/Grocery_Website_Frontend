import cartImg_1 from "../assets/cart-img-1.png";
import cartImg_2 from "../assets/cart-img-2.png";
import cartImg_3 from "../assets/cart-img-3.png";

import ft1 from ".././assets/feature-img-1.png";
import ft2 from ".././assets/feature-img-2.png";
import ft3 from ".././assets/feature-img-3.png";

import banana from ".././assets/banana.png";
import butter from ".././assets/butter.png";
import capsicum from ".././assets/capsicum.png";
import carrot from ".././assets/carrot.png";
import cauliflower from ".././assets/cauliflower.png";
import chicken from ".././assets/chicken.png";
import ginger from ".././assets/ginger.png";
import orange from ".././assets/orange.png";

import pic_1 from ".././assets/pic-1.png";
import pic_2 from ".././assets/pic-2.png";
import pic_3 from ".././assets/pic-3.png";
import pic_4 from ".././assets/pic-4.png";

export const shopppingCartData = [
  {
    image: cartImg_1,
    product: "watermelon",
    price: "$3.99/-",
    qty: "1 pc",
  },
  {
    image: cartImg_2,
    product: "onion",
    price: "$4.99/-",
    qty: "1 kg",
  },
  {
    image: cartImg_3,
    product: "chicken",
    price: "$5.5/-",
    qty: "2 kg",
  },
];

export const featureData = [
  {
    image: ft1,
    title: "fresh and natural",
    desc: "uga Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id.",
    link: "ft1link",
  },

  {
    image: ft2,
    title: "quick delivery",
    desc: "assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet",
    link: "ft2link",
  },
  {
    image: ft3,
    title: "easy payments",
    desc: "tatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel",
    link: "ft3link",
  },
];

export const productsData = [
  {
    image: orange,
    productName: "orange",
    price: "$4.99/- - $10.99/-",
  },

  {
    image: banana,
    productName: "banana",
    price: "$0.50/- - $2.99/-",
  },

  {
    image: ginger,
    productName: "ginger",
    price: "$1.10/- - $2.50/-",
  },

  {
    image: cauliflower,
    productName: "cauliflower",
    price: "$1.40/- - $5.00/-",
  },

  {
    image: capsicum,
    productName: "capsicum",
    price: "$3.99/- - $9.99/-",
  },

  {
    image: carrot,
    productName: "carrot",
    price: "$1.30/- - $2.80/-",
  },

  {
    image: butter,
    productName: "butter",
    price: "$2.70/- - $5.50/-",
  },

  {
    image: chicken,
    productName: "chicken",
    price: "$3.00/- - $6.0/-",
  },
];

export const reviewsData = [
  {
    image: pic_1,
    speech:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi eros. Etiam scelerisque quam non donec sodales",
    clientName: "john doe",
  },

  {
    image: pic_2,
    speech:
      "Duis et dapibus urna. Donec sodales dapibus dapibus. Nulla ullamcorper a ligula.",
    clientName: "jane doe",
  },

  {
    image: pic_3,
    speech:
      "onvallis mi. Nulla facilisi. Donec finibus nisi tempor, dignissim felis eget, tincidunt eros.",
    clientName: "peter parker",
  },

  {
    image: pic_4,
    speech:
      "Nam maximus sapien sit amet lorem feugiat consequat. Donec finibus mi ac. ",
    clientName: "linda carrol",
  },
];
