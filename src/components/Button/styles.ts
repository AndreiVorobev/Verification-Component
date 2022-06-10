import styled from "styled-components";

interface StyledButtonProps {
  reverse?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>(({ reverse }) => ({
  padding: "10px 15px",
  display: "flex",
  alignItems: "center",
  flexDirection: reverse ? "row-reverse" : "row",
  gap: 5,
  backgroundColor: "#0066ff",
  border: "none",
  borderRadius: 3,
  color: "#fff",
  fontWeight: 600,
  fontSize: 18,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#004dc1",
  },
}));
