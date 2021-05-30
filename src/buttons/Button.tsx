import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    color?: "secondary" | "primary" | "danger";
    size?: "small" | "medium" | "large";
    isFullWidth?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
    ButtonProps & React.ComponentPropsWithoutRef<'button'>
>(({ children, color, size, isFullWidth, ...props }, ref) => {
  return (
      <StyledButton
          ref={ref}
          type="button"
          color={color}
          size={size}
          isFullWidth={isFullWidth}
          {...props}
      >
          {children}
      </StyledButton>
  )
});

Button.displayName = 'Button';
Button.defaultProps = {
    color: "primary",
    size: "medium",
    isFullWidth: false,
};
