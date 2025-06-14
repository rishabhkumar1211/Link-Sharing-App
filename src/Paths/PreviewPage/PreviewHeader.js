import ButtonShare from "./ButtonShare";
import ButtonEditor from "./ButtonEditor";
import styled from "styled-components";
import { useContext } from "react";
import LinkContext from "../../context/LinkContext";
import { useNavigate } from "react-router-dom";

const PreviewHeader =  ( ) => {
  const { shareUrl, setSharedClicked } = useContext(LinkContext); 
  const navigate = useNavigate();

  const handleClickShared = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      console.log("text copied to clipboard")
    }).catch((error) => {
      console.log("failed to copy text", error)
    })
    setSharedClicked(true)
  }

  const handleClickOnBack = () => {
    navigate("/")
    setSharedClicked(false)
  };

  return (
    <StyledPreviewHeader>
        <ButtonEditor onClick={handleClickOnBack}/>
        <ButtonShare onClick={handleClickShared}/>
    </StyledPreviewHeader>
  )
}

export default PreviewHeader;

const StyledPreviewHeader = styled.div`
    min-width: 375px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white, #FFF);
    border-radius: 12px;
    padding: 16px;
    justify-content: space-between;    

    @media (min-width: 772px) {
      min-width: 720px;
      height: 78px;
      border-radius: 12px;
      padding: 16px;
      margin: 0px 24px 0px 24px;
      margin-top: 24px;
      position: absolute;
    }

    @media (min-width: 1280px) {
      width: 1392px;
      height: 78px;
      border-radius: 12px;

    }
`
