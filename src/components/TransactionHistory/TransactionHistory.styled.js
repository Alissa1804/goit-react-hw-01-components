import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Dosis', sans-serif;
  font-size: 14px;
  border-radius: 5px;
  border-collapse: collapse;
  overflow: hidden;
  padding: 5px;
`;

export const Th = styled.th`
  background-color: #32b9f1;
  padding: 10px;
  color: #fff;
`;

export const Td = styled.td`
  min-width: 80px;
  padding: 10px;
  text-align: center;
  border-right: 2px solid #32b9f1;
  &:last-child {
    border-right: none;
  }
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #c4e7f5;
  }
`;
