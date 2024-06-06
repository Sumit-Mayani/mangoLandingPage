import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../css/CustomerReviews.css";
import { Autoplay } from 'swiper/modules';

const CustomerReviews = () => {
  const detailedTestimonials = [
    {
      name: "Anna Mull",
      img: "/images/testimonial-img.png",
      text: "In ornare dui porttitor nibh dictum convallis. Suspendisse vel sem erat. Curabitur facilisis eros nec pulvinar pretium. Suspendisse sed erat vehicula",
      rating: 5,
    },
    {
      name: "Anna Mull",
      img: "/images/testimonial-img1.png",
      text: "In ornare dui porttitor nibh dictum convallis. Suspendisse vel sem erat. Curabitur facilisis eros nec pulvinar pretium. Suspendisse sed erat vehicula",
      rating: 4,
    },
    {
      name: "Anna Mull",
      img: "/images/testimonial-img2.png",
      text: "In ornare dui porttitor nibh dictum convallis. Suspendisse vel sem erat. Curabitur facilisis eros nec pulvinar pretium. Suspendisse sed erat vehicula",
      rating: 5,
    },
    // Add other detailed testimonials here...
  ];

  return (
    <section className="testimonial_wrapper">
      <div className="container">
        <div className="row">


          <div className="col-md-12 testimonial_right--col">
            <div className="testimonial_details--wrapper">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                // modules={[Autoplay]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                }}
                effect="fade"
                className="testimonial_author--details"
              >
                {detailedTestimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="author_details--slider">
                      <div className="author_single--img">
                        <img
                          src={testimonial.img}
                          alt="author"
                          width="289"
                          height="319"
                        />
                      </div>
                      <div className="author_single--details">
                        <span className="author_text">{testimonial.text}</span>
                        <div className="author_name">{testimonial.name}</div>
                        <div className="author_rating">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <a href="#" key={i} className="author_stars">
                                <img
                                  src="/images/star.svg"
                                  alt="star"
                                  width="10"
                                  height="9"
                                />
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="fertilizer_sideimg--wrapper">
        <img
          src="/images/testimonial.png"
          alt="fertilizer"
          width="285"
          height="562"
        />
      </div>
      <div className="testimonial_sideeffect--wrapper">
        <img
          src="/images/testimonial-sideimg.png"
          width="352"
          height="623"
          alt=""
        />
      </div>
    </section>
  );
};

export default CustomerReviews;
