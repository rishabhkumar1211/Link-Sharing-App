import getStartedLogo from "../assets/images/illustration-empty.svg";
import { StyledLargeHeading } from "./InfoHeading";
import styled from "styled-components";

function LetsGetYouStarted() {
  return (
    <StyledLGYSComponent className="getstarted--container">
        <img src={getStartedLogo} alt="started logo" />
        <StyledLargeHeading>Let’s get you started</StyledLargeHeading>
        <p>Use the “Add new link” button to get started. Once you have more than one link, 
            you can reorder and edit them. 
            We’re here to help you share your profiles with everyone!</p>
    </StyledLGYSComponent>
  )
}

export default LetsGetYouStarted;

const StyledLGYSComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  padding: 20px;
  border-radius: 12px;
  background: var(--light-grey, #FAFAFA);
  text-align: center;

  img {
    width: 124.7px;
    height: 80px;
  }

  @media (min-width: 772px) {
    margin-top: 24px;
    border-radius: 12px;
    text-align: center;
    padding: 83px 76px;

    img {
      width: 250px;
      height: 160px;
    }
  }
`