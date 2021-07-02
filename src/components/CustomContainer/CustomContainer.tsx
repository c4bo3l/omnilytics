import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import './CustomContainer.css';

interface CustomContainerProps {
  children: ReactNode;
}

export const CustomContainer = (props: CustomContainerProps) => {
  return (
    <Container className='root-container' fluid>
      {props.children}
    </Container>
  );
};