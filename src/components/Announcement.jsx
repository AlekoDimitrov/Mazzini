import styledComponents from "styled-components";

const Container = styledComponents.div`
  height: 30px;
  background-color: teal;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over €50</Container>;
};

export default Announcement;
