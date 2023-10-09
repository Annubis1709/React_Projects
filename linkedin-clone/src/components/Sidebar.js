import { Avatar } from '@mui/material';
import '../components/Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => {
       return (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{ topic }</p>
        </div>
       ); 
    };

  return (
    <div className='sidebar'>

        <div className='sidebar_top'>
            <img 
            src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' 
            alt='background'                 
            />
            <Avatar className='sidebar_avatar' />
            <h2>Edier Sanchez</h2>
            <h4>sansankind@gmail.com</h4>
        </div> 

        <div className='sidebar_stats'>

            <div className='sidebar_stat'>
                <p>Who Viewed you</p>
                <p className='sidebar_statNumber'>2.543</p>
            </div>

            <div className='sidebar_stat'>
                <p>Views on post</p>
                <p className='sidebar_statNumber'>4.458</p>
            </div>

            <div className='sidebar_bottom'>
                <p>Recent</p>
                { recentItem('reactjs') }
                { recentItem('programming') }
                { recentItem('softwareengineering') }
                { recentItem('design') }
                { recentItem('developer') }
            </div>
        </div>   
    </div>
  );
}

export default Sidebar;