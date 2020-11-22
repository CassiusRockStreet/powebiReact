import React from 'react';
import Logo from '../img/BudgetInsights-dark.png';
import Icon1 from './../img/Icon1.png';
import Icon2 from './../img/Icon2.png';
import $ from 'jquery';
class Heading extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            isLoggedIn: true,
            Stage: "Dashboard",
            changeStage:false
        });
        this.SetLogout = this.SetLogout.bind(this);
        this.ProfileOpen = this.ProfileOpen.bind(this);
    }

    SetLogout(){
        localStorage.removeItem('LoggedIn');
        localStorage.removeItem('Username');
        window.location.reload(true);
    }
    ProfileOpen(){
        this.setState({
            isLoggedIn: true,
            Stage: "Dashboard",
            changeStage:false
        });
        console.log("ready to work on profile");
        return (
            <div>
                <h1>ready to work</h1>
            </div>
        )
    }
    componentDidMount(){
        var Now = new Date().getTime();

        
        const ExprTime = localStorage.getItem("ExpireDate");   
        

        if(ExprTime <= Now){
            localStorage.removeItem("Username");
            localStorage.removeItem("LoggedIn");  
            localStorage.removeItem("ExpireDate");
            localStorage.removeItem("userID");  
            localStorage.removeItem("userRole");
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
            <div className="row topNavsSide">
                <div className="col-md-2">
                    <img src={Logo} className="img-responsive LogoNav" alt="Budget Insight Logo"/>
                </div>
                <div className="col-md-9">
                    <p className="SupportText">
                        <i className="fa fa-phone"></i> <a href="tel:0000000000">0000 000 000</a><br/>
                        <small>Help & Support</small>
                    </p>
                </div>
            </div>
            <div className="row navigations">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"></link>
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <span>&nbsp;</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="fa fa-bars"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav leftNav">
                            <li className="nav-item activated">
                                <img src={Icon1} alt="Budget Icon" className="img-responsive Icon1"/> <span className="sideName">Budget Analysis and Forecasting</span>
                            </li>
                            <li class="nav-item">
                                <img src={Icon2} className="img-responsive Icon2" alt="User Guide Icon"/> <span className="sideName">User Guide</span>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                        <li className=" nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                                    <i className="fas fa-cog"></i>  Settings
                                    </span>
                                    <div className="dropdown-menu Settingsdrop">
                                        <ul>
                                         <li onClick={this.ProfileOpen}><span><i className='fa fa-user'></i></span>  <span className="sideName">My Profile</span></li>
                                            <li onClick={this.SetLogout}><span><i className='fa fa-cog'></i></span>  <span className="sideName">Logout</span></li>
                                        </ul>
                                    </div>
                                </li> 
                        </ul>
                        </div>
                        </nav>
                        
                </div>         
            </div>
            </>
        );      
  }
  
}

export default Heading;
