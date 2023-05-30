import { Helmet } from "react-helmet-async";

import Cover from "../../Sharec/Cover/Cover";

import coverImg from "./../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={coverImg} title="Our Menu" />
    </div>
  );
};

export default Menu;
