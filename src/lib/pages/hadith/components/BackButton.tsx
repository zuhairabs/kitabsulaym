import { truncate } from "lodash";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
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
`;

const BackButton = ({ title }: { title: string }) => {
  return (
    <Wrapper to="/">
      <BsArrowLeft size={18} />
      {truncate(title, { length: 8 })}
    </Wrapper>
  );
};

export default BackButton;
