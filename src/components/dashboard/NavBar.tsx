import logo from "../../assets/image-assets/volvo_logo.png"
import avatarImg from "../../assets/image-assets/account_icon.png"
import {useState} from "react";
import DownArrow from "../../assets/image-assets/Down Arrow.png"



export default function NavBar() {

const [showLog, setShowLog] = useState(false);


  return (
    <div className="navbar">

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
          <div className="name">Leonardo Lian</div>
<<<<<<< HEAD
          <div className="role">Environmental engineer</div>
=======
          <div className="role">Sentry</div>
>>>>>>> f3da32c7d69249df4bef6617bc0b1898c1679b6b
        </div>
         <img
                        src={DownArrow}
                        alt="dropdown"
                        className="dropdown-arrow"
                        onClick={()=> setShowLog(!showLog)}
                        />
                        {showLog &&(
                            <div className="logout-menu">
                                <p onClick ={()=> console.log("logout-clicked")}>Logout</p>
                                </div>
                        )}
      </div>

    </div>
  )
}


