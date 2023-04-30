//Hooks
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import useInput from "../hooks/use-input";

//Component
import Form from "../UI/Form";

//CSS
import classes from "./ContactUs.module.css";

export const ContactUs = () => {
  const form = useRef<any>(null);

  //Name
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value: any) => value.trim() !== "");

  //Email
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value: any) => value.includes("@"));

  //Subject
  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangedHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value: any) => value.trim() !== "");

  //Message
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value: any) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredMessageIsValid &&
    enteredSubjectIsValid
  ) {
    formIsValid = true;
  }

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
    resetNameInput();
    resetEmailInput();
    resetMessageInput();
    resetSubjectInput();
  };

  return (
    <div className={classes.container}>
      <Form
        reference={form}
        value={{ enteredName, enteredSubject, enteredEmail, enteredMessage }}
        sendEmail={sendEmail}
        onChange={{
          nameChangedHandler,
          emailChangedHandler,
          subjectChangedHandler,
          messageChangedHandler,
        }}
        onBlur={{
          nameBlurHandler,
          emailBlurHandler,
          subjectBlurHandler,
          messageBlurHandler,
        }}
        hasError={{
          nameInputHasError,
          emailInputHasError,
          subjectInputHasError,
          messageInputHasError,
        }}
        formIsValid={formIsValid}
      />
    </div>
  );
};
