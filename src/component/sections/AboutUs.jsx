import React from 'react'
import '../css/about.css'

const AboutUs = () => {
    return (
        <section class="about_fertilizer--wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xl-5">
                        <div class="about_fertilizer_inner--wrapper">
                            <h2 class="fertilizer_title about_title">About Priya Organic</h2>
                            <p>
                                At Priya Organic Farm, we are dedicated to growing the finest organic mangoes with sustainable practices that respect our environment. Our commitment to quality ensures that each product is free from harmful chemicals and bursting with natural flavor. We believe in nurturing the land and our trees with care, resulting in delicious, healthy fruit for your family.
                            </p>
                            <p>
                                <span className='fw-bold'>Chemical-Free Cultivation :</span> Indulge in pure, healthy mangoes grown without synthetic pesticides or fertilizers.
                            </p>
                            <p>
                                <span className='fw-bold'>Sustainable Farming Practices :</span> Our sustainable farming practices prioritize eco-friendly methods for soil health and water conservation.

                            </p>
                            <p>
                                <span className='fw-bold'> Biodiversity Enhancement :</span> Foster biodiversity for natural pest control and pollination, ensuring a thriving mango ecosystem.

                            </p>
                            <a href="../products/product-listing-grid.html" className="veg_btn mt-4">
                                shop now
                                <img data-src="/images/veg-arrow-right.svg" alt="arrow-right" className=" ls-is-cached lazyloaded" width="24" height="20" src="/images/veg-arrow-right.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-7">
                        <div class="fertilizer_product--wrapper">
                            <div class="fertilizer_product--img">
                                <img data-src="images/fertilizer-img.png" alt="fertilizer" class=" lazyloaded" width="241" height="534" src="images/fertilizer-img.png" />
                            </div>
                            <ul class="fertlizer_clean--list">
                                <li class="fertilizer_list--item aos-init aos-animate" data-aos="fade-left">
                                    <div class="fertilizer_item--img">
                                        <img data-src="images/fertilizer1.svg" alt="fertilizer" class=" lazyloaded" width="156" height="102" src="images/fertilizer1.svg" />
                                    </div>
                                    <div class="fertilizer_item--details">
                                        <span class="item_title">Clean Planet for All</span>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has </p>
                                    </div>
                                </li>
                                <li class="fertilizer_list--item aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
                                    <div class="fertilizer_item--img">
                                        <img data-src="images/fertilizer2.svg" alt="fertilizer" class=" lazyloaded" width="156" height="102" src="images/fertilizer2.svg" />
                                    </div>
                                    <div class="fertilizer_item--details">
                                        <span class="item_title">Clean Planet for All</span>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has </p>
                                    </div>
                                </li>
                                <li class="fertilizer_list--item aos-init aos-animate" data-aos="fade-left" data-aos-delay="400">
                                    <div class="fertilizer_item--img">
                                        <img data-src="images/fertilizer3.svg" alt="fertilizer" class=" lazyloaded" width="156" height="102" src="images/fertilizer3.svg" />
                                    </div>
                                    <div class="fertilizer_item--details">
                                        <span class="item_title">Clean Planet for All</span>
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
