import stats from "./stats.png";
import './App.css';

function App() {
    let slokasYaml = "https://raw.githubusercontent.com/annamkishore/annamkishore.github.io/79a994859fb6dce438b079c56bebb099b1f02581/bhagavad-gita/slokas.yaml";
    return (
        <div className="App">
            <h2>భగవద్గీత</h2>
            <h2> Chapter wise count <a href={slokasYaml}>Slokas link</a></h2>
            <img src={stats}/> <br/>
        </div>
    );
}

export default App;
