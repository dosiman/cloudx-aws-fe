import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 22,
    title: "Nemesis",
    description: `Nemesis is a standalone game, the story of which continues the events of the first part of the space horror "Nemesis" and can be combined with it. The heroes travel to the mysterious Mars to meet new characters and representatives of an alien race.`,
  },
  {
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 33,
    title: "Dune: House Secrets",
    description: `In the game "Dune. Secrets of Houses" participants will join the Harkonnen Resistance movement. Players are invited to go through four related scenarios - a prologue and 3 missions.`,
  },
  {
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 44,
    title: "Wormholes",
    description: `In a peaceful galaxy, a new technology was invented: wormholes. They allow ships to move from one point to another, opening up countless opportunities for trade and travel. As the captain of a passenger spaceship newly equipped with a wormhole fabricator, you can earn some serious space money by building a robust network of wormholes.`,
  },
  {
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 55,
    title: "Albion's Legacy",
    description: `The game allows players to take part as one of their favorite Arthurian characters, ranging from the legendary wizard Merlin, the famous Lady of the Lake, the brave Sir Lancelot and the great King Arthur himself.`,
  },
  {
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 66,
    title: "Monopoly",
    description: `The board game Monopoly will be an interesting entertainment with an economic bias, thanks to which you can learn and develop at the same time. In the box with the game there will be a field, a cube, cards and player chips, which must be removed from a special tablet.`,
  },
  {
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 77,
    title: "Iberian Railways",
    description: `In Iberian Railways, you start with nothing but hope and the desire to take on debt to build railways that will connect cities across the Iberian Peninsula.`,
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Short Product Description1",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "ProductOne",
    },
    count: 2,
  },
  {
    product: {
      description: "Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "ProductName",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
