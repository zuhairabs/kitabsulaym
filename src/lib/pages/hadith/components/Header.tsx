import type { ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 60%;
  position: fixed;
  top: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f7f7f7;
  z-index: 10;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  margin: auto;
  left: 0;
  right: 0;

  &::after {
    content: "";
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(247, 247, 247, 1) 10%,
      rgba(247, 247, 247, 0.7667436489607391) 58%,
      rgba(247, 247, 247, 0) 100%
    );
    height: 45px;
    position: absolute;
    top: 100%;
    width: 100%;
  }
`;

const BG = styled.div`
  width: 100%;
  position: absolute;
  top: -30px;
  background: #f7f7f7;
  z-index: 8;
  height: 100px;
`;

const Header = ({ children }: { children: ReactElement }) => {
  return (
    <BG>
      <Wrapper>{children}</Wrapper>
    </BG>
  );
};

export default Header;
