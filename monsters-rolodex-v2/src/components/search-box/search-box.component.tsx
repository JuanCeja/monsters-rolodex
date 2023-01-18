import "./search-box.styles.css";

const funcName: (a: string, b: number, c) => boolean = (a, b, c) => {
  return true;
};

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
