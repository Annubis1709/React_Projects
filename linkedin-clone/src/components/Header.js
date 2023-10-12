import './Header.css';
import linkedin from "../images/linkedin.png";
import HeaderOption from './HeaderOption';
import { Search, Home, SupervisorAccount, BusinessCenter, Chat, Notifications  } from '@mui/icons-material';

function Header() {
  return (
    <div className="header">
          <div className="header_left">
          <img src={linkedin} alt="linkedin icon" />         
        
            <div className="header_search">
              <Search />
              <input type="text" />      
            </div>
          </div>

          <div className="header_right">
            <HeaderOption Icon={Home} title = "Home" />
            <HeaderOption Icon={SupervisorAccount} title='My Network' />
            <HeaderOption Icon={BusinessCenter} title='Jobs' />
            <HeaderOption Icon={Chat} title='Messaging' />
            <HeaderOption Icon={Notifications} title='Notifications' />
            <HeaderOption avatar={require('../images/me.png')} title='Me' />
          </div>
    </div>
  )
}

export default Header;