import React, { useState } from "react";
import { collection, addDoc ,setDoc,doc} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, } from "../../firebase";
import "./css/HallTicketForm.css";

const NewPage = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [ExamType, setExamType] = useState("");
  const [regulation, setRegulation] = useState("");
  const [semester, setSemester] = useState("");
  const [subjectList, setSubjectList] = useState("");
  const [Courses, setCourses] = useState("");
  const [paymentRefNo, setPaymentRefNo] = useState("");
  const [date, setDate] = useState("");
  const [dob, setdob] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    // Create a unique filename for the uploaded file
    const fileName = `paymentReceipt_${Date.now()}`;

    // Reference to the storage location where the file will be uploaded
    const storageRef = ref(getStorage(), '${fileName}');

    // Get the file input element
    const fileInput = document.getElementById("paymentReceipt");

    const formData = {
      name,
      rollNo,
      branch,
      ExamType,
      regulation,
      semester,
      subjectList,
      Courses,
      paymentRefNo,
      date,
      dob
    };

    try {

      await uploadBytes(storageRef, fileInput.files[0]);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);
  
      // Add the download URL to the form data
      formData.paymentReceiptURL = downloadURL;
  
      const docRef = await setDoc(doc(collection(db, "studentData"), rollNo), formData);

      console.log("Document written with ID: ", rollNo);
      setName("");
      setRollNo("");
      setBranch("");
      setExamType("");
      setRegulation("");
      setSemester("");
      setSubjectList("");
      setCourses("");
      setPaymentRefNo("");
      setDate("");
      setdob("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h1>New Page</h1>
      <form onSubmit={handleSubmit} className="hall-ticket-form" method="POST">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="dob">Select Your DOB:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setdob(e.target.value)}
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
          <option value="Supplementary">Supplementary</option>
        </select>

        <label htmlFor="regulation">Select Your Regulation:</label>
        <select
          id="regulation"
          value={regulation}
          onChange={(e) => setRegulation(e.target.value)}
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
        <option value="sem1">I</option>
        <option value="sem2">II</option>
        <option value="sem3">III</option>
        <option value="sem4">IV</option>
        <option value="sem5">V</option>
        <option value="sem6">VI</option>
        <option value="sem7">VII</option>
        <option value="sem8">VIII</option>
        </select>

        <label htmlFor="subjectList">Whether the Candidate appearing for Whole Examination or for select Courses:</label>
        <select
          id="subjectList"
          value={subjectList}
          onChange={(e) => setSubjectList(e.target.value)}
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
              value={Courses}
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
          accept=".png,.jpg,.jpeg"
          required
        />

        <label htmlFor="paymentRefNo">Challan No./Payment Reference No:</label>
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
    </div>
  );
};

export default NewPage;
