import Button from "../Button";
import { millisecondsToHuman } from "../../utils/TimerUtils";

const Timer = ({ key, title, project, eslapsed, onEdit, onStart }) => {
  return (
    <div className="timer">
      <p>{title}</p>
      <p>{project}</p>
      <p>{millisecondsToHuman(eslapsed)}</p>

      <div>
        <Button variant="warning" title="Edit" onClick={onEdit} />
        <Button variant="danger" title="Remove" />
        <Button title="Start" onClick={onStart} />
      </div>
    </div>
  );
};

export default Timer;
