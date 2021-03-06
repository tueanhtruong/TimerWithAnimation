import React, { useState } from "react";
import Button from "../Button";

const TimerForm = ({ index, title, project, onCancel, onSave }) => {
  const [Title, setTitle] = useState(title || "");
  const [Project, setProject] = useState(project || "");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeProject = (e) => {
    setProject(e.target.value);
  };

  //console.log(onSave);

  const handleSaveClick = () => {
    onSave(index, Title, Project);
  };
  return (
    <div className="timer">
      <label htmlFor="title">title</label>
      <input
        type="text"
        value={Title}
        onChange={handleChangeTitle}
        id="title"
      />
      <label htmlFor="project">project</label>
      <input
        type="text"
        value={Project}
        onChange={handleChangeProject}
        id="project"
      />

      <div>
        <Button title="CANCEL" variant="danger" onClick={onCancel} />
        <Button title="SAVE" onClick={handleSaveClick} />
      </div>
    </div>
  );
};
export default TimerForm;
