import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 660px;
`;

export const ResultsWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.url});
`


export const ResultOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  border-radius: 5px;
  -webkit-transition: all 500ms cubic-bezier(0.020, 0.795, 0.215, 1.005);
  -moz-transition: all 500ms cubic-bezier(0.020, 0.795, 0.215, 1.005);
  -o-transition: all 500ms cubic-bezier(0.020, 0.795, 0.215, 1.005);
  transition: all 500ms cubic-bezier(0.020, 0.795, 0.215, 1.005);
`;

export const Heart = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  -webkit-transition: all 500ms cubic-bezier(0.020, 0.795, 0.215, 1.005);
  -moz-transition: all 500ms cubic-bezier(0.020, 0.795, 0.215, 1.005);
  -o-transition: all 500ms cubic-bezier(0.020, 0.795, 0.215, 1.005);
  transition: all 500ms cubic-bezier(0.020, 0.795, 0.215, 1.005);
  transform: scale(${(props) => props.scale});
`;

export const Result = styled.div`
  position: relative;
  display: block;
  width: 200px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
  &:hover ${ResultOverlay} {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:hover ${Heart} {
    transform: scale(1);
  }
`;