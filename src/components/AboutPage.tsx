import React from 'react';
import { Title, Text, Stack, Container } from '@mantine/core';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <Container size="sm" className="about-content">
        
        <Stack gap="xl">
          <Title order={1}>Manifesto</Title>
          <Text>
          Spinlio is a 3D design tool that makes it easy to create physical products.

Our platform bridges the gap between designers and producers, by providing the tools and envirment that makes your ideas not only unique but also ready for production.

We are an early-stage startup, currently focused on the bicycle industry, with ambitions to expand into all industries. 
While we're in Beta, we'll be continuously rolling out updates daily to improve your experience so sign up for updates if you want to be part of the ride.       </Text>
        </Stack>
      </Container>
    </div>
  );
};

export default AboutPage;
