import { Avatar } from "@mui/material";

export const ListNick = ({
  isResult,
  account,
  handleChoose,
  handleShowAdd,
  messacount,
  messgroup,
  query,
  ava1,
  id,
}) => {
  return (
    <>
      <div className="nick" style={{ position: "relative" }}>
        {isResult ? (
          <ul
            className="listt"
            style={{
              position: "absolute",
              top: "0",
              backgroundColor: "white",
              width: "97%",
              padding: "10px",
            }}
          >
            {account
              .filter((asd) => asd.nickname.toLowerCase().includes(query))
              .map((item) => (
                <div
                  className="listItem"
                  style={{ width: "100%" }}
                  onClick={() => handleShowAdd(item)}
                >
                  <Avatar>
                    <img src={item.avatar} alt={item.name} className="heo" />
                  </Avatar>
                  <div className="namesearch">
                    <span className="tensearch">{item.nickname}</span>
                    <span className="fullnamesearch">{item.name}</span>
                  </div>
                </div>
              ))}
          </ul>
        ) : (
          <ul
            className="listt"
            style={{
              position: "absolute",
              top: "0",
              backgroundColor: "white",
              width: "97%",
              padding: "10px",
            }}
          >
            {messacount.map((item) => (
              <>
                {item.isGroupchat ? (
                  <div
                    className="listItem"
                    style={{ width: "100%" }}
                    onClick={() => handleChoose(item.id, item.groupava, false)}
                  >
                    <>
                      <Avatar>
                        <img
                          src={item.groupava}
                          alt={item.host}
                          className="heo"
                        />
                      </Avatar>
                      <div className="namesearch">
                        <span className="tensearch">{item.groupname}</span>
                        <span className="fullnamesearch">{item.groupname}</span>
                      </div>
                    </>
                  </div>
                ) : (
                  <div
                    className="listItem"
                    style={{ width: "100%" }}
                    onClick={() => handleChoose(item.id, item.avatar2, false)}
                  >
                    {item.avatar1 === ava1 ? (
                      <>
                        <Avatar>
                          <img
                            src={item.avatar2}
                            alt={item.host}
                            className="heo"
                          />
                        </Avatar>
                        <div className="namesearch">
                          <span className="tensearch">{item.member}</span>
                          <span className="fullnamesearch">{item.member}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <Avatar>
                          <img
                            src={item.avatar1}
                            alt={item.host}
                            className="heo"
                          />
                        </Avatar>
                        <div className="namesearch">
                          <span className="tensearch">{item.host}</span>
                          <span className="fullnamesearch">{item.host}</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </>
            ))}
            {/* {messgroup.map((item) => (
              <>
                {item.member.includes(id) && (
                  <div
                    className="listItem"
                    style={{ width: "100%" }}
                    onClick={() =>
                      handleChoose(item.boxchatid, item.groupava, true)
                    }
                  >
                    <Avatar>
                      <img src={item.groupava} className="heo" />
                    </Avatar>
                    <div className="namesearch">
                      <span className="tensearch">{item.groupname}</span>
                      <span className="fullnamesearch">
                        {item.member.length > 2
                          ? item.member.slice(0, 2) + "..."
                          : item.member}
                      </span>
                    </div>
                  </div>
                )}
              </>
            ))} */}
          </ul>
        )}
      </div>
    </>
  );
};
