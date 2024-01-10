import { useState } from "react";
import MessageBox from "./MessageBox";

const ChatButton = () => {
  const [messages, setMessages] = useState([
    {
      content: "Hellp boig",
      position: "end",
      time: "12345367",
    },
    {
      content: "Hellp boig",
      position: "end",
      time: "12345367",
    },
    {
      content: "Hellp boig",
      position: "start",
      time: "12345367",
    },
    {
      content: "Hellp boig",
      position: "end",
      time: "12345367",
    },
    {
      content: "Hellp boig",
      position: "start",
      time: "12345367",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const handleNewMessageSend = (e) => {
    e.preventDefault();
    setMessages((prev) => {
      const time = 1233;
      const content = newMessage;
      const position = "end";
      setNewMessage("");
      return [...messages, { time, content, position }];
    });
  };
  const handleVideoButtonClick = () => {
    var container = document.querySelector("#jitsi-container");
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var stringLength = 30;

    function pickRandom() {
      return possible[Math.floor(Math.random() * possible.length)];
    }

    var randomString = Array.apply(null, Array(stringLength))
      .map(pickRandom)
      .join("");

    var domain = "meet.jit.si";
    var options = {
      roomName: randomString,
      parentNode: container,
      width: 600,
      height: 600,
    };
    const api = new JitsiMeetExternalAPI(domain, options);
    setMessages((prev) => {
      return [
        ...prev,
        { position: "end", time: 123, content: api._url, type: "link" },
      ];
    });
  };
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-5"
            className="drawer-button btn btn-primary"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-2/3 md:w-1/2 min-h-full bg-white text-black gap-5">
            <div className="p-5 text-xl font-medium flex justify-between items-center">
              <h1>Lavesh Bharadwaj</h1>
              <button
                onClick={() => handleVideoButtonClick()}
                type="button"
                className="btn bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </button>
            </div>
            <div className="border border-black rounded-md h-[70vh] bg-slate-800 py-5 overflow-y-auto w-full">
              {messages &&
                messages.map((message, index) => {
                  return (
                    <MessageBox
                      content={message.content}
                      position={message.position}
                      key={index}
                      time={message.time}
                      type={message.type}
                    />
                  );
                })}
            </div>
            <form className="border border-black rounded-md flex w-full items-center px-2 justify-between py-2">
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-[90%] focus:outline-none p-2"
                type="text"
              />
              <button
                onClick={(e) => handleNewMessageSend(e)}
                className="w-[8%] flex justify-center hover:bg-slate-200 py-2 rounded-lg active:translate-y-1 transition"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div id="jitsi-container"></div>
      </div>
    </>
  );
};

export default ChatButton;
