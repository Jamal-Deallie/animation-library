import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Section = styled("section")({
  fontFamily: "sans-serif",
  height: "100vh",
  fontSize: "20px",
  lineHeight: 1.4
});

export const Container = styled(Box)({
  overflowX: "hidden"
});

export const Image = styled("img")({
  height: "100%",
  width: "auto",
  paddingRight: "64px",
  objectFit: "cover",
  "& :nth-of-type(1)": {
    paddingLeft: "64px"
  }
});

export const ImageWrapper = styled(Box)({
  display: "flex",
  flexShrink: 0,
  height: "50vh"
});

export const TextWrapper = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  height: "25vh",
  textOverflow: "ellipsis",
  whiteSpace: "pre",
  fontSize: "clamp(96px, 16vh, 260px)",
  padding: "0 64px",
  color: "black"
});

export const ScrollWrapper = styled(Box)({
  background: "#fff",
  height: "100vh"
});

export const Placeholder = styled(Box)({
  height: "100vh",
  background: "indigo",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold"
});
