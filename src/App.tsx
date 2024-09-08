/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import RootLayout from './layout/RootLayout'
import axios from 'axios';
import styled from 'styled-components';
import SearchInput from './components/SearchInput';
import BikesPage from './components/BikesPage';
import { IBike } from './components/Bike';
import Error, { IError } from './components/Error';
import Loading from './components/Loading';
import Empty from './components/Empty';
import DateRangFilter from './components/DateRangFilter';

const AppHeader = styled.div({
  width: '75%',
  display: 'flex',
  flexDirection: 'column',
  gap: 4
});

const HeaderTitle = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0F466B;
  text-transform: uppercase;

  h1 {
    font-size: 28px;
    font-weight: 500;
  }

  p {
    padding: 8px;
    border-radius: 4px;
    background-color: #F1F1F1;
  }
`;

const ELEMENTS_PER_PAGE = 10,
  DISTANCE = 16,
  LOCATION = 'munich',
  STOLENNESS = 'proximity',
  ACCESS_TOKEN = 'io7wLlevqFg3ByBRzB6mPSg8JacCccBaCuIKHyXKvJo';

function App() {
  const [bikes, setBikes] = useState<IBike[]>([]);
  const [totalBikesCount, setTotalBikesCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<IError>({
    isError: false,
    message: ''
  });
  const [query, setQuery] = useState<string>('');
  const [date, setDate] = useState({
    start: '',
    end: ''
  });
  const queryResult = useMemo(
    () => bikes.filter(bike => bike.title.toLowerCase().indexOf(query) !== -1), [query, bikes]);
  const dateResult = useMemo(() => {
    const date1 = Date.parse(date.start);
    const date2 = Date.parse(date.end);

    return bikes.filter(bike => date1 <= bike.date_stolen * 1000 && bike.date_stolen <= date2)
  }, [bikes, date.start, date.end]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const bikesRes = await axios.get(
          `https://bikeindex.org:443/api/v3/search?page=${
            pageNumber + 1
          }&per_page=${
            ELEMENTS_PER_PAGE
          }&location=${
            LOCATION
          }&distance=${
            DISTANCE
          }&stolenness=${
            STOLENNESS
          }&access_token=${
            ACCESS_TOKEN
          }`);
        const countRes = await axios.get(
          `https://bikeindex.org:443/api/v3/search/count?location=${
            LOCATION
          }&distance=${
            DISTANCE
          }&stolenness=${
            STOLENNESS
          }&access_token=${
            ACCESS_TOKEN
          }`);

        setBikes(bikesRes.data?.bikes?.map((elem: IBike) => ({
          description: elem?.description,
          title: elem?.title,
          date_stolen: elem?.date_stolen,
          thumb: elem?.thumb,
          stolen_location: elem?.stolen_location
        })));

        setTotalBikesCount(countRes.data?.proximity);
      } catch (error: any) {
        setError({ isError: true, message: error.message });
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [pageNumber]);

  return (
    <div id='root'>
      <RootLayout>
        {error.isError
          ? <Error {...error} />
          : <>
            <AppHeader>
              <HeaderTitle>
                <h1>Search for nearby stolen bikes</h1>
                <p><strong>Total Cases: </strong>{totalBikesCount}</p>
              </HeaderTitle>
              <SearchInput label='Search By Title:' placeholder='Type a title to search..' value={query}
                onChange={(e) => setQuery(e.target.value)} />
              <DateRangFilter startDate={date.start} endDate={date.end} onStartChange={
                (e) => setDate({ ...date, start: e.target.value })
              } onEndChange={
                (e) => setDate({ ...date, end: e.target.value })
              } />
            </AppHeader>

            {isLoading
              ? <Loading />
              : bikes.length <= 0 || (query.length > 0 && queryResult.length <= 0)
                ? <Empty />
                : <BikesPage bikes={
                  query.length > 0
                    ? queryResult
                    : date.start.length > 0 && date.end.length > 0
                      ? dateResult
                      : bikes
                } totalCount={totalBikesCount}
                handlePageClick={(selectedItem) => setPageNumber(
                    selectedItem.selected
                  )} elementsPerPage={ELEMENTS_PER_PAGE} />}
          </>}
      </RootLayout>
    </div>
  )
}

export default App
