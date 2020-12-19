import TimerForm from "../TimerForm";
import Timer from "../Timer";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

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

  const transitions = useTransition(isEdit, null, {
    from: {
      opacity: 0,
    },
    enter: (item) => async (next, cancel) => {
      await next({ opacity: 1 });
    },
    leave: { opacity: 0, height: 0 },
  });

  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div style={props}>
        <TimerForm
          title={title}
          project={project}
          onCancel={handleEditClick}
          index={index}
          onSave={handleSaveClick}
        />
      </animated.div>
    ) : (
      <animated.div style={props}>
        <Timer
          title={title}
          project={project}
          eslapsed={eslapsed}
          isRunning={isRunning}
          onEdit={handleEditClick}
          onStart={handleStartClick}
          onRemove={handleRemoveTimer}
        />
      </animated.div>
    )
  );
  // if (isEdit)
  //   return (
  //     <TimerForm
  //       title={title}
  //       project={project}
  //       onCancel={handleEditClick}
  //       index={index}
  //       onSave={handleSaveClick}
  //     />
  //   );

  // return (
  //   <Timer
  //     title={title}
  //     project={project}
  //     eslapsed={eslapsed}
  //     isRunning={isRunning}
  //     onEdit={handleEditClick}
  //     onStart={handleStartClick}
  //     onRemove={handleRemoveTimer}
  //   />
  // );
};

export default EditableTimer;
