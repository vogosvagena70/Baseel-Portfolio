import { useForm, ValidationError } from "@formspree/react";
import "../App.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("myyawwkq");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="color-white font-extrabold">
      <div className="pl-1 pr-2 mt-2">
        <label htmlFor="email">Email Address</label>
      </div>
      <div className="w-50 pl-1 pr-2">
        <input
          className="w-full rounded-md h-2"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="pl-1 pr-2 mt-2">
        <label htmlFor="email">Message</label>
      </div>
      <div className="w-50 pl-1 pr-2">
        <textarea
          id="message"
          name="message"
          className="w-full rounded-md"
          style={{ resize: "vertical" }}
          rows={5}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="mt-2 pl-1 mb-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-b-to-w color-w-to-b pl-1 pr-1 border-white-900 font-extrabold border-4 font-extrabold  rounder-border  pt-05 pb-05  
             cursor-pointer w-200 h-70"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
