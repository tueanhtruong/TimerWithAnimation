import Button from "../Button";
import "./style.css";
import { millisecondsToHuman } from "../../utils/TimerUtils";
import { useTransition, animated } from "react-spring";

const Timer = ({
  key,
  title,
  project,
  eslapsed,
  isRunning,
  onEdit,
  onStart,
  onRemove,
}) => {
  const timeElement = millisecondsToHuman(eslapsed).split(":");
  const second = timeElement[2].split("");
  const transitions1 = useTransition(second[1], null, {
    from: {
      transform: "translate3d(0,-20px,0)",
      opacity: 0,
      position: "absolute",
      right: 66,
    },
    enter: (item) => async (next, cancel) => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      await next({
        transform: "translate3d(0,0px,0)",
        opacity: 1,
      });
    },
    leave: { transform: "translate3d(0,20px,0)", opacity: 0 },
  });
  const transitions0 = useTransition(second[0], null, {
    from: {
      transform: "translate3d(0,-20px,0)",
      opacity: 0,
      position: "absolute",
      right: 88,
    },
    enter: (item) => async (next, cancel) => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      await next({
        transform: "translate3d(0,0px,0)",
        opacity: 1,
      });
    },
    leave: { transform: "translate3d(0,20px,0)", opacity: 0 },
  });
  return (
    <div className="timer">
      <p className="title">{title}</p>
      <p className="project">{project}</p>
      <div className="timeEslapsed">
        {timeElement[0].split("").map((n) => (
          <span className="hourElement">{n}</span>
        ))}
        <span>:</span>
        {timeElement[1].split("").map((n) => (
          <span className="minuteElement">{n}</span>
        ))}
        <span>:</span>
        {transitions0.map(({ item, key, props }) => (
          <animated.span style={props}>{item}</animated.span>
        ))}
        {transitions1.map(({ item, key, props }) => (
          <animated.span style={props}>{item}</animated.span>
        ))}
      </div>
      <div className="buttonContainer">
        <Button variant="warning" title="EDIT" onClick={onEdit} />
        <Button variant="danger" title="REMOVE" onClick={onRemove} />
        <Button
          title={isRunning ? "STOP" : "START"}
          variant={isRunning ? "stopping" : "primary"}
          onClick={onStart}
          id="SS"
        />
      </div>
    </div>
  );
};

export default Timer;
