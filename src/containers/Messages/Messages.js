import React from "react";
import { useSelector } from "react-redux";

import { getMessages } from "modules/Messages/selectors";
import Chat from "components/Chat";

const Messages = () => {
  const messages = useSelector(getMessages);

  return <Chat messages={messages} />;
};

export default Messages;
