// import { useState, } from "react";

// import {
//   Container,
//   Button,
//   ContainerNegado,
//   ButtonMonth,
//   SpanArrow,
// } from "./styles";

// i

// const data = [
//   {
//     month: "janeiro",
//     isCurrent: true,
//   },
//   {
//     month: "feveiro",
//     isCurrent: false,
//   },
//   {
//     month: "marco",
//     isCurrent: false,
//   },
// ];

// function Footer() {
//   const [showCancel, setShowCancel] = useState(false);
//   // const [months, setMonths] = useState(data);

//   // const currentMonth = useMemo(() => {
//   //   const { month } = months.find((month) => month.isCurrent);

//   //   return month;
//   // }, [months]);

//   function handleShowCancel() {
//     setShowCancel(true);
//   }

//   function dismissCancel() {
//     setShowCancel(false);
//   }

//   function nextMonth() {
//     const currentMonthIndex = months.findIndex((month) => month.isCurrent);
//     const nextMonthIndex = currentMonthIndex + 1;

//     if (nextMonthIndex === 3) {
  
//       const newMonths = months.map((month, index) => {
//         if (index === 0) {
//           month.isCurrent = true;
//           return month;
//         }

//         month.isCurrent = false;

//         return month;
//       });

//       console.log("months", months);

//       setMonths(newMonths);

//       return;
//     }

//     const nextOne = months[nextMonthIndex];

//     const newMonths = [...months];

//     newMonths[currentMonthIndex] = {
//       ...newMonths[currentMonthIndex],
//       isCurrent: false,
//     };

//     newMonths[nextMonthIndex] = {
//       ...newMonths[nextMonthIndex],
//       isCurrent: true,
//     };

//     setMonths(newMonths);
//   }

//   function previousMonth() {
//     const currentMonthIndex = months.findIndex((month) => month.isCurrent);
//     const previousMonthIndex = currentMonthIndex - 1;

//     if (previousMonthIndex === -1) {
//       return;
//     }

//     const nextOne = months[previousMonthIndex];

//     const newMonths = [...months];

//     newMonths[currentMonthIndex] = {
//       ...newMonths[currentMonthIndex],
//       isCurrent: false,
//     };

//     newMonths[previousMonthIndex] = {
//       ...newMonths[previousMonthIndex],
//       isCurrent: true,
//     };

//     setMonths(newMonths);
//   }


  
  

//   return (
//     <Container>
//       {showCancel ? (
//         <ContainerNegado>
//           <span onClick={dismissCancel}>desfazer</span>
//           <Button colors="negado">Negado</Button>
//         </ContainerNegado>
//       ) : (
//         <Button colors="negar" onClick={handleShowCancel}>
//           Negar
//         </Button>
//       )}

//       <ButtonMonth>
//         <SpanArrow borderRadius="4px 0 0 4px" onClick={previousMonth}>
//           ←
//         </SpanArrow>
//         <label>{currentMonth}</label>
//         <SpanArrow borderRadius="0 4px 4px 0" onClick={nextMonth}>
//           →
//         </SpanArrow>
//       </ButtonMonth>
//     </Container>
//   );
// }



// export default Footer;
