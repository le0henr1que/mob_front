
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StarRating }  from './index';

export default {

  title: 'Stars',
  component: StarRating,
} as ComponentMeta<typeof StarRating>;

const ratingNote = (note:number) => { alert(note); return note }

export const Select: ComponentStory<typeof StarRating> = () => <StarRating variant="nothing" rating={3} starType="select" onReturnRating={ratingNote} size="large"/>;
export const Disabled: ComponentStory<typeof StarRating> = () => <StarRating variant="nothing" rating={4} starType="view" size="small" />;
