import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section className="bg-grey-600 md:rounded-lg">
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

          <div className="w-full">
            <h2 className="text-lg mb-4">Contact Form</h2>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-7 mb-5">
                <label htmlFor="fname"></label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Full name"
                  className="contactInput"
                  required
                />

                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  className="contactInput"
                  required
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
