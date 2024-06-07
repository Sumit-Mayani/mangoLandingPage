import React from 'react'
import '../../index.css'

const HeroSect = () => {
  return (
    <div className="vegetable_page--wrapper">
      <header class="vegetable_header">
        <nav class="navbar navbar_veg--header navbar-expand-lg">
          <a class="navbar-brand" href="../main.html">
            <img data-src="/images/veg-logo.png" alt="logo" class=" ls-is-cached lazyloaded" width="164" height="165" src="/images/veg-logo.png" />
          </a>
        </nav>
      </header>

      <section className="vegetable_banner--wrapper">
        <div className="container-fluid">
          <div className="vegetable_custom--container">
            <div className="row">
              <div className="col-lg-6 veg_banner_left--col">
                <div className="healthy_living--wrapper">
                </div>
                <div className="healty_living--title">
                  <span className="healthy">Farm Fresh Mangoes </span>
                  <span className="living">Pure, Organic, Delicious</span>
                </div>
                <p>
                  Discover the pure, natural sweetness of Priya Organic Farm’s mangoes, grown sustainably without harmful chemicals. Enjoy the freshest, most delicious mangoes, nurtured from tree to table.
                </p>
                <a href="../products/product-listing-grid.html" className="veg_btn">
                  shop now
                  <img data-src="/images/veg-arrow-right.svg" alt="arrow-right" className=" ls-is-cached lazyloaded" width="24" height="20" src="/images/veg-arrow-right.svg" />
                </a>
                <div className="banner_side--fruits aos-init aos-animate" data-aos="fade-right">
                  <img src="/images/veg-banner-fruit.png" alt="fruits" />
                </div>
              </div>
              <div className="col-lg-6 veg_banner_right--col">
                <span className="vegetable_bg--text">Vegetable</span>
                <div className="banner_veg--img">
                  <img data-src="/images/veg-banner.png" alt="vegetable" className=" ls-is-cached lazyloaded" width="1083" height="1085" src="/images/veg-banner.png" />
                </div>
                <div className="banner_orange--wrapper aos-init aos-animate" data-aos="fade-left">
                  <img src="/images/banner-orange.png" alt="orange" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_social--media">
          <a href="https://www.facebook.com/" target="_blank" className="banner_social--icons">
            <img data-src="/images/veg-fb.svg" alt="fb" className=" ls-is-cached lazyloaded" width="32" height="32" src="/images/veg-fb.svg" />
          </a>
          <a href="https://www.instagram.com" target="_blank" className="banner_social--icons">
            <img data-src="/images/instagram.svg" alt="insta" className=" ls-is-cached lazyloaded" width="32" height="32" src="/images/instagram.svg" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="banner_social--icons">
            <img data-src="/images/veg-twitter.svg" alt="twitter" className=" ls-is-cached lazyloaded" width="32" height="32" src="/images/veg-twitter.svg" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" className="banner_social--icons">
            <img data-src="/images/whatsapp.svg" alt="whatsapp" className=" ls-is-cached lazyloaded" width="32" height="32" src="/images/whatsapp.svg" />
          </a>
        </div>
        <div className="banner_ecllipse--fruits">
          <img data-src="/images/sidenuts.png" alt="nuts" className=" ls-is-cached lazyloaded" width="330" height="486" src="/images/sidenuts.png" />
        </div>
      </section>
      <section className="green_quality--wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 green_quality--col1">
              <div className="green_quality--img">
                <img data-src="/images/green-quality.png" alt="vegetables" className=" ls-is-cached lazyloaded" width="1018" height="697" src="/images/green-quality.png" />
              </div>
            </div>
            <div className="col-lg-6 green_quality--col2">
              <span className="green_quality--title quality_title1">ORGANIC</span>
              <span className="green_quality--title">MANGOES</span>
              <span className="discount_selected--items">A Tradition of Excellence</span>
              <p>
                It is a long-established fact that our organic mangoes are loved by all who taste them. Experience the rich flavor and superior quality that comes from years of dedicated, sustainable farming.
              </p>
              <div className="green_quality_facts--wrapper">
                <div className="green_quality--facts">
                  <div className="green_quality--imgs">
                    <img data-src="/images/green-quality-icon.png" alt="green-icons" className=" ls-is-cached lazyloaded" width="145" height="133" src="/images/green-quality-icon.png" />
                  </div>
                  <span className="green_facts">Discover the taste of true quality with every bite.</span>
                </div>
                <a href="../products/product-listing-list.html" className="veg_btn veg_btn2">
                  shop now
                  <img data-src="/images/veg-arrow-right.svg" alt="arrow-right" className=" ls-is-cached lazyloaded" width="24" height="20" src="/images/veg-arrow-right.svg" />
                </a>
              </div>
              <div className="full_orange--wrapper aos-init aos-animate" data-aos="fade-left">
                <img src="../images/vegetable/orange-full.png" alt="orange" />
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>


  )
}

export default HeroSect