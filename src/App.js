import './App.css';
import React,{useState} from 'react';

const App = () => {

  const style = {
    width: "500px",
    height: "100px",
    padding: "20px",
    margin: "20px",
    backgroundColor: "#c6e5d9",
    borderRadius: "20px",
  }

  const [todos, setTodos] = useState([
    {id:1, title:'宿題', status:'未着手', deadline:'2024-07-01', details:'漢字帳と日記'},
    {id:2, title:'買い物', status:'未着手', deadline:'2024-07-02', details:'にんじん、たまねぎ'}
  ]);

  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('すべて')
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');

  return (
    <>
      <h1 className='title'>Todoリスト登録アプリ</h1>
      <div style={style}>
        <div>
          <span>タイトル：</span>
          <input 
            type='text' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}>
          </input>
          <select>
            <option value='すべて'>すべて</option>
            <option value='未着手' selected>未着手</option>
            <option value='進行中'>進行中</option>
            <option value='完了'>完了</option>
          </select>
        </div>
        <div>
          <span>締め切り：</span>
          <input type='date' value="締め切り"></input>
        </div>
        <div>
          <span className='detail'>詳　　細：</span>
          <textarea 
            type='text' 
            value={details} 
            cols="25" rows="3" 
            onChange={(e) => setDetails(e.target.value)}>
          </textarea>
          <button>追加</button>
        </div>
      <h2 className='title'>Todo一覧</h2>
      </div>
      <ul>
        <li>
          
        </li>
      </ul>
    </>
  )
}

export default App;
