import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Card from './components/Card';
import Input from "./components/Input";

function App() {

  const [data, setData] = useState([]);

  const [number, setNumber] = useState(1);

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const sel = document.querySelector('select');
    const num = sel.value;
    setNumber(num);
  });

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=CFj2RQgRwOB6Te8ybChOawpH2BmRkAHdBzHAGJGR&count=${number}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => alert(err));
  }, [number]);

  return (
    <div className="App">
      <Input />
      {
        data.map((e, i) => {
          return <Card title={e.title} date={e.date} url={e.url} explanation={e.explanation} key={i} />
        })
      }
    </div>
  );
}

export default App;
