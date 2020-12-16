import { useEffect, useState } from "react";
import "./App.css";
import EditableTimer from "./component/EditableTimer";
import ToggleableTimerForm from "./component/ToggleableTimerForm";
const App = (props) => {
  const [timers, setTimers] = useState([
    {
      title: "Learn A",
      project: "Internship",
      eslapsed: 123000,
      isRunning: true,
    },
    {
      title: "Learn B",
      project: "Internship",
      eslapsed: 180000,
      isRunning: false,
    },
  ]);

  useEffect(() => {
    const timerRun = setTimeout(() => {
      const updateTimers = timers.map((timer) => {
        if (timer.isRunning)
          return {
            ...timer,
            eslapsed: timer.eslapsed + 1000,
          };
        return timer;
      });
      setTimers(updateTimers);
    }, 1000);

    return () => clearTimeout(timerRun);
  }, [timers]);

  const handleStartClick = (key) => {
    const updatestart = timers.map((timer, index) => {
      return index !== key
        ? timer
        : {
            ...timer,
            isRunning: !timer.isRunning,
          };
    });
    setTimers(updatestart);
  };

  const handleSaveClick = (key, title, project) => {
    const updatesave = timers.map((timer, index) => {
      return index !== key
        ? timer
        : {
            ...timer,
            title: title,
            project: project,
          };
    });
    setTimers(updatesave);
  };

  const handleCreateTimer = (title, project) => {
    const timer = {
      title: title,
      project: project,
      eslapsed: 0,
      isRunning: true,
    };
    setTimers([timer, ...timers]);
  };

  const handleRemoveTimer = (key) => {
    const removeTimers = timers.filter((timer, index) =>
      index === key ? false : true
    );
    setTimers(removeTimers);
  };
  return (
    <div className="app">
      <div className="img"></div>
      <h1>Timers</h1>
      <ToggleableTimerForm onCreate={handleCreateTimer} />
      <div>
        {timers.map((timer, index) => {
          return (
            <div className="timerContainer">
              <EditableTimer
                key={index}
                index={index}
                title={timer.title}
                project={timer.project}
                eslapsed={timer.eslapsed}
                isRunning={timer.isRunning}
                onStart={handleStartClick}
                onSave={handleSaveClick}
                onRemove={handleRemoveTimer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
