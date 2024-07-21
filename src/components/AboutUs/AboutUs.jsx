import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container-1">
      <div className="about-us-heading">
        <h1>About Us</h1>
        <p>
          Discover our range of innovative products designed to streamline your
          operations, enhance productivity, and drive business growth.
        </p>
      </div>

      <div className="about-us-card-container">
        <div className="about-us-card card-1">
          <div className="about-us-card-heading">
            <h1>Who We Are</h1>
            <p>
              We are here to help you. We have a team of experts who are always
              ready to help you. We have a team of experts who are always ready
              to help you.
            </p>
          </div>
          <div className="about-us-card-heading">
            <h1>Our Mission</h1>
            <p>
              At KAR International Infotech, our mission is clear: to deliver
              exceptional services and products while prioritizing affordability
              and customer satisfaction. We believe in harnessing the power of
              technology to transform businesses and enhance operational
              efficiency, ultimately contributing to the success of our clients.
            </p>
          </div>
        </div>
        <div className="about-us-image">
          <img src="/images/aboutus/image1.svg" alt="About Us" />
        </div>
      </div>

      <div className="about-us-card-container card-2-zig-zag">
        <div className="about-us-card card-2">
          <div className="about-us-card-heading">
            <h1>Our Offerings</h1>
            <p>
              We specialize in a wide range of services, including web development, graphic designing, digital marketing, and UI & UX designing. Our team of experienced professionals is committed to delivering bespoke solutions tailored to meet the unique requirements of each client.
            </p>           
          </div>
          <div className="about-us-card-heading"> <p>
              In addition to our services, we offer a suite of cutting-edge products designed to streamline operations and drive business growth. From Big Data solutions to billing software, HRMS, CMR, and ERP systems, our products are built to empower businesses and drive success.
            </p></div>
        </div>
        <div className="about-us-image">
          <img src="/images/aboutus/image2.svg" alt="About Us" />
        </div>
      </div>

      <div className="about-us-card-container card-3-container">
        <div className="about-us-card card-3">
          <div className="about-us-card-heading">
            <h1>Our Commitment</h1>
            <p>
              At the heart of our company lies a dedication to excellence. We are committed to providing our clients with the highest quality solutions and unparalleled customer service. We strive to exceed expectations, delivering results that drive tangible value and foster long-term relationships.
            </p>
          </div>
          <div className="about-us-card-heading">
            <h1>Empowering People,<br/> Driving Success</h1>
            <p>
              At KAR International Infotech, we believe in empowering our team members to thrive and succeed. We are dedicated to providing a supportive and collaborative work environment where creativity and innovation are encouraged. By investing in our people, we ensure that they have the tools and resources they need to deliver excellence in everything they do.
            </p>
          </div>
          <div className="about-us-card-heading">
            <h1>Your Partner in Success</h1>
            <p>
              Whether you're looking to enhance your online presence, streamline your operations, or drive business growth, KAR International Infotech is here to help. Partner with us, and let's embark on a journey towards success together.
            </p>
          </div>
        </div>
        <div className="about-us-image">
          <img src="/images/aboutus/image3.svg" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
