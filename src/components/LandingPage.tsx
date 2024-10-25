import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Text, Button, Stack, Image } from '@mantine/core';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <Stack align="center" gap="xl">
          <Title order={1}>
            3D design made simple
          </Title>
          <Text size="xl">
          We cooperate with the top suppliers in the industry. If you are a manufacturer and not yet listed, book a meeting and out team will help you onboard your products - and we will change this text
          </Text>
          <Button component={Link} to="/configurator" size="lg">
            Start Designing
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default LandingPage;
