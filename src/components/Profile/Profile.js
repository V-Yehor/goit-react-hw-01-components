import {
  ProfileWrapper,
  ProfileAvatar,
  UserName,
  UserInfo,
  ListWrapper,
  ListItem,
  ListText,
} from './Profile.styled';

export const Profile = props => {
  return (
    <ProfileWrapper>
      <div>
        <ProfileAvatar
          src={props.avatar}
          alt={props.username}
          width="120"
          height="120"
        />
        <UserName>{props.username}</UserName>
        <UserInfo>@{props.tag}</UserInfo>
        <UserInfo>{props.location}</UserInfo>
      </div>

      <ListWrapper>
        <ListItem>
          <ListText>Followers</ListText>
          <span>{props.stats.followers}</span>
        </ListItem>
        <ListItem>
          <ListText>Views</ListText>
          <span>{props.stats.views}</span>
        </ListItem>
        <ListItem>
          <ListText>Likes</ListText>
          <span>{props.stats.likes}</span>
        </ListItem>
      </ListWrapper>
    </ProfileWrapper>
  );
};
