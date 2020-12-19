import { useEffect, useState } from "react";
import "./App.css";
import EditableTimer from "./component/EditableTimer";
import ToggleableTimerForm from "./component/ToggleableTimerForm";
import ids from "short-id";

const App = (props) => {
  const [timers, setTimers] = useState([
    {
      id: "hjdkasd",
      title: "Learn A",
      project: "Internship",
      eslapsed: 123000,
      isRunning: true,
    },
    {
      id: "bdsakbd",
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
    const updatestart = timers.map((timer) => {
      return timer.id !== key
        ? timer
        : {
            ...timer,
            isRunning: !timer.isRunning,
          };
    });
    setTimers(updatestart);
  };

  const handleSaveClick = (key, title, project) => {
    const updatesave = timers.map((timer) => {
      return timer.id !== key
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
      id: ids.generate(),
      title: title,
      project: project,
      eslapsed: 0,
      isRunning: true,
    };
    setTimers([timer, ...timers]);
  };

  const handleRemoveTimer = (key) => {
    const removeTimers = timers.filter((timer) =>
      timer.id === key ? false : true
    );
    setTimers(removeTimers);
  };
  return (
    <div className="app">
      <div className="img"></div>
      <h1>Timers</h1>
      <ToggleableTimerForm onCreate={handleCreateTimer} />
      <div>
        {timers.map((timer) => {
          return (
            <div className="timerContainer">
              <EditableTimer
                key={timer.id}
                index={timer.id}
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
        {/* {
          <Transition
            native
            items={timers}
            from={{ opacity: 0, height: 0, transform: "scale(0.8)" }}
            enter={[{ opacity: 1, height: "230px" }, { transform: "scale(1)" }]}
            leave={[
              { transform: "scale(0.8)", opacity: 0.5 },
              { opacity: 0 },
              { height: 0 },
            ]}
          >
            {(timer) => (props) => (
              <div style={props}>
                {
                  <EditableTimer
                    key={timer.id}
                    index={timer.id}
                    title={timer.title}
                    project={timer.project}
                    eslapsed={timer.eslapsed}
                    isRunning={timer.isRunning}
                    onStart={handleStartClick}
                    onSave={handleSaveClick}
                    onRemove={handleRemoveTimer}
                  />
                }
              </div>
            )}
          </Transition>
        } */}
      </div>
    </div>
  );
};

export default App;
