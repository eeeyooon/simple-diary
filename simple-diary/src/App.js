import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef } from "react";

// const dummyList = [
//   {
//     id: 1,
//     author: "winter",
//     content: "Hi 1",
//     emotion: 1,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "spring",
//     content: "Hi 2",
//     emotion: 3,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "fall",
//     content: "Hi 3",
//     emotion: 5,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "summer",
//     content: "Hi 4",
//     emotion: 4,
//     create_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습나다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
