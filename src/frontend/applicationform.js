import React, { useState } from 'react';
import './css/HallTicketForm.css';

const HallTicketForm = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [ExamType, setExamType] = useState('');
  const [paymentRefNo, setPaymentRefNo] = useState('');
  const [date, setDate] = useState('');
  const [subjectList , setSubjectlist] = useState('');
  const [Course , setCourses] = useState('');
  const [file, setFile] = useState(null);
  const [regulation, setregulation] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission here
    // You can perform validation and API calls

    // Reset form fields
    setName('');
    setRollNo('');
    setBranch('');
    setSemester('');
    setExamType('');
    setPaymentRefNo('');
    setDate('');
    setSubjectlist('');
    setCourses('');
    setFile(null);
    setregulation('');

  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit} className="hall-ticket-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="rollNo">Roll No:</label>
      <input
        type="text"
        id="rollNo"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        required
      />

      <label htmlFor="branch">Branch:</label>
      <select
        id="branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        required
      >
        <option value="">Select Branch</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="Mech">Mech</option>
        <option value="Civil">Civil</option>
        <option value="EEE">EEE</option>
        <option value="Chem">Chem</option>
      </select>

      
      <label htmlFor="ExamType">Exam-Type:</label>
      <select
        id="ExamType"
        value={ExamType}
        onChange={(e) => setExamType(e.target.value)}
        required
        
      >
        <option value="">Select Exam-Type</option>
        <option value="Regular">Regular</option>
        <option value="Supplemenatary">Supplemenatary</option>

       </select>

       <label htmlFor="regulation">Select Your Regulation:</label>
      <select
        id="regulation"
        value={regulation}
        onChange={(e) => setBranch(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option value="r20">R-20</option>
        <option value="r18">R-18</option>
        <option value="r16">R-16</option>
        <option value="r14">R-14</option>
        
      </select>

       <label htmlFor="semester">Select the Semester you are Applying for:</label>
      <select
        id="semester"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
        required
      >
        <option value="">Select Semester</option>
        <option value="1">First</option>
        <option value="2">second</option>
        <option value="3">Third</option>
        <option value="4">Fourth</option>
        <option value="5">Fifth</option>
        <option value="6">Sixth</option>
        <option value="7">Seventh</option>
        <option value="8">Eight</option>
      </select>

      <label htmlFor="subjectList">Whether the Candidate appearing for Whole Examination or for select Courses:</label>
          <select
            id="subjectList"
            value={subjectList}
            onChange={(e) => setSubjectlist(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="Whole">Whole</option>
            <option value="SelectCourses">Select-Courses</option>
          </select>

          {subjectList === 'SelectCourses' && (
            <>
              <label htmlFor="course">Select the Courses that you are Applying for:</label>
              <select
                id="course"
                value={Course}
                onChange={(e) => setCourses(e.target.value)}
                required
              >
                <option value="">Select Course</option>
                <option value="M1-050">Engineering Maths</option>
              </select>
            </>
          )}

      <label htmlFor="paymentReceipt">Upload Payment Receipt or Scanned Copy of Challan:</label>
      <input
        type="file"
        id="paymentReceipt"
        accept=".pdf,.png,.jpg,.jpeg"
        onChange={handleFileChange}
        required
      />    

      <label htmlFor="paymentRefNo">Challan No:/Payment Reference No:</label>
      <input
        type="text"
        id="paymentRefNo"
        value={paymentRefNo}
        onChange={(e) => setPaymentRefNo(e.target.value)}
        required
      />

     <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default HallTicketForm;
