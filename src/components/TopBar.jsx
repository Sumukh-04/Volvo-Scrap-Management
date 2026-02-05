import logo from "../assets/volvo_logo.png"
import avatarImg from "../assets/account_icon.png"

export default function TopBar() {
  return (
    <div className="topbar">

      <img 
        src={logo} 
        alt="Volvo Logo" 
        className="logo-img"
      />

      <div className="account-widget">
        <div className="avatar-box">
          <img 
            src={avatarImg} 
            alt="User Avatar" 
            className="avatar-img"
          />
        </div>

        <div>
          <div className="name">Sumukh Umesh</div>
          <div className="role">Sentry</div>
        </div>
      </div>

    </div>
  )
}


