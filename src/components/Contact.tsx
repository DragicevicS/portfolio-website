import { useState } from "react";
import lightSendImg from "../assets/light/light-send.svg";
import darkSendImg from "../assets/dark/dark-send.svg";
import lightEmailImg from "../assets/light/light-email.svg";
import darkEmailImg from "../assets/dark/dark-email.svg";
import lightPhoneImg from "../assets/light/light-phone.svg";
import darkPhoneImg from "../assets/dark/dark-phone.svg";
import lightGitHubImg from "../assets/light/light-github.svg";
import darkGitHubImg from "../assets/dark/dark-github.svg";
import lightLinkedInImg from "../assets/light/light-linkedin.svg";
import darkLinkedInImg from "../assets/dark/dark-linkedin.svg";
import lightInstagramImg from "../assets/light/light-instagram.svg";
import darkInstagramImg from "../assets/dark/dark-instagram.svg";
import lightLinkInNewImg from "../assets/light/light-link-in-new.svg";
import darkLinkInNewImg from "../assets/dark/dark-link-in-new.svg";

type ContactProps = {
  theme: string;
};

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [notificationStates, setNotificationStates] = useState({
    email: false,
    phone: false,
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotificationStates((prev) => ({
        ...prev,
        [key]: true,
      }));
      setTimeout(() => {
        setNotificationStates((prev) => ({
          ...prev,
          [key]: false,
        }));
      }, 800);
    });
  };

  return (
    <div className="flex flex-col xl:flex-row w-full mb-20 font-serif cut-border">
      <form className="flex flex-col items-center gap-2 p-2 pb-5 xl:w-1/2 bg-[#ffffff] dark:bg-darkGray max-xl:border-b-2 xl:border-r-2 border-darkerRed dark:border-lighterRed">
        <h3 className="text-darkerBlue dark:text-lighterBlue">
          Lets get in touch
        </h3>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required={true}
          autoComplete="off"
          className="p-1 w-[80%] bg-[#ffffff] dark:bg-darkGray font-normal outline-none hover:w-[81%] focus:w-[81%] border-b-2 hover:border-b-darkerRed dark:hover:border-b-lighterRed focus:border-b-darkerRed dark:focus:border-b-lighterRed focus:placeholder-[#ffffff] dark:focus:placeholder-darkGray ease duration-200"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required={true}
          autoComplete="off"
          className="p-1 w-[80%] bg-[#ffffff] dark:bg-darkGray font-normal outline-none hover:w-[81%] focus:w-[81%] border-b-2 hover:border-b-darkerRed dark:hover:border-b-lighterRed focus:border-b-darkerRed dark:focus:border-b-lighterRed focus:placeholder-[#ffffff] dark:focus:placeholder-darkGray ease duration-200"
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required={true}
          autoComplete="off"
          className="p-1 w-[80%] bg-[#ffffff] dark:bg-darkGray font-normal outline-none hover:w-[81%] focus:w-[81%] border-b-2 hover:border-b-darkerRed dark:hover:border-b-lighterRed focus:border-b-darkerRed dark:focus:border-b-lighterRed focus:placeholder-[#ffffff] dark:focus:placeholder-darkGray ease duration-200"
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
          className="p-1 w-[80%] resize-none bg-[#ffffff] dark:bg-darkGray font-normal hover:w-[81%] focus:w-[81%] outline-none border-b-2 hover:border-b-darkerRed dark:hover:border-b-lighterRed focus:border-b-darkerRed dark:focus:border-b-lighterRed focus:placeholder-[#ffffff] dark:focus:placeholder-darkGray ease duration-200"
        ></textarea>
        <div className="w-[80%]">
          <button
            type="submit"
            className="group flex gap-3 items-center mt-5 ml-auto px-2 border-l-4 hover:underline hover:border-darkerRed dark:hover:border-lighterRed ease duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <span className="font-normal">SEND</span>
            <img
              src={theme === "dark" ? darkSendImg : lightSendImg}
              alt="Send arrow"
              className="w-[18px] h-[18px] group-hover:scale-110"
              draggable="false"
            />
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-3 px-4 pt-2 pb-5 xl:w-1/2 bg-[#ffffff] dark:bg-darkGray max-xl:border-t-2 xl:border-l-2 border-darkerRed dark:border-lighterRed">
        <h3 className="text-darkerRed dark:text-lighterRed">Contact info</h3>
        <p className="text-sm">
          Feel free to contact or check me out on other platforms:
        </p>
        <hr className="w-full" />
        <ul className="flex flex-col xl:justify-evenly gap-5 h-3/5 w-full text-sm font-normal">
          <li
            className="group relative flex items-center gap-2 cursor-pointer"
            title="Click to copy!"
            onClick={() => handleCopy("dragicevic.a.stefan@gmail.com", "email")}
          >
            <img
              src={theme === "dark" ? darkEmailImg : lightEmailImg}
              alt="Email"
              className="w-10 h-10 p-1 rounded-full bg-white dark:bg-lighterGray group-hover:bg-darkerBlue dark:group-hover:bg-lighterBlue group-hover:scale-110 group-hover:-translate-y-[5%] ease duration-200"
              draggable="false"
            />
            <p>dragicevic.a.stefan@gmail.com</p>
            <span
              className={`absolute -bottom-5 left-1/2 -translate-x-1/2 px-1 text-sm text-darkerBlue dark:text-lighterBlue bg-white dark:bg-lighterGray rounded-sm ${
                notificationStates.email ? "block" : "hidden"
              }`}
            >
              Copied!
            </span>
          </li>
          <li
            className="group relative flex items-center gap-2 cursor-pointer"
            title="Click to copy!"
            onClick={() => handleCopy("+381 63 765 01 01", "phone")}
          >
            <img
              src={theme === "dark" ? darkPhoneImg : lightPhoneImg}
              alt="Phone"
              className="w-10 h-10 p-1 rounded-full bg-white dark:bg-lighterGray group-hover:bg-darkerBlue dark:group-hover:bg-lighterBlue group-hover:scale-110 group-hover:-translate-y-[5%] ease duration-200"
              draggable="false"
            />
            <p>+381 63 765 01 01</p>
            <span
              className={`absolute -bottom-5 left-1/2 -translate-x-1/2 px-1 text-sm text-darkerBlue dark:text-lighterBlue bg-white dark:bg-lighterGray rounded-sm ${
                notificationStates.phone ? "block" : "hidden"
              }`}
            >
              Copied!
            </span>
          </li>
          <li title="GitHub">
            <a
              href="https://github.com/DragicevicS"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <img
                src={theme === "dark" ? darkGitHubImg : lightGitHubImg}
                alt="GitHub"
                className="w-10 h-10 p-1 rounded-full bg-white dark:bg-lighterGray group-hover:bg-darkerBlue dark:group-hover:bg-lighterBlue group-hover:scale-110 group-hover:-translate-y-[5%] ease duration-200"
                draggable="false"
              />
              <p>GitHub</p>
              <img
                src={theme === "dark" ? darkLinkInNewImg : lightLinkInNewImg}
                alt="Link in new tab"
                className="w-3 h-3"
                draggable="false"
              />
            </a>
          </li>
          <li title="LinkedIn">
            <a
              href="https://www.linkedin.com/in/stefan-dragi%C4%87evi%C4%87-748a002a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <img
                src={theme === "dark" ? darkLinkedInImg : lightLinkedInImg}
                alt="LinkedIn"
                className="w-10 h-10 p-1 rounded-full bg-white dark:bg-lighterGray group-hover:bg-darkerBlue dark:group-hover:bg-lighterBlue group-hover:scale-110 group-hover:-translate-y-[5%] ease duration-200"
                draggable="false"
              />
              <p>LinkedIn</p>
              <img
                src={theme === "dark" ? darkLinkInNewImg : lightLinkInNewImg}
                alt="Link in new tab"
                className="w-3 h-3"
                draggable="false"
              />
            </a>
          </li>
          <li title="Instagram">
            <a
              href="https://instagram.com/stefan.dragicevic_?igshid=MmVlMjlkMTBhMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2"
            >
              <img
                src={theme === "dark" ? darkInstagramImg : lightInstagramImg}
                alt="Instagram"
                className="w-10 h-10 p-1 rounded-full bg-white dark:bg-lighterGray group-hover:bg-darkerBlue dark:group-hover:bg-lighterBlue group-hover:scale-110 group-hover:-translate-y-[5%] ease duration-200"
                draggable="false"
              />
              <p>Instagram</p>
              <img
                src={theme === "dark" ? darkLinkInNewImg : lightLinkInNewImg}
                alt="Link in new tab"
                className="w-3 h-3"
                draggable="false"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
