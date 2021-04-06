import React from "react";
import ContactList from "./ContactList";
import MessageList from "./MessageList";
import { contacts, messages } from "../data";

function App() {
  return (
    <div className="app">
      <ContactList contacts={contacts} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
