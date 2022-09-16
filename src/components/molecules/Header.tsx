import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ColorService } from '../../services/ColorService';
import { default as logo } from '../../assets/icons/logo.svg';

export const Header = () => {
  return (
    <HeaderStyled>
      { <NavStyled>
        <LinkStyled active={Boolean(location.pathname === '/')} to="/">
          Home
        </LinkStyled>
        <LinkStyled active={Boolean(location.pathname === '/favorites')} to="/favorites">
          Favorites
        </LinkStyled>
      </NavStyled> }
      <img src={logo} />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background-color: ${ColorService.WHITE};
  width: 100%;
  height: 60px;
  vertical-align: top;
  display: flex;
`;

const NavStyled = styled.nav`
  color: ${ColorService.SECONDARY};
  padding: 20px 100px 0;
`;

const LinkStyled = styled(Link)<{ active: boolean }>`
  color: ${ColorService.SECONDARY};

  color: ${({ active }) => ` ${active ? ColorService.PRIMARY : ColorService.SECONDARY}`};
`;

const Image = styled.img`
  /* width: auto: */
`;
