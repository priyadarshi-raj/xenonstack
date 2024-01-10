import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import './style.css'

const ContactUs = () => {
  return (
    <section>
      <div className="container">
        <div className="hh upper">
          <h2 style={{ color: "#3b71ca" }}>Contact Us</h2>

          <h3 style={{ color: "#3b71ca" }}>We will reply to your query shortly!</h3>

          <p style={{ color: "black" }}>
            Queries, Concerns, Doubts? We're here to listen! OpenScience strives to offer the
            best possible service to every contact. Our support team makes sure that you get
            the best advice and guidance regarding whatever queries you have. We help you
            out from your very primary question to the most complex inquiries.
          </p>
        </div>

        <div className="hh lowerLeft" style={{ color: "#3b71ca", backgroundColor:"#b8effb", align:"center"}}>
          <input id="name" type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <input id="textArea" type="text" placeholder="Queries" name="message" />
          {/* <button onClick={() => sendEmail()}>Submit Query</button> */}

          <a href="#" type="button" className="button" target="_blank">
            Submit
          </a>
        </div>

        <div className="hh lowerRight" style={{ color: "#3b71ca", backgroundColor: "#b8effb" }}>
          <h3>Write Us</h3>
          <p>
            <b>Email</b> - rajpriyadarshi95059@gmail.com <br /> <br />
            <b>Contact No.</b> - 6200191322 <br /> <br />
            <b>Address</b> - KCC, Chandigarh University
          </p>
          <ul style={{ listStyleType: "none" }}></ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
