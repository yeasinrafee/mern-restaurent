import { Helmet } from "react-helmet-async";

import Cover from "../../Sharec/Cover/Cover";

import coverImg from "./../../../assets/menu/banner3.jpg";
import soupImg from "./../../../assets/menu/soup-bg.jpg";
import saladImg from "./../../../assets/menu/salad-bg.jpg";
import pizzaImg from "./../../../assets/menu/pizza-bg.jpg";

import dessertImg from "./../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={coverImg} title="Our Menu" />
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
      <MenuCategory items={offered} />

      <MenuCategory items={dessert} title="dessert" img={dessertImg} />
      <MenuCategory items={soup} title="soup" img={soupImg} />
      <MenuCategory items={pizza} title="pizza" img={pizzaImg} />
      <MenuCategory items={salad} title="salad" img={saladImg} />
    </div>
  );
};

export default Menu;
