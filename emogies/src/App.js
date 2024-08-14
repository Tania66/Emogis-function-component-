import { useEffect, useState } from "react";
import "./App.css";
import EmogisList from "./components/EmogiesList/EmogisList";
import ResultText from "./components/ResultText/ResultText";

function App() {
  const [emogi, setEmogi] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("bestEmogi")) ?? [
        { id: "id-1", smile: "😂", voice: 0 },
        { id: "id-2", smile: "🥰", voice: 0 },
        { id: "id-3", smile: "😡", voice: 0 },
        { id: "id-4", smile: "😇", voice: 0 },
        { id: "id-5", smile: "😏", voice: 0 },
      ]
  );
  const [countVoice, setCountVoice] = useState({ voice: 0 });
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("bestEmogi", JSON.stringify(emogi));
  }, [emogi]);

  function handleClickVoice(id) {
    const voicesCounter = emogi.map((element) => {
      if (element.id === id) {
        return { voice: (element.voice += 1) };
      }
    });
    setCountVoice(voicesCounter);
  }

  function handleShowResult() {
    setIsShow((isShow) => !isShow);
    localStorage.getItem("bestEmogi");
  }

  function handleResetEmogi() {
    localStorage.removeItem("bestEmogi");
    setIsShow((isShow) => !isShow);
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <EmogisList list={emogi} handleClickVoice={handleClickVoice} />
      <button className="btn_result" type="button" onClick={handleShowResult}>
        Show Result
      </button>
      {isShow && (
        <div className="result_container">
          <ResultText list={emogi} />
          <button
            className="btn_reset"
            type="button"
            onClick={handleResetEmogi}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
