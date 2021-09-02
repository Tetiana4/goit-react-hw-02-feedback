import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #cea9a1;
  padding: 50px;
  text-align: center;
`;

export const Title = styled.h2`
  color: #eee2df;
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  background-color: #452c27;
  color: #c69a91;
  border-radius: 20px;
  margin: 0 10px 100px;
  width: 80px;
  height: 30px;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    border: 1px solid #eee2df;
  }
`;
