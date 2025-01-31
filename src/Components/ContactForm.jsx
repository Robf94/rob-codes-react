import Button from "./Button";

function ContactForm() {
  return (
    <section
      className="custom-padding-lg scroll-mt-nav px-2 py-10"
      id="contact"
    >
      <div className="flex justify-center">
        <div className="w-full max-w-lg">
          <h1 className="w-fulld mb-2 text-4xl md:text-center">Get in touch</h1>
          <form
            className="rounded-lg bg-white p-5 shadow-md"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input className="hidden" name="bot-field" />

            <div className="relative mt-3">
              <input
                type="text"
                id="name"
                name="name"
                className="border-1 dark:focus:border-primary-500 peer mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-transparent p-2 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
                placeholder=""
              />
              <label
                htmlFor="name"
                className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Name
              </label>
            </div>

            <div className="relative mt-3">
              <input
                type="email"
                id="email"
                name="email"
                className="border-1 dark:focus:border-primary-500 peer mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-transparent p-2 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
                placeholder=""
              />
              <label
                htmlFor="email"
                className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Email address
              </label>
            </div>

            <div className="relative mt-3">
              <textarea
                type="textarea"
                id="name"
                name="name"
                rows={8}
                className="border-1 dark:focus:border-primary-500 peer mb-5 mt-1 block w-full appearance-none rounded-md border border-gray-300 bg-transparent p-2 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white"
                placeholder=""
              />
              <label
                htmlFor="message"
                className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
              >
                Say hello!
              </label>
            </div>

            <Button type="submit" buttonText="Send" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
