import Button from "../Button";
import { millisecondsToHuman } from "../../utils/TimerUtils";

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
  return (
    <div className="timer">
      <p className="title">{title}</p>
      <p className="project">{project}</p>
      <p className="timeEslapsed">{millisecondsToHuman(eslapsed)}</p>

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
