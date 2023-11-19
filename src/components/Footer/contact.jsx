import React from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  const image =
    "https://img.freepik.com/free-photo/person-s-hand-holding-heart-shape-with-jute-spool-tags-sticks-lace-wooden-desk_23-2148164395.jpg";

  return (
    <div className="row contactus mt-4 p-5">
      {/* Bootstrap Grid System for responsive design */}
      <div className="col-md-6">
        <img src={image} alt="contactus" style={{ width: "100%" }} />
      </div>

      {/* Bootstrap Grid System for responsive design */}
      <div className="col-md-6 text-center"> {/* Add the text-center class here */}
        <h1 className="bg-dark p-2 text-white">CONTACT US</h1>
        <p className="text-justify mt-2">
          <br></br>
          <br></br>
          The most prominent organization associated with Khadi is the Khadi and Village Industries Commission (KVIC), which plays a central role in its promotion and development. Additionally, numerous Khadi Gram Udyog Bhavans and Khadi Bhandars are scattered across the country, making it accessible to consumers and enthusiasts. You can also find Khadi products online through various e-commerce platforms and the official KVIC website. Whether you're looking for traditional Khadi clothing, home furnishings, or artisanal goods, these outlets and online platforms can connect you with the rich heritage of Khadi products.
          <br></br>
        </p>
        <p className="mt-3">
          <BiMailSend /> <b>: www.help@Khadhimarket.com</b>
        </p>
        <p className="mt-3">
          <BiPhoneCall /> : <b>9080673440</b>
        </p>
      </div>
    </div>
  );
};

export default Contact;
