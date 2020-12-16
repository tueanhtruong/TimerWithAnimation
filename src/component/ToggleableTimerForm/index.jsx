import { useState } from 'react';
import Button from '../Button';
import TimerForm from '../TimerForm';

const ToggleableTimerForm = (props) => {
  const [isEdit, setEdit] = useState(false);

  const handleClickButton = () => {
    setEdit(!isEdit);
  };

  if (isEdit) return <TimerForm onCancel={handleClickButton} />;

  return <Button title='+' onClick={handleClickButton} />;
};

export default ToggleableTimerForm;
