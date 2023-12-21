import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="title">
        <h1>About</h1>
        <p>Submit the form bellow or shoot me an email - ayoub@gmail.com</p>
      </div>
      <div className="container">
        <form action="https://getform.io/f/653e9c68-17bc-4b2a-8e1e-7fdf1f35bb69" method="POST" className="">
            <input name="name" type="text" className="name" placeholder="Name" />
            <input name="email" type="email" className="email" placeholder="Email" />
            <textarea name="message" className="message" cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit" className="submitBtn">Let's Collaborate</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
