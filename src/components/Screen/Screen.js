import './Screen.css';

export default function Screen({ changeScreen, text}) {
  //state

  //comportement

  //render
  return (
    <div
      onChange={changeScreen}
      className="Screen">
      {text}
    </div>
  );
}
