import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-Ke-BdidiqEeI_wDzUZD1Nq_1YhF9uQA",
  authDomain: "hallticket-svu.firebaseapp.com",
  projectId: "hallticket-svu",
  storageBucket: "hallticket-svu.appspot.com",
  messagingSenderId: "36788419433",
  appId: "1:36788419433:web:ab9ad966928d0de7aa9bf8",
  measurementId: "G-KX15KD58D2"
};

firebase.initializeApp(firebaseConfig);

// Import any additional components or libraries you may need
const AdminHallticketForm = () => {
  // State variables for form data
  const [regulation, setRegulation] = useState('');
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');
  const [shift, setShift] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const firestore = firebase.firestore();
      const collectionRef = firestore.collection('studentData');
      const approvedStudentsCollectionRef = firestore.collection('approvedstudents');
      const generatedStudentsCollectionRef = firestore.collection('generatedStudents');

      const querySnapshot = await collectionRef
        .where('regulation', '==', regulation)
        .where('branch', '==', branch)
        .where('semester', '==', semester)
        .get();
  
      const rollNumbers = querySnapshot.docs.map((doc) => doc.data().rollNo);
      console.log(rollNumbers);

      rollNumbers.forEach(async (rollNo) => {
        try {
          const approvedStudentDoc = await approvedStudentsCollectionRef.doc('approved').get();
          const approvedData = approvedStudentDoc.data();
      
          if (approvedData[rollNo] === true) {
            await generatedStudentsCollectionRef.doc(rollNo).set({ approved: true });
            console.log(`Added roll number ${rollNo} to generatedStudents collection`);
          } else {
            console.log(`Roll number ${rollNo} is not approved or does not exist in Approved students collection`);
          }
        } catch (error) {
          console.error(`Error checking roll number ${rollNo} in Approved students collection:`, error);
        }
      });
  
    } catch (error) {
      console.log('Error fetching roll numbers:', error);
    }
  };
  
  

  return (
    <div>
      <h2>Admin Hallticket Form</h2>
      {/* Add your form fields and components here */}
      <form onSubmit={handleSubmit}>
        {/* Regulation field */}
        <label htmlFor="regulation">Select Regulation:</label>
        <select id="regulation" value={regulation} onChange={(e) => setRegulation(e.target.value)}>
        <option value="">Select Regulation</option>
        <option value="r20">R-20</option>
          <option value="r18">R-18</option>
          <option value="r16">R-16</option>
          <option value="r14">R-14</option>
    
        </select>

        {/* Branch field */}
        <label htmlFor="branch">Select Branch:</label>
        <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
        <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="Mech">Mech</option>
          <option value="Civil">Civil</option>
          <option value="EEE">EEE</option>
          <option value="Chem">Chem</option>
        </select>

        {/* Semester field */}
        <label htmlFor="semester">Select Semester:</label>
        <select id="semester" value={semester} onChange={(e) => setSemester(e.target.value)}>
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

        {/* Shift field */}
        <label htmlFor="shift">Select Exam Shift:</label>
        <select id="shift" value={shift} onChange={(e) => setShift(e.target.value)}>
        <option value="fn">Forenoon</option>
        <option value="an">Afternoon</option>
        </select>

        


        {/* Submit button */}
        <button type="submit">Generate Hall Tickets</button>
      </form>
    </div>
  );
};

export default AdminHallticketForm;
