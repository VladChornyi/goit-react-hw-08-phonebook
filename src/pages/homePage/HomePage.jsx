import s from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={s.box}>
      <h2 className={s.title}> Hello!!! This is your PHONEBOOK.</h2>
      <p className={s.text}>Please, registrate or go to your contacts page.</p>
    </div>
  );
};

export default HomePage;
