// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonStyle  from './index';

export default {

  title: 'Button',
  component: ButtonStyle,
} as ComponentMeta<typeof ButtonStyle>;

export const Large: ComponentStory<typeof ButtonStyle> = () => <ButtonStyle variant="large-button">Button</ButtonStyle>;

export const Medium: ComponentStory<typeof ButtonStyle> = () => <ButtonStyle variant="medium-button">Button</ButtonStyle>;

export const Small: ComponentStory<typeof ButtonStyle> = () => <ButtonStyle variant="small-button">Button</ButtonStyle>;

export const Outlined: ComponentStory<typeof ButtonStyle> = () => <ButtonStyle variant="small-button outlined">Button</ButtonStyle>;