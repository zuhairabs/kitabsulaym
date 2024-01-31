import { truncate } from "lodash";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const Wrapper = styled.div<any>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #3d3d3d;
  background: #fff;
  padding: 0.8rem 1.8rem;
  width: max-content;
  border-radius: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? "0" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "unset")};
`;

const NavButton = ({
  disabled,
  title,
  handleClick,
  isBackArrow,
  isNextArrow,
}: any) => {
  return (
    <Wrapper
      disabled={disabled}
      className="nav-buttons"
      bg="#f7f7f7"
      color="#363636"
      onClick={handleClick}
    >
      {isBackArrow && <BsArrowLeft size={18} />}
      {truncate(title, { length: 8 })}
      {isNextArrow && <BsArrowRight size={18} />}
    </Wrapper>
  );
};

export default NavButton;
