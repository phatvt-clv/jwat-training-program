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
          {items.map((item) => (
            <div className="feature-item" key={item.id}>
              <FontAwesomeIcon icon={faLaptop} className="icon" />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
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
