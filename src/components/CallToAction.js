import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-to-action-area1 bgc-black pt-80 pb-50">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title text-white mb-25 wow fadeInUp delay-0-2s">
                <p>
                  DO YOU HAVE ANY PROJECT ?
                </p>
                <h2 class="call_h">Let’s Talk About Business Solutions With Us</h2>
            </div>
          </div>
          <div className="col-lg-3 text-lg-end lets_btn">
            <Link href="/contact">
              <a className="theme-btn style-two mb-30 wow fadeInUp delay-0-4s">
                Let’s Chat <i className="fas fa-angle-double-right" /> 
              </a>
            </Link>
          </div>
          <div className="col-lg-2 phone-home">
            <Link href="tel:918766550668">
              <a className="">
              <i className="fas fa-phone" /> +91-8766550668
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
