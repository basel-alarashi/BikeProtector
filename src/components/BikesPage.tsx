import ReactPaginate from "react-paginate";
import { IBike } from "./Bike";
import styled from "styled-components";
import BikesList from "./BikesList";

interface IBikePage {
  bikes: IBike[],
  totalCount: number,
  elementsPerPage: number,
  handlePageClick: (selectedItem: {
    selected: number;
  }) => void
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    list-style-type: none;
    width: 30%;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      background-color: #666;
      color: white;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color .3s ease;
    }

    a:hover {
      background-color: #555;
    }
  }
`;

const BikesPage = ({ bikes, totalCount, handlePageClick, elementsPerPage }: IBikePage) => {
  return (
    <Wrapper>
      <BikesList bikes={bikes} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next »"
        onPageChange={handlePageClick}
        pageRangeDisplayed={elementsPerPage}
        pageCount={Math.ceil(totalCount / elementsPerPage)}
        previousLabel="« previous"
        renderOnZeroPageCount={null}
      />
    </Wrapper>
  )
}

export default BikesPage