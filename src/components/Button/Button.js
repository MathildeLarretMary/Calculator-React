import './Button.css';

export default function Button({actionClick, className, value}) {
  //state

  //comportement

  //render
  return (
    <button
     className={"Button " + className}
     onClick = {actionClick}
     >
        {value}
    </button>
  );
}
