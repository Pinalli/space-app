import { styled } from "styled-components";
import ItemNav from "./ItemNav"; // Import the ItemNav component


const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const Sidebar = () => {

  return (
    <aside>
      <nav>
        <StyledList>
          <ItemNav activeIcon="/icons/home-ativo.png" inactiveIcon="" active={true}>
            Início
          </ItemNav>
          <ItemNav activeIon="/icons/mais-vistas-ativo.png" inactiveIcon="">
            Mais vistas
          </ItemNav>
        </StyledList>
      </nav>
    </aside>
  );
};

export default Sidebar;
