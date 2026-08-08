import { useState } from "react";
import "./Chatbot.css";
import {
  Bot,
  X,
  SendHorizontal,
  Sparkles
} from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}

      <button
        className="chat-floating-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Bot size={28} />}
      </button>

      {/* Chat Window */}

      <div className={`chat-window ${open ? "show" : ""}`}>

        {/* Header */}

        <div className="chat-header">

          <div className="chat-title">

            <div className="bot-circle">
              <Sparkles size={18} />
            </div>

            <div>
              <h3>MAGELLAN AI</h3>
              <p>Always Online</p>
            </div>

          </div>

        </div>

        {/* Chat Body */}

        <div className="chat-body">

          <div className="bot-message">
            👋 Hello!
            <br />
            I'm your AI career assistant.
            <br />
            Ask me anything.
          </div>

          <div className="typing">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        {/* Footer */}

        <div className="chat-footer">

          <input
            type="text"
            placeholder="Ask anything..."
          />

          <button>
            <SendHorizontal size={20}/>
          </button>

        </div>

      </div>
    </>
  );
};

export default Chatbot;