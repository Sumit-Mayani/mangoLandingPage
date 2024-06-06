import React from 'react'
import './css/about.css'

const About = () => {
  return (
    <section className="about_us--wrapper">
    <div className="container">
    <div className="row">
    <div className="col-md-6">
    <div className="about_us_info--wrapper">
    <h2 className="about_us--title">About Us</h2>
    <h5 className="about_us--subtext">
    In a professional context it often happens that private or corporate clients corder a
    publication to be made and presented with the actual content still not being ready.
    </h5>
    <p>Lorem ipsum dolor sit amet, volumus recteque persecuti sea ea, id ius dicant aperiri,
    nam dolorum invidunt at. Mutat elitr complectitur at sit. Eius brute labitur eum ad.
    Etiam ludus veritus cu mea, debet audiam id sea, munere propriae nec et. Eu mel aliquam urbanitas.
    Ius alia gubergren conclusionemque ea, augue adversarium eu nam, ut qualisque iudicabit voluptaria vel.
    Nec ad graeco aliquam, debitis conceptam pri no, sea accusam concludaturque ut.<br></br>
    Et probo dolorem sea, duo graeco graecis ea. Eum mediocrem cotidieque te, id dicam essent feugait mea.
    Mel et volutpat erroribus assentior, sea ne liber tation mediocritatem.
    </p>
    <div className="about_us_icons--wrapper">
    <div className="about_us--icons">
    <img src="images/about-icon1.svg" alt="icon" data-aos="zoom-in" className="aos-init aos-animate"/>
    <span className="icon_text">Top quality products</span>
    </div>
    <div className="about_us--icons">
    <img src="images/about-icon2.svg" alt="icon" data-aos="zoom-in" data-aos-delay="200" className="aos-init aos-animate"/>
    <span className="icon_text">30-days money back guarantee</span>
    </div>
    <div className="about_us--icons">
    <img src="images/about-icon3.svg" alt="icon" data-aos="zoom-in" data-aos-delay="400" className="aos-init aos-animate"/>
    <span className="icon_text">Best customer service</span>
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-6">
    <div className="about_us_img--wrapper">
    <div className="about_img1--wrapper aos-init aos-animate" data-aos="fade-down">
    <img src="images/about1.png" alt="about1"/>
    </div>
    <div className="about_img2--wrapper aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
    <img src="images/about2.png" alt="about2"/>
    </div>
    <div className="about_img3--wrapper aos-init aos-animate" data-aos="fade-left" data-aos-delay="400">
    <img src="images/about3.png" alt="about3"/>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default About