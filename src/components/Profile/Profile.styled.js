import { styled } from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: 20px auto;
  width: 300px;
  height: 400px;
  text-align: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: center;
  justify-content: center;
`;

export const ProfileAvatar = styled.img`
  border-radius: 50%;
  margin: 30px auto;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const UserInfo = styled.p`
  color: grey;
  margin-bottom: 10px;
`;

export const ListWrapper = styled.ul`
  display: flex;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: calc(100% / 3);
  height: 100px;
  border-top: 1px solid gray;
  background-color: lightgrey;
`;

export const ListText = styled.span`
  color: grey;
`;
