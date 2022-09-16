import styled from 'styled-components';
import { getFontFamily } from '../../../services';
import { ColorService } from '../../../services/ColorService';

interface ITab {
  title: string;
  url: string;
}

interface ITabs {
  list: ITab[];
  activeTabUrl: string;
}

export const Tabs = ({ list, activeTabUrl }: ITabs) => (
  <ListStyled>
    {list.map(({ title, url }) => (
      <Li key={url}>
        <Link active={url === activeTabUrl}>{title}</Link>
      </Li>
    ))}
  </ListStyled>
);

const ListStyled = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-start;
  width: 100%;
`;

const Li = styled.li``;

const Link = styled.a<{ active: boolean }>`
  position: relative;
  top: 1px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-family: ${getFontFamily('regular')};
  color: ${({ active }) => `${active ? ColorService.WHITE : ColorService.SECONDARY}`};
  padding: 14px 88px;
  display: block;
  background: ${({ active }) => `${active ? ColorService.GRAPHITE : ColorService.DARK}`};

  :hover {
    color: ${ColorService.WHITE};
  }
`;
