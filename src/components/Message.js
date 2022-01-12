function Message({ type, letter, content }) {
  return (
    <li className={`message ${type}`}>
      <div className="icon">{letter}</div>
      <span className="content">{content}</span>
    </li>
  );
}

export default Message;
