(this.webpackJsonppower=this.webpackJsonppower||[]).push([[0],{31:function(e,s,t){},32:function(e,s,t){},56:function(e,s,t){"use strict";t.r(s);var a=t(0),r=t(2),n=t.n(r),c=t(24),i=t.n(c),l=(t(31),t(4)),o=t(5),d=t(7),h=t(6),m=(t(32),t(11)),j=t.n(m),b=(t(33),t(34),t(35),t(3)),g=t.n(b),u=t(9),A=t(1),p=t(10),O=t.n(p),v=t.p+"static/media/BudgetInsights-dark.5365b3be.png",w=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={name:"",email:"",userID:"",userRole:"",password:"",cpass:"",BtnDisable:!1,DisableUserBtn:!0,message:"",alert:"",showAlert:!1},a.UpdateProfile=a.UpdateProfile.bind(Object(A.a)(a)),a.NameChange=a.NameChange.bind(Object(A.a)(a)),a.EmailChange=a.EmailChange.bind(Object(A.a)(a)),a.passwordChange=a.passwordChange.bind(Object(A.a)(a)),a.cpasswordChange=a.cpasswordChange.bind(Object(A.a)(a)),a}return Object(o.a)(t,[{key:"NameChange",value:function(e){var s=e.target.value;this.setState({name:s})}},{key:"passwordChange",value:function(e){var s=e.target.value;this.setState({password:s})}},{key:"cpasswordChange",value:function(e){var s=e.target.value;this.setState({cpass:s})}},{key:"EmailChange",value:function(e){var s=e.target.value;this.setState({email:s})}},{key:"componentDidMount",value:function(){this.setState({name:localStorage.getItem("Name"),userRole:localStorage.getItem("userRole"),userID:localStorage.getItem("userID"),email:localStorage.getItem("Username")}),"admin"===localStorage.getItem("userRole")&&this.setState({DisableUserBtn:!1})}},{key:"UpdateProfile",value:function(){var e=this,s=this.state.name,t=this.state.email,a=this.state.userID,r=this.state.password,n=this.state.cpass,c=function(){var a=Object(u.a)(g.a.mark((function a(r){var n,c;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.get(r,{crossdomain:!0});case 2:n=a.sent,"100"===(c=n.data)[0].status?(e.setState({message:c[0].Message,alert:"alert alert-success",showAlert:!0}),localStorage.setItem("Username",t),localStorage.setItem("Name",s),setTimeout((function(){window.location.reload(!0)}),1e4)):e.setState({message:c[0].Message,alert:"alert alert-danger",showAlert:!0});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();""===s&&""===t?this.setState({message:"Please provide all details",alert:"alert alert-danger",showAlert:!0}):(""!==r&&""!==n?r!==n?this.setState({message:"Passwords details does not match",alert:"alert alert-danger",showAlert:!0}):c("http://rockstreet.co.za/requestPowerbi/login.php?update=yes&email="+t+"&username="+s+"&usID="+a+"&pass="+r+"&passwordChange=Yes"):c("http://rockstreet.co.za/requestPowerbi/login.php?update=yes&email="+t+"&username="+s+"&usID="+a+"&pass="+r+"&passwordChange=No"),this.setState({message:"Let's go",alert:"alert alert-success",showAlert:!0}))}},{key:"Users",value:function(){localStorage.setItem("Page","Users"),window.location.reload(!0)}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"Row ProfilePage",children:Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("h2",{children:[Object(a.jsx)("span",{className:"fa fa-user userIcon"})," Hi ",this.state.name]})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("p",{children:["Manage users ",Object(a.jsx)("button",{disabled:this.state.DisableUserBtn,className:"btn btn-primary",onClick:this.Users,children:"Manage Users"})]})})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-8",children:[Object(a.jsx)("h2",{children:"Manage your profile"}),Object(a.jsx)("p",{children:"NB: Leave the password's empty, if you do not wish to change it."}),Object(a.jsx)("p",{className:this.state.alert,children:this.state.message}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",value:this.state.name,onChange:this.NameChange,id:"UserEmail"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email Address"}),Object(a.jsx)("input",{type:"Email",placeholder:"Email address",className:"form-control",value:this.state.email,onChange:this.EmailChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Account Role"}),Object(a.jsx)("input",{type:"text",placeholder:"Account Role",className:"form-control",value:this.state.userRole,readOnly:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",value:this.state.password,onChange:this.passwordChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Confirm password"}),Object(a.jsx)("input",{type:"password",placeholder:"Confirm password",className:"form-control",value:this.state.cPass,onChange:this.cpasswordChange})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{disabled:this.state.BtnDisable,value:"Login",onClick:this.UpdateProfile,className:"btn btn-warning form-control",name:"sign in",id:"SubmitBtn",children:"Update profile"})})]})})]})})})})}}]),t}(n.a.Component),f=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={isLoggedIn:!0,Stage:"Dashboard",changeStage:!1},a.SetLogout=a.SetLogout.bind(Object(A.a)(a)),a.ProfileOpen=a.ProfileOpen.bind(Object(A.a)(a)),a.DashboardOpen=a.DashboardOpen.bind(Object(A.a)(a)),a}return Object(o.a)(t,[{key:"SetLogout",value:function(){localStorage.removeItem("LoggedIn"),localStorage.removeItem("Username"),localStorage.removeItem("userID"),localStorage.removeItem("ExpireDate"),localStorage.removeItem("userRole"),localStorage.removeItem("Page"),localStorage.removeItem("Name"),window.location.reload(!0)}},{key:"ProfileOpen",value:function(){localStorage.setItem("Page","Profile"),window.location.reload(!0)}},{key:"DashboardOpen",value:function(){localStorage.setItem("Page","Dashboard"),window.location.reload(!0)}},{key:"componentDidMount",value:function(){var e=(new Date).getTime();if(localStorage.getItem("ExpireDate")<=e)localStorage.removeItem("Username"),localStorage.removeItem("LoggedIn"),localStorage.removeItem("ExpireDate"),localStorage.removeItem("userID"),localStorage.removeItem("userRole"),localStorage.removeItem("Page"),localStorage.removeItem("Name"),window.location.reload(!0);else{var s=(new Date).getTime()+3600600;localStorage.setItem("ExpireDate",s)}j()("document").ready((function(){j()(".sideNavs").hide(),j()(".MenuTrigure").click((function(){j()(".sideNavs").slideToggle({direction:"left"},1e3)}))}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"row topNavsSide",children:[Object(a.jsx)("div",{className:"col-md-2",children:Object(a.jsx)("img",{src:v,onClick:this.DashboardOpen,className:"img-responsive LogoNav",alt:"Budget Insight Logo"})}),Object(a.jsx)("div",{className:"col-md-9"})]}),Object(a.jsxs)("div",{className:"row navigations",children:[Object(a.jsx)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css",integrity:"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",crossOrigin:"anonymous"}),Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark",children:[Object(a.jsx)("span",{children:"\xa0"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(a.jsx)("span",{className:"fa fa-bars"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:[Object(a.jsxs)("ul",{className:"navbar-nav leftNav",children:[Object(a.jsxs)("li",{className:"nav-item activated",onClick:this.DashboardOpen,children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAHhlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACWAAAAAQAAAJYAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAB+gAwAEAAAAAQAAAB8AAAAAwmT6KAAAAAlwSFlzAAAXEgAAFxIBZ5/SUgAAAjZJREFUSA3tls1LVFEYh6cP0xpLEmzRXhkKIwihbeVOcNHGaqGzdOPCXdHCjSD0P0QUFCi4LCFK3PSBLVuJtQiUwIrQLPMj8/npnMvhds/Me4c7M5t+8Mz5et/znnPue8+dXM6mdswm4DlcsLlkY9XENDPwt8QPygJUo5s4TULR6pzHcAlc8D/Ur1udPbtb3hyaq/+wNxiq/mZgwRuUT6fXtla1a1/jfiNUv8TAN7gP0zAEP+ERtIJF5zD6CO70VA5WcuzG4BcMxAw7aE/BV7gSG/ObzTQewjoMgwJqAyOgXArqNCOf4F7Q4mAS5cBdUG5oUfI7AlrUCryDs5BKr7F+YPA4j81beA96E77Am1IZf850l5cS6gksQkt502i0l5pOwD3TZerHotFA5WhC/yh9l0GJpky3SIv035wN2jp6k85gdRWKsAMFSKNDGL8C7X4LtAGTLmK1Bu7I7pi8ko166E618BdeYC3gafK82ffqOc3HplWi1U2niDQLu/CshlGVF9qsQ+1IJ6Pav5XjdLWV0GKr0WOcdA98h1WYg4o6gcUHUCaLbeiDtHqJg0tqlZtJ73l8Uh1THlRKOi7rB2XfIfTjJgyNu36t1Fe87Y+Z65adWybTX6vb4Daj61X3hS6coLIKrovlBrgM/kx9DMoGdyvFrv5qaHAdu/6tdIGSSItZAH2bay4F14df77ILrtvuGtRcCi6UKC5ZMnmNLCvXMbugzj7edv2Zlw1NuP/BM3+elgn3AJBBZF2+WjeGAAAAAElFTkSuQmCC",alt:"Budget Icon",className:"img-responsive Icon1"})," ",Object(a.jsx)("span",{className:"sideName",children:"Budget Analysis and Forecasting"})]}),Object(a.jsxs)("li",{className:"nav-item",children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",className:"img-responsive Icon2",alt:"User Guide Icon"})," ",Object(a.jsx)("span",{className:"sideName",children:"User Guide"})]})]}),Object(a.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsxs)("span",{className:"nav-link dropdown-toggle",id:"navbardrop","data-toggle":"dropdown",children:[Object(a.jsx)("i",{className:"fas fa-cog"}),"  Settings"]}),Object(a.jsx)("div",{className:"dropdown-menu Settingsdrop",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{onClick:this.ProfileOpen,children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"fa fa-user"})}),"  ",Object(a.jsx)("span",{className:"sideName",children:"My Profile"})]}),Object(a.jsxs)("li",{onClick:this.SetLogout,children:[Object(a.jsx)("span",{children:Object(a.jsx)("i",{className:"fa fa-cog"})}),"  ",Object(a.jsx)("span",{className:"sideName",children:"Logout"})]})]})})]})})]})]})})]})]})}}]),t}(n.a.Component),x=t(25),N=t(13),S=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).deleteUser=function(){var e=Object(u.a)(g.a.mark((function e(s,t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://rockstreet.co.za/requestPowerbi/login.php?RemoveUser=yes&username="+s+"&id="+t,{crossdomain:!0});case 2:r=e.sent,"100"===r.data[0].status?a.setState({alert:"alert alert-success",showAlert:!0,message:"User successfully deleted"}):a.setState({alert:"alert alert-danger",showAlert:!0,message:"An error occured, please try again later"});case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),a.getList=Object(u.a)(g.a.mark((function e(){var s,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://rockstreet.co.za/requestPowerbi/login.php?ListAllUsers=yes",{crossdomain:!0});case 2:s=e.sent,t=s.data[0].data,a.setState({DataList:t});case 5:case"end":return e.stop()}}),e)}))),a.state={name:"",email:"",userID:"",userRole:"",password:"",cpass:"",BtnDisable:!1,DisableUserBtn:!0,message:"",alert:"",showAlert:!1,DataList:""},a.deleteUser=a.deleteUser.bind(Object(A.a)(a)),a.getList=a.getList.bind(Object(A.a)(a)),a.AddUsers=a.AddUsers.bind(Object(A.a)(a)),a.RemoverUser=a.RemoverUser.bind(Object(A.a)(a)),a}return Object(o.a)(t,[{key:"RemoverUser",value:function(e,s){console.log("Found:"+s+" >"+e),this.deleteUser(e,s)}},{key:"AddUsers",value:function(){localStorage.setItem("Page","AddUser"),window.location.reload(!0)}},{key:"componentDidMount",value:function(){this.getList(),"admin"===localStorage.getItem("userRole")&&this.setState({DisableUserBtn:!1})}},{key:"render",value:function(){var e=this,s=this.state.DataList,t=Array.from(s);return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"Row ProfilePage",children:Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsx)("h2",{children:" Manage users"})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("p",{children:["Add new user ",Object(a.jsx)("button",{disabled:this.state.DisableUserBtn,className:"btn btn-primary",onClick:this.AddUsers,children:"Add new"})]})})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("p",{className:this.state.alert,disabled:this.state.ShowAlrt,children:this.state.message}),Object(a.jsxs)("table",{className:"table table-condensed table-bordered table-hover table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Email address"}),Object(a.jsx)("th",{children:"Role"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:t.map((function(s,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:s.name}),Object(a.jsx)("td",{children:s.username}),Object(a.jsx)("td",{children:s.role}),Object(a.jsxs)("td",{children:[Object(a.jsx)("span",{className:"btn btn-success btn-sm fa fa-plug",title:"Disable account"}),Object(a.jsx)("span",{className:"btn btn-danger btn-sm fa fa-trash RemoverItem",onClick:function(){return e.RemoverUser(s.username,s.id)},id:s.id,title:"Remove account"})]})]},s.id)}),this)})]})]})})})})}}]),t}(n.a.Component),C=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={name:"",email:"",userRole:"",password:"",message:"",alert:"",ShowAlrt:!0},a.RoleSelect=a.RoleSelect.bind(Object(A.a)(a)),a.Namechange=a.Namechange.bind(Object(A.a)(a)),a.Emailchange=a.Emailchange.bind(Object(A.a)(a)),a.Passwordchange=a.Passwordchange.bind(Object(A.a)(a)),a.returnBack=a.returnBack.bind(Object(A.a)(a)),a.AddUsers=a.AddUsers.bind(Object(A.a)(a)),a}return Object(o.a)(t,[{key:"Namechange",value:function(e){this.setState({name:e.target.value})}},{key:"Emailchange",value:function(e){this.setState({email:e.target.value})}},{key:"Passwordchange",value:function(e){this.setState({password:e.target.value})}},{key:"RoleSelect",value:function(e){this.setState({userRole:e.target.value})}},{key:"returnBack",value:function(){localStorage.setItem("Page","Users"),window.location.reload(!0)}},{key:"AddUsers",value:function(){var e=this,s=this.state.name,t=this.state.email,a=this.state.password,r=this.state.userRole;""!==s&&""!==t&&""!==a?(function(){var n=Object(u.a)(g.a.mark((function n(){var c,i;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.a.get("https://rockstreet.co.za/requestPowerbi/login.php?inviteUsers=yes&name="+s+"&email="+t+"&password="+a+"&role="+r,{crossdomain:!0});case 2:c=n.sent,"100"===(i=c.data)[0].status?e.setState({alert:"alert alert-success",ShowAlrt:!0,message:i[0].Message}):e.setState({alert:"alert alert-danger",ShowAlrt:!0,message:i[0].Message});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),console.log("Name: "+s+" Email: "+t+" Password: "+a+" Role: "+r)):this.setState({alert:"alert alert-danger",ShowAlrt:!0,message:"Please provide all fields"})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"Row ProfilePage",children:Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("h2",{children:[Object(a.jsx)("span",{className:"fa fa-arrow-left",onClick:this.returnBack})," Add New user"]})}),Object(a.jsx)("div",{className:"col-md-4"})]}),Object(a.jsx)("p",{className:this.state.alert,disabled:this.state.ShowAlrt,children:this.state.message}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-8",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",value:this.state.name,onChange:this.Namechange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email Address"}),Object(a.jsx)("input",{type:"email",placeholder:"Email address",className:"form-control",value:this.state.email,onChange:this.Emailchange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"User role"}),Object(a.jsxs)("select",{className:"form-control",onChange:this.RoleSelect,children:[Object(a.jsx)("option",{value:"---",defaultValue:!0,children:"---"}),Object(a.jsx)("option",{value:"User",children:"User"}),Object(a.jsx)("option",{value:"Admin",children:"admin"})]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",value:this.state.password,onChange:this.Passwordchange})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{className:"btn btn-warning",onClick:this.AddUsers,children:"Add user"})})]})})]})})})})}}]),t}(n.a.Component),k=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"row footer",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("center",{children:Object(a.jsx)("p",{children:"Copyrights reserved \xa9 2020"})})})})}}]),t}(n.a.Component),P=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).fetch_report=function(){var e=Object(u.a)(g.a.mark((function e(s,t,r){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://www.rockstreet.co.za/requestPowerbi/index.php?groupId="+t+"&reportId="+s,{crossdomain:!0});case 2:100===(n=e.sent).data.status?a.setState({Session_reportID:s,Session_groupID:t,embedToken:n.data.Access_token,embedUrl:r}):a.setState({Session_reportID:"",Session_groupID:"",embedToken:""});case 4:case"end":return e.stop()}}),e)})));return function(s,t,a){return e.apply(this,arguments)}}(),a.state={Session_reportID:"",Session_groupID:"",embedToken:"",embedUrl:""},a.fetch_report=a.fetch_report.bind(Object(A.a)(a)),a}return Object(o.a)(t,[{key:"componentDidMount",value:function(){"Dashboard"===localStorage.getItem("Page")&&this.fetch_report("a7214fab-db79-4c47-b0e4-0f8459f82902","64624e88-b93c-40df-82f6-1bff548c6e0e","https://app.powerbi.com/view?r=eyJrIjoiZGVkYTU3MDQtNTEzYi00NDA0LWEzYzMtZWUxMzM3YjBmNmQwIiwidCI6IjRlMmZkZDA3LWVhNGUtNDYyNy1hZWYzLTVmZTJhM2MxMTEzOSJ9")}},{key:"render",value:function(){switch(localStorage.getItem("Page")){case"Profile":return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{profile:this.state.Session_groupID}),Object(a.jsx)(w,{}),Object(a.jsx)(k,{})]});case"Users":return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{profile:this.state.Session_groupID}),Object(a.jsx)(S,{}),Object(a.jsx)(k,{})]});case"AddUser":return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{profile:this.state.Session_groupID}),Object(a.jsx)(C,{}),Object(a.jsx)(k,{})]});default:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{profile:this.state.Session_groupID}),Object(a.jsx)("div",{children:Object(a.jsx)(x.PowerBIEmbed,{embedConfig:{type:"report",id:this.state.Session_reportID,embedUrl:this.state.embedUrl,accessToken:this.state.embedToken,tokenType:N.models.TokenType.Embed,settings:{panes:{filters:{visible:!1},pageNavigation:{visible:!1}}}},cssClassName:"report-style-class"})})]})}}}]),t}(n.a.Component),I=t.p+"static/media/BudgetInsights.90adccb4.png",y=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={userName:"",password:"",alert:"",message:"",emailErr:"",showEmailError:!1,showAlert:!1,BtnDisable:!1,isStage:"",changeStage:!1,successLogin:!1,sessionName:"",cPass:"",cPasswd:"",cPassError:!1,passError:!1,cPassMessage:"",cPassTxt:""},a.grantLogin=a.grantLogin.bind(Object(A.a)(a)),a.emailChange=a.emailChange.bind(Object(A.a)(a)),a.passChange=a.passChange.bind(Object(A.a)(a)),a.forgotPassword=a.forgotPassword.bind(Object(A.a)(a)),a.login=a.login.bind(Object(A.a)(a)),a.LoginSet=a.LoginSet.bind(Object(A.a)(a)),a.AboutUs=a.AboutUs.bind(Object(A.a)(a)),a.CpassChange=a.CpassChange.bind(Object(A.a)(a)),a.passwordChange=a.passwordChange.bind(Object(A.a)(a)),a.resetBtnPassword=a.resetBtnPassword.bind(Object(A.a)(a)),a.doPasswordReset=a.doPasswordReset.bind(Object(A.a)(a)),a}return Object(o.a)(t,[{key:"emailChange",value:function(e){var s=e.target.value;s.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")?this.setState({emailErr:"",showEmailError:!1,BtnDisable:!1,userName:s}):this.setState({emailErr:"Invalid email format",showEmailError:!0,BtnDisable:!0,userName:s})}},{key:"passChange",value:function(e){var s=e.target.value;this.setState({BtnDisable:!1,password:s})}},{key:"passwordChange",value:function(e){var s=e.target.value;s.length<6?this.setState({passError:!0,cPass:s,cPassMessage:"Passsword has to be more than 6 Characters",BtnDisable:!0}):this.setState({cPass:s,passError:!1,cPassMessage:"",BtnDisable:!1})}},{key:"CpassChange",value:function(e){var s=e.target.value;s.length<6?this.setState({passError:!0,cPassTxt:s,cPasswd:"Confirm password has to be more than 6 Characters",BtnDisable:!0}):this.state.cPass!=s?this.setState({cPassTxt:s,cPassError:!0,cPasswd:"Passwords doesn't match",BtnDisable:!0}):this.setState({cPassTxt:s,cPassError:!1,cPasswd:"",BtnDisable:!1})}},{key:"LoginSet",value:function(){this.setState({successLogin:!0,isStage:"SetLogin",changeStage:!0,message:""})}},{key:"grantLogin",value:function(e){var s=this;if(""!==this.state.userName&&""!==this.state.password){this.state.userName.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")?this.setState({emailErr:"",showEmailError:!1,BtnDisable:!1,userName:this.state.userName}):this.setState({emailErr:"Invalid email format",showEmailError:!0,BtnDisable:!0,userName:this.state.userName});var t=function(){var e=Object(u.a)(g.a.mark((function e(){var t,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://www.rockstreet.co.za/requestPowerbi/login.php?username="+s.state.userName+"&password="+s.state.password,{crossdomain:!0});case 2:t=e.sent,"100"===(a=t.data)[0].status?(s.setState({successLogin:!0,isStage:"dashboard",changeStage:!0,message:"",alert:"",showAlert:!1,sessionName:a[0].data.username}),r=(new Date).getTime()+3600600,localStorage.setItem("LoggedIn",!0),localStorage.setItem("Page","Dashboard"),localStorage.setItem("userID",a[0].data.id),localStorage.setItem("ExpireDate",r),localStorage.setItem("userRole",a[0].data.role),localStorage.setItem("Username",a[0].data.username),localStorage.setItem("Name",a[0].data.name)):s.setState({successLogin:!1,isStage:"SetLogin",changeStage:!1,message:a[0].Message,alert:"alert alert-danger",showAlert:!0,sessionName:""});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();""!==this.state.userName&&""!==this.state.password?t():this.setState({message:"Invalid email/password credentials",alert:"alert alert-danger",showAlert:!0})}else this.setState({message:"Please provide your email address and password",alert:"alert alert-danger",showAlert:!0})}},{key:"forgotPassword",value:function(e){this.setState({isStage:"resetPassword",changeStage:!0})}},{key:"AboutUs",value:function(e){this.setState({isStage:"AboutUs",changeStage:!0})}},{key:"doPasswordReset",value:function(){}},{key:"resetBtnPassword",value:function(){var e=this,s=this.state.cPass,t=this.state.cPassTxt,a=this.state.userName,r=function(){var t=Object(u.a)(g.a.mark((function t(){var r,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://www.rockstreet.co.za/requestPowerbi/login.php?ResetPassword=true&Email="+a+"&newpassword="+s,{crossdomain:!0});case 2:r=t.sent,"100"===(n=r.data)[0].status?e.setState({changeStage:!0,message:n[0].Message+" Go back to login",alert:"alert alert-success",showAlert:!0}):e.setState({message:n[0].Message,alert:"alert alert-danger",showAlert:!0});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();""!==s&&""!==t&&""!==a?s===t?(console.log("Ready to transact"),r()):this.setState({message:"Password details doesnt match",alert:"alert alert-danger",showAlert:!0}):this.setState({message:"Please provide all fields",alert:"alert alert-danger",showAlert:!0})}},{key:"login",value:function(e){this.setState({changeStage:!1})}},{key:"render",value:function(){if(localStorage.getItem("LoggedIn"))return document.querySelector("body").style.background="white",Object(a.jsx)(P,{});if(!this.state.changeStage)return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-6 LoginColumn",children:[Object(a.jsx)("center",{children:Object(a.jsx)("img",{src:I,className:"img-responsive LoginLogo",alt:"Budget Insight Logo"})}),Object(a.jsx)("p",{className:this.state.alert,children:this.state.message}),Object(a.jsx)("div",{className:"panel panel-default loginForm",children:Object(a.jsxs)("div",{className:"panel-body",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",placeholder:"Email address",className:"form-control",value:this.state.userName,onChange:this.emailChange,id:"UserEmail",required:!0}),Object(a.jsx)("span",{className:"email_error",disabled:this.state.showEmailError,children:this.state.emailErr})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",value:this.state.password,onChange:this.passChange,id:"userPass",required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("span",{disabled:this.state.BtnDisable,value:"Login",onClick:this.grantLogin,className:"btn btn-success form-control",name:"sign in",id:"SubmitBtn",children:"Sign in"})})]})}),Object(a.jsx)("p",{className:"passwordreset",onChange:this.state.forgotPassword,onClick:this.forgotPassword,children:"Forgot password?"})]})})});switch(this.state.isStage){case"resetPassword":return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-6 LoginColumnFgtpassword",children:[Object(a.jsx)("center",{children:Object(a.jsx)("img",{src:I,className:"img-responsive LoginLogo",alt:"Budget Insight Logo"})}),Object(a.jsx)("p",{className:this.state.alert,children:this.state.message}),Object(a.jsx)("div",{className:"panel panel-default loginForm",children:Object(a.jsxs)("div",{className:"panel-body",children:[Object(a.jsx)("h3",{children:"Reset your Password"}),Object(a.jsx)("p",{children:"Enter the following details to reset your password"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"text",placeholder:"Email address",className:"form-control",value:this.state.userName,onChange:this.emailChange,id:"UserEmail",required:!0}),Object(a.jsx)("span",{className:"email_error",disabled:this.state.showEmailError,children:this.state.emailErr})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",value:this.state.cPass,onChange:this.passwordChange,id:"UserEmail",required:!0}),Object(a.jsx)("span",{className:"email_error",disabled:this.state.passError,children:this.state.cPassMessage})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"password",placeholder:"Confirm password",className:"form-control",value:this.state.cPassTxt,onChange:this.CpassChange,id:"UserEmail",required:!0}),Object(a.jsx)("span",{className:"email_error",disabled:this.state.cPassError,children:this.state.cPasswd})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{disabled:this.state.BtnDisable,value:"Login",onClick:this.resetBtnPassword,className:"btn btn-warning form-control",name:"sign in",id:"SubmitBtn",children:"Reset password"})})]})}),Object(a.jsx)("p",{className:"Loginatempt",onChange:this.state.login,onClick:this.login,children:"Back to Login"})]})})});case"dashboard":return Object(a.jsx)(P,{username:this.state.username});case"AboutUs":return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"row HeadingHome",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark",children:Object(a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{onClick:this.LoginSet,children:Object(a.jsx)("span",{children:"Login"})}),Object(a.jsx)("li",{onClick:this.AboutUs,children:Object(a.jsx)("span",{children:"About us"})})]})})})}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-6 LoginColumn",children:Object(a.jsx)("h1",{children:"About us"})})})})]});default:this.setState({changeStage:!1})}}}]),t}(n.a.Component),U=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(y,{})})}}]),t}(n.a.Component),D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(s){var t=s.getCLS,a=s.getFID,r=s.getFCP,n=s.getLCP,c=s.getTTFB;t(e),a(e),r(e),n(e),c(e)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),D()}},[[56,1,2]]]);
//# sourceMappingURL=main.faedb8cb.chunk.js.map