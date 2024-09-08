import Bike, { IBike } from './Bike';

interface IBikesList {
  bikes: IBike[];
};

const BikesList = ({ bikes }: IBikesList) => {
  return bikes.map((bike, idx) =>
    <Bike key={idx} {...bike} />
  );
}

export default BikesList