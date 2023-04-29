//Hooks
import { useRef } from "react";
import emailjs from "@emailjs/browser";

//CSS
import classes from "./ContactUs.module.css";

export const ContactUs = () => {
  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4v2bwqv",
        "template_aict9v8",
        form.current,
        "7VzKyry5ZmDLZGwEP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.container}>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
