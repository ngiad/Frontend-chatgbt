import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Requestbase from "../../utils/axios";
import "./chat.css";

const Chat = () => {
  const User = useSelector((state) => state.User);
  const Navigate = useNavigate();
  const [ask, setAsk] = useState({
    name: "",
    prompt: "",
  });
  const [listChat, setListChat] = useState([]);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    if (loading) return;
    setAsk({
      name: User.name,
      prompt: e.target.value,
    });
  };

  const handleAskChatbot = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const meChat = { ...ask, prompt: [ask.prompt] };
    setListChat((prev) => (prev = [...prev, meChat]));

    try {
      if (!ask.prompt) return;
      const res = await Requestbase.post("chat", ask);
      const data = await res.data;

      data.prompt = data.prompt.split("\n");
      delete data.success;

      setListChat((prev) => (prev = [...prev, data]));
      setAsk({
        name: "",
        prompt: "",
      });
    } catch (error) {
      Navigate("/error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="chat-bot">
          <div className="avatar">
            <p className="logo">DN</p>
          </div>
          <div className="message">
            <p>Tôi có thể giúp gì cho bạn ?</p>
          </div>
        </div>
        {listChat.length
          ? listChat.map((item, index) => {
              if (item.name === User.name) {
                return (
                  <div key={index} className="me">
                    <div className="avatar">
                      <p className="logo">{User.name.slice(0, 2)}</p>
                    </div>
                    <div className="message">
                      {item.prompt?.map((mes, i) => {
                        return <p key={i}>{mes}</p>;
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="chat-bot">
                    <div className="avatar">
                      <p className="logo">DN</p>
                    </div>
                    <div className="message">
                      {item.prompt?.map((mes, i) => {
                        return <p key={i}>{mes}</p>;
                      })}
                    </div>
                  </div>
                );
              }
            })
          : ""}

        {loading ? <h2>loading ...</h2> : ""}
      </div>
      <div className="bottom">
        <form onSubmit={handleAskChatbot}>
          <label htmlFor="">Chat here</label>
          <input
            className="input"
            type="text"
            name="ask"
            value={ask.prompt}
            onChange={handleChange}
          />
          <button>Enter</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
