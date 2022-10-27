import { StaticImageData } from "next/image";

import BirthdayImg from "../../../public/birthday.jpg";
import ToursImg from "../../../public/tours.jpg";
import ReviewsImg from "../../../public/reviews.jpg";
import AccordionImg from "../../../public/accordion.jpg";
import MenusImg from "../../../public/menus.jpg";
import ExperiencesImg from "../../../public/experiences.jpg";
import SliderImg from "../../../public/slider.jpg";
import LoremIpsumImg from "../../../public/loremipsum.jpg";
import ColorsImg from "../../../public/colors.jpg";
import GroceryImg from "../../../public/grocery.jpg";
import SidebarImg from "../../../public/sidebar.jpg";
import ModalImg from "../../../public/modal.jpg";
import StripeImg from "../../../public/stripe.jpg";
import CartImg from "../../../public/cart.jpg";

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
