import { useState } from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    formData.append("access_key", "3133bb28-410d-4c2d-8a54-11cc42551127");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (err) {
      console.log("Error", err);
      setResult("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setResult("");
      }, 3000);
    }

    // ! REMOVE THE DISPLAY AFTER THREE SECONDS
    setTimeout(() => {
      setResult("");
    }, 3000);
  };

  return (
    <section className="bg-grey-600 md:rounded-lg pt-22 pb-15 lg:pt-0">
      <div className="py-4 px-5">
        <h1 className="mb-7">Contact</h1>

        <div className="flex flex-col lg:flex-row lg:gap-6 xl:gap-12 md:items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39179.76352640266!2d-0.49269760135859053!3d52.139137801577824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b6c6c66c36cd%3A0x125df4c90cabaf30!2sBedford!5e0!3m2!1sen!2suk!4v1738779653347!5m2!1sen!2suk"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg md:h-120 h-80 w-full mb-10"
            aria-hidden="false"
            tabIndex="0"
          ></iframe>

          <div className="w-full mb-4">
            <h2 className="text-lg mb-4">Contact Form</h2>

            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-7 mb-5">
                <label htmlFor="fname"></label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Full name"
                  className="contactInput"
                  required
                  name="Full name"
                />

                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className="contactInput"
                  required
                  name="email"
                />

                <label htmlFor="message"></label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="contactInput h-40 resize-none"
                  required
                ></textarea>
              </div>

              <button className="contactButton">
                <IoIosSend size={20} />
                <span>Send Message</span>
              </button>

              <p
                className={`mt-3 text-xl ${
                  result === "Form Submitted Successfully"
                    ? "text-green-500"
                    : "text-red-400"
                }`}
              >
                {loading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  result
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
