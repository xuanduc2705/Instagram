import React from "react";
import "../../layout/nav/nav.css";
import "./message.css";
import { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import "./socket.css";
import { MdOutlineGroupAdd } from "react-icons/md";
import {
  createBoxchat,
  evictMessage,
  getListAccount,
  getListBoxchat,
  getListBoxchatMess,
  getListMessage,
} from "../../lib/axios";
import ModalAdd from "./modaladd";
import { ListNick } from "./listnick";
import { Boxchat } from "./boxchat";
import ModalGroup from "./modalgroup";
const host = "http://localhost:8000";
function Message() {
  const [select, setSelect] = useState();
  const [choosing, setChoosing] = useState();
  const [mess, setMess] = useState([]);
  const [check, setCheck] = useState();
  const [IsSend, SetIsSend] = useState(true);
  const [messchose, setMesschose] = useState([]);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(localStorage.getItem("nickname"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const socketRef = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getListBoxchat();
      if (response) setMesschose(response);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const ress = messchose.filter((item) => item.id == choosing);
    if (ress.length > 0) {
      setMess(ress);
    }
  }, [messchose, choosing]);
  const [account, setAccount] = useState([]);
  const [accountt, setAccountt] = useState([]);
  const [messacount, setMessAccount] = useState([]);
  const [messgroup, setMessGroup] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getListAccount();
      if (response) {
        const filteredResponse = response.filter(
          (item) => item.nickname !== id
        );
        setAccount(filteredResponse);
        setAccountt(filteredResponse);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getListAccount();
      const response2 = await getListBoxchat();

      if (response) {
        const nicknames = response.filter((item) => item);
        const member1 = response2.map((item) => item);
        const member2 = response2.map((item) => item);
        const mem1 = member1.filter(
          (item) => item?.member?.includes(id) && item.isGroupchat === false
        );
        const mem2 = member2.filter(
          (item) => item.host == id && item.isGroupchat === false
        );
        const group = response2.filter(
          (item) =>
            (item.host == id || item?.member?.includes(id)) &&
            item.isGroupchat == true
        );
        const mergedMembers = [...mem1, ...mem2, ...group];
        setMessAccount(mergedMembers);
        setMessGroup(group);
      }
    };
    fetchData();
  }, []);
  const [hello, setHello] = useState([]);
  const handleChoose = async (item, ava, fa) => {
    let res = await getListBoxchatMess(item);
    setCheck(res);
    setSelect(fa);
    setChoosing(item);
    setHello([]);
  };
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (data) => {
      setId(data);
    });
    socketRef.current.on("sendDataServer", (dataGot) => {
      setHello((oldMsgs) => [...oldMsgs, dataGot.data]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  const [selectuser, setSelectuser] = useState("");
  const sendMessage = async () => {
    if (message !== null && message.trim() !== "") {
      let render = await getListMessage();
      let lastObject = render[render.length - 1];
      let mid = lastObject.id + 1;
      const msg = {
        isGroupchat: select,
        boxchatid: choosing,
        content: message,
        id: id,
        messageid: mid,
        avatar: avatar,
      };
      socketRef.current.emit("sendDataClient", msg);
      setMessage("");
    }
  };
  const [ava1, setAva1] = useState("");
  useEffect(() => {
    setAva1(localStorage.getItem("avatar"));
  }, []);
  const [ava2, setAva2] = useState("");
  const handleAdd = async () => {
    try {
      const host = id;
      const partner = selectuser;
      const isg = false;
      const avatar1 = ava1;
      const avatar2 = ava2;
      const groupname = "";
      const response = await createBoxchat(
        host,
        partner,
        isg,
        avatar1,
        avatar2,
        groupname
      );
      setShow(false);
      console.log("Boxchat added successfully:", response);
    } catch (error) {
      console.error("Failed to add boxchat:", error);
    }
    setSelectuser("");
    window.location.reload();
  };
  const renderMess = mess.map((m, index) => (
    <div key={index} className={`${"other-people"} chat-item`}>
      {m.content}
    </div>
  ));

  const handleChange = (e) => {
    setMessage(e.target.value);
    const inputValue = e.target.value;
    SetIsSend(inputValue.length <= 0);
  };
  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      sendMessage();
    }
  };
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const [useradd, setUseradd] = useState({});
  const handleShowAdd = (item) => {
    setShow(true);
    setUseradd(item);
    setSelectuser(item.nickname);
    setAva2(item.avatar);
  };
  const [showAddGroup, setShowAddGroup] = useState(false);
  const handleGroupClose = () => {
    setShowAddGroup(false);
  };
  const handleShowAddGroup = () => {
    setShowAddGroup(true);
  };
  const [listadd, setListadd] = useState([]);
  const [listaddmem, setListaddmem] = useState([]);
  const handleRemove = (item) => {
    setListadd((prevListadd) =>
      prevListadd.filter((listItem) => listItem !== item)
    );
    setListaddmem((prevListadd) =>
      prevListadd.filter((listItem) => listItem !== item.nickname)
    );
  };
  useEffect(() => {
    console.log("Updated listadd:", listadd);
    console.log("Updated listadd:", listaddmem);
  }, [listadd, listaddmem]);
  const [idchosen, setIdChosen] = useState();
  const handleEvict = async () => {
    await evictMessage(idchosen);
  };
  const [querygroup, setQuerygroup] = useState("");
  const isResult = query !== "" && inputRef.current?.value !== "";
  return (
    <div className="message" style={{}}>
      <div className="messbenphai">
        <div className="danhsachchat">
          <div className="daudanhsach">
            <input
              className="searchinput"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              ref={inputRef}
            />
            <MdOutlineGroupAdd
              className="noteicon"
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={handleShowAddGroup}
            />
          </div>
          <div className="giuadanhsach anten">
            <span className="mesmid">Messages</span>
            <span className="reques">Requests</span>
          </div>
          <div className="danhsachnick">
            <ListNick
              isResult={isResult}
              account={account}
              handleChoose={handleChoose}
              handleShowAdd={handleShowAdd}
              messacount={messacount}
              messgroup={messgroup}
              query={query}
              ava1={ava1}
              id={id}
            />
          </div>
        </div>
      </div>
      <Boxchat
        choosing={choosing}
        mess={mess}
        check={check}
        hello={hello}
        ava1={ava1}
        id={id}
        sendMessage={sendMessage}
        onEnterPress={onEnterPress}
        handleChange={handleChange}
        IsSend={IsSend}
        message={message}
        setIdChosen={setIdChosen}
        handleEvict={handleEvict}
        setCheck={setCheck}
        setHello={setHello}
      />
      <ModalAdd
        name={useradd}
        show={show}
        onClick={handleClose}
        onClick2={handleAdd}
      />
      <ModalGroup
        showAddGroup={showAddGroup}
        handleGroupClose={handleGroupClose}
        setQuerygroup={setQuerygroup}
        inputRef={inputRef}
        accountt={accountt}
        listadd={listadd}
        handleRemove={handleRemove}
        setListadd={setListadd}
        setListaddmem={setListaddmem}
        setAccountt={setAccountt}
        listaddmem={listaddmem}
        querygroup={querygroup}
        id={id}
        setShow={setShow}
        setSelectuser={setSelectuser}
      />
    </div>
  );
}

export default Message;
