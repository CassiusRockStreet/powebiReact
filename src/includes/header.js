import React from 'react';import Logo from '../img/Logoimg.png';
import Icon1 from './../img/Icon1.png';
import Icon2 from './../img/Icon2.png';
import $ from 'jquery';
class Heading extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            isLoggedIn: true
        });
        this.SetLogout = this.SetLogout.bind(this);
    }

    SetLogout(){
        localStorage.removeItem('LoggedIn');
        localStorage.removeItem('Username');
        window.location.reload(true);
    }
    componentDidMount(){
        var Now = new Date().getTime();

        
        const ExprTime = localStorage.getItem("ExpireDate");   
        

        if(ExprTime <= Now){
            localStorage.removeItem("Username");
            localStorage.removeItem("LoggedIn");  
            localStorage.removeItem("ExpireDate");   
            window.location.reload(true);
        }

        $('document').ready(function(){
            $('.sideNavs').hide();
            $('.MenuTrigure').click(function(){
                $('.sideNavs').slideToggle({ direction: "left" }, 1000);
            });
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
                                {/* <li className=" nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                                    <i className="fas fa-cog"></i>  Settings
                                    </span>
                                    <div className="dropdown-menu Settingsdrop">
                                        <ul>
                                            <li><span>Profile</span></li>
                                            <li><span>Logout</span></li>
                                        </ul>
                                    </div>
                                </li> */}
                        </ul>
                        </nav>   
                </div>         
            </div>
            <div className="sideNavs">
                <center><img src={Logo} className="img-responsive" alt="Budget Insight Logo"/></center>
                <br/>
                <ul className="nav flex-column"> 
                    <li><img src={Icon1} className="img-responsive Icon1"/> <span className="sideName">Budget Analysis and Forecasting</span></li>
                    <li><img src={Icon2} className="img-responsive Icon2"/> <span className="sideName">User Guide</span></li>
                    {/* <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li>
                    <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li>
                    <li><span><i className='fa fa-home'></i></span> <span className="sideName">Report A</span></li> */}
                    <li><span><i className='fa fa-user'></i></span>  <span className="sideName">My Profile</span></li>
                    <li onClick={this.SetLogout}><span><i className='fa fa-cog'></i></span>  <span className="sideName">Logout</span></li>
                </ul>
            </div> 
            </>
        );      
  }
  
}

export default Heading;
