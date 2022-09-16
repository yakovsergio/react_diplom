//import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';

interface ITitle {
  text: string;
}

export const Title = ({ text }: ITitle) => <TitleStyled>{text}</TitleStyled>;

const TitleStyled = styled.p`
  color: ${ColorService.SECONDARY};
  font-family: ${getFontFamily('regular')};
  //font-family: 'Inter';
  //font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
