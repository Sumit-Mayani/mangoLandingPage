import React from 'react'
import '../css/dairy.css'
const Dairy = () => {
  return (
<section className="dairy_special_offers--wrapper">
<div className="container-fluid">
<div className="row">
<div className="col-md-6 col-lg-3 special_offers--cols">
<div className="special_offres--box">
<img data-src="/images/fast-delivery.svg" alt="fast-delivery" className=" lazyloaded" width="101" height="64" src="/images/fast-delivery.svg"/>
<span className="offers_titles">FAST DELIVERY</span>
<span className="offers_subtitle">Same day delivery as sootn as possible</span>
</div>
</div>
<div className="col-md-6 col-lg-3 special_offers--cols">
<div className="special_offres--box">
<img data-src="/images/foo-tag.svg" alt="tags" className=" lazyloaded" width="80" height="80" src="/images/foo-tag.svg"/>
<span className="offers_titles">SPECIAL DISCOUNT</span>
<span className="offers_subtitle">Get attractive offers day by day</span>
</div>
</div>
<div className="col-md-6 col-lg-3 special_offers--cols">
<div className="special_offres--box">
<img data-src="/images/foo-lock.svg" alt="lock" className=" lazyloaded" width="56" height="80" src="/images/foo-lock.svg"/>
<span className="offers_titles">SECURE CHECKOUT</span>
<span className="offers_subtitle">Fully secured SSL checkout technology</span>
</div>
</div>
<div className="col-md-6 col-lg-3 special_offers--cols">
<div className="special_offres--box">
<img data-src="/images/foo-price.svg" alt="price" className=" lazyloaded" width="101" height="124" src="/images/foo-price.svg"/>
<span className="offers_titles">MONEY RETURNS</span>
<span className="offers_subtitle">100% Money back guarntee</span>
</div>
</div>
</div>
</div>
</section>
  )
}

export default Dairy