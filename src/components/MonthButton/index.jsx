import { useState, useMemo } from "react";

import { Modal } from "../Modal";

import {
  Container,
  Button,
  ContainerNegado,
  ButtonMonth,
  SpanArrow,
} from "./styles";

export function MonthButton() {
  const [showCancel, setShowCancel] = useState(false);
  const [months, setMonths] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const currentMonth = useMemo(() => {
    const monthsNumber = {
      1: "janeiro",
      2: "fevereiro",
      3: "marco",
      4: "abril",
      5: "maio",
      6: "junho",
      7: "julho",
      8: "agosto",
      9: "setembto",
      10: "outubro",
      11: "novembro",
      12: "dezembro",
    };

    return monthsNumber[months] || "erro ao encontrar mês";
  }, [months]);

  function handleShowCancel() {
    setShowCancel(true);
  }

  function dismissCancel() {
    setShowCancel(false);
  }

  function nextMonth() {
    setMonths((state) => (state === 12 ? 1 : ++state));
  }

  function previousMonth() {
    setMonths((state) => (state === 1 ? 12 : --state));
  }

  function showModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Container>
      {showCancel ? (
        <ContainerNegado>
          <span onClick={dismissCancel}>desfazer</span>
          <Button colors="negado" onClick={showModal}>
            Negado
          </Button>
        </ContainerNegado>
      ) : (
        <Button colors="negar" onClick={handleShowCancel}>
          Negar
        </Button>
      )}

      <ButtonMonth>
        <SpanArrow borderRadius="4px 0 0 4px" onClick={previousMonth}>
          ←
        </SpanArrow>
        <label>{currentMonth}</label>
        <SpanArrow borderRadius="0 4px 4px 0" onClick={nextMonth}>
          →
        </SpanArrow>
      </ButtonMonth>

      <Modal modalOpen={modalOpen} onCloseModal={closeModal} />
    </Container>
  );
}

{
  /* <SpanArrow borderRadius="4px 0 0 4px" onClick={previousMonth}>
←
</SpanArrow>
<label>{currentMonth}</label>
<SpanArrow borderRadius="0 4px 4px 0" onClick={nextMonth}>
→
</SpanArrow> */
}
