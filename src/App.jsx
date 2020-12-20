import { useEffect, useState } from "react";
import "./App.css";
import EditableTimer from "./component/EditableTimer";
import ToggleableTimerForm from "./component/ToggleableTimerForm";
import ids from "short-id";
import { Transition } from "react-spring/renderprops";

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
      eslapsed: 3780000,
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
      <h1>Timers</h1>
      <ToggleableTimerForm onCreate={handleCreateTimer} />
      <div>
        {
          <Transition
            items={timers}
            keys={(item) => item.id}
            from={{
              transform: "translate3d(-250px,0,20px)",
              opacity: 0,
              height: 0,
              margin: 0,
            }}
            enter={{
              transform: "translate3d(0,0px,0)",
              opacity: 1,
              height: 230,
              margin: 10,
            }}
            leave={{
              transform: "translate3d(250px,0px,20px)",
              opacity: 0,
              height: 0,
              margin: 0,
            }}
            config={{ duration: 500 }}
          >
            {(item) => (props) => (
              <div className="timerContainer" style={props}>
                <EditableTimer
                  key={item.id}
                  index={item.id}
                  title={item.title}
                  project={item.project}
                  eslapsed={item.eslapsed}
                  isRunning={item.isRunning}
                  onStart={handleStartClick}
                  onSave={handleSaveClick}
                  onRemove={handleRemoveTimer}
                />
              </div>
            )}
          </Transition>
        }
      </div>
    </div>
  );
};

export default App;
