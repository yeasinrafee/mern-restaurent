import { useState } from "react";
import Cover from "../../Sharec/Cover/Cover";
import orderCover from "./../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover img={orderCover} title={"Order Food"} />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {salad.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {pizza.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {soup.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {dessert.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-10">
            {drinks.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
