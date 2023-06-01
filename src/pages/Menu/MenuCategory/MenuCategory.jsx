import { Link } from "react-router-dom";
import Cover from "../../Sharec/Cover/Cover";
import MenuItem from "../../Sharec/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  console.log(title);
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
