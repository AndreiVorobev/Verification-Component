import { FC } from "react";
import { SuccessSvg, XcrossSvg } from "../../assets";
import { StyledContainer, SvgContainer, TitleContainer } from "./styles";

export interface AcountStatusProps {
  status: "verified" | "not-verified" | "blocked";
}

export const AcountStatus: FC<AcountStatusProps> = ({ status }) => {
  const verified = status === "verified";
  const notVerifed = status === "not-verified";
  const blocked = status === "blocked";

  const getStatusText = () => {
    if (verified) return "Verified";
    if (notVerifed) return "Not Verified";
    if (blocked) return "Blocked";
  };
  return (
    <StyledContainer>
      <TitleContainer>Status:</TitleContainer>
      <strong>{getStatusText()}</strong>
      <SvgContainer status={status}>
        {verified ? <SuccessSvg /> : <XcrossSvg />}
      </SvgContainer>
    </StyledContainer>
  );
};
