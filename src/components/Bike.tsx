import styled from "styled-components";

export interface IBike {
  title: string,
  description: string,
  thumb: string,
  date_stolen: number,
  stolen_location: string
};

const BikeStyle = styled.div`
  width: 80%;
  height: 200px;
  margin-top: 8px;
  padding: 0 12px 4px 4px;
  color: #666;
  background-color: #F1F1F1;
  display: flex;
  gap: 12px;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    cursor: zoom-in;
  }

  .remain-part {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
    
  .info {
    width: 100%;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    color: #3498DB;
    font-weight: bold;
  }

  .desc {
    width: 100%;
    font-size: 14px;
  }
`;

const Bike = ({ title, description, thumb, date_stolen, stolen_location }: IBike) => {
  const stolenDate = new Date(date_stolen * 1000).toDateString();

  return (
    <BikeStyle>
      <img src={thumb || '/default-bike.svg'} alt="Bike Image" />
      <div className="remain-part">
        <div className="info">
          <p className="title">{title || ''}</p>
          <div>
            <p><strong>Stolen at: </strong>{stolenDate || 'No Date'}</p>
            <p><strong>Location: </strong>{stolen_location || 'No Location'}</p>
          </div>
        </div>
        <p className="desc"><strong>Decsription: </strong>{description || 'No description'}</p>
      </div>
    </BikeStyle>
  );
};

export default Bike;