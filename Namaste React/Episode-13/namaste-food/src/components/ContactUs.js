const ContactUs = () => {
  return (
    <div className="text-center m-4 p-4 w-120 mx-auto">
      <h1 className="text-3xl font-bol mx-auto">Contact Us</h1>
      <form className="flex flex-col mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 mt-2 rounded w-full "
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 mt-2 rounded w-full"
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 mt-2 rounded w-full h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 cursor-pointer mt-4 w-full max-w-md "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
