import styled from 'styled-components';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services/FontService';

export const Footer = () => (
  <FooterStyled>
    <FooterText>©2022 BookStore</FooterText>
    <FooterText>All rights reserved</FooterText>
  </FooterStyled>
);

const FooterStyled = styled.footer`
  background: ${ColorService.EXTRA_LIGHT};
  width: 100%;
  display: flex;
  padding: 34px;
  justify-content: space-between;
`;

const FooterText = styled.p`
  font-family: ${getFontFamily()};
  font-size: 16px;
  line-height: 24px;
  color: ${ColorService.DARK};
`;
