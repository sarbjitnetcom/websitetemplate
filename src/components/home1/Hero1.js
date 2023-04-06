import Link from "next/link";
import Slider from "react-slick";

const Hero1 = () => {
  const props = {
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  return (
    <section
      id="home"
      className="main-slider-area bgc-black-with-lighting rel z-1"
    >
      <Slider {...props} className="main-slider-active">
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                7+ Years of Experience in Web Design solutions
              </span>
              <h1>Digital web design solutions agency</h1>
              <div className="slider-btns">
                <Link href="/contact">
                  <a className="theme-btn">
                    Get Started Us <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-three btn_slider">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/web-design-image.png)",
            }}
          >
            {/* <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible"> Web Design</b>
                <b>Development</b>
              </span>
            </span>
          </div>
        </div>
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                  7+ Years of Experience in web design solutions
              </span>
              <h1>Perfect Digital Marketing Solutions For Your Business</h1>
              <div className="slider-btns">
                <Link href="/contact">
                  <a className="theme-btn">
                    Get Started Us <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-three btn_slider">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/dm-removebg-preview.png)",
            }}
          >
            {/* <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible"> Digital Marketing</b>
                <b>Development</b>
              </span>
            </span>
          </div>
        </div>
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">
                7+ Years of Experience in web design solutions
              </span>
              <h1> Perfect IT Solutions For <br></br>Your Business</h1>
              <div className="slider-btns">
                <Link href="/contact">
                  <a className="theme-btn">
                    Get Started Us <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-three btn_slider">
                    Explore Services <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/marketing.png)",
            }}
          >
            {/* <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a> */}
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Marketing Solution</b>
                <b>Development</b>
              </span>
            </span>
          </div>
        </div>
      </Slider>
      <div className="container">
        <div className="main-slider-dots" />
      </div>
      <div className="slider-shapes">
        <img
          className="shape dots one"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape dots two"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="assets/images/shapes/slider-wave-line.png"
          alt="Shape"
        />
        <img
          className="shape circle"
          src="assets/images/shapes/slider-circle.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default Hero1;
