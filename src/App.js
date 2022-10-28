import AnonTreasury from "./components/AnonTreasury";
import Dark from "./components/Dark";
import DarkChart from "./components/DarkChart";
import Githhub from "./components/Github";
import Header from "./components/Header";
import SocialStats from "./components/SocialStats";
import OgAnon from "./components/OgAnon";
import DarkFeed from "./components/DarkFeed";

function App() {
  return (
    <div className="App text-white w-full h-screen bg-black">
      <Header />
      <SocialStats />
      <Dark />
      <DarkFeed />
      <AnonTreasury />
      <Githhub />
    </div>
  );
}

export default App;
