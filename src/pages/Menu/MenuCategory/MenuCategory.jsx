import Cover from "../../Sharec/Cover/Cover";
import MenuItem from "../../Sharec/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
