// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text }  from './index';

export default {

  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Regular: ComponentStory<typeof Text> = () => 
        <Text variant="font-regular" >Hello Joh Doh</Text>;
export const Bold: ComponentStory<typeof Text> = () => 
        <Text variant="font-bold" >Hello Joh Doh</Text>;
export const Extra_Bold: ComponentStory<typeof Text> = () => 
        <Text variant="font-extrabold" >Hello Joh Doh</Text>;   
export const Semi_Bold: ComponentStory<typeof Text> = () => 
        <Text variant="font-semibold" >Hello Joh Doh</Text>;   


