// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input }  from './index';

export default {

  title: 'Inputs',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = () => <Input type="text" variant="default" placeholder="Pesquisar" icon={false} />;
export const Success: ComponentStory<typeof Input> = () => <Input type="text" variant="success" placeholder="Pesquisar" icon={false} />;
export const Error: ComponentStory<typeof Input> = () => <Input type="text" variant="error" placeholder="Pesquisar" icon={false} />;
export const Icon: ComponentStory<typeof Input> = () => <Input type="text" variant="error" placeholder="Pesquisar" icon={true} />;

export const Select: ComponentStory<typeof Input> = () => 
    <Input type="select" variant="default" placeholder="Pesquisar" icon={true} >
        <option>Pesquisar</option>
    </Input>;
