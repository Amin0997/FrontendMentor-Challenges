import MainCard from './components/main-card/MainCard';
import ActivityCard from './components/activity-card/ActivityCard';
import dataJson from './data.json';

function App() {
  return (
    <div className="wrapper">

      <MainCard />

      {dataJson.map((activity, index) => (
  <ActivityCard
    key={index}
    title={activity.title}
    totalTime={activity.timeframes.daily.current}
    lastTime={activity.timeframes.weekly.previous}
  />
))}
      


    </div>
  );
}

export default App;