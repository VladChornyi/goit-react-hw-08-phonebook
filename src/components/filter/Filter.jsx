import { useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { getFilterSelector } from '../../redux/phonebook/phonebook-selectors';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(changeFilter(e.target.value));
  const value = useSelector(getFilterSelector);
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input className={s.input} type="text" value={value} onChange={onChangeFilter} />
      </label>
    </>
  );
};

export default Filter;
