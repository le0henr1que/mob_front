
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating }  from './index';

export default {

  title: 'Stars',
  component: StarRating,
} as ComponentMeta<typeof StarRating>;

export const Select: ComponentStory<typeof StarRating> = () => <StarRating variant="nothing" rating={5} starType="view" />;
export const Disabled: ComponentStory<typeof StarRating> = () => <StarRating variant="nothing" rating={2} starType="view" />;
