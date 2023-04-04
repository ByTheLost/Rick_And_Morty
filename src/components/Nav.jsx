import SearchBar from "./SearchBar"

const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default Nav;