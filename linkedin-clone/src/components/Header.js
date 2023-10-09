import './Header.css';
import linkedin from "../images/linkedin.png";
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcoin from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className="header">
          <div className="header_left">
          <img src={linkedin} alt="linkedin icon" />         
        
            <div className="header_search">
              <SearchIcon />
              <input type="text" />      
            </div>
          </div>

          <div className="header_right">
            <HeaderOption Icon={HomeIcon} title = "Home" />
            <HeaderOption Icon={SupervisorAccountIcoin} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar={require('../images/me.png')} title='me' />
          </div>
    </div>
  )
}

export default Header;