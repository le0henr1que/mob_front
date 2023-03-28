// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardLocal } from './index';

export default {
  title: 'Card local',
  component: CardLocal,
} as ComponentMeta<typeof CardLocal>;


export const Card: ComponentStory<typeof CardLocal> = () => <CardLocal author='Lojas Americanas' rating={4}/>
