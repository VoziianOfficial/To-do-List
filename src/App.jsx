import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { randomColor } from "randomcolor";
import Draggable from "react-draggable";
import "./App.css";

const App = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const newItem = () => {
    if (item.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: "light",
        }),
        defaultPost: {
          x: 200,
          y: -400,
        },
      };
      setItems((items) => [...items, newItem]);
      setItem("");
    } else {
      alert("Enter something");
      setItem("");
    }
  };

  const deleteNode = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPost = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const keyPress = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      newItem();
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <input
          value={item}
          type="text"
          placeholder="Enter something.."
          onChange={(e) => setItem(e.target.value)}
          onKeyPress={(e) => keyPress(e)}
        />
        <button className="enter-btn" onClick={newItem}>
          ENTER
        </button>
      </div>

      {items.map((item, index) => {
        return (
          <Draggable
            key={index}
            defaultPosition={item.defaultPost}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div className="todo-item" style={{ backgroundColor: item.color }}>
              {`${item.item}`}
              <button
                className="btn-delete"
                onClick={() => deleteNode(item.id)}
                onTouchStart={() => deleteNode(item.id)} /* Обработка касания */
              >
                X
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default App;
