import * as React from 'react';
import { styled } from 'styled-components';

const StyledInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const InputBase = styled.input`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: unset;
  border: none;
  border-bottom: 1px solid var(--primary-color);
  padding: 8px 0;
  color: var(--primary-color);

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: #aaaaaa;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

interface InputProps extends React.ComponentProps<'input'> {
  testId?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', value, onChange, testId, ...props }, ref) => {
    const handleClear = () => {
      if (onChange) {
        onChange({
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <StyledInput>
        <InputBase
          type={type}
          data-testid={testId}
          value={value}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        {value && <ClearButton onClick={handleClear}>✕</ClearButton>}
      </StyledInput>
    );
  },
);

Input.displayName = 'Input';

export default Input;
