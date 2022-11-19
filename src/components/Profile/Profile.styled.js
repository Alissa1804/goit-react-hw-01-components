import styled from 'styled-components';

export const PContainer = styled.div`
  min-width: 350px;
  padding: 30px;
  background: radial-gradient(
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

export const Description = styled.div`
  display: flex;
  min-height: 350px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  gap: 15px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
`;

export const AvatarThumb = styled.div`
  border-radius: 50%;
  border: 2px solid #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 150px;
`;

export const Name = styled.p`
  font-family: 'Pacifico', cursive;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #7869e7;
  line-height: 1.2;
  font-family: 'Dosis', sans-serif;
`;

export const Stats = styled.ul`
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  justify-content: space-between;
  border: 2px dashed #fff;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  min-width: 65px;
  gap: 5px;
`;

export const Label = styled.span`
  font-family: 'Pacifico', cursive;
  font-size: 20px;
  color: #fff;
`;
export const Quantity = styled.span`
  font-family: 'Dosis', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #7869e7;
`;
