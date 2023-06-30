import React, { useState, useEffect } from 'react';
import { collection, getDocs ,doc,setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import '../admin/css/admindisplay.css';
import { FirebaseApp } from 'firebase/app';

const AdminDisplay = () => {
  const [formData, setFormData] = useState([]);
  const [semesterFilter, setSemesterFilter] = useState('');
  const [regulationFilter, setRegulationFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('');

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'studentData'));
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());
        setFormData(fetchedData);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchFormData();
  }, []);

  const handleApprove = async (index) => {
    try {
      const formDataItem = formData[index];
      const rollNo = formDataItem.rollNo;
      const approvedDocRef = doc(db, 'approvedstudents', 'approved');
      await setDoc(approvedDocRef, { [rollNo]: true }, { merge: true });
      console.log('Form data at index', index, 'approved');
    } catch (error) {
      console.error('Error approving form data: ', error);
    }
  };
  

  const filteredData = formData.filter((data) => {
    if (semesterFilter && data.semester !== semesterFilter) return false;
    if (regulationFilter && data.regulation !== regulationFilter) return false;
    if (branchFilter && data.branch !== branchFilter) return false;
    return true;
  });

  return (
    <div className="admin-display">
      <div className="filters">
        <label htmlFor="semester-filter">Select Semester:</label>
        <select
          id="semester-filter"
          value={semesterFilter}
          onChange={(e) => setSemesterFilter(e.target.value)}
        >
          <option value="">ALL</option>
        <option value="sem1">I</option>
        <option value="sem2">II</option>
        <option value="sem3">III</option>
        <option value="sem4">IV</option>
        <option value="sem5">V</option>
        <option value="sem6">VI</option>
        <option value="sem7">VII</option>
        <option value="sem8">VIII</option>
        </select>

        <label htmlFor="regulation-filter">Select Regulation:</label>
        <select
          id="regulation-filter"
          value={regulationFilter}
          onChange={(e) => setRegulationFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="r20">R-20</option>
          <option value="r18">R-18</option>
          <option value="r16">R-16</option>
          <option value="r14">R-14</option>
        </select>

        <label htmlFor="branch-filter">Select Branch:</label>
        <select
          id="branch-filter"
          value={branchFilter}
          onChange={(e) => setBranchFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="Mech">Mech</option>
          <option value="Civil">Civil</option>
          <option value="EEE">EEE</option>
          <option value="Chem">Chem</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Exam Type</th>
            <th>Payment Ref No</th>
            <th>Date</th>
            <th>Subject List</th>
            <th>Course</th>
            <th>File</th>
            <th>Regulation</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.rollNo}</td>
              <td>{data.branch}</td>
              <td>{data.semester}</td>
              <td>{data.examType}</td>
              <td>{data.paymentRefNo}</td>
              <td>{data.date}</td>
              <td>{data.subjectList}</td>
              <td>{data.course}</td>
              <td>{data.file ? <a href={data.file}>Download</a> : '-'}</td>
              <td>{data.regulation}</td>
              <td>
                <button className="approve-button" onClick={() => handleApprove(index)}>
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default AdminDisplay;
