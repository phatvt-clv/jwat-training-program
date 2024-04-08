import { React, useState, useEffect } from "react";
import Header from "../components/header";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import feature from "../assets/feature.json";
import Footer from "../components/footer";

export default function LandingPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Set the items state with the data from the file
    setItems(feature);
  }, []);

  return (
    <div id="LandingPage">
      <Header></Header>

      <div className="service-content">
        <div className="content-video">
          <YoutubeEmbed embedId="lkfI3cpjsII" />
        </div>
        <div className="content-section">
          <h2 className="section-heading">Create a Global Support Hub with</h2>
          <h2 className="section-subheading">Global Service Desk</h2>
          <p className="section-text">
            We play the roles as the support frontiers and the representatives
            of the IT support. The Global Service Desk is the center where
            customers (e.g. employees or other stakeholders) can approach for
            help from their IT service providers. Regardless of whatever the
            assistance is being provided, the goal of our Global Service Desk is
            to deliver high-quality service to customers in the timely manner.
          </p>
        </div>
      </div>
      
      <div className="service-feature">
        <h2 className="feature-heading">
          <span>What </span>
          <span className="feature-heading-color">we can do</span>
        </h2>
        <div className="feature-list">
            <div className="feature-item">
              <div className="container-icon">
                <img alt="" src="https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector1.png&w=64&q=75" className="icon"></img>
              </div>
              <h3>Customer’s Requirements Managed By Help Desk Software.</h3>
              <p>Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize.</p>
            </div>
            <div className="feature-item">
              <div className="container-icon">
                <img alt="" src="https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector2.png&w=96&q=75" className="icon"></img>
              </div>
              <h3>Deliver On SLAs</h3>
              <p>Nail your Service Level Agreements, every time. Get the important things done first with prioritized queues.</p>
            </div>
            <div className="feature-item">
              <div className="container-icon">
                <img alt="" src="https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector3.png&w=64&q=75" className="icon"></img>
              </div>
              <h3>Offer Self-Service</h3>
              <p>Help customers help themselves, scale support with a limited staff. Save time and reduce tickets with an integrated knowledge base.</p>
            </div>
            <div className="feature-item">
              <div className="container-icon">
                <img alt="" src="https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector4.png&w=64&q=75" className="icon"></img>
              </div>
              <h3>Automate Those Repetitive Tasks</h3>
              <p>We always try to set up automations for the routine tasks so that we can focus on solving the important stuff and help lighten the workload.</p>
            </div>
            <div className="feature-item">
              <div className="container-icon">
                <img alt="" src="https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector5.png&w=64&q=75" className="icon"></img>
              </div>
              <h3>Customer’s Requirements Tracked And Reported On Metrics</h3>
              <p>We definitely keep an eye on key operational metrics like most IT organizations. But we’ve stopped obsessing over random KPIs, and we’re way more focused now on measuring what matters most. To summarize, we put the customer experience first, and spend our time drilling into the trends and numbers that can help us make the biggest improvements.</p>
            </div>
            <div className="feature-item">
              <div className="container-icon">
                <img alt="" src="https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector6.png&w=64&q=75" className="icon"></img>
              </div>
              <h3>Up-To-Date Staff Training</h3>
              <p>CLV helpdesk’s tool is always available with the up to date workaround, training materials, guideline document, FAQ from users… We had a clear plan to make sure all of helpdesk team members could have the easiest way to reach them in the fastest way when they need to.</p>
            </div>
        </div>
      </div>

      <div className="return">
        <p>Previous Page</p>
        <h2>Quality Assurance</h2>
      </div>

      <Footer></Footer>
    </div>
  );
}
