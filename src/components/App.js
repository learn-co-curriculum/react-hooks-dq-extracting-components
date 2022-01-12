import React from "react";
import { messages, contacts } from "../data";
import Contact from "./Contact";
import Message from "./Message";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <ContactList contacts={contacts} />
      <main>
        <MessageList messages={messages} />
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}

function ContactList({ contacts }) {
  return (
    <nav>
      <h2>Contacts</h2>
      <ul className="contacts">
        {contacts.map((contact) => {
          return <Contact name={contact.name} />;
        })}
      </ul>
    </nav>
  );
}

function MessageList({ messages }) {
  return (
    <>
      <h2>Messages</h2>,
      <section className="messages">
        <ul>
          {messages.map((message) => {
            return (
              <Message
                key={message.id}
                letter={message.name[0]}
                content={message.content}
                type={message.type}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default App;
