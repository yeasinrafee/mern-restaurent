import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "./../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-24 ">
      <div className="bg-slate-500 bg-opacity-60 pt-8">
        <SectionTitle subHeading={"Check it out"} heading={"Featured Item"} />
        <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can I get some?</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              explicabo iste doloribus quae esse veritatis necessitatibus
              cupiditate sed commodi vitae porro nesciunt, illo doloremque
              aperiam debitis harum quisquam alias autem nemo ipsa labore
              temporibus? Ipsa dolorum voluptate, velit qui magni dolorem ex.
              Qui a optio voluptatum nesciunt aliquid culpa beatae.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-5">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
