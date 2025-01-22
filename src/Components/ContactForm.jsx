import Button from "./Button";

function ContactForm() {
  return (
    <section
      className="custom-padding-lg py-10 px-2"
      id="contact"
    >
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <h1 className="md:text-center text-4xl mb-2 w-fulld">Get in touch</h1>
          <form
            className="bg-white p-5 shadow-md rounded-lg"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              className="hidden"
              name="bot-field"
            />

            <div className="mt-3 relative">
              <input
                type="text"
                id="name"
                name="name"
                className="block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent  border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary peer mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder=""
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name
              </label>
            </div>

            <div className="mt-3 relative">
              <input
                type="email"
                id="email"
                name="email"
                className="block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent  border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary peer mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder=""
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email address
              </label>
            </div>

            <div className="mt-3 relative">
              <textarea
                type="textarea"
                id="name"
                name="name"
                rows={8}
                className="block px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent  border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary peer mt-1 p-2 w-full border border-gray-300 rounded-md mb-5"
                placeholder=""
              />
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Say hello!
              </label>
            </div>

            <Button
              type="submit"
              buttonText="Send"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
