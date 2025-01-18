import "./Button.style.css";

export function Button({ text, style, eventHandler}) {


  return (
    <button onClick={(event) => {
        eventHandler(event, text);
    }}
     className={`btn ${style}`}>
      {text}
    </button>
  );
}
