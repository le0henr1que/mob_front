// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Comment }  from './index';

export default {
  title: 'Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

export const Comments: ComponentStory<typeof Comment> = () => 
<Comment 
      author="Leonardo Henrique" 
      title="L" 
      comment="Lorem ipsum dolor sit amet consectetur. Facilisis et tellus dapibus in non. Scelerisque molestie non dignissim sed et vitae." 
      rating={5}
      createdAt="02/19/2023 00:48 AM"
    />;

