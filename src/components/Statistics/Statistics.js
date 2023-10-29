import { SectionWrapper, StatList, ListItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionWrapper>
      {title && <h2>{title}</h2>}
      <StatList>
        {stats.map(item => {
          return (
            <ListItem key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </ListItem>
          );
        })}
      </StatList>
    </SectionWrapper>
  );
};
