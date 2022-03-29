import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styledComponents from "styled-components";

const Container = styledComponents.div`
  height: 60px;
`;

const Wrapper = styledComponents.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styledComponents.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styledComponents.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styledComponents.input`
  border: none;
  height: 100%;
`;

const Center = styledComponents.div`
  flex: 1;
  text-align: center;
`;

const Logo = styledComponents.h1`
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

const Right = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styledComponents.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MAZZINI</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={1}>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
