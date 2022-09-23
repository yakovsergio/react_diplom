import styled from 'styled-components';
//import { toggleFavorite } from '../../../core/slices/booksSlice';
import { ColorService } from '../../../services/ColorService';
import { getFontFamily } from '../../../services/FontService';
import { IBook } from '../../../types/books';

interface IBookCard {
  book: IBook;
}

export const BookCard = ({ book }: IBookCard) => {
  return (
    <CardStyled>
      <DivImgStyled>
        <ImgStyled src={book.image} />
      </DivImgStyled>
      <TitleStyled>
        <a href={`/books/${book.isbn13}`}> {book.title} </a>
      </TitleStyled>
      <PriceStyled>{book.price}</PriceStyled>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 445px;
  height: 410px;
  display: inline-block;
  flex-direction: column;
  box-sizing: border-box;
  border: 2px solid ${ColorService.LIGHT};
`;

const DivImgStyled = styled.div`
  width: 445px;
  min-height: 264px;
  max-height: 264px;
  margin-bottom: 20px;
  background: ${ColorService.LIGHT};
  margin: -2px 0 0 -2px;
`;

const TitleStyled = styled.div`
  width: 100%;
  max-height: 64px;
  min-height: 64px;
  text-align: left;

  text-overflow: ellipsis;
  overflow: hidden;

  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;

  padding: 8px 8px 8px 8px;

  :hover {
    cursor: pointer;
  }
`;

const PriceStyled = styled.div`
  width: 100%;
  height: 32px;
  color: ${ColorService.PRIMARY};
  text-align: right;

  font-family: ${getFontFamily()};
  font-size: 32px;
  font-weight: 700;
`;

const ImgStyled = styled.img`
  width: 226px;
  min-height: 264px;
  max-height: 264px;
  object-fit: cover;
`;
function dispatch(arg0: { payload: any; type: string }): void {
  throw new Error('Function not implemented.');
}
