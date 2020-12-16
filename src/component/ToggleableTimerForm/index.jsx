import { useState } from "react";
import Button from "../Button";
import TimerForm from "../TimerForm";

const ToggleableTimerForm = (props) => {
  const [isEdit, setEdit] = useState(false);
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      class="bi bi-calendar-plus-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM8.5 8.5a.5.5 0 0 0-1 0V10H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V11H10a.5.5 0 0 0 0-1H8.5V8.5z"
      />
    </svg>
  );
  const handleClickButton = () => {
    setEdit(!isEdit);
  };

  const handleCreateTimer = (index, title, project) => {
    props.onCreate(title, project);
    setEdit(!isEdit);
  };

  if (isEdit)
    return (
      <TimerForm onCancel={handleClickButton} onSave={handleCreateTimer} />
    );

  return <Button title={icon} onClick={handleClickButton} />;
};

export default ToggleableTimerForm;