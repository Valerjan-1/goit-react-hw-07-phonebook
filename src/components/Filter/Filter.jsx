import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/sliceFilter';
import { getFilter } from '../../redux/selectors';

const Filter = function () {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        placeholder="Enter a name"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;