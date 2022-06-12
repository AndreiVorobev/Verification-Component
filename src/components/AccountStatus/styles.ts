import styled from "styled-components";

interface SvgContainerProps {
  status: "verified" | "not-verified" | "blocked";
}

export const StyledContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
}));

export const TitleContainer = styled.h5(() => ({
  color: "#a1a1a1",
  fontWeight: 900,
}));

export const SvgContainer = styled.span<SvgContainerProps>(({ status }) => ({
  width: status === "verified" ? "15px" : "10px",
  height: status === "verified" ? "15px" : "10px",
  padding: status === "verified" ? "3px" : "5px",
  borderRadius: 50,
  background:
    status === "not-verified"
      ? "#ff95004f"
      : status === "verified"
      ? "#12d70050"
      : "#0000002c",
  fontWeight: 700,
  display: "flex",
  "& svg path": {
    fill:
      status === "not-verified" ? "#ff9500" : status === "verified" ? "green" : "#111",
  },
}));
