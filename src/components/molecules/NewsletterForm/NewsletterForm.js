import React, { useState } from "react";
import { Button, Text } from "../../index";
import "./NewsletterForm.scss";

const NewsletterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="ms-newsletter">
      <div className="ms-newsletter__heading">
        <Text as={"h1"} style={{ color: "white" }}>
          Signup For Our Newsletter
        </Text>
        <Text
          as={"p"}
          style={{ fontWeight: "600", color: "white", fontSize: "1.5rem" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam
          perspiciatis ipsum itaque, rerum corporis porro ducimus at aspernatur
          animi?
        </Text>
      </div>
      <div className="ms-newsletter__form">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="form__input"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          className="form__input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          as="a"
          classes="deep-orange darken-1 btn waves-effect waves-light"
          name="Submit"
        />
      </div>
    </div>
  );
};

export default NewsletterForm;
