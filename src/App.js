import './App.css';

function App() {

  const array = [{
    cash: String("1000"),
    sub: "miracle",
    date: new Date().toUTCString().replace('GMT', 'UTC'),
    title: "Miracle Game",
    isRanked: "Ranked",
    device: "Mobile",
    userCount: String("10"),
    esStart: String("1000"),
    esEnd: String("16000"),
  }];

  return (
    <div className="App">
      {/* nav바 */}
    <nav className='navbar'>
      <div className='nav_logo'>
        <img src='https://github.com/user-attachments/assets/0d256f86-bb9b-4d3d-98ea-56d47bc586fa'/>
      </div>

      <ul className='nav_links'>
      <li><a href="#">MAIN</a></li>
            <li><a href="#">GAME</a></li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">EXPLORER</a></li>
            <li><a href="#" class="club">CLUB</a></li>
            <li><a href="#" class="earn">EARN</a></li>
      </ul>

      <div className='nav_btn'>
        <button class="login-btn">Login</button>
        <button class="language-btn">EN ▼</button>
      </div>
    </nav>

    {/* title 부분 */}
    <header className='header'>
      <p>TODAY'S TOURNAMENT</p>
      <p>SCHEDULE</p>
    </header>

    {/* body 부분 */}
    <body className='container'>
      {/* body - 상단 title */}
      <div className='container_header'>
        <h2>GAME CARD</h2>
        <div className='container_btn'>
          <button className='container_btn_clover'>🍀</button>
          <button className='container_btn_whale'>🐳</button>
        </div>
      </div>

      {/* body - 메인 부분 */}
      {array.map((item, index) => (
      
      <div key={index} className='container_box'>
        
        <div className='container_box_top'>
          <p>😀{item.cash}</p>
        </div>

        <div className='container_box_bottom'>
          <div className='container_box_bottom_left'>
            <img src='kick.png'/>
          </div>
          <div className='container_box_bottom_right'>
            <div className='container_box_bottom_right_1'>
            <p>🎮{item.sub}</p>
            <p>{item.date}</p>
            <h3>{item.title}</h3>
            <div className='container_box_bottom_right_1_icon'>
              <p>🗡{item.isRanked}</p>
              <p>📱 {item.device}</p>
              <p>🙍‍♂️ {item.userCount}/100</p>
            </div>
            </div>
            <div className='container_box_bottom_right_2'>
            <div class="progress-bar">
              <div class="progress-fill"></div>
            </div>
              <p>Until registration completion</p>
            </div>
            <div className='container_box_bottom_right_3'>
              <p><b>Entry Score</b></p>
              <p>{item.esStart}~{item.esEnd}</p>
            </div>
            <div className='container_box_bottom_right_4'>
              <p><b>Entry Free</b></p>
              <p>😀{item.cash}</p>
            </div>
          </div>
        </div>
      </div>
      ))}
      
      {array.map((item, index) => (
        <div key={index} className='container_box2'>
          <div className='container_box2_header'>
          <p>😀{item.cash}</p>
          <p>🎮{item.sub}</p>
        </div>
        <img src='kick.png'/>
        <div className='container_box2_main'>
          <p>{item.date}</p>
          <h3>{item.title}</h3>
          <div className='container_box2_main_icon'>
            <p>🗡{item.isRanked}</p>
            <p>📱 {item.device}</p>
            <p>🙍‍♂️ {item.userCount}/200</p>
          </div>
        </div>
      </div>
      ))}
    </body>
    </div>
  );
}

export default App;
