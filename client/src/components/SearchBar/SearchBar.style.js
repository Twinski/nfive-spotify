import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled.input`
  border-radius: ${({ theme }) => theme.inputs.borderRadius}px;
  background-color: ${({ theme }) => theme.palette.lightGray};
  font-size: ${({ theme }) => theme.inputs.fontSize}px;
  color: rgba(0, 0, 0, 0.53);
  line-height: ${({ theme }) => theme.inputs.height}px;
  width: 300px;
  height: ${({ theme }) => theme.inputs.height}px;
  padding: 0px 25px;
  border: 0;
  // box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: 0;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  border-radius: ${({ theme }) => theme.inputs.borderRadius}px;
  font-size: ${({ theme }) => theme.inputs.fontSize}px;
  height: ${({ theme }) => theme.inputs.height}px;
  padding: 0px 45px;
  border: 0;
  background-color: ${({ theme }) => theme.palette.spotifyGreen};
  color: #fff;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.spotifyGreenDarker};
  }
  &:focus {
    outline: 0;
  }
`;
