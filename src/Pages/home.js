export default function Home() {
  return (
    <main>
      <div class='container-search'>
        <input type='text' class='textbox-search' placeholder='search user' />
        <button class='btn-search'>SEARCH</button>
      </div>
      <div class='container-list'>
        <div class='widget widget-user'>
          <div class='col-1'>
            <img src='/images/defaultuser.png' />
            <button class='btn-view'>view profile</button>
          </div>
          <div class='col-2'>
            <div class='user-info'>
              <p>
                Username:<span>user1</span>
              </p>
              <p>
                Finished reading:<span>20</span>
              </p>
              <p>
                Currently reading:<span>2</span>
              </p>
            </div>
          </div>
        </div>
        <div class='widget widget-user'>
          <div class='col-1'>
            <img src='/images/defaultuser.png' />
            <button class='btn-view'>view profile</button>
          </div>
          <div class='col-2'>
            <div class='user-info'>
              <p>
                Username:<span>user2</span>
              </p>
              <p>
                Finished reading:<span>5</span>
              </p>
              <p>
                Currently reading:<span>1</span>
              </p>
            </div>
          </div>
        </div>
        <div class='widget widget-user'>
          <div class='col-1'>
            <img src='/images/defaultuser.png' />
            <button class='btn-view'>view profile</button>
          </div>
          <div class='col-2'>
            <div class='user-info'>
              <p>
                Username:<span>user3</span>
              </p>
              <p>
                Finished reading:<span>9</span>
              </p>
              <p>
                Currently reading:<span>1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
