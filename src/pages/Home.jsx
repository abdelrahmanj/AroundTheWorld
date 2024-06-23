import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import Searchinput from "../components/Searchinput";
import ShowMessage from "../components/ShowMessage";

import { useFetchData } from "../useFetchData";

const Home = () => {
  const {
    result,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  } = useFetchData();
  return (
    <>
      {isError && <ShowMessage message="Something went wrong!"></ShowMessage>}
      {isLoading && (
        <ShowMessage message="Loading countries data...!"></ShowMessage>
      )}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <Searchinput
              countriesList={result} // data
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result} // data
              filterCountriesList={setFilteredCountries} // access to update data
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
      ;
    </>
  );
};

export default Home;
