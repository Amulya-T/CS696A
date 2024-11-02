import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import SummaryStatistics from './statistics';
import ChartWidget from './ChartWidget';
import PerformanceMetrics from './PerformanceMetrics';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Header />
        <Container fluid className="p-3">
          <SummaryStatistics />
          <Row>
            <Col md={6}>
              <ChartWidget />
            </Col>
            <Col md={6}>
              <PerformanceMetrics />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default App;
