import { ReactNode, ChangeEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookCard } from '../../molecules/BookCard/BookCard';
import { Button } from '../../atoms/Button';

import styled from 'styled-components';
import {
  showBooks,
  removeBooks,
  toggleFavorite,
  setOrderingValue,
  setSearchValue,
} from '../../../core/slices/booksSlice';
import { IBooksInfo } from '../../../types/books';
import { Input } from '../../atoms/Input';

export const FavoritesPage = () => {
  // const [sendedUser, setSendedUser] = useState(false);

  // const booksStore = useSelector(showBooks);
  // console.log('FavoritesPage', { booksStore });

  // const [posts, setBooks] = useState<IBooksInfo>();
  // const [searchValue, setSearchValue] = useState<string>('');
  // const [orderingValue, setOrderingValue] = useState<string>('');
  const { books, searchValue, orderingValue } = useSelector(showBooks);
  const dispatch = useDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    dispatch(setSearchValue(event.target.value));
  };

  const searchInput = {
    value: searchValue,
    error: '',
    type: 'text' as 'text',
    labelText: 'Search',
    placeholder: 'Placeholder',
    disabled: false,
  };

  const onBlur = () => {};

  const fields = [
    {
      fieldName: 'title',
      name: 'title',
    },
    {
      fieldName: 'price',
      name: 'price',
    },
  ];

  const onChangeOrdering = (field: string) => {
    console.log({ field });
    dispatch(setOrderingValue(field));
  };

  return (
    <ListCards>
      {books?.books?.map((book) => (
        <>
          {book.isFavorite ? (
            <Card key={book.isbn13}>
              <BookCard book={book} />
              <Button
                theme={'primary'}
                text={book.isFavorite ? 'Remove' : 'Add'}
                onClick={() => dispatch(toggleFavorite(book.isbn13))}
                disabled={false}
              />
            </Card>
          ) : null}
        </>
      ))}
    </ListCards>
    // // <FormTemplate title="Sign in">
    // <>
    //   <button onClick={() => dispatch(removeBooks())}>Clear books</button>
    //   Favorites Books:
    //   <TabsOrdering>
    //     {fields.map(({ fieldName, name }) => (
    //       <Li key={fieldName} onClick={() => onChangeOrdering(fieldName)}>
    //         {name}
    //       </Li>
    //     ))}
    //   </TabsOrdering>
    //   <Input
    //     {...searchInput}
    //     onChange={(event) => onChange(event, 'searchValue')}
    //     onBlur={onBlur}
    //   />
    //   <List>
    //     {books?.books?.map(({ price, title, isbn13, rating, isFavorite }) => (
    //       <>
    //         {isFavorite ? (
    //           <LiPost key={isbn13}>
    //             <p>Favorite: {isFavorite ? 'yes' : 'no'}</p>
    //             <button onClick={() => dispatch(toggleFavorite(isbn13))}>
    //               {isFavorite ? 'Remove' : 'Add'}
    //             </button>
    //             price: {price} - title: {title} - rating: {rating}
    //           </LiPost>
    //         ) : null}
    //       </>
    //     ))}
    //   </List>
    // </>
    // // </FormTemplate>
  );
};

const ListCards = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-content: start;
  flex-wrap: wrap;
  gap: 30px;
`;

const Card = styled.div`
  padding: 0 0 40px 0;
`;

// const InputWrapper = styled.div`
//   margin-bottom: 20px;
// `;

// const List = styled.ul``;

// const Li = styled.li``;

// const TabsOrdering = styled.ul`
//   display: flex;
//   flex-direction: row;

//   li {
//     padding: 20px;
//     border: 1px solid black;
//     margin: 4px;
//   }
// `;

// const LiPost = styled.li`
//   border: 1px solid black;
//   padding: 3px;
// `;
