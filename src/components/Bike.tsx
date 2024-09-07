import styled from "styled-components"

export interface IBike {
  title: string,
  description: string,
  thumb: string,
  date_stolen: number,
  stolen_location: string
};

const BikeStyle = styled.div`
  width: 75%;
  height: 200px;
  padding: 4px 12px 4px 0;
  color: #666;
  background-color: #F1F1F1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }

  .title-part {
    align-self: flex-start;
    flex: .7;
  }

  .title {
    color: #3498DB;
    padding: 12px;
    font-weight: bold;
  }
`;

const Bike = ({ title, description, thumb, date_stolen, stolen_location }: IBike) => {
  return (
    <BikeStyle>
      <img src={thumb} alt="Bike Image" />
      <div className="title-part">
        <p className="title">{title}</p>
        <p><strong>Decsription: </strong>{description}</p>
      </div>
      <div>
        <p><strong>Stolen at: </strong>{date_stolen}</p>
        <p><strong>Location: </strong>{stolen_location}</p>
      </div>
    </BikeStyle>
  )
}

export default Bike