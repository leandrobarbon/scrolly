import { useEffect, useRef } from "react";

import { Container } from "./styles";
import Modal from "../Modal";

function Footer() {

  const scrollTop = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 200
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });

  return (
    <Container>
      <span
        className="circle"
        ref={scrollTop}
      >
        <Modal />
      </span>
      <h1>Footer</h1>
    </Container>
  );
}

export default Footer;
