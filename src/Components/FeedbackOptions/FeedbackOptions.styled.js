import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 50px;

  background-color: #cea9a1;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 50px;

  color: #eee2df;
  text-transform: uppercase;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;

  background-color: #452c27;
  color: #c69a91;

  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid #cea9a1;
    transform: scale(1.1);
  }
`;

export const List = styled.li`
  list-style: none;
  margin: 0 auto;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;
