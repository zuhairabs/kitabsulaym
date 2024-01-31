import styled from "styled-components";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsShareFill, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 120px;
  font-size: 12px;
  font-weight: 600;
  background: #fff;
  padding: 0.8rem 1rem;
  border-radius: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
`;

const IconWrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: #3d3d3d;
`;

const ButtonsOptions = ({ theme }: any) => {
  return (
    <Wrapper bg="#fff">
      <IconWrapper color="#3d3d3d" to="/">
        Aa <BsThreeDotsVertical />
      </IconWrapper>
      <Link to="/">
        <AiOutlineFileAdd color="#3d3d3d" size={20} />
      </Link>
      <Link to="/">
        <BsShareFill color="#3d3d3d" size={16} />
      </Link>
    </Wrapper>
  );
};

export default ButtonsOptions;
