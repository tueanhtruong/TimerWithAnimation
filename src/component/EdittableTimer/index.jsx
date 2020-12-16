import React, { useState } from "react";
import Timer from "../Timer";
import TimerForm from "../TimerForm";

const EdittableTimer = (title, project, eslapsed) => {
  const { isEdit, setEdit } = useState(false);

  const handleEditClick = () => {
    console.log("EDIT BUTTON");
    setEdit(!isEdit);
  };

  if (isEdit)
    return (
      <TimerForm title={title} project={project} onCancel={handleEditClick} />
    );
  return (
    <Timer
      title={title}
      project={project}
      eslapsed={eslapsed}
      onEdit={handleEditClick}
    />
  );
};
export default EdittableTimer;
