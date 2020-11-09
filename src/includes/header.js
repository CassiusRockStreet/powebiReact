import React from 'react';
// import SetLogout from './login';
class Heading extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            isLoggedIn: true
        });
    }
    
  render(){
      return (
            <>
            <div className="row navigations">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"></link>
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <span className="navbar-brand">Potlako Consulting</span>
                        <ul className="navbar-nav">
                            <div className="MenuTrigure">
                                <i className="fas fa-bars"></i>
                            </div>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                                <li className=" nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                                    <i className="fas fa-cog"></i>  Settings
                                    </span>
                                    <div className="dropdown-menu Settingsdrop">
                                        <ul>
                                            <li><span>Profile</span></li>
                                            <li><span>Logout</span></li>
                                        </ul>
                                    </div>
                                </li>
                        </ul>
                        </nav>   
                </div>         
            </div>
            {/* <div className="sideNavs">
                <ul className="nav flex-column">
                    <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li>
                    <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li>
                    <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li>
                    <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li>
                    <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li>
                    <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li>
                    <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li>

                </ul>
            </div> */}
            </>
        );
        
  }
  
}

export default Heading;
