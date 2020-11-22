import Axios from 'axios';
import React from 'react';
import Dashboard from './views/dashboard'
import Logo from '../img/BudgetInsights.png';
class Login extends React.Component {
   constructor(props){
        super(props);
        this.state = {
            userName : "",
            password : "",
            alert: "",
            message: "",
            emailErr:"",
            showEmailError:false,
            showAlert:false,
            BtnDisable: false,
            isStage:"",
            changeStage:false,
            successLogin:false,
            sessionName: ""
        }
        this.grantLogin = this.grantLogin.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
        this.login = this.login.bind(this);
        this.LoginSet = this.LoginSet.bind(this);
        this.AboutUs = this.AboutUs.bind(this);
    }
    emailChange(event){
        const emailAddres = event.target.value;
        //eslint-disable-next-line
        if(!emailAddres.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")){
            this.setState({
                emailErr:"Invalid email format",
                showEmailError:true,
                BtnDisable: true,
                userName: emailAddres
            });
        }else{
            this.setState({
                emailErr:"",
                showEmailError:false,
                BtnDisable: false,
                userName : emailAddres
            });
        }
    }

    passChange(event){
        const userPassword = event.target.value;
            this.setState({
                BtnDisable: false,
                password : userPassword
            });
    }

    LoginSet(){
        //const LoginSet = event.target.value;
            this.setState({
                successLogin: true,
                isStage:"SetLogin",
                changeStage:true,
                message: "",
            });
    }
    grantLogin(event){ 
        if(this.state.userName !== "" && this.state.password !== ""){
            console.log('Not emoty');
            if(!this.state.userName.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")){
                this.setState({
                    emailErr:"Invalid email format",
                    showEmailError:true,
                    BtnDisable: true,
                    userName: this.state.userName
                });
            }else{
                this.setState({
                    emailErr:"",
                    showEmailError:false,
                    BtnDisable: false,
                    userName : this.state.userName
                });
            }
            const doLogin = async ()=>{
                const Login = await Axios.get('https://www.rockstreet.co.za/requestPowerbi/login.php?username='+this.state.userName+'&password='+this.state.password+'',
                    {
                        crossdomain: true
                        // headers: {
                        //   'Access-Control-Allow-Origin': true,
                        //     },
                    });
                const dataSet = Login.data;
                console.log(dataSet);
                // console.log(dataSet[0]['Message']);
                if(dataSet[0]['status'] === '100'){
                      this.setState({
                        successLogin: true,
                        isStage:"dashboard",
                        changeStage:true,
                        message: "",
                        alert: "",
                        showAlert:false,
                        sessionName:dataSet[0]['data']['username']
                    });
                    
                    var NowHrThty = new Date().getTime() + 3600600;

                    // 1605382523848
                    localStorage.setItem("LoggedIn",true);
                    localStorage.setItem("userID",dataSet[0]['data']['id']);  
                    localStorage.setItem("ExpireDate",NowHrThty);   
                    localStorage.setItem("userRole",dataSet[0]['data']['role']);
                    localStorage.setItem("Username",dataSet[0]['data']['name']);
                }else{
                      this.setState({
                        successLogin : false,
                        isStage:"SetLogin",
                        changeStage:false,
                        message: dataSet[0]['Message'],
                        alert: "alert alert-danger",
                        showAlert:true,
                        sessionName:""
                    });
                }
            }

            if(this.state.userName !== "" && this.state.password !== ""){
                doLogin();
            }else{
                this.setState({
                    message: "Invalid email/password credentials",
                    alert: "alert alert-danger",
                    showAlert:true
                });
            }

        }else{
            this.setState({
                message: "Please provide your email address and password",
                alert: "alert alert-danger",
                showAlert:true
            });
        }
    }

    forgotPassword(event){
        this.setState({
            isStage:"resetPassword",
            changeStage:true
        });
    }

    AboutUs(event){
        this.setState({
            isStage:"AboutUs",
            changeStage:true
        });
    }


    login(event){
        this.setState({
            changeStage:false
        });
    }

    

  render(){
    // console.log("User Logged: "+localStorage.getItem("LoggedIn"));
    if(localStorage.getItem("LoggedIn")){
        document.querySelector('body').style.background = 'white';
        return(
            <Dashboard username={this.state.username}/>
        );
    }else{
            if(this.state.changeStage){
                switch(this.state.isStage){
                    case "resetPassword":
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 LoginColumn">
                                        <h1>Forgot password</h1>
                                        <p className={this.state.alert}>{this.state.message}</p>
                                        <div className="panel panel-default loginForm">
                                            <div className="panel-body">
                                                    <h3>Reset your Password</h3>
                                                    <p>Reset your account password</p>
                                                    <div className="form-group">
                                                        <input type="text" placeholder="Email address" className="form-control" value={this.state.userName} onChange={this.emailChange} id="UserEmail" required/>
                                                        <span className="email_error" disabled={this.state.showEmailError}>{this.state.emailErr}</span>
                                                    </div>
                                                    <div className="form-group">
                                                        <button disabled={this.state.BtnDisable} value="Login" onClick={this.grantLogin} className="btn btn-warning form-control" name="sign in" id="SubmitBtn">Reset password</button>
                                                    </div>
                                            </div>
                                        </div>
                                        <p className="Loginatempt" onChange={this.state.login} onClick={this.login}>Back to Login</p>
                                    </div>
                                </div>         
                            </div>
                        );  
                    break;
                    case "dashboard":
                            return(
                                <Dashboard username={this.state.username}/>
                            );
                    break;
                    case "AboutUs":
                        return (
                            <div>
                                <div className="row HeadingHome">
                                    <div className="col-md-12">
                                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                                            
                                            <ul className="navbar-nav ml-auto">
                                                <li onClick={this.LoginSet}><span>Login</span></li>
                                                <li onClick={this.AboutUs}><span>About us</span></li>
                                            </ul>
                                        </nav> 
                                    </div>
                                </div>
                        
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 LoginColumn">
                                        <h1>About us</h1>
                                        
                                    </div>
                                </div>         
                            </div>
                            </div>
                        );  
                    break;
                    default:
                        this.setState({
                            changeStage:false
                        }); 
                    break;
                }
            }else{
                return (
                    <div className="container">
                            <div className="row">
                                <div className="col-md-6 LoginColumn">
                                    <center><img src={Logo} className="img-responsive LoginLogo" alt="Budget Insight Logo"/></center>
                                    <p className={this.state.alert}>{this.state.message}</p>
                                    <div className="panel panel-default loginForm">
                                        <div className="panel-body">
                                            {/* <h3>Sign in to your account</h3> */}
                                            {/* <p>Complete the form below to sign in to your account</p> */}
                                                <div className="form-group">
                                                    <input type="text" placeholder="Email address" className="form-control" value={this.state.userName} onChange={this.emailChange} id="UserEmail" required/>
                                                    <span className="email_error" disabled={this.state.showEmailError}>{this.state.emailErr}</span>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.passChange}id="userPass" required/>
                                                </div>
                                                <div className="form-group">
                                                    <span disabled={this.state.BtnDisable} value="Login" onClick={this.grantLogin} className="btn btn-success form-control" name="sign in" id="SubmitBtn">Sign in</span>
                                                </div>
                                        </div>
                                    </div>
                                    <p className="passwordreset" onChange={this.state.forgotPassword}onClick={this.forgotPassword}>Forgot password?</p>
                                </div>
                            </div>         
                        </div>
                    )
            }
        }
    } 
}
// const Login = new LoginClass();
export default Login;
