import { useEffect, useState } from "react";
import "./App.css";
import EditableTimer from "./component/EditableTimer";
import ToggleableTimerForm from "./component/ToggleableTimerForm";

const App = (props) => {
  const [timers, setTimers] = useState([
    {
      id: 0,
      title: "Learn A",
      project: "Internship",
      eslapsed: 123000,
      isRunning: true,
    },
    {
      id: 1,
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

  return (
    <div className="app">
      <h1>Timers</h1>

      <ToggleableTimerForm />

      {timers.map((timer, index) => {
        return (
          <EditableTimer
            key={index}
            index={index}
            title={timer.title}
            project={timer.project}
            eslapsed={timer.eslapsed}
            onStart={handleStartClick}
            onSave={handleSaveClick}
          />
        );
      })}
    </div>
  );
};

export default App;
