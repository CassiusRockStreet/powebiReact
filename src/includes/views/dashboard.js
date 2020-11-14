import React from 'react';
import Axios from 'axios';
import Heading from '../header';
import { PowerBIEmbed} from 'powerbi-client-react';
import { models} from 'powerbi-client';
//Report, Embed, IEmbedConfiguration, service, Page 

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            Session_reportID: "",
            Session_groupID: "",
            embedToken:"",
            embedUrl:""
        });
        this.fetch_report = this.fetch_report.bind(this);
    }
    
    // fetchReport
    fetch_report = async (reportID,groupID,URL)=>{
        const getReport = await Axios.get('https://www.rockstreet.co.za/requestPowerbi/index.php?groupId='+groupID+'&reportId='+reportID+'',
            {
                crossdomain: true
            // headers: {
            //   'Access-Control-Allow-Origin': true,
            //     },
            });
        // console.log(getReport['data']);
        if(getReport['data']['status'] === 100){
              this.setState({
                Session_reportID:reportID,
                Session_groupID:groupID,
                embedToken:getReport['data']['Access_token'],
                embedUrl: URL
            });
        }else{
              this.setState({
                Session_reportID:"",
                Session_groupID:"",
                embedToken:""
            });
        }
    }

    componentDidMount(){
        //ReportId |  Group ID | Embed url
        this.fetch_report("a7214fab-db79-4c47-b0e4-0f8459f82902","64624e88-b93c-40df-82f6-1bff548c6e0e","https://app.powerbi.com/reportEmbed?reportId=a7214fab-db79-4c47-b0e4-0f8459f82902&groupId=64624e88-b93c-40df-82f6-1bff548c6e0e&autoAuth=true&ctid=4e2fdd07-ea4e-4627-aef3-5fe2a3c11139&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWFmcmljYS1ub3J0aC1hLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D");
    }
  render(){
    // console.log(" Embed Details: "+this.state.Session_reportID+ " > " +this.state.embedUrl+" > "+this.state.embedToken);
      return (
          
          <>
          <Heading/>
            <div>
                <PowerBIEmbed
                    embedConfig = {{
                        type: 'report',  // Supported types: report, dashboard, tile, visual and qna
                        id: this.state.Session_reportID, 
                        embedUrl: this.state.embedUrl,
                        accessToken:this.state.embedToken,    // Keep as empty string, null or undefined
                        tokenType: models.TokenType.Embed,
                        settings: {
                            panes: {
                                filters: {
                                    visible: false
                                },
                                pageNavigation: {
                                    visible: false
                                }
                            }
                        }
                    }}
                    cssClassName = { "report-style-class"}
                />
            </div>
            </>
        );
        
  }
  
}

export default Dashboard;