const Contact: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row cut-border">
      <form className="flex flex-col items-center gap-2 p-2 xl:w-1/2 bg-[#ffffff] dark:bg-darkGray xl:border-r-2 xl:border-darkerRed dark:xl:border-lighterRed">
        <h3 className="text-darkerRed dark:text-lighterRed">
          Lets get in touch
        </h3>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required={true}
          autoComplete="off"
          className="p-1 w-[80%] bg-[#ffffff] dark:bg-darkGray font-serif font-normal outline-none border-b-2 focus:border-b-darkerBlue dark:focus:border-b-lighterBlue focus:placeholder-[#ffffff] dark:focus:placeholder-darkGray"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required={true}
          autoComplete="off"
          className="p-1 w-[80%] bg-[#ffffff] dark:bg-darkGray font-serif font-normal outline-none border-b-2 focus:border-b-darkerBlue dark:focus:border-b-lighterBlue focus:placeholder-[#ffffff] dark:focus:placeholder-darkGray"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required={true}
          autoComplete="off"
          className="p-1 w-[80%] bg-[#ffffff] dark:bg-darkGray font-serif font-normal outline-none border-b-2 focus:border-b-darkerBlue dark:focus:border-b-lighterBlue focus:placeholder-[#ffffff] dark:focus:placeholder-darkGray"
        />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={12}
          maxLength={800}
          placeholder="Message"
          required={true}
          autoComplete="off"
          className="p-1 w-[80%] resize-none bg-[#ffffff] dark:bg-darkGray font-serif font-normal outline-none border-b-2 focus:border-b-darkerBlue dark:focus:border-b-lighterBlue focus:placeholder-[#ffffff] dark:focus:placeholder-darkGray"
        ></textarea>
        <button type="submit" className="mt-2 px-2 py-1">
          Send
        </button>
      </form>
      <div className="flex flex-col items-center gap-2 px-4 py-2 xl:w-1/2 bg-[#ffffff] dark:bg-darkGray xl:border-l-2 xl:border-darkerRed dark:xl:border-lighterRed">
        <h3 className="text-darkerBlue dark:text-lighterBlue">Contact info</h3>
        <p className="text-sm">
          Feel free to contact me or check me out on other platforms:
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Contact;
