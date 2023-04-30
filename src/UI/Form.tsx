//CSS
import classes from "../components/ContactUs.module.css";

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
}) => {
  return (
    <form ref={reference} onSubmit={sendEmail}>
      <h1>Contact us</h1>
      <section>
        <div className={classes["name"]}>
          <input
            type="text"
            name="user_name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            placeholder="Name"
          />
          {nameInputHasError && (
            <p className={classes["error-text"]}>Name must not be empty</p>
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
          />
          {emailInputHasError && (
            <p className={classes["error-text"]}>
              Please enter a valid email address
            </p>
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
        />
        {subjectInputHasError && (
          <p className={classes["error-text"]}>Subject must not be empty</p>
        )}
      </div>
      <div className={classes["message"]}>
        <textarea
          name="message"
          value={enteredMessage}
          onChange={messageChangedHandler}
          onBlur={messageBlurHandler}
          placeholder="Message"
        />
        {messageInputHasError && (
          <p className={classes["error-text"]}>Please enter a message</p>
        )}
      </div>
      <button type="submit" value="Send" disabled={!formIsValid}>
        Send
      </button>
    </form>
  );
};

export default Form;
