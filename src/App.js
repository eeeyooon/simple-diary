import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "winter",
    content: "Hi 1",
    emotion: 1,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "spring",
    content: "Hi 2",
    emotion: 3,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "fall",
    content: "Hi 3",
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "summer",
    content: "Hi 4",
    emotion: 4,
    create_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
