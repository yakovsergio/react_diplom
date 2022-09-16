import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';

interface IInput {
  value: string;
  type: 'password' | 'text';
  error: string;
  labelText: string;
  placeholder: string;
  disabled: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export const Input = ({
  value,
  type,
  error,
  labelText,
  placeholder,
  disabled,
  onChange,
  onBlur,
}: IInput) => (
  <LabelStyled>
    {labelText}
    <InputStyled
      value={value}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      hasError={Boolean(error.length)}
      onBlur={onBlur}
    />
    {error && <TextError>{error}</TextError>}
  </LabelStyled>
);

const LabelStyled = styled.label`
  color: ${ColorService.WHITE};
  font-family: ${getFontFamily('regular')};
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
`;

const InputStyled = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 16px 20px;
  background: ${ColorService.GRAPHITE};
  border: ${({ hasError }) => `2px solid ${hasError ? ColorService.ERROR : ColorService.GRAPHITE}`};
  border-radius: 10px;
  font-size: 16px;
  line-height: 24px;
  outline: none;
  margin: 8px 0 0;

  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder {
    color: ${ColorService.LIGHT};
  }

  :focus {
    border: 2px solid ${ColorService.PRIMARY};
  }

  :disabled {
    background: ${ColorService.SECONDARY};
    border: 2px solid ${ColorService.SECONDARY};
    color: ${ColorService.LIGHT};
  }
`;

const TextError = styled.span`
  color: ${ColorService.ERROR};
  font-family: ${getFontFamily('regular')};
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  display: block;
  margin: 4px 0 0;
`;
