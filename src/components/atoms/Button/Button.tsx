//import { ReactNode } from 'react';
import styled from 'styled-components';

import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';
// import { default as logo } from '../../../assets/icons/favorite.svg';
// import { ReactComponent as Logo } from './favoritesIcon.svg';

const getTheme = (theme: 'primary' | 'secondary'): IButtonStyled => {
  if (theme === 'secondary') {
    return {
      bgDefault: ColorService.GRAPHITE,
      bgHover: ColorService.GRAPHITE,
      bgDisabled: ColorService.SECONDARY,
      color: ColorService.WHITE,
      colorHover: ColorService.LIGHT,
    };
  }

  return {
    bgDefault: ColorService.PRIMARY,
    bgHover: ColorService.PRIMARY_2,
    bgDisabled: ColorService.SECONDARY,
    color: ColorService.WHITE,
    colorHover: ColorService.WHITE,
  };
};

interface IButtonStyled {
  bgDefault: string;
  bgHover: string;
  bgDisabled: string;
  color: string;
  colorHover: string;
}

interface IButton {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  //icon?: ReactNode;
  theme: 'primary' | 'secondary';
}

export const Button = ({ text, disabled, onClick, /*icon,*/ theme }: IButton) => {
  const selectedTheme = getTheme(theme);
  return (
    <ButtonStyled onClick={onClick} disabled={disabled} {...selectedTheme}>
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<IButtonStyled>`
  padding: 17px 60px 15px 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background: ${({ bgDefault }) => bgDefault};
  color: ${({ color }) => color};

  /*font-family: 'Exo 2';
  font-style: normal;*/
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  //letter-spacing: 0.05em;

  font-family: ${getFontFamily('regular')};

  /* svg {
    margin-right: 10px;
  }*/

  :disabled {
    background: ${({ bgDisabled }) => bgDisabled};
    pointer-events: none;
    color: ${ColorService.LIGHT};

    /* svg path {
      fill: ${ColorService.SECONDARY};
    }*/
  }

  :hover {
    background: ${({ bgHover }) => bgHover};
    color: ${({ colorHover }) => colorHover};
    cursor: pointer;

    /* svg path {
      fill: ${({ colorHover }) => colorHover};
    } */
  }
`;
