import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import ClientsFeedback from "../src/components/home1/ClientsFeedback";
import Hero1 from "../src/components/home1/Hero1";
import RecentProjects from "../src/components/home1/RecentProjects";
import CallToAction from "../src/components/CallToAction";
import { feedbackActive } from "../src/sliderProps";
import Layout from "../src/layout/Layout";



const Index = () => {
  return (
    <Fragment>
      <Head>
        {" "}
        <link
          rel="shortcut icon"
          href="assets/images/favicon1.png"
          type="image/x-icon"
        />
      </Head>
      <Layout header={1} className="home-one" footer={1}>
        {/*End Hidden Sidebar */}
        {/* Slider Section Start */}
        <Hero1 />
        {/* Slider Section End */}
        {/* Core Feature start */}
        <section className="feature-area-five bgc-lighter pt-100 pb-70">
          <div className="container">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-10">WHO WE ARE</span>
              <h2>We are providing IT and Digital Marketing Solutions for more than 7 years</h2>
              <h3 class="marketing">Proactive & Effective Marketing Solutions</h3>
              <h4 class="home_class">For Small-To-Medium Sized Businesses</h4>
              <p>NetCom Business Solutions Private Limited is recognised as the Top Digital Marketing Company in Pune. 
                We focus on fostering the areas like Web Design &amp; Development, SEO, SMM, Digital Marketing Services, 
                Web Advertisements, and Developing Creative Content resulting in Fully Managed and Highly Successful 
                Online Marketing Campaigns. We aim to provide the best possible Strategic Outcome for our valuable 
                clients through our Affordable Digital Marketing Services under one roof. At Netcom Business Solutions, 
                we have onboard Dynamic Professionals and the Best Digital Marketers, helping us to create Powerful 
                Brand Experiences for our Clients. Business Owners belonging to different Industries, in need of 
                Business Growth and Marketing needs, resort to us for the best Business Plans. From
                <Link href="/website-development">
                    <a> Web Design and development</a>
                  </Link>, 
                <Link href="/digital-marketing">
                    <a> Search Engine Optimization</a>
                  </Link>, 
                  <Link href="/digital-marketing">
                    <a> Social Media Optimization </a>
                  </Link>, and
                  <Link href="/digital-marketing">
                    <a> Social Media Marketing </a>
                  </Link>.
               
                
                   
                  We, as Among the Top digital marketing companies in pune, leave no stone unturned to let your 
                  business be armed with a distinctive tag.
              </p>
            </div>
            
          </div>
        </section>
        {/* Core Feature end */}
        {/* About Us Area start */}
        <section className="feature-area-four pb-100 rel z-1 pt-60 bgc-black">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title style-two mb-15 service_title">OUR SERVICES</span>
            <h2 class="h-title h_title1">We providing exclusive <br></br>services for your business</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-3s">
                <h4>
                  <i className="flaticon-responsive-1" /><br></br>
                  <Link href="/website-development">
                    <a>Web Development</a>
                  </Link>
                </h4>
                <div className="slider-btns">
                  <Link href="/services">
                    <a className="theme-btn style-three style_btn">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-5s">
                <h4 class="">
                  <i className="flaticon-analysis-1" /><br></br>
                  <Link href="/ecommerce-solutions">E-Commerce Solutions</Link>
                </h4>
                <div className="slider-btns ">
                  <Link href="/ecommerce-solutions">
                    <a className="theme-btn style-three style_btn">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-7s">
                <h4 class="">
                  <i className="flaticon-app-development" /><br></br>
                  <Link href="/applications-development">Mobile App Development</Link>
                </h4>
                <div className="slider-btns">
                  <Link href="/applications-development">
                    <a className="theme-btn style-three style_btn">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-3s">
                <h4 class="">
                    <i className="flaticon-seo" /><br></br>
                    <Link href="/digital-marketing">Digital Marketing</Link>
                </h4>
                <div className="slider-btns">
                  <Link href="/digital-marketing">
                    <a className="theme-btn style-three style_btn">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-5s">
                <h4 class="">
                  <i className="flaticon-responsive-1" /><br></br>
                  <Link href="/ui-ux-designing">UX/UI Strategy</Link>
                </h4>
                <div className="slider-btns">
                  <Link href="/ui-ux-designing">
                    <a className="theme-btn style-three style_btn">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-item-four wow fadeInUp delay-0-7s">
                <h4 class="">
                  <i className="flaticon-settings" /><br></br>
                  <Link href="/other-services">Other Services</Link>
                </h4>
                <div className="slider-btns">
                  <Link href="/services">
                    <a className="theme-btn style-three style_btn">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* About Us Area end */}
        {/* Statistics Three Area start */}
        <section className="ww-do-area pt-100 pb-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="ww-do-content rmb-65">
                <div className="section-title mb-40 wow fadeInRight delay-0-2s">
                  <span className="sub-title style-two mb-15">WORKING PROCESS</span>
                  <h2>How Do We Work</h2>
                </div>
                <div className="feature-three-wrap">
                  <div className="feature-item-three wow fadeInRight delay-0-3s">
                    <i className="flaticon-technical-support" />
                    <div className="content">
                      <h4>Select Project</h4>
                      <p>
                      We are an expert Design, Media, and Digital Marketing agency handing out a full range of 
                      creative services designed to help our clients stand out from the crowd.
                      </p>
                    </div>
                  </div>
                  <div className="feature-item-three color-two wow fadeInRight delay-0-4s">
                    <i className="flaticon-settings" />
                    <div className="content">
                      <h4>Project Analysis</h4>
                      <p>
                      Our team will work with you to drive your business ahead by creating websites that are built to 
                      last, memorable branding, clever SEO techniques, and paid ad campaigns that work best.
                      </p>
                    </div>
                  </div>
                  <div className="feature-item-three color-three wow fadeInRight delay-0-5s">
                    <i className="flaticon-app-development" />
                    <div className="content">
                      <h4>Finished Project</h4>
                      <p>
                      We can deliver the results your company needs by providing innovative digital experiences for 
                      your target audience, improving customer interactions, and offering authentic engagement through market-leading campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ww-do-images">
                <img
                  className="image-one wow fadeInDown delay-0-2s"
                  src="assets/images/about/about1.png"
                  alt="What We Do"
                />
                <img
                  className="image-two wow fadeInUp delay-0-4s"
                  src="assets/images/about/ww-do2.png"
                  alt="What We Do"
                />
                <img
                  className="image-three wow fadeInRight delay-0-6s"
                  src="assets/images/about/ww-do3.png"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Statistics Three Area end */}
        {/* Design Featured Start */}
        <section className="feature-with-image-area bgc-black1 text-white py-50 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-50">
              <div className="feature-with-image">
                {/* <div className="feature-image wow fadeInLeft delay-0-2s">
                  <img src="assets/images/features/feature1.png" alt="Feature" />
                </div> */}
                <div className="feature-content wow fadeInRight delay-0-2s" style={{ background: "#024b78a1", padding: "20px" }}>
                  <h3>WHY CHOOSE US</h3>
                  <h2>We Are Expert In Our Domain Sector</h2>
                  <p>
                    Our creative, marketing and digital in-house team offer professional web design and development, Search Engine Optimisation (SEO), comprehensive campaign planning, content marketing, Pay-Per-Click (PPC) advertising, Social Media Strategy, and all aspects of branding and Logo Designing Solutions.
                  </p>
                  <p>
                    Strengthening all our work is our commitment to clients to always provide the best possible service and finding the right ideas to accomplish all business goals.
                  </p>
                  <p>
                  We feel proud to have helped hundreds of fascinating and diverse companies of small and medium sizes and industries realize their online growth potential. Many of our clients use us year after year, forging a strong relationship built on trust, integrity, and results.
                  </p>
                  <Link href="/service-details">
                    <a className="read-more">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                {/* <div className="feature-shape">
                  <img src="assets/images/shapes/feature-shape.png" alt="Shape" />
                </div> */}
              </div>
            </div>
          </div>
        
        </div>
      </section>
        {/* Design Featured End */}
        {/* Project Area start */}
        {/* <RecentProjects /> */}
        {/* Project Area end */}
        {/* Working Process Area start */}
        <section
        className="statistics-area-two bgc-lighter bgs-cover pt-40 pb-0 rel z-1"
        style={{
          backgroundImage:
            "url(assets/images/features/support-features-bg.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* <div className="col-lg-5">
              <div className="statistics-two-content mb-30 rmb-35 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    Company Statistics
                  </span>
                  <h2>
                    {`We're`} the best web development agency more achievement
                  </h2>
                </div>
                <p>
                  Start building your first prototype in no time. Ogency
                  intuitive, drag {`&amp;`} drop interface gives you all the
                  building blocks that you need to get started! No skills
                  required.
                </p>
                <Link href="/about">
                  <a className="theme-btn mt-15">
                    Learn More <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div> */}
            <div className="col-lg-12">
              <div className="statistics-two-counters mt-30">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <div className="counter-item counter-text-wrap wow fadeInLeft delay-0-2s">
                      <i className="flaticon-startup" />

                      <Counter end={569} />
                      <span className="counter-title">Project Completed</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-5s">
                      <i className="flaticon-global" />
                      <Counter end={500} />
                      <span className="counter-title">
                      Happy Clients
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <div className="counter-item counter-text-wrap wow fadeInLeft delay-0-2s">
                      <i className="flaticon-rating" />
                      <Counter end={2} />
                      <span className="counter-title">Business Partners</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <div className="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-5s">
                      <i className="flaticon-trophy" />
                      <Counter end={100} />
                      <span className="counter-title">IT Consultant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Working Process Area end */}
        {/* CTA Area start */}
        <CallToAction></CallToAction>
        
        {/* CTA Area end */}
        {/* Pricing Two Area start */}
       
        {/* Pricing Two Area end */}
        {/* Testimonial Area Start */}
        <section className="feedback-area pb-130 pt-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-20" style={{color: "#0e73b1"}}>
                   TESTIMONIALS
                </span>
                <h2 class="testi">What Our Clients Say About Us</h2>
                <img className="" src="assets/images/background/line.png" />
              </div>
            </div>
          </div>
          <Slider {...feedbackActive} className="feedback-active">
            <div className="feedback-item wow fadeInUp delay-0-2s" style={{paddingBottom: "8px"}}>
              {/* <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src="assets/images/feedback/logo1.png" alt="Logo" />
              </div> */}
              {/* <h4>On the other hand denounes with indignwy</h4> */}
              <p>
              Working with NBS is the best decision I have ever made. I'd personally like to thank Mr. Ramit for guiding me throughout the process. They have a team of expert professionals who work so hard. They valued my opinions, needs and try their best to meet my business requirements. Thank you very much guys and keep it up!
              </p>
              <div className="feedback-author feedback-author1">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Nilesh Ghadi</h5>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-4s">
              
              <p>
              I got really good support from Netcom Business Solutions.<br></br> 
              My decision to build a website was right from them and I get good 
              support from them from time to time.
              </p><br></br>
              <div className="feedback-author">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Amrendra v Katkar</h5>
                </div><br></br>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s" >
             
              <p>
              One wonderful group of people who are always on top of any activity and get things done 
              proactively. I am very happy about them handling all my social media and also google ads. 
            
              </p>
              <p>
                 They go a step ahead of you to provide optimized solution before you think of it.
              </p>
              <div className="feedback-author">
                <img src="assets/images/feedback/author1.jpg" alt="Author" />
                <div className="content">
                  <h5>Saurabh Singh</h5>
                </div>
              </div>
            </div>
           
            
          </Slider>
        </div>
        
        <div className="feedback-shape one">
          <img src="assets/images/feedback/man1.jpg" alt="Man Shape" />
        </div>
        <div className="feedback-shape two">
          <img src="assets/images/feedback/man2.jpg" alt="Man Shape" />
        </div>
      </section>
        {/* Testimonial Area End */}
        {/* Contact Area Start */}
       
      </Layout>
    </Fragment>
  );
};
export default Index;
