// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container }  from './index';

export default {
  title: 'Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const ContainerMain: ComponentStory<typeof Container> = () => 
<Container />;

