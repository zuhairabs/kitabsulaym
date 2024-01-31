import styled from "styled-components";

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const Subtitle = styled.p`
  font-weight: 600;
  color: rgb(130, 130, 130);
  font-size: 16px;
  margin-top: 2rem;
`;

const Content = styled.div<any>`
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: ${({ size }) => (size ? `${size}px` : "15px")};
  color: rgb(90, 90, 90);
  font-family: inherit
 }
  > h6 {
    font-size: 16px;
  }

  .chapter-title a {
    font-size: 20px;
    font-weight: 800;
    color: #111;
  }

  .chapter-title-decoration-below,
  .chapter-title-decoration-above,
  .chapter-title-corner-decorations {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
  }

  p > span {
    font-size: 15px !important;
  }

  a {
    color: rgb(90, 90, 90);
  }

  > .quote {
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.01);

    > p {
      font-weight: 700;

      background-color: #1d1d1d;
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(45deg, #f28a10, #fbc586);

      > small {
        margin-top: 10px;
        font-size: 10px;
      }
    }
  }
`;

const HadithContent = ({
  fontSize,
  subtitle,
  content,
  contentMargin = "-1.5rem",
}: any) => {
  return (
    <Wrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Content
        contentMargin={contentMargin}
        size={fontSize}
        bg="#f7f7f7"
        color="#363636"
        quoteColor="#fff"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </Wrapper>
  );
};

export default HadithContent;
