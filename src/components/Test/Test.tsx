import { FC } from 'react';
import style from './Test.module.scss';
// import ReusableButton from '../ReusableBtn/ReusableBtn';
import ScrollUpBtn from '../ScrollUpBtn/ScrollUpBtn';

const Test: FC = () => {
  return (
    <main>
      <div className={style.test}>Test</div>
<<<<<<< HEAD
=======
      {/* <ReusableButton
        text="Задонатити"
        href="url"
        target="_blank"
        rel="noopener noreferrer"
      />
      <ReusableButton text="Поділитися збором" onClick={() => alert('Hello')} /> */}
      <ScrollUpBtn />
>>>>>>> develop
    </main>
  );
};

export default Test;
