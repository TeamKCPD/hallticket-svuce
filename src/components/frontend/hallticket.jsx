import React from "react";
import logo from "./images/Sri_Venkateswara_University_logo.png";
import imag  from "./images/images.png";
import signature_p from "./images/download.png";
import signature_s from "./images/download (1).png";
import jsonData from '../../data.json'; 
 // Import the image
import 'bootstrap/dist/css/bootstrap.css';

const semesterData = jsonData.r20.ece.semesters[1]; // Assuming you want to fetch subjects from the first semester
const subjects = semesterData.subjects;
const courseElements = [];
const maxSubjects = 11;

for (let i = 0; i < maxSubjects; i++) {
  const subject = subjects[i] || {}; // Use an empty object if subject is not available

  courseElements.push(
    <div className="row" key={i + 1}>
      <div className="col-1">
        <th style={{ padding: '5px', fontSize: "14px" }}>{i + 1}</th>
      </div>
      <div className="col-3">
        <th style={{ padding: '5px', fontSize: "14px" }}>{subject.code || " "}</th>
      </div>
      <div className="col-6">
        <th colSpan="8" style={{ padding: '5px', fontSize: "14px", position: "absolute", marginLeft: "-50px" }}>{subject.name || " "}</th>
      </div>
      <div className="col-2">
        <th style={{ padding: '5px', fontSize: "14px", marginLeft: "-50px" }}>{subject.date || " "}</th>
      </div>
    </div>
  );
}



const Hallticket = () => (
    <div >
        <div className="header">
            <div className="row">
            <img className="col-2" style={{ width: "auto", height: "70px" }} src={logo} alt="logo" id="img-1" /> {/* Use the imported image */}
            <div className="col-8">
                <div className="row">
                <span className="col-12" style={{marginLeft:"45px", marginTop:"1px" , fontSize:"25px"}}id="span-1">Sri Venkateswara University</span>
                </div>
                <div className="row">
                <span className="col-12" style={{marginLeft:"85px",fontSize:"23px", marginTop:"-5px"}}>College of Engineering</span>
                </div>
            </div>
            <div style={{ position:"absolute",width: "120px", height: "60px", border: "1px solid black",marginLeft: "500px", marginTop: "10px" }}>
            <div className="col-2" style={{ fontSize: "40px", position: "absolute", marginLeft: "-7px", marginTop: "-3px"}}>
              CHEM
            </div>
            </div>

            </div>
            <div className="hallticket" style={{position:"relative" ,fontSize:"30px",marginBottom:"5px",marginLeft:"225px" }}>
            Hallticket
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="595" height="1px" style={{marginTop:"-1px"}}>
             <line x1="0" y1="0" x2="595" y2="0" stroke="black" strokeWidth="2" />
            </svg>
   
    
        

        </div>

      

        <div className="section2" style={{marginBottom:"0px",paddingBottom:"0px",fontWeight:"500"}}>
            <p style={{marginLeft:"10px", fontSize:"17px",}}>B-Tech (CBCS) <span>6</span> Semester <span>(Supplementary)</span> Examination of <span>DECEMBER,2023</span></p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="595" height="1px" style={{marginTop:"-45px"}}>
           <line x1="0" y1="0" x2="595" y2="0" stroke="black" strokeWidth="2" />
        </svg>
   
        <div className="section3" >
          <div className="col-12">
            <table className="section3-left table table-bordered" style={{ marginLeft: "0px", marginTop: "-20px", border: "1px solid black"}}>
            <tbody>
        <tr>
          <th colSpan="3" className="text-left" style={{ border: "1px solid black", padding: "5px" }}>Candidate Name:</th>
          <td  className="text-left" style={{ border: "1px solid black", padding: "5px" }}>Saivivek</td>
        </tr>
        <tr>
          <th colSpan="3" className="text-left" style={{ border: "1px solid black", padding: "5px" }}>Roll No:</th>
          <td className="text-left" style={{ border: "1px solid black", padding: "5px" }}>12004011</td>
        </tr>
        <tr>
          <th colSpan="3" className="text-left" style={{ border: "1px solid black", padding: "5px" }}>Date of Birth:</th>
          <td className="text-left" style={{ border: "1px solid black", padding: "5px" }}>10-09-2003</td>
        </tr>
        <tr>
          <th colSpan="3" className="text-left" style={{ border: "1px solid black", padding: "5px" }}>Exam Shift:</th>
          <td className="text-left" style={{ border: "1px solid black", padding: "5px" }}>Forenoon</td>
        </tr>
        <tr>
          <th style={{ padding: '5px' }} colSpan="5">Whether appearing for Whole Examination or for Subjects:</th>
          <td style={{ padding: '5px' }}>Yes</td>
        </tr>
        
        <tr>
          <th colSpan="2" style={{ padding: '5px' }}>Reporting Time</th>
          <td style={{ padding: '5px' }}>08:30 am</td>
          <th style={{ padding: '5px' }}>Closing Time</th>
          <td style={{ padding: '5px' }}>09:00 am</td>
          <td style={{ border: '1px solid black' }} colSpan="4"></td>
        </tr>
           </tbody>
           </table>
          </div>
         <div className="col-12">
             <img  style={{ width: "auto", height: "135px" ,marginTop:"-225px",marginLeft:"465px",position:"absolute"}} src={imag} alt="logo" id="img-1" /> {/* Use the imported image */}
         </div>
        </div>

      
       <div className="section5" style={{ position: "relative" }}>
  <div className="row" style={{ border: "1px solid black" }}>
    <div className="col-1">
      <th style={{ padding: '5px', fontSize: "14px", marginTop: "-2px", paddingTop: "6px" }}>S.No</th>
    </div>
    <div className="col-3">
      <th style={{ padding: '5px' }}>Course Code</th>
    </div>
    <div className="col-6">
      <th colSpan="8" style={{ padding: '5px' }}>Course Name</th>
    </div>
    <div className="col-2">
      <th style={{ padding: '5px', fontSize: "14px" }}>Exam Date</th>
    </div>
  </div>
  {courseElements}
</div>
       
       <div className="section6" style={{position:"",marginTop:"0px"}}>
       <div className="row" style={{width:"300px"}}>
        <div className="col-6">
            <img src={signature_p} style={{width:"auto", height:"50px"}} alt=""/>
        </div>
        <div className="col-6">
            <img src={signature_s} style={{width:"auto", height:"50px"}} alt=""/>
        </div>
       </div>
       <div className="row">
        <div className="col-6" style={{fontWeight:"400",marginLeft:"50px"}}>
            Principal Signature
        </div>
        <div className="col-6" style={{position:"",marginLeft:""}}>
            Student Signature
        </div>
       </div>

       </div>

       <div className="section7" style={{position:"absolute",marginTop:"10px"}}>
        <div className="row" >
            <div className="col-11" style={{position:"relative",marginLeft:"30px"}}>
                Please turn the page to read instructions
            </div>
            <div className="col-1" style={{marginLeft:"600px",position:"absolute"}}>
                P.T.O
            </div>
        </div>
       
      
       </div>
       
       </div>

       


       
);

export default Hallticket;
