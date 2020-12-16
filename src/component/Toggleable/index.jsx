import React from "react";
import { useState } from "react";
import Button from "../Button";
import TimerForm from "../TimerForm";

const Toggleable = (props) => {
  const { isEdit, setIsEdit } = useState(false);

  const handleClickButton = () => {
    console.log("handle click");
    setIsEdit(!isEdit);
  };
  //const isEdit = false;

  if (isEdit) return <TimerForm onCancel={handleClickButton} />;
  return <Button title="+" onClick={handleClickButton} />;
};
export default Toggleable;
