import { ReactNode } from "react";
import { CustomContainer, CustomNavBar } from "..";

export const Layout = (props: { children?: ReactNode }) => {
  return (
    <>
      <CustomNavBar />
      <CustomContainer>
        {props.children}
      </CustomContainer>
    </>
  );
};
