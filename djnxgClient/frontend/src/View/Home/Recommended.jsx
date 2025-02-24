import React from "react";
import { Link } from "react-router-dom";
import cruise_img from "../../Images/th (2).jpg";
import cruise_img2 from "../../Images/th (1).jpg";
import cruise_img3 from "../../Images/th (3).jpg";
// import cruise_img4 from "../../Images/cruises/1.png";
function Recommended() {
  return (
    <>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div
            data-anim-child="slide-up delay-1"
            className=" y-gap-20 justify-center text-center"
          >
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Recommended Helicopter</h2>
                <p className=" sectionTitle__text mt-2 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>

          <div className=" y-gap-30 pt-40 pt-20">
            <div className="feature_card_section">
              <div className="">
                <div className="card_main-box recomended-card-main-box">
                  <div className="card_item recomended-card">
                    <Link to="/">
                      <div className="card-img-box">
                        <img
                          className="card-img"
                          src={cruise_img}
                          alt="cruise"
                        />
                        <div className="card-img-title">
                          <p className="promo-text">HELICOPTER ONLY</p>
                        </div>
                        <div className="img-heart-box">
                          <i class="fa-regular fa-heart"></i>
                        </div>
                      </div>
                      <div className="card-details-box">
                        <div className="cruise-name-box">
                          <p className="cruise-name">GuyVip Getaway</p>
                        </div>
                        <div className="cruise-title-box">
                          <p className="cruise-title">
                          Bell 412EP Helicopter to the Eastern Guyana
                          </p>
                        </div>
                        <div className="sailing-box pt">
                          <p className="para">Flying Date</p>
                          <p className="pr-2 para recomended-dep">Departs</p>
                        </div>
                        <div className="sail-date-box">
                          <p>18/06/2022</p>
                          <p>Guyana</p>
                        </div>
                        <div className="no-ports pt">
                          <p className="para">Ports (7)</p>
                          <p>Guyana</p>
                        </div>
                        <div className="review-price-box">
                          <div className="review-box recommended-review">
                            <div className="star-box">
                              <i class="fa-solid fa-star"></i>
                            </div>
                            <p className="para public_rate">4.82</p>
                            <p className="public_review">94 reviews</p>
                          </div>
                          <div className="price-box">
                            <p>From</p>
                            <p className="para">US$72</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="card_item recomended-card">
                    <Link to="/">
                      <div className="card-img-box">
                        <img
                          className="card-img"
                          src={cruise_img2}
                          alt="cruise"
                        />
                        <div className="img-heart-box">
                          <i class="fa-regular fa-heart"></i>
                        </div>
                      </div>
                      <div className="card-details-box">
                        <div className="cruise-name-box">
                          <p className="cruise-name">GuyVip Getaway</p>
                        </div>
                        <div className="cruise-title-box">
                          <p className="cruise-title">
                          Bell 412EP Helicopter to the Eastern Guyana
                          </p>
                        </div>
                        <div className="sailing-box pt">
                          <p className="para">Flying Date</p>
                          <p className="pr-2 para recomended-dep">Departs</p>
                        </div>
                        <div className="sail-date-box">
                          <p>18/06/2022</p>
                          <p>Guyana</p>
                        </div>
                        <div className="no-ports pt">
                          <p className="para">Ports (7)</p>
                          <p>Guyana</p>
                        </div>
                        <div className="review-price-box">
                          <div className="review-box recommended-review">
                            <div className="star-box">
                              <i class="fa-solid fa-star"></i>
                            </div>
                            <p className="para public_rate">4.82</p>
                            <p className="public_review">94 reviews</p>
                          </div>
                          <div className="price-box">
                            <p>From</p>
                            <p className="para">US$72</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="card_item recomended-card">
                    <Link to="/">
                      <div className="card-img-box">
                        <img
                          className="card-img"
                          src={cruise_img3}
                          alt="cruise"
                        />
                        <div className="card-img-title bg-primary ">
                          <p className="promo-text">BEST SELLER</p>
                        </div>
                        <div className="img-heart-box">
                          <i class="fa-regular fa-heart"></i>
                        </div>
                      </div>
                      <div className="card-details-box">
                        <div className="cruise-name-box">
                          <p className="cruise-name">GuyVip Getaway</p>
                        </div>
                        <div className="cruise-title-box">
                          <p className="cruise-title">
                          Bell 412EP Helicopter to the Eastern Guyana
                          </p>
                        </div>
                        <div className="sailing-box pt">
                          <p className="para">Flying Date</p>
                          <p className="pr-2 para recomended-dep">Departs</p>
                        </div>
                        <div className="sail-date-box">
                          <p>18/06/2022</p>
                          <p>Guyana</p>
                        </div>
                        <div className="no-ports pt">
                          <p className="para">Ports (7)</p>
                          <p>Guyana</p>
                        </div>
                        <div className="review-price-box">
                          <div className="review-box recommended-review">
                            <div className="star-box">
                              <i class="fa-solid fa-star"></i>
                            </div>
                            <p className="para public_rate">4.82</p>
                            <p className="public_review">94 reviews</p>
                          </div>
                          <div className="price-box">
                            <p>From</p>
                            <p className="para">US$72</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recommended;
