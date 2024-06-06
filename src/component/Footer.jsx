import React from 'react'
import './css/footer.css'

const Footer = () => {
    return (
        <footer className="default_footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 footer_cols">
                        <div className="payment_option--wrapper">
                            <h2 className="foo_title">Payment Option</h2>
                            <div className="gateway_images--wrapper">
                                <div>

                                    <a>
                                        <img data-src="" alt="master" className=" lazyloaded" width="78" height="34" src="images/master.png" />
                                    </a>
                                    <a>
                                        <img data-src="images/footer/paypal.png" alt="master" className=" lazyloaded" width="78" height="34" src="images/paypal.png" />
                                    </a>
                                    <a>
                                        <img data-src="images/footer/visa.png" alt="master" className=" lazyloaded" width="78" height="34" src="images/visa.png" />
                                    </a>
                                </div>
                                <div className='upiPaymentsWrapper'>
                                    <a>
                                        <img src="images/gpay.png" alt="upiPayments" />
                                    </a>
                                    <a>
                                        <img src="images/phonePay.svg" alt="upiPayments" />
                                    </a>
                                    <a>
                                        <img src="images/paytm.png" alt="upiPayments" />
                                    </a>

                                </div>
                            </div>
                            {/* <h2 className="foo_title">Follow Us</h2>
                            <div className="social_icons--wrapper">
                                <a href="https://www.facebook.com/" target="_blank" className="social_icons">
                                    <img data-src="images/svg/fb.svg" alt="fb" className=" lazyloaded" width="9" height="17" src="images/fb.svg" />
                                </a>
                                <a href="https://dribbble.com/" target="_blank" className="social_icons">
                                    <img data-src="images/svg/dribble.svg" alt="dribble" className=" lazyloaded" width="15" height="15" src="images/dribble.svg" />
                                </a>
                                <a href="https://www.behance.net/" target="_blank" className="social_icons">
                                    <img data-src="images/svg/behance.svg" alt="behance" className=" lazyloaded" width="17" height="11" src="images/behance.svg" />
                                </a>
                                <a href="https://twitter.com/" target="_blank" className="social_icons">
                                    <img data-src="images/svg/twitter.svg" alt="twitter" className=" lazyloaded" width="16" height="13" src="images/twitter.svg" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 footer_cols">
                        <div className="buyNowWrapper">
                            <a href="">

                                <button class="animated-button">
                                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span class="text">Buy Now</span>
                                    <span class="circle"></span>
                                    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </button>
                            </a>

                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2 footer_cols socialsLinksWrapper">
                        <h2 className="foo_title">Follow Us</h2>
                        <div className="social_icons--wrapper">
                            <div>
                                <a href="https://www.facebook.com/" target="_blank" className="social_icons">
                                    <img data-src="images/svg/fb.svg" alt="fb" className=" lazyloaded" width="9" height="17" src="images/fb.svg" />
                                </a>
                                <span>Facebook</span>
                            </div>
                            <div>

                                <a href="https://dribbble.com/" target="_blank" className="social_icons">
                                    <img data-src="images/svg/dribble.svg" alt="dribble" className=" lazyloaded" width="15" height="15" src="images/dribble.svg" />
                                </a>
                                <span>Dribbble</span>
                            </div>
                            <div>
                                <a href="https://www.behance.net/" target="_blank" className="social_icons">
                                    <img data-src="images/svg/behance.svg" alt="behance" className=" lazyloaded" width="17" height="11" src="images/behance.svg" />
                                </a>
                                <span>Behance</span>
                            </div>
                            <div>

                                <a href="https://twitter.com/" target="_blank" className="social_icons">
                                    <img data-src="images/svg/twitter.svg" alt="twitter" className=" lazyloaded" width="16" height="13" src="images/twitter.svg" />
                                </a>
                                <span>Twitter</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
