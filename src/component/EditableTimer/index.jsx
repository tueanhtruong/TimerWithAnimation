import TimerForm from "../TimerForm";
import Timer from "../Timer";
import { useState } from "react";

const EditableTimer = ({
  index,
  title,
  project,
  eslapsed,
  onStart,
  onSave,
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
      onEdit={handleEditClick}
      onStart={handleStartClick}
    />
  );
};

export default EditableTimer;
