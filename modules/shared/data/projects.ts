import { StaticImageData } from "next/image";

import BirthdayImg from "../../../public/birthday.jpeg";
import ToursImg from "../../../public/tours.jpeg";
import ReviewsImg from "../../../public/reviews.jpeg";
import AccordionImg from "../../../public/accordion.jpeg";
import MenusImg from "../../../public/menus.jpeg";
import ExperiencesImg from "../../../public/experiences.jpeg";
import SliderImg from "../../../public/slider.jpeg";
import LoremIpsumImg from "../../../public/loremipsum.jpeg";
import ColorsImg from "../../../public/colors.jpeg";
import GroceryImg from "../../../public/grocery.jpeg";
import SidebarImg from "../../../public/sidebar.jpeg";
import ModalImg from "../../../public/modal.jpeg";
import StripeImg from "../../../public/stripe.jpeg";
import CartImg from "../../../public/cart.jpeg";

interface Project {
  title: string;
  image: StaticImageData;
  href: string;
}

export const projects: Project[] = [
  { title: "Birthday Reminder", image: BirthdayImg, href: "/birthday" },
  { title: "Tours", image: ToursImg, href: "/tours" },
  { title: "Reviews", image: ReviewsImg, href: "/reviews" },
  { title: "Accordion", image: AccordionImg, href: "/accordion" },
  { title: "Menu", image: MenusImg, href: "/menu" },
  { title: "Tabs", image: ExperiencesImg, href: "/tabs" },
  { title: "Slider", image: SliderImg, href: "/slider" },
  { title: "Lorem Ipsum", image: LoremIpsumImg, href: "/lorem" },
  { title: "Color Generator", image: ColorsImg, href: "/colors" },
  { title: "Grocery Bud", image: GroceryImg, href: "/grocery" },
  { title: "Navbar & Sidebar", image: SidebarImg, href: "/navbar" },
  { title: "Modal", image: ModalImg, href: "/modal" },
  { title: "Stripe Menu", image: StripeImg, href: "/stripe-menu" },
  { title: "Cart", image: CartImg, href: "/cart" },
];
