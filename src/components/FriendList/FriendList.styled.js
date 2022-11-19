import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: radial-gradient(
    circle,
    rgba(14, 104, 130, 1) 0%,
    rgba(118, 208, 210, 1) 100%
  );
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;
export const Item = styled.li`
  background-color: #fff;
  border-radius: 8px;
  min-width: 150px;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;
