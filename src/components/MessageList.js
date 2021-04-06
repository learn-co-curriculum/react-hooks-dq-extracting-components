import MessageForm from "./MessageForm";
import MessageItem from "./MessageItem";

function MessageList(props) {
  const messageItems = props.messages.map((message) => {
    return (
      <MessageItem
        key={message.id}
        name={message.name}
        type={message.type}
        content={message.content}
      />
    );
  });
  return (
    <main>
      <h2>Messages</h2>
      <section className="messages">
        <ul>{messageItems}</ul>
      </section>
      <MessageForm />
    </main>
  );
}

export default MessageList;
