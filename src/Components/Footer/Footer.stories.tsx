
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './index';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Comments: ComponentStory<typeof Footer> = () => 
<Footer />;

