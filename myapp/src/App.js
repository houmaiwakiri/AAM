import React from 'react';
import './App.css';

function App() {
  return (
    <div id="post">
      <div>
        <form class="post_design" action="" method="post">
          <h1>投稿欄</h1>
          <span class="post_title">いつ遊ぶ？:</span>
          <input type="date" min="2021-1-1" max="2022-3-31" name="when"></input><br></br>
          <span class="post_title">何で遊ぶ？:</span>
          <input type="text" name="doit"></input>            
          <br></br>
          <div class="input_submit"><input type="submit" name="submit" value="投稿"></input></div>
        </form> 
      </div>
      <div class="p_column">
        <div class="wrapper">
          <div class="card">
            <div class="card-content">
              <p class="card-title">いつ</p>
              <p class="card-text">なにするか</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
