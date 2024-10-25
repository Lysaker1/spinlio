import React, { useState } from 'react';
import { Container, Group, Text, TextInput, Button } from '@mantine/core';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <Container size="xl" className="footer-content">
        <Group justify="space-between" align="center">
          <Text className="footer-text" style={{ color: 'white' }}>
            © 2024 Imagine.bike. All Rights Reserved.
          </Text>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <Group gap="sm">
              <TextInput
                placeholder="Sign up for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                type="email"
                required
              />
              <Button type="submit" className="newsletter-button">
                Subscribe
              </Button>
            </Group>
          </form>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;