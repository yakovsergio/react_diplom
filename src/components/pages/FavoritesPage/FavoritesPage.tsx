import { ReactNode, ChangeEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

  const booksStore = useSelector(showBooks);
  console.log('FavoritesPage', { booksStore });
  const dispatch = useDispatch();

  // const [posts, setBooks] = useState<IBooksInfo>();
  // const [searchValue, setSearchValue] = useState<string>('');
  // const [orderingValue, setOrderingValue] = useState<string>('');
  const { books, searchValue, orderingValue } = useSelector(showBooks);

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
    // <FormTemplate title="Sign in">
    <>
      <button onClick={() => dispatch(removeBooks())}>Clear books</button>
      Favorites Books:
      <TabsOrdering>
        {fields.map(({ fieldName, name }) => (
          <Li key={fieldName} onClick={() => onChangeOrdering(fieldName)}>
            {name}
          </Li>
        ))}
      </TabsOrdering>
      <Input
        {...searchInput}
        onChange={(event) => onChange(event, 'searchValue')}
        onBlur={onBlur}
      />
      <List>
        {books?.results?.map(({ price, title, isbn13, rating, isFavorite }) => (
          <>
            {isFavorite ? (
              <LiPost key={isbn13}>
                <p>Favorite: {isFavorite ? 'yes' : 'no'}</p>
                <button onClick={() => dispatch(toggleFavorite(isbn13))}>
                  {isFavorite ? 'Remove' : 'Add'}
                </button>
                price: {price} - title: {title} - rating: {rating}
              </LiPost>
            ) : null}
          </>
        ))}
      </List>
    </>
    // </FormTemplate>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul``;

const Li = styled.li``;

const TabsOrdering = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    padding: 20px;
    border: 1px solid black;
    margin: 4px;
  }
`;

const LiPost = styled.li`
  border: 1px solid black;
  padding: 3px;
`;
