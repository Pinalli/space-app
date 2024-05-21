// src/components/SearchBar.js


import styled from 'styled-components';

const Container = styled.div`
  
  width: 426px;
  height: 56px;
  top: 45px;
  left: 294px;
  border-radius: 20px;
 
`;

const SearchInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const SearchBar = () => {
  return (
    <Container>
     
      <SearchInput
        type="text"
        placeholder="O que você procura?"      
        
      />
      <SearchButton>
        <img src="/images/search.png" alt="Buscar" />
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
