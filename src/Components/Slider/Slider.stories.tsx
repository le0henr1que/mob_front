// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SliderSlider }  from './index';

export default {
  title: 'Slider',
  component: SliderSlider,
} as ComponentMeta<typeof SliderSlider>;

export const CompanyCard: ComponentStory<typeof SliderSlider> = () => 
<SliderSlider><div>1</div><div>2</div></SliderSlider>;

