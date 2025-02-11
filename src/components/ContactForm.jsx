import Button from "./Button";

function ContactForm() {
  return (
    <section className="w-full md:w-1/2" id="contact">
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <h1 className="mb-2 w-full text-4xl md:text-center">Get in touch</h1>
          <form
            className="rounded-lg bg-white p-5"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />

            <div className="relative mt-3">
              <input
                type="text"
                id="name"
                name="name"
                className="border-1 peer mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-transparent p-2 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
                placeholder=""
                required
              />
              <label
                htmlFor="name"
                className="absolute left-1 top-2 -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary"
              >
                Name
              </label>
            </div>

            <div className="relative mt-3">
              <input
                type="email"
                id="email"
                name="email"
                className="border-1 peer mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-transparent p-2 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
                placeholder=""
                required
              />
              <label
                htmlFor="email"
                className="absolute left-1 top-2 -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary"
              >
                Email address
              </label>
            </div>

            <div className="relative mt-3">
              <textarea
                id="message"
                name="message"
                rows={8}
                className="border-1 peer mb-5 mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-transparent p-2 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
                placeholder=""
                required
              />
              <label
                htmlFor="message"
                className="absolute left-1 top-2 -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary"
              >
                Say hello!
              </label>
            </div>

            <button
              className="custom-btn mt-auto w-full rounded-full bg-primary p-2 text-center text-darkBgText"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
