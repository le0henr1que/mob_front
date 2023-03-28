// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Company }  from './index';

export default {
  title: 'Company',
  component: Company,
} as ComponentMeta<typeof Company>;

export const CompanyCard: ComponentStory<typeof Company> = () => 
<Company />;

