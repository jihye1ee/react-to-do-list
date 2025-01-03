import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]); // 입력되는 to-do를 받을 빈 배열 state
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") return;

    setToDoList((currentToDoList) => [toDo, ...currentToDoList]); // 함수를 이용한 값 변경 (첫 번째 인자로 현재 state 값 받음)
    setToDo(""); // to-do 추가된 후 input 비우고 싶어서 / 직접적인 값 변경

    console.log(toDoList); // 상태 업데이트가 비동기적이어서 상태가 업데이트 중이기 때문에 이전 값이 출력됨
  }

  console.log(toDoList); // 리렌더링 후 상태가 최신 값으로 반영되어 업데이트된 값이 출력됨
  console.log(toDoList.map((item, index) => (<li key={index}>{item}</li>)));

  return (
    <div>
      <h1>My To Dos ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} placeholder="Write your to do..."></input>
        <button type="submit">Add To Do</button>
        <hr />
        <ul>
          {toDoList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </form>
    </div>
  );
}

export default App;

// ⭐️ 절대 직접적으로 state를 수정하지 않음 -> 항상 state 수정하는 함수를 이용
// .jsx 파일에 자바스크립트 넣고 싶다면 중괄호 필요 (ex. {toDoList.length})
// Warning: Each child in a list should have a unique "key" prop. -> 같은 component의 list를 렌더할 때 key라는 prop을 넣어 줘야 함 (React가 기본적으로 list에 있는 모든 item들을 인식하기 때문)
/*
  {toDoList.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
  -> react element로서의 새로운 배열을 얻고 이후 React가 새로운 배열을 자동으로 UI로 변환
*/
