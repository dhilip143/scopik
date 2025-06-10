import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CertificateDownload = () => {
  const location = useLocation();
  const state = location.state || {};
  const initialStudentId = state.studentId || '';
  const initialCourseId = state.courseId || '';

  const [studentId, setStudentId] = useState(initialStudentId);
  const [courseId, setCourseId] = useState(initialCourseId);
  const [certificateId, setCertificateId] = useState(null);
  const [userName, setUserName] = useState('');
  const [certificateUrl, setCertificateUrl] = useState('');
  const [message, setMessage] = useState('');

  const createCertificate = async () => {
    try {
      const response = await axios.post('/api/createcertificate/', {
        student_id: studentId,
        course_id: courseId,
      });
      setCertificateId(response.data.certificate_id);
      setMessage('Certificate created successfully. You can now download it.');
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error creating certificate');
    }
  };

  const downloadCertificate = async () => {
    if (!certificateId) {
      setMessage('Please create a certificate first.');
      return;
    }
    try {
      const response = await axios.get(`/api/downloadcertficate/?certificate_id=${certificateId}`);
      setUserName(response.data.user_name);
      setCertificateUrl(response.data.certificate_url);
      setMessage('');
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error downloading certificate');
    }
  };

  useEffect(() => {
    if (studentId && courseId) {
      createCertificate();
    }
  }, [studentId, courseId]);

  useEffect(() => {
    if (certificateId) {
      downloadCertificate();
    }
  }, [certificateId]);

  return (
    <div>
      <h2>Get Certificate</h2>
      <div>
        <label>Student ID: </label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Enter student ID"
        />
      </div>
      <div>
        <label>Course ID: </label>
        <input
          type="text"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          placeholder="Enter course ID"
        />
      </div>
      <button onClick={createCertificate}>Create Certificate</button>
      <button onClick={downloadCertificate}>Download Certificate</button>
      {message && <p>{message}</p>}
      {userName && certificateUrl && (
        <div>
          <h3>Certificate for: {userName}</h3>
          <a href={certificateUrl} target="_blank" rel="noopener noreferrer" download>
            Download Certificate Image
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificateDownload;
