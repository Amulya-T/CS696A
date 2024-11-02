import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const statistics = () => {
  const stats = [
    { title: "Total Users", value: "10,245" },
    { title: "Revenue", value: "$45,678" },
    { title: "Orders", value: "1,234" },
    { title: "Conversion Rate", value: "2.3%" }
  ];

  return (
    <Row className="mb-4">
      {stats.map((stat, idx) => (
        <Col key={idx} sm={6} md={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="text-muted">{stat.title}</Card.Title>
              <Card.Text className="display-6">{stat.value}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default statistics;
