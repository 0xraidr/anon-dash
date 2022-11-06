import AnonTreasury from "./components/AnonTreasury";
import Dark from "./components/Dark";
import Githhub from "./components/Github";
import Header from "./components/Header";
import SocialStats from "./components/SocialStats";
import DarkFeed from "./components/DarkFeed";
import StakedAnons from "./components/StakedAnons";

function App() {
  return (
    <div className="App text-white w-full h-screen bg-black">
      <Header />
      <SocialStats />
      <Dark />
      <DarkFeed />
      <AnonTreasury />
      <StakedAnons />
      <Githhub />
    </div>
  );
}

export default App;
