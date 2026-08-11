import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Chatbot.css";

import {
  Bot,
  X,
  SendHorizontal,
} from "lucide-react";


const Chatbot = () => {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  // Used to automatically scroll to the latest message
  const chatBodyRef = useRef(null);


  // =====================================================
  // SUGGESTED QUESTIONS
  // =====================================================

  const getSuggestedQuestions = () => {

    if (messages.length === 0) {

      return [
        "What careers might suit me?",
        "What skills should I develop?",
        "What should I study next?",
        "How can I explore different careers?",
      ];

    }


    const lastUserMessage = [...messages]
      .reverse()
      .find(
        (message) =>
          message.role === "user"
      );


    if (!lastUserMessage) {

      return [
        "What careers might suit me?",
        "What skills should I develop?",
        "How can I explore different careers?",
      ];

    }


    const question =
      lastUserMessage.message.toLowerCase();


    if (
      question.includes("career") ||
      question.includes("job")
    ) {

      return [
        "What skills are useful for this career?",
        "What does the career path look like?",
        "What are the advantages and challenges?",
        "What related careers should I explore?",
      ];

    }


    if (
      question.includes("skill") ||
      question.includes("python") ||
      question.includes("coding") ||
      question.includes("programming")
    ) {

      return [
        "Which skill should I learn first?",
        "How can I improve my programming skills?",
        "What projects should I build?",
        "How can I practise these skills?",
      ];

    }


    if (
      question.includes("study") ||
      question.includes("college") ||
      question.includes("school")
    ) {

      return [
        "What should I focus on academically?",
        "Which subjects should I strengthen?",
        "What skills should I develop alongside my studies?",
        "How can I prepare for my future career?",
      ];

    }


    if (
      question.includes("scholarship") ||
      question.includes("competition") ||
      question.includes("olympiad") ||
      question.includes("internship")
    ) {

      return [
        "What opportunities should I look for?",
        "How can I improve my profile?",
        "What should I prepare before applying?",
        "How can these opportunities help my career?",
      ];

    }


    return [
      "What career options should I explore?",
      "What skills should I develop?",
      "How can I improve my profile?",
      "What should I focus on next?",
    ];

  };


  // =====================================================
  // SCROLL TO LATEST MESSAGE
  // =====================================================

  const scrollToBottom = () => {

    if (!chatBodyRef.current) {
      return;
    }

    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });

  };


  // =====================================================
  // LOAD CHAT HISTORY
  // =====================================================

  const loadChatHistory = async () => {

    const token =
      localStorage.getItem(
        "access_token"
      );


    if (!token) {
      return;
    }


    try {

      const response = await fetch(
        "http://127.0.0.1:8000/chat/history",
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );


      if (!response.ok) {

        console.error(
          "Could not load chat history."
        );

        return;
      }


      const data = await response.json();


      if (data.messages) {

        setMessages(data.messages);

      }

    } catch (error) {

      console.error(
        "Could not connect to chat history:",
        error
      );

    }

  };


  // =====================================================
  // OPEN CHAT
  // =====================================================

  useEffect(() => {

    if (open) {

      loadChatHistory();

    }

  }, [open]);


  // =====================================================
  // ALWAYS SCROLL TO LATEST MESSAGE
  // =====================================================

  useEffect(() => {

    if (open) {

      // Small delay allows the messages to render first
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 100);

      return () => clearTimeout(timer);

    }

  }, [
    messages,
    loading,
    open,
  ]);


  // =====================================================
  // SEND MESSAGE
  // =====================================================

  const sendMessage = async (messageText) => {

    const message =
      messageText.trim();


    if (!message || loading) {
      return;
    }


    const token =
      localStorage.getItem(
        "access_token"
      );


    if (!token) {

      console.error(
        "No access token found."
      );

      return;
    }


    // Add user message immediately

    const userMessage = {
      role: "user",
      message: message,
    };


    setMessages(
      (previousMessages) => [
        ...previousMessages,
        userMessage,
      ]
    );


    setInput("");

    setLoading(true);


    try {

      const response = await fetch(
        "http://127.0.0.1:8000/chat/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify({
            message: message,
          }),
        }
      );


      const data =
        await response.json();


      if (!response.ok) {

        const errorMessage = {
          role: "assistant",
          message:
            data.detail ||
            "Sorry, I could not generate a response.",
        };


        setMessages(
          (previousMessages) => [
            ...previousMessages,
            errorMessage,
          ]
        );

        return;
      }


      // Add AI response

      const assistantMessage = {
        role: "assistant",
        message: data.response,
      };


      setMessages(
        (previousMessages) => [
          ...previousMessages,
          assistantMessage,
        ]
      );

    } catch (error) {

      console.error(
        "Chat request failed:",
        error
      );


      const errorMessage = {
        role: "assistant",
        message:
          "Magellan AI is temporarily unavailable. Please try again in a moment.",
      };


      setMessages(
        (previousMessages) => [
          ...previousMessages,
          errorMessage,
        ]
      );

    } finally {

      setLoading(false);

    }

  };


  // =====================================================
  // INPUT
  // =====================================================

  const handleInputChange = (event) => {

    setInput(event.target.value);

  };


  // =====================================================
  // SEND BUTTON
  // =====================================================

  const handleSend = () => {

    sendMessage(input);

  };


  // =====================================================
  // ENTER KEY
  // =====================================================

  const handleKeyDown = (event) => {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      handleSend();

    }

  };


  // =====================================================
  // SUGGESTED QUESTION
  // =====================================================

  const handleSuggestedQuestion = (
    question
  ) => {

    sendMessage(question);

  };


  const suggestedQuestions =
    getSuggestedQuestions();


  // =====================================================
  // JSX
  // =====================================================

  return (
    <>

      {/* =================================================
          FLOATING BUTTON
          ================================================= */}

      <button
        className="chat-floating-btn"
        onClick={() =>
          setOpen(!open)
        }
        aria-label={
          open
            ? "Close Magellan AI"
            : "Open Magellan AI"
        }
      >

        {open ? (
          <X size={28} />
        ) : (
          <Bot size={28} />
        )}

      </button>


      {/* =================================================
          CHAT WINDOW
          ================================================= */}

      <div
        className={`chat-window ${
          open ? "show" : ""
        }`}
      >

        {/* =================================================
            HEADER
            ================================================= */}

        <div className="chat-header">

          <div className="chat-title">

            <div className="bot-circle">

              <Bot size={24} />

            </div>


            <div>

              <h3>
                MAGELLAN AI
              </h3>

              <p>
                Always Online
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            CHAT BODY
            ================================================= */}

        <div
          className="chat-body"
          ref={chatBodyRef}
        >

          {/* =================================================
              MESSAGES
              ================================================= */}

          {messages.map(
            (message, index) => (

              <div
                key={index}
                className={
                  message.role === "user"
                    ? "user-message"
                    : "bot-message"
                }
              >

                {message.role ===
                "assistant" ? (

                  <ReactMarkdown>
                    {message.message}
                  </ReactMarkdown>

                ) : (

                  message.message

                )}

              </div>

            )
          )}


          {/* =================================================
              LOADING
              ================================================= */}

          {loading && (

            <div className="typing">

              <span></span>
              <span></span>
              <span></span>

            </div>

          )}


          {/* =================================================
              SUGGESTED QUESTIONS
              ================================================= */}

          {!loading && (

            <div className="suggested-questions">

              <p>
                You can ask me
              </p>


              {suggestedQuestions.map(
                (
                  question,
                  index
                ) => (

                  <button
                    key={index}
                    className="suggested-question"
                    onClick={() =>
                      handleSuggestedQuestion(
                        question
                      )
                    }
                  >

                    {question}

                  </button>

                )
              )}

            </div>

          )}

        </div>


        {/* =================================================
            FOOTER
            ================================================= */}

        <div className="chat-footer">

          <input
            type="text"
            value={input}
            onChange={
              handleInputChange
            }
            onKeyDown={
              handleKeyDown
            }
            placeholder="Ask anything..."
            disabled={loading}
          />


          <button
            onClick={handleSend}
            disabled={
              loading ||
              !input.trim()
            }
            aria-label="Send message"
          >

            <SendHorizontal size={20} />

          </button>

        </div>

      </div>

    </>
  );
};


export default Chatbot;