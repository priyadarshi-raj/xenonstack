const MessageBox = ({ content, position, time, type }) => {
  return (
    <div className={`chat ${position === "end" ? "chat-end" : "chat-start"}`}>
      <div
        className={`chat-bubble w-1/3 flex flex-col ${
          position === "end"
            ? "bg-blue-500 text-white"
            : " bg-slate-400 text-white"
        } `}
        style={{
          wordWrap: "break-word", // Allow long words to wrap
          overflowWrap: "break-word", // Control how unbreakable words are handled
        }}
      >
        <p className={`text-md text-white`}>
          {type === "link" ? (
            <a className="hover:underline" target="_blank" href={content}>
              {content}
            </a>
          ) : (
            content
          )}
        </p>
        <p className="text-[0.5rem]">{time}</p>
      </div>
    </div>
  );
};

export default MessageBox;
