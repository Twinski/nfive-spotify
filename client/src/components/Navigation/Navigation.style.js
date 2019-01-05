import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: ${({ theme }) => theme.sizes.navigationHeight}px;
  color: ${({ theme }) => theme.palette.neutral01};
  background: ${({ theme }) => theme.palette.neutral02};
`;

export const ListItem = styled.div`
  height: 100%;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
