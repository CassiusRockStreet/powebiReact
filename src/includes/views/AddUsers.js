import React from 'react';
import Axios from 'axios';
//Report, Embed, IEmbedConfiguration, service, Page 

class Users extends React.Component {
   
    constructor(props){
        super(props);
        this.state = ({
            name:"",
            email:"",
            userRole:"",
            password:"",
            message: "",
            alert: "",
            ShowAlrt:true
        });
        this.RoleSelect = this.RoleSelect.bind(this);
        this.Namechange = this.Namechange.bind(this);
        this.Emailchange = this.Emailchange.bind(this);
        this.Passwordchange = this.Passwordchange.bind(this);
        this.returnBack = this.returnBack.bind(this);
        this.AddUsers = this.AddUsers.bind(this);
    }
    Namechange(events){
        this.setState({
            name: events.target.value
        });
    }
    Emailchange(event){
        this.setState({
            email: event.target.value
        });
    }
    Passwordchange(event){
        this.setState({
            password: event.target.value
        });
    }
    RoleSelect(event){
        this.setState({
            userRole: event.target.value
        });
    }
    // getList = async ()=>{
    //     const Report = await Axios.get("https://rockstreet.co.za/requestPowerbi/login.php?ListAllUsers=yes",
    //         {
    //             crossdomain: true
    //         });
    //         const dataSet = Report['data'][0]['data'];
    //         // console.log(dataSet);
    //         const ArrayDat =[];
    //         for(var i =0; i < dataSet.length; i++){
    //             const result = Object.values(dataSet[i]);
    //             ArrayDat.push(
    //                 result);  
    //         }
    //         this.setState({
    //             DataList:ArrayDat
    //         })
    // }
    returnBack(){
        localStorage.setItem("Page","Users");
        window.location.reload(true);
    }
    AddUsers(){
        const Name = this.state.name;
        const Email = this.state.email;
        const password = this.state.password;
        const role = this.state.userRole;
        
        const sendUser = async ()=>{
            const AddUser = await Axios.get('https://rockstreet.co.za/requestPowerbi/login.php?inviteUsers=yes&name='+Name+'&email='+Email+'&password='+password+'&role='+role+'',
                {
                    crossdomain: true
                });
            const dataSet = AddUser.data;
            if(dataSet[0]['status'] === '100'){
                this.setState({
                    alert:"alert alert-success",
                    ShowAlrt: true,
                    message: dataSet[0]['Message']
                });
            }else{
                this.setState({
                    alert:"alert alert-danger",
                    ShowAlrt: true,
                    message: dataSet[0]['Message']
                });
            }
        }
        if(Name !=="" && Email !=="" && password !==""){
            sendUser();
            console.log("Name: "+Name+" Email: "+Email+" Password: "+password+" Role: "+role);
            // this.setState({
            //     alert:"alert alert-danger",
            //     ShowAlrt: true,
            //     message: "Please provide all fields"
            // });
        }else{
            this.setState({
                alert:"alert alert-danger",
                ShowAlrt: true,
                message: "Please provide all fields"
            });
        }
        // localStorage.setItem("Page","AddUser");
        // window.location.reload(true);
    }
    
    componentDidMount(){
        // this.getList(); 
        // const UserRole = localStorage.getItem('userRole');
        // if(UserRole === "admin"){
        //     this.setState({
        //         DisableUserBtn:false
        //     });
        // }  
    }
    
  render(){
      
      return (
          <div>
                <div className="container">
                    <div className="Row ProfilePage">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h2><span className="fa fa-arrow-left" onClick={this.returnBack}></span> Add New user</h2>
                                    </div>
                                    <div className="col-md-4">
                                    </div>
                                </div>
                                <p className={this.state.alert} disabled={this.state.ShowAlrt}>{this.state.message}</p>
                                <hr/>
                               <div className="row">
                                   <div className="col-md-8">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" placeholder="Name" className="form-control" value={this.state.name} onChange={this.Namechange}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="email" placeholder="Email address" className="form-control" value={this.state.email} onChange={this.Emailchange}/>
                                        </div>
                                        <div className="form-group">
                                                <label>User role</label>
                                                <select className="form-control" onChange={this.RoleSelect}>
                                                    <option value="---" defaultValue>---</option>
                                                    <option value="User">User</option>
                                                    <option value="Admin">admin</option>
                                                </select>
                                        </div>
                                        <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.Passwordchange}/>
                                        </div>
                                        <div className="form-group">
                                                <button className="btn btn-warning" onClick={this.AddUsers}>Add user</button>
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

export default Users;