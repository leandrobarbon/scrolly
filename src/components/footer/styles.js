import styled from 'styled-components';

function colorsBack(colors) {
   switch (colors) {
      case "negar":
         return `background: #0084b1;
                  color: #fff;
                  cursor: pointer;`;
      case "negado":
        return  `background: rgba(256,0 ,0 , 0.1);
                  color: #ff0000;
                  cursor: inherit;`;
   }
}

export const Container = styled.div`
   width: 100%;
   background: #f7f7f7;
   display: flex;
   flex-direction: column;
   gap: 15px;


`;

export const Button = styled.button`
   ${({colors}) => colorsBack(colors)};
   width: 100px;
   padding: 6px 15px;
   border: none;
   border-radius: 4px;
   text-transform: uppercase;
   font-family: 'Roboto';
   font-weight: 700;
`;

export const ContainerNegado = styled.div`
   display: flex;
   align-items: center;
   gap: 30px;
   

   span {
      color: #0084b1;
      cursor: pointer;

      &:hover {
         border-bottom: 1px solid #0084b1;
         color: #0084b1;
         opacity: 0.8;
      }
   }
`;

export const ButtonMonth = styled.div`
   width: 100px;
   border-radius: 4px;
   display: flex;
   align-items: center;
   

   label {
      border-top: 1px solid #000000;
      border-bottom: 1px solid #000000;
      padding: 10px 15px;
   }

`;

export const SpanArrow = styled.span`
   padding: 10px 15px;
   border: 1px solid #000;
   border-radius: ${({borderRadius}) => borderRadius ? borderRadius : ""};
   cursor: pointer;
   
   &:hover {
      background: #e4e4e4;
   }
`;
