import { useState } from "react";
import Header from "./components/Header";
import FlashCardGrid from "./components/FlashCardGrid";
import flashcardsData from "./data/flashcards";
import styles from "./App.module.css";

function App() {
  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (id) => {
    setFlippedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <main className={styles.main}>
        <Header />
        <FlashCardGrid
          cards={flashcardsData}
          flippedId={flippedId}
          onFlip={handleFlip}
        />
      </main>
    </div>
  );
}

export default App;
