import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import "./socket.css";
const host = "http://localhost:8000";

function Socket() {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(sessionStorage.getItem("nickname"));
  const socketRef = useRef();
  const messagesEnd = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (data) => {
      setId(data);
    });

    socketRef.current.on("sendDataServer", (dataGot) => {
      setMess((oldMsgs) => [...oldMsgs, dataGot.data]);
      scrollToBottom();
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message !== null) {
      const msg = {
        content: message,
        id: id,
      };
      socketRef.current.emit("sendDataClient", msg);
      setMessage("");
    }
  };

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderMess = mess.map((m, index) => (
    <div key={index} className={`${"other-people"} chat-item`}>
      {m.content}
    </div>
  ));

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      sendMessage();
    }
  };
  return (
    <div class="box-chat">
      <div class="box-chat_message">
        {mess.map((m, index) => (
          <>
            {m.id === id ? (
              <>
                <div key={index}>
                  <span className={`${"your-message"} chat-item`}>
                    {m.content}
                  </span>
                  <h1>Me</h1>
                </div>
              </>
            ) : (
              <>
                <div key={index}>
                  <span className={`${"other-people"} chat-item`}>
                    {m.content}
                  </span>
                  <h1>{m.id}</h1>
                </div>
              </>
            )}
          </>
        ))}
        <div ref={messagesEnd}></div>
      </div>

      <div class="send-box">
        <textarea
          value={message}
          onKeyDown={onEnterPress}
          onChange={handleChange}
          placeholder="Nhập tin nhắn ..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Socket;
