import "./styles.css";
// import { ComponentStory, ComponentMeta } from '@storybook/react';

export default function ButtonStyle(props: any) {
  const { children, variant } = props;

  return (
    <>
      <button className={variant} {...props}>
        {children}
      </button>
    </>
  );
}
