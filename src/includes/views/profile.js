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
            showAlert:false
        });
        this.UpdateProfile = this.UpdateProfile.bind(this);
        this.NameChange = this.NameChange.bind(this);
        this.EmailChange = this.EmailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.cpasswordChange = this.cpasswordChange.bind(this);
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
    componentDidMount(){
        this.setState({
            name:localStorage.getItem("Name"),
            userRole:localStorage.getItem("userRole"),
            userID:localStorage.getItem("userID"),
            email:localStorage.getItem("Username")
        });

        if(localStorage.getItem("userRole") === "admin"){
            this.setState({
                DisableUserBtn:false
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
                    showAlert:true
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
                    showAlert:true
                });
            }
        }
        if(inpt_username ==="" && inpt_email ===""){
               this.setState({
                    message: "Please provide all details",
                    alert: "alert alert-danger",
                    showAlert:true,
                });
        }else{
            if(inpt_password !=="" && inpt_cpass !==""){
                
                if(inpt_password !== inpt_cpass){
                    this.setState({
                        message: "Passwords details does not match",
                        alert: "alert alert-danger",
                        showAlert:true,
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
                showAlert:true,
            });
        }

    }
    Users(){
        localStorage.setItem("Page","Users");
        window.location.reload(true);
    }
  render(){
   
      return (
          <div>
                <div className="container">
                    <div className="Row ProfilePage">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h2><span className="fa fa-user userIcon"></span> Hi {this.state.name}</h2>
                                    </div>
                                    <div className="col-md-4">
                                        <p>Manage users <button disabled={this.state.DisableUserBtn} className="btn btn-primary" onClick={this.Users}>Manage Users</button></p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-md-8">
                                    <h2>Manage your profile</h2>
                                    <p>NB: Leave the password's empty, if you do not wish to change it.</p>
                                    <p className={this.state.alert}>{this.state.message}</p>
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

export default Profile;