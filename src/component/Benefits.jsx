import React from 'react'
import './css/benefits.css'

const Benefits = () => {
  return (
    <section className="about_us--wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_us_info--wrapper">
              <h2 className="about_us--title">Benefits of Our Mangoes</h2>
              <h5 className="about_us--subtext">
                Priya organic's mangoes offer a delightful blend of taste and nutrition:
              </h5>
              <p>
                - Exceptional Taste: Known for their perfect balance of sweetness and tanginess.<br></br>
                - Nutrient-Rich: Packed with essential vitamins like Vitamin C and Vitamin A.<br></br>
                - Fiber-Packed: Promotes digestion and gut health.<br></br>
                - Antioxidant Power: Rich in beta-carotene and flavonoids to combat cell damage.<br></br>
                - Heart Health: Contains potassium and magnesium for blood pressure regulation.<br></br>
                - Weight Management: Low in calories and satisfying as a snack option.<br></br>
                - Hydration: High water content keeps you refreshed.<br></br>
                - Versatility: Can be enjoyed in various dishes, from salads to desserts.<br></br>
                In summary, Priya Organic's mangoes offer both delicious flavor and numerous health benefits, making them a versatile addition to any diet.
              </p>
              <div className="about_us_icons--wrapper">
                <div className="about_us--icons">
                  <img src="images/about-icon1.svg" alt="icon" data-aos="zoom-in" className="aos-init aos-animate" />
                  <span className="icon_text">Top quality product</span>
                </div>
                <div className="about_us--icons">
                  <img src="images/about-icon2.svg" alt="icon" data-aos="zoom-in" data-aos-delay="200" className="aos-init aos-animate" />
                  <span className="icon_text">Best customer service</span>
                </div>
                <div className="about_us--icons">
                  <img src="images/about-icon3.svg" alt="icon" data-aos="zoom-in" data-aos-delay="400" className="aos-init aos-animate" />
                  <span className="icon_text">Consistent reliability</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_us_img--wrapper">
              <div className="about_img1--wrapper aos-init aos-animate" data-aos="fade-down">
                <img src="images/about1.png" alt="about1" />
              </div>
              <div className="about_img2--wrapper aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
                <img src="images/about2.png" alt="about2" />
              </div>
              <div className="about_img3--wrapper aos-init aos-animate" data-aos="fade-left" data-aos-delay="400">
                <img src="images/about3.png" alt="about3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits