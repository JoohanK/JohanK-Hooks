import { useToggle } from "../hooks/useToggle";

type ToggleProps = {
  defaultValue: boolean;
};

const Toggle = ({ defaultValue }: ToggleProps) => {
  const { on, toggle, toggleOff, toggleOn } = useToggle(defaultValue);
  return (
    <>
      <h2>Toggle</h2>
      <button onClick={() => toggle()} className={on ? "on" : "off"}>
        Toggle
      </button>
      <button onClick={() => toggleOn()}>On</button>
      <button onClick={() => toggleOff()}>Off</button>
      <div className="toggle-box">{on ? "On" : "Off"}</div>
    </>
  );
};

export default Toggle;
