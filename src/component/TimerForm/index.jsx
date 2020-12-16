import React, { useState } from "react";
import Button from "../Button";

const TimerForm = ({ index, title, project, onCancel, onSave }) => {
  const [Title, setTitle] = useState(title);
  const [Project, setProject] = useState(project);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeProject = (e) => {
    setProject(e.target.value);
  };

  const handleSaveClick = () => {
    onSave(index, Title, Project);
  };
  return (
    <div className="timer">
      <label htmlFor="">Title</label>
      <input type="text" value={Title} onChange={handleChangeTitle} />
      <label htmlFor="">Project</label>
      <input type="text" value={Project} onChange={handleChangeProject} />

      <div>
        <Button title="Cancel" variant="danger" onClick={onCancel} />
        <Button title="Save" onClick={handleSaveClick} />
      </div>
    </div>
  );
};
export default TimerForm;
