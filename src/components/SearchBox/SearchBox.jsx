const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" name="seachName" value={value} onChange={onChange} />
    </>
  );
};

export default SearchBox;
