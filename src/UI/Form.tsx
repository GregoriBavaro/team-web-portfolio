//Hooks
import { useState } from "react";

//CSS
import classes from "../components/ContactUs.module.css";

//Icons
import invalid from "../data/ui/invalid.png";
import correct from "../data/ui/correct.png";

const Form: React.FC<{
  reference: any;
  sendEmail: (e: any) => void;
  value: {
    enteredName: string;
    enteredEmail: string;
    enteredSubject: string;
    enteredMessage: string;
  };
  onChange: {
    nameChangedHandler: (event: any) => void;
    emailChangedHandler: (event: any) => void;
    subjectChangedHandler: (event: any) => void;
    messageChangedHandler: (event: any) => void;
  };
  onBlur: {
    nameBlurHandler: () => void;
    emailBlurHandler: () => void;
    subjectBlurHandler: () => void;
    messageBlurHandler: () => void;
  };
  hasError: {
    nameInputHasError: boolean;
    emailInputHasError: boolean;
    subjectInputHasError: boolean;
    messageInputHasError: boolean;
  };
  formIsValid: boolean;
  isTouched: {
    nameIsTouched: boolean;
    emailIsTouched: boolean;
    subjectIsTouched: boolean;
    messageIsTouched: boolean;
  };
}> = ({
  reference,
  sendEmail,
  value: { enteredName, enteredEmail, enteredSubject, enteredMessage },
  onChange: {
    nameChangedHandler,
    emailChangedHandler,
    subjectChangedHandler,
    messageChangedHandler,
  },
  onBlur: {
    nameBlurHandler,
    emailBlurHandler,
    subjectBlurHandler,
    messageBlurHandler,
  },
  hasError: {
    nameInputHasError,
    emailInputHasError,
    subjectInputHasError,
    messageInputHasError,
  },
  formIsValid,
  isTouched: {
    nameIsTouched,
    emailIsTouched,
    subjectIsTouched,
    messageIsTouched,
  },
}) => {

  return (
    <form ref={reference} onSubmit={sendEmail}>
      <section>
        <div className={classes["name"]}>
          <input
            type="text"
            name="user_name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            placeholder="Name"
            style={{ border: nameInputHasError ? "1px solid red" : "" }}
          />
          {nameInputHasError && (
            <>
              <p className={classes["error-text"]}>Name is empty</p>
              <img
                src={invalid}
                alt="invalid"
                className={classes["error-icon-name-email"]}
              />
            </>
          )}
          {!nameInputHasError && nameIsTouched && (
            <img src={correct} alt="valid" className={classes["error-icon-name-email"]} />
          )}
        </div>
        <div className={classes["email"]}>
          <input
            type="email"
            name="user_email"
            value={enteredEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            placeholder="Email"
            style={{ border: emailInputHasError ? "1px solid red" : "" }}
          />
          {emailInputHasError && (
            <>
              <p className={classes["error-text"]}>Email is empty or invalid</p>
              <img
                src={invalid}
                alt="invalid"
                className={classes["error-icon-name-email"]}
              />
            </>
          )}
          {!emailInputHasError && emailIsTouched && (
            <img src={correct} alt="valid" className={classes["error-icon-name-email"]} />
          )}
        </div>
      </section>
      <div className={classes["subject"]}>
        <input
          type="text"
          name="user_subject"
          value={enteredSubject}
          onChange={subjectChangedHandler}
          onBlur={subjectBlurHandler}
          placeholder="Subject"
          style={{ border: subjectInputHasError ? "1px solid red" : "" }}
        />
        {subjectInputHasError && (
          <>
            <p className={classes["error-text"]}>Subject is empty</p>
            <img
              src={invalid}
              alt="invalid"
              className={classes["error-icon"]}
            />
          </>
        )}
        {!subjectInputHasError && subjectIsTouched && (
          <img src={correct} alt="valid" className={classes["error-icon"]} />
        )}
      </div>
      <div className={classes["message"]}>
        <textarea
          name="message"
          value={enteredMessage}
          onChange={messageChangedHandler}
          onBlur={messageBlurHandler}
          placeholder="Message"
          style={{ border: messageInputHasError ? "1px solid red" : "" }}
        />
        {messageInputHasError && (
          <>
            <p className={classes["error-text"]}>Message is empty</p>
            <img
              src={invalid}
              alt="invalid"
              className={classes["error-icon-message"]}
            />
          </>
        )}
        {!messageInputHasError && messageIsTouched && (
          <img src={correct} alt="valid" className={classes["error-icon-message"]} />
        )}
      </div>
      <button type="submit" value="Send" disabled={!formIsValid}>
        <span>Send</span>
        <span>Send</span>
      </button>
    </form>
  );
};

export default Form;
