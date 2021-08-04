import React, { useState } from 'react';
import Section from 'components/Section';
import { Container, Heading } from '@chakra-ui/react';
import {
  EnvironmentOutlined,
  GiftTwoTone,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Steps } from 'antd';
import { TimeIcon } from '@chakra-ui/icons';
import 'antd/dist/antd.css';

const { Step } = Steps;
function HowItWorks() {
  const [current, setCurrentState] = useState();

  return (
    <Section>
      <Container maxW="12xl" px={[4, 8, 16]}>
        <Heading
          color="dark.100"
          mb={5}
          fontSize={{ base: '4xl', md: '6xl', lg: '7xl', '2xl': '8xl' }}
        >
          HOW IT WORKS
        </Heading>
        <Steps
          current={current}
          onChange={(current) => setCurrentState(current)}
          direction="vertical"
        >
          <Step
            title="Book a delivery"
            description="Provide the necessary information for the delivery"
            icon={<UnorderedListOutlined />}
          />
          <Step
            title="Wait for a Rider"
            description="Wait for a Rider to be assigned, and to arrive at the pickup location"
            icon={<TimeIcon />}
          />
          <Step
            title="Handover your packages"
            description="Let the Rider handle and deliver your packages"
            icon={<GiftTwoTone />}
          />
          <Step
            title="Track your package"
            description="Track the progress of your booking in real-time"
            icon={<EnvironmentOutlined />}
          />
        </Steps>
      </Container>
    </Section>
  );
}

export default HowItWorks;
