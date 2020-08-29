import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const Contact = () => {

    return(
        <div>
            <Navbar/>
        <div className="container">
        <div className="row">
          <div className="col-md-8" id="content">
            <div className="page-header">
              <h1>Beep Me</h1>
            </div>

            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="exampleInputEmail1" className="form">Name</label>
                  <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Name"/>
                </div><br/>
                <div className="form-group col-md-12">
                  <label for="exampleInputEmail1" className="form">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                </div><br/>
                <div className="form-group col-md-12">
                  <label for="exampleInputEmail1"className="form">Message</label>
                  <textarea className="form-control" rows="5"></textarea>
                </div><br/>
              </div>
              <div style={{textAlign:"center"}}>
              <a href = "mailto: Diemrosely@gmail.com" target = "_blank" className="btn btn-primary, form">High Five!</a>
              </div>
            </form>
<br/><br/>
          </div>
              <div className="col-md-4" id="panel">
                <div className="panel panel-default">
                  <div className="panel-body" style={{ textAlign:"center"}}>
                    <a href="https://github.com/Diemrosely" target="_blank">
                      <img src={require("../assets/Images/github.png")} className="social" alt="GitHub"
                        style={{width: "50px", height:"50px"}}/>
                    </a>
                    <br/><br/><br/>
                    <a href="https://www.linkedin.com/in/diem-ly-5804b774/" target="_blank">
                      <img src={require("../assets/Images/linkedin2.png")} className="social" alt="LinkedIn"
                        style={{width: "50px", height:"50px"}}/>
                    </a>
                    <br/><br/><br/>
                    <a href={require("../assets/files/DiemLyResume.pdf")}  target="_blank">
                      <img src={require("../assets/Images/resumeicon.png")} className="social" alt="Resume"
                        style={{width: "50px", height:"50px"}}/> Click here!
                        </a>
                    
                    <br/><br/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
        
    )
}
export default Contact;