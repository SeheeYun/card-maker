import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useRef } from 'react';
import Mood from '../mood/mood';
import styles from './moods.module.css';

const Moods = ({ store }) => {
  const requestRef = useRef();

  const animate = useCallback(() => {
    store.setRotate();
    requestRef.current = requestAnimationFrame(animate);
  }, [store]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  return (
    <div
      className={styles.moods}
      style={{ transform: `rotate(${store.rotate}rad)` }}
    >
      {store.moods.map(mood => (
        <Mood key={store.moods.indexOf(mood)} mood={mood} store={store} />
      ))}
    </div>
  );
};

export default observer(Moods);