import TimerForm from "../TimerForm";
import Timer from "../Timer";
import { useState } from "react";

const EditableTimer = ({
  index,
  title,
  project,
  eslapsed,
  isRunning,
  onStart,
  onSave,
  onRemove,
}) => {
  const [isEdit, setEdit] = useState(false);
  const handleEditClick = () => {
    setEdit(!isEdit);
  };
  const handleStartClick = () => {
    onStart(index);
  };
  const handleSaveClick = (index, title, project) => {
    onSave(index, title, project);
    setEdit(!isEdit);
  };
  const handleRemoveTimer = () => {
    onRemove(index);
  };
  if (isEdit)
    return (
      <TimerForm
        title={title}
        project={project}
        onCancel={handleEditClick}
        index={index}
        onSave={handleSaveClick}
      />
    );

  return (
    <Timer
      title={title}
      project={project}
      eslapsed={eslapsed}
      isRunning={isRunning}
      onEdit={handleEditClick}
      onStart={handleStartClick}
      onRemove={handleRemoveTimer}
    />
  );
};

export default EditableTimer;
