export default function Profile() {
  return (
    <main>
      <div class='container-profile-info'>
        <div class='col-1'>
          <img src='/images/defaultuser.png' alt='' />
        </div>
        <div class='col-2'>
          <div class='profile-info-row'>
            <label>User ID</label>
            <p>851</p>
            <button id='btn-change-id' disabled></button>
          </div>
          <div class='profile-info-row'>
            <label>Username</label>
            <p>User1</p>
            <button>Change</button>
          </div>
          <div class='profile-info-row'>
            <label>Firstname</label>
            <p>Jeff</p>
            <button>Update</button>
          </div>
          <div class='profile-info-row'>
            <label>Lastname</label>
            <p>Bezos</p>
            <button>Update</button>
          </div>
          <div class='profile-info-row'>
            <label>Email</label>
            <p>user321@gmail.com</p>
            <button>Change</button>
          </div>
          <div class='profile-info-row'>
            <label>Address</label>
            <p>Savanoriu pr. 5, Vilnius</p>
            <button>Update</button>
          </div>
          <div class='profile-info-row'>
            <label>Phone</label>
            <p>+37068523459</p>
            <button>Update</button>
          </div>
          <div class='profile-info-row'>
            <label>Password</label>
            <p>***********</p>
            <button>Change</button>
          </div>
        </div>
      </div>
    </main>
  )
}
