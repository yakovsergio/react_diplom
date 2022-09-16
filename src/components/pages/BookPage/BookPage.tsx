import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { IBook, IBooksInfo } from '../../../types/books';

import { FormTemplate } from '../../templates/FormTemplate';
//import { Title } from '../../templates/Title';

export const BookPage = () => {
  const [book, setBook] = useState<IBook>();
  const params = useParams();

useEffect(()=>{
  const id = params?.isbn13;
  console.log(id);

  if (id){
    fetch(`https://api.itbook.store/1.0/books/${id}`)    
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      setBook(data);
    });
  }
}, [params?.isbn13]); 

return (
  // <FormTemplate title="Sign in">
  <FormTemplate title={book?.title ? book?.title : 'NOT FOUND'}>
    Book
    <List>
        <Li>
          {book?.title} - {book?.price}
        </Li>
    </List>
  </FormTemplate>
  );


};

const List = styled.ul``;

const Li = styled.li`
  color: black;  
`;