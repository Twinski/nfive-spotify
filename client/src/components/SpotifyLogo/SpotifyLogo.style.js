import styled from 'styled-components';

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SpotifyTitle = styled.h2`
  margin: 0 0 0 8px;
  color: ${({ theme }) => theme.palette.neutral01};
  font-size: 18px;
  font-weight: 600;
  margin-left: 15px;
`;

export const Img = styled.img`
  display: block;
  height: 60%;
  width: auto;
`;
