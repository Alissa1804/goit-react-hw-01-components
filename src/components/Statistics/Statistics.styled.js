import styled from 'styled-components';

export const Section = styled.section`
  background-color: #b4fae3;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-family: 'Pacifico', cursive;
  padding: 15px;
  color: #205442;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  border-top: 1px solid #205442;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  font-family: 'Dosis', sans-serif;
  min-width: 50px;
  font-weight: 700;
  color: #205442;
  background-color: #205442;
`;

export const Label = styled.span`
  font-size: 24px;
`;
export const Percentage = styled.span`
  font-size: 20px;
`;
