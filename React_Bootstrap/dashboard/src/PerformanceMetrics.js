import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const PerformanceMetrics = () => {
  return (
    <div>
      <h5>Performance Metrics</h5>
      <p>CPU Usage</p>
      <ProgressBar now={70} label="70%" className="mb-3" />
      <p>Memory Usage</p>
      <ProgressBar now={50} label="50%" className="mb-3" />
      <p>Disk Usage</p>
      <ProgressBar now={60} label="60%" className="mb-3" />
    </div>
  );
};

export default PerformanceMetrics;
