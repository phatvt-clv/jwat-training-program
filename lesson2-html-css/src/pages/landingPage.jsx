import { React } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import YoutubeEmbed from "../components/YoutubeEmbed";
import "../styles/responsive.css"
import Return from "../components/return";
import Feature from "../components/feature";

export default function LandingPage() {
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
      
      <Feature></Feature>
      <Return></Return>
      <Footer></Footer>
    </div>
  );
}
