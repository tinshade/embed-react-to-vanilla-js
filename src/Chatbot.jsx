import { useState } from "react";
import "./App.css"; // Assuming app.css is in the same directory

const ChatbotComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <section
      className={`chatbot${
        isCollapsed ? "-collapsed" : ""
      } container-fluid col-sm-12 col-md-3 col-lg-3`}
    >
      <div
        className="chatbot-header"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span>Chatbot</span>
        <button onClick={() => setIsCollapsed(false)}>X</button>
      </div>
      <div className={`container-fluid p-0 m-0 ${isCollapsed ? "hidden" : ""}`}>
        <div className="chatbot-body">
          <div className="message incoming">
            <p className="message-text">Hey bot!</p>
          </div>
          <div className="message outgoing">
            <p className="message-text">Hi, user!</p>
          </div>
        </div>
        <div className="chat-input-container">
          <span id="chat-input-box" contentEditable autoFocus />
          <button>SEND</button>
        </div>
      </div>
    </section>
  );
};

export default ChatbotComponent;
