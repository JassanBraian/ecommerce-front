import React, { useEffect, useContext } from "react";
import PublicationContext from "../../../../context/publication/PublicationContext";
import '../../../../css/common/SearchBar/SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router";
import { MDBCol } from "mdbreact";



const SearchBar = () => {

  const {
    publicationSearch,
    setPublicationSearch,
    getPublications,
    publications,
    setFilteredData,
    filteredData
  } = useContext(PublicationContext);

  const navigate = useNavigate();

  useEffect(() => {
    getPublications();
    if (publicationSearch) {
      setPublicationSearch(publicationSearch)
      setFilteredData(publications)
    } else setPublicationSearch('');
  }, [])

  useEffect(() => {
    const newFilter = publications.filter((publication) => {
      return publication.title.toLowerCase().includes(publicationSearch.toLowerCase());
    });
    if (publicationSearch === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }, [publicationSearch])

  const handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setPublicationSearch(publicationSearch);
      navigate('/search-page');
    }
  }

  const clearInput = () => setPublicationSearch("");

  return (

    <MDBCol md="6">
      <div className='d-flex justify-content-center'>
        <div className="control">
          <input
            type="text"
            placeholder='BUSCAR'
            className="search-bar-input p-2 form-control search-bar-form-control"
            value={publicationSearch ? publicationSearch : ''}
            onChange={(e) => {
              setPublicationSearch(e.target.value)
            }}
            onKeyPress={handleEnterKeyPressed}
            maxLength='30'
          />
        </div>
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon  className="search-icon"/>
          ) : (
            <CloseIcon className="close-icon" id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </MDBCol >



  );
}

export default SearchBar;