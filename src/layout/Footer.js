import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const Footer1 = () => (
  <footer className="main-footer footer-two pt-80 bgc-lighter">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-3 col-md-3 offset-xl-1">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
            <h4 className="footer-title">Follow Us</h4>
            
            <div className="social-style-two pt-5">
              <a href="#">
                <img className="" src="assets/images/background/facebook-logo.png" alt=""/>
              </a>
              <a href="#">
                <img className="" src="assets/images/background/linkedin-logo.png" alt=""/>
              </a>
              <a href="#">
                <img className="" src="assets/images/background/instagram-logo.png" alt=""/>
              </a>
              <a href="#">
                <img className="" src="assets/images/background/whatsapp-logo.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-5 offset-xl-1">
          <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">Business Partner</h4>
              <div class="businee-part">
                 <img className="" src="assets/images/background/google-partner.png" alt=""/>
                 <img className="facebook-logo" src="assets/images/background/facebook-partner.jpg" alt=""/>
              </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="footer-bottom pt-25 pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-1">
            <div className="copyright-text text-center text-lg-start">
              <p class="footer-desc">©  2021 NetCom Business Solutions Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-bottom-menu mb-10 text-center text-lg-end">
              <p class="footer-desc">GST No. - 27AAHCN3612K1ZD</p>
            </div>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </div>
  </footer>
);

const Footer2 = () => (
  <footer className="main-footer bgc-dark-blue text-white rel z-1">
   <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-3 col-md-3 offset-xl-1">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
            <h4 className="footer-title">Follow Us</h4>
            
            <div className="social-style-two pt-5">
              <a href="#">
                <img className="" src="assets/images/background/facebook-logo.png" alt=""/>
              </a>
              <a href="#">
                <img className="" src="assets/images/background/linkedin-logo.png" alt=""/>
              </a>
              <a href="#">
                <img className="" src="assets/images/background/instagram-logo.png" alt=""/>
              </a>
              <a href="#">
                <img className="" src="assets/images/background/whatsapp-logo.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-5 offset-xl-1">
          <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">Business Partner</h4>
              <div class="businee-part">
                 <img className="" src="assets/images/background/google-partner.png" alt=""/>
                 <img className="facebook-logo" src="assets/images/background/facebook-partner.jpg" alt=""/>
              </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="footer-bottom pt-25 pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-1">
            <div className="copyright-text text-center text-lg-start">
              <p class="footer-desc">©  2021 NetCom Business Solutions Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-bottom-menu mb-10 text-center text-lg-end">
              <p class="footer-desc">GST No. - 27AAHCN3612K1ZD</p>
            </div>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </div>
  </footer>
);

const DefaultFooter = () => (
  <footer className="main-footer pt-100 ">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-3 col-md-3 offset-xl-1">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
            <h4 className="footer-title">Follow Us</h4>
            
            <div className="social-style-two pt-5">
              <a href="#">
                <img className="" src="assets/images/background/facebook-logo.png" alt=""/>
              </a>
              <a href="#">
                <img className="" src="assets/images/background/linkedin-logo.png" alt=""/>
              </a>
              <a href="#">
                <img className="" src="assets/images/background/instagram-logo.png" alt=""/>
              </a>
              <a href="#">
                <img className="" src="assets/images/background/whatsapp-logo.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-5 offset-xl-1">
          <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">Business Partner</h4>
              <div class="businee-part">
                 <img className="" src="assets/images/background/google-partner.png" alt=""/>
                 <img className="facebook-logo" src="assets/images/background/facebook-partner.jpg" alt=""/>
              </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="footer-bottom pt-25 pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-1">
            <div className="copyright-text text-center text-lg-start">
              <p class="footer-desc">©  2021 NetCom Business Solutions Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-bottom-menu mb-10 text-center text-lg-end">
              <p class="footer-desc">GST No. - 27AAHCN3612K1ZD</p>
            </div>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </div>
  </footer>
);
