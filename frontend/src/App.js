import "./App.css";
import React from "react";
import { createContext, useState } from "react";
import LatestImage from "./components/LatestImage";
import FileForm from "./components/FileForm";
export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext);
  return (
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
      <div className="App">
        <FileForm />
        <LatestImage />
      </div>
    </AppContext.Provider>
  );
}

export default App;
