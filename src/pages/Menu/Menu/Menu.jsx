import { Helmet } from "react-helmet-async";

import Cover from "../../Sharec/Cover/Cover";

import coverImg from "./../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={coverImg} title="Our Menu" />
      <PopularMenu />
      <Cover img={coverImg} title="Our Menu" />
      <PopularMenu />
      <Cover img={coverImg} title="Our Menu" />
      <PopularMenu />
    </div>
  );
};

export default Menu;
