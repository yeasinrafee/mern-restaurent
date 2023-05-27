import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from "./../../../assets/home/slide1.jpg";
import img2 from "./../../../assets/home/slide2.jpg";
import img3 from "./../../../assets/home/slide3.jpg";
import img4 from "./../../../assets/home/slide4.jpg";
import img5 from "./../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="my-16">
      <div>
        <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"order online"}
        />
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
