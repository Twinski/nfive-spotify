import React from 'react';
import styled from 'styled-components';
import { Link as RSLink } from 'react-static';

const LinkStyled = styled(RSLink)`
  display: block;
  padding: 0 8px;
  color: ${({ theme }) => theme.palette.neutral01};
  text-decoration: none;
  line-height: ${({ theme }) => theme.sizes.navigationHeight}px;
  background: ${({ theme }) => theme.palette.neutral02};
  transition: background 0.1s ease-out, color 0.1s ease-out;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.palette.neutral02};
    background: ${({ theme }) => theme.palette.neutral01};
  }
`;

const Link = props => <LinkStyled {...props} activeClassName="active" exact />;

export default Link;
