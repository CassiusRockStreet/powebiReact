import React from 'react';
import Axios from 'axios';
class Users extends React.Component {
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
            showAlert:false,
            DataList:''
        });
        this.deleteUser = this.deleteUser.bind(this);
        this.getList = this.getList.bind(this);
        this.AddUsers = this.AddUsers.bind(this);
        this.RemoverUser = this.RemoverUser.bind(this);
    }
    
    deleteUser = async (usName,id)=>{
        const DeleteUser = await Axios.get("https://rockstreet.co.za/requestPowerbi/login.php?RemoveUser=yes&username="+usName+"&id="+id+"",
            {
                crossdomain: true
            });
            // console.log(DeleteUser['data']);
            const status = DeleteUser['data'][0]['status'];
            if(status ==="100"){
                this.setState({
                    alert:"alert alert-success",
                    showAlert: true,
                    message: "User successfully deleted"
                });
                
            }else{
                this.setState({
                    alert:"alert alert-danger",
                    showAlert: true,
                    message: "An error occured, please try again later"
                })
            }
            // if()
            // this.setState({
                // DataList:dataSet
            // })
    }

    RemoverUser(username,userid){
        // console.log("Found:"+userid+" >"+username);
        this.deleteUser(username,userid);
    }

    getList = async ()=>{
        const Report = await Axios.get("https://rockstreet.co.za/requestPowerbi/login.php?ListAllUsers=yes",
            {
                crossdomain: true
            });
            // console.log(Report['data']);
            const dataSet = Report['data'][0]['data'];
            this.setState({
                DataList:dataSet
            })
    }
  
    AddUsers(){
        localStorage.setItem("Page","AddUser");
        window.location.reload(true);
    }
    
    componentDidMount(){
        this.getList();
        const UserRole = localStorage.getItem('userRole');
        // const adminUser = localStorage.getItem("userRole");
        if(UserRole === "admin" || UserRole === "Super admin"){
            this.setState({
                DisableUserBtn:false
            });
        }
        
    }
    
  render(){
      const Arry = this.state.DataList;
      const dataArray  = Array.from(Arry);
      return (
          <div>
                <div className="container">
                    <div className="Row ProfilePage">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h2> Manage users</h2>
                                    </div>
                                    <div className="col-md-4">
                                        <p>Add new user <button disabled={this.state.DisableUserBtn} className="btn btn-primary" onClick={this.AddUsers}>Add new</button></p>
                                    </div>
                                </div>
                                <hr/>
                                <p className={this.state.alert} disabled={this.state.ShowAlrt}>{this.state.message}</p>
                                <table className="table table-condensed table-bordered table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email address</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {
                                                dataArray.map((anObjectMapped, index) => {
                                                    return (
                                                        <tr key={anObjectMapped.id}>
                                                            <td>{anObjectMapped.name}</td>
                                                            <td>{anObjectMapped.username}</td>
                                                            <td>{anObjectMapped.role}</td>
                                                            <td>
                                                                <span className="btn btn-success btn-sm fa fa-plug" title="Disable account"></span>
                                                                <span className="btn btn-danger btn-sm fa fa-trash RemoverItem" onClick={() => this.RemoverUser(anObjectMapped.username,anObjectMapped.id)} id={anObjectMapped.id} title="Remove account"></span>
                                                            </td>      
                                                        </tr>
                                                        )
                                                },this)
                                            }
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
          </div>
        );     
  }
  
}

export default Users;