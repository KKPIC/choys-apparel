import styled from "styled-components";
import Filter from "../../ui/Filter";

const StyledTableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
function ProductTableOperations({ handleFilterChange, handlePageChange }) {
  const searchParamsToReset = [{ name: "page", value: 1 }];
  return (
    <StyledTableOperations>
      <Filter
        filterField={"bodyTag"}
        options={[
          { value: "All", label: "All" },
          { value: "Head", label: "Head wear" },
          { value: "Body", label: "Body wear" },
          { value: "Legs", label: "Leg wear" },
          { value: "Feet", label: "Feet wear" },
        ]}
        handleFilterChange={handleFilterChange}
        handlePageChange={handlePageChange}
      />
    </StyledTableOperations>
  );
}

export default ProductTableOperations;
