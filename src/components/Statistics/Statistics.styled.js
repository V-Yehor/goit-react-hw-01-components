import { styled } from 'styled-components';

export const SectionWrapper = styled.section`
  width: 300px;
  /* height: 100px; */
  margin: 0 auto;
  text-align: center;
  color: grey;
`;

export const StatList = styled.ul`
  display: flex;
  margin-top: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  row-gap: 20px;
`;
