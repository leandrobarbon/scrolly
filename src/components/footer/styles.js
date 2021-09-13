import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   position: absolute;
   bottom: 0;
   background: pink;

   .circle {
  position: fixed;
  display: none;
  bottom: 10px;
  text-align:center;
  vertical-align: middle;
  box-shadow: 0px 0px 3px #000;
  animation: slide-top 0.5s ease-in both;
}
`;