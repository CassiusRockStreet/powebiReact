import React from 'react';
import Axios from 'axios';
//Report, Embed, IEmbedConfiguration, service, Page 

class Profile extends React.Component {
   
    constructor(props){
        super(props);
        this.state = ({
            name:"",
            email:"",
            userID:"",
            userRole:"",
            password:"",
            cpass:"",
            BtnDisable: false,
            DisableUserBtn:true,
            message: "",
            alert: "",
            stage:"",
            systemPass:"",
            systemEmail:"",
            hideAlert:true
        });
        this.UpdateProfile = this.UpdateProfile.bind(this);
        this.NameChange = this.NameChange.bind(this);
        this.EmailChange = this.EmailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.cpasswordChange = this.cpasswordChange.bind(this);
        this.systemPass= this.systemPass.bind(this);
        this.systemEmailChange =this.systemEmailChange.bind(this);
        this.systemPassChange =this.systemPassChange.bind(this);
        this.UpdateSystem = this.UpdateSystem.bind(this);

    }
    NameChange(event){
        const NameIs = event.target.value;
        this.setState({
            name:NameIs
        })
    }
    passwordChange(event){
        const pass = event.target.value;
        this.setState({
            password: pass
        });
    }
    cpasswordChange(event){
        const cpass = event.target.value;
        this.setState({
            cpass: cpass
        });
    }

    EmailChange(event){
        const EmailIs = event.target.value;
        this.setState({
            email: EmailIs
        });
    }
    
    systemPassChange(event){
        const pass = event.target.value;
        this.setState({
            systemPass: pass
        });
    }
    systemEmailChange(event){
        const emailChange = event.target.value;
        this.setState({
            systemEmail: emailChange
        });
    }
    

    componentDidMount(){
        this.setState({
            name:localStorage.getItem("Name"),
            userRole:localStorage.getItem("userRole"),
            userID:localStorage.getItem("userID"),
            email:localStorage.getItem("Username"),
            systemPass:localStorage.getItem("sucode"),
            systemEmail:localStorage.getItem("mucode")
        });

        // console.log("The stage:"+this.state.stage);
        if(localStorage.getItem("userRole") === "admin" || localStorage.getItem("userRole") === "Super admin"){
            this.setState({
                DisableUserBtn:false
            });
        }else{
            this.setState({
                DisableUserBtn:true
            });
        }
        
    }

    UpdateSystem(){
        const system_emailAdd = this.state.systemEmail;
        const system_Pass = this.state.systemPass;

        if(system_emailAdd !=="" && system_Pass !==""){
            // console.log("Available data");
            this.setState({
                message: "",
                alert: "",
                hideAlert:true
            });
            const UpdateSystemURL = "http://rockstreet.co.za/requestPowerbi/login.php?SystemEmail="+system_emailAdd+"&SystemPassword="+system_Pass+"&SystemUpdate=Yes";
            const UpdateSystemData = async (URL)=>{
                const UpdateData = await Axios.get(UpdateSystemURL,
                    {
                        crossdomain: true
                    });
                const results = UpdateData.data;
                // console.log(results);
                // console.log(dataSet[0]['Message']);
                if(results[0]['status'] === '100'){
                      this.setState({
                        message: results[0]['Message'],
                        alert: "alert alert-success",
                        showAlert:true
                    });
                    localStorage.setItem("sucode",this.state.systemPass);
                    localStorage.setItem("mucode",this.state.systemEmail);
                    // setTimeout(function () {
                    //     window.location.reload(true); 
                    // }, 10000);
                }
            }
            UpdateSystemData();
        }else{
            this.setState({
                message: "Please provide all fields",
                alert: "alert alert-danger",
                hideAlert:false
            });
        }
         
    }

    UpdateProfile(){
        const inpt_username = this.state.name;
        const inpt_email = this.state.email;
        const inpt_userID = this.state.userID;
        const inpt_password = this.state.password;
        const inpt_cpass = this.state.cpass;

        let UpdateUrl =  "";
        const setUpdateProfile = async (URL)=>{
            const UpdateProfile = await Axios.get(URL,
                {
                    crossdomain: true
                });
            const results = UpdateProfile.data;
            // console.log(UpdateProfile);
            // console.log(dataSet[0]['Message']);
            if(results[0]['status'] === '100'){
                  this.setState({
                    message: results[0]['Message'],
                    alert: "alert alert-success",
                    hideAlert:false
                });
                localStorage.setItem("Username",inpt_email);
                localStorage.setItem("Name",inpt_username);
                
                setTimeout(function () {
                    window.location.reload(true); 
                }, 10000);

            }else{
                  this.setState({
                    message: results[0]['Message'],
                    alert: "alert alert-danger",
                    hideAlert:false
                });
            }
        }
        if(inpt_username ==="" && inpt_email ===""){
               this.setState({
                    message: "Please provide all details",
                    alert: "alert alert-danger",
                    hideAlert:false,
                });
        }else{
            if(inpt_password !=="" && inpt_cpass !==""){
                
                if(inpt_password !== inpt_cpass){
                    this.setState({
                        message: "Passwords details does not match",
                        alert: "alert alert-danger",
                        hideAlert:false,
                    });
                }else{
                    UpdateUrl = "http://rockstreet.co.za/requestPowerbi/login.php?update=yes&email="+inpt_email+"&username="+inpt_username+"&usID="+inpt_userID+"&pass="+inpt_password+"&passwordChange=Yes"; 
                    setUpdateProfile(UpdateUrl);
                }
            }else{
                    UpdateUrl = "http://rockstreet.co.za/requestPowerbi/login.php?update=yes&email="+inpt_email+"&username="+inpt_username+"&usID="+inpt_userID+"&pass="+inpt_password+"&passwordChange=No";                    
                    setUpdateProfile(UpdateUrl);
            }
               
            this.setState({
                message: "Let's go",
                alert: "alert alert-success",
                hideAlert:true,
            });
        }
    }
    Users(){
        localStorage.setItem("Page","Users");
        localStorage.setItem("Stage","");
        window.location.reload(true);
    }
    systemPass(){
        localStorage.setItem("Stage","systemPass");
        window.location.reload(true);
    }
  render(){
    if(localStorage.getItem("Stage") ==="systemPass"){
        return (
            <div>
                  <div className="container">
                      <div className="Row ProfilePage">
                              <div className="col-md-12">
                                  <div className="row">
                                      <div className="col-md-6">
                                          <h2><span className="fa fa-user userIcon"></span> Hi {this.state.name}</h2>
                                      </div>
                                      <div className="col-md-6">
                                          <p>Manage users <button disabled={this.state.DisableUserBtn} className="btn btn-primary" onClick={this.Users}>Manage Users</button> <button className="btn btn-link" disabled={this.state.DisableUserBtn}  onClick={this.systemPass}>System password</button></p>
                                      </div>
                                  </div>
                                  <hr></hr>
                                  <div className="row">
                                      <div className="col-md-8">
                                      <h2>Manage system password</h2>
                                      <p className={this.state.alert} disabled={this.state.showAlert}>{this.state.message}</p>
                                        <div className="form-group">
                                              <label>Email address</label>
                                              <input type="text" placeholder="e.g info@systemdomain.com" className="form-control" value={this.state.systemEmail} onChange={this.systemEmailChange} id="SystemEmail"/>
                                          </div>
                                          <div className="form-group">
                                              <label>Password</label>
                                              <input type="text" placeholder="Password" className="form-control" value={this.state.systemPass} onChange={this.systemPassChange} id="systemPassword"/>
                                          </div>
                                          <div className="form-group">
                                              <button disabled={this.state.BtnDisable} value="Login" onClick={this.UpdateSystem} className="btn btn-warning form-control" name="sign in" id="SubmitBtn">Update details</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                      </div>
                  </div>
            </div>
              );  
    }else{
      return (
          <div>
                <div className="container">
                    <div className="Row ProfilePage">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2><span className="fa fa-user userIcon"></span> Hi {this.state.name}</h2>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Manage users <button disabled={this.state.DisableUserBtn} className="btn btn-primary" onClick={this.Users}>Manage Users</button> <button className="btn btn-link" disabled={this.state.DisableUserBtn} onClick={this.systemPass}>System password</button></p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-md-8">
                                    <h2>Manage your profile</h2>
                                    <p>NB: Leave the password's empty, if you do not wish to change it.</p>
                                    <p className={this.state.alert} disabled={this.state.showAlert}>{this.state.message}</p>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" placeholder="Name" className="form-control" value={this.state.name} onChange={this.NameChange} id="UserEmail"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="Email" placeholder="Email address" className="form-control" value={this.state.email} onChange={this.EmailChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Account Role</label>
                                            <input type="text" placeholder="Account Role" className="form-control" value={this.state.userRole} readOnly/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.passwordChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm password</label>
                                            <input type="password" placeholder="Confirm password" className="form-control" value={this.state.cPass} onChange={this.cpasswordChange}/>
                                        </div>
                                        <div className="form-group">
                                            <button disabled={this.state.BtnDisable} value="Login" onClick={this.UpdateProfile} className="btn btn-warning form-control" name="sign in" id="SubmitBtn">Update profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
          </div>
            );     
        }
    }
  
}

export default Profile;