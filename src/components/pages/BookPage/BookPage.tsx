import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { IBook, IBooksInfo } from '../../../types/books';

import { FormTemplate } from '../../templates/FormTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { getBook, getBookAction, setFavorite } from '../../../core/slices/bookSlice';
import { getFavorites } from '../../../core/slices/favoritesSlice';

export const BookPage = () => {
  const params = useParams();
  const bookStore = useSelector(getBook);
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const isbn13 = params?.bookID;
    console.log(isbn13);
    if (isbn13) {
      dispatch(getBookAction({ isbn13, favorites }) as any);
    }
  }, [dispatch, params?.bookID, favorites]);

  return (
    <FormTemplate title={bookStore?.title ? bookStore?.title : 'NOT FOUND'}>
      <div>
        <img src={bookStore?.image} />
      </div>
      <div>{bookStore?.title}</div>
      <div>{bookStore?.authors}</div>
      <div>{bookStore?.rating}</div>
      <div>{bookStore?.price}</div>
    </FormTemplate>
  );
};

// export const BookPage = () => {
//   const [book, setBook] = useState<IBook>();
//   const params = useParams();

//   useEffect(() => {
//     const id = params?.isbn13;
//     console.log(id);

//     if (id) {
//       fetch(`https://api.itbook.store/1.0/books/${id}`)
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           //console.log(data);
//           setBook(data);
//         });
//     }
//   }, [params?.isbn13]);

//   return (
//     // <FormTemplate title="Sign in">
//     <FormTemplate title={book?.title ? book?.title : 'NOT FOUND'}>
//       Book
//       <List>
//         <Li>
//           {book?.title} - {book?.price}
//         </Li>
//       </List>
//     </FormTemplate>
//   );
// };

const List = styled.ul``;

const Li = styled.li`
  color: black;
`;
