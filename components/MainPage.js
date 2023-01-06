import React, { useCallback, useEffect, useState } from 'react';

import styles from '../css/MainPage.module.css';

function MainPage() {
  const [myPrompt, setMyPrompt] = useState();

  function showPrompt() {
    document.getElementById('pwa_btn').style.display = 'none';
    myPrompt.prompt();
    myPrompt.userChoice.then((choiceResult) => {
      if (choiceResult === 'accepted') {
        console.log('Usuário aceitou o prompt');
      } else {
        document.getElementById('pwa_btn').style.display = 'block';
      }
    });
  }
  const captureEvent = useCallback((event) => {
    event.preventDefault();
    setMyPrompt(event);
    document.getElementById('pwa_btn').style.display = 'block';
  }, []);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => captureEvent(e));
    return () => {
      window.removeEventListener('beforeinstallprompt', captureEvent);
    };
  }, [captureEvent]);
  return (
    <div className={styles.mainBox}>
      <img src="/assets/profile.svg" width="150px" />
      <h1>Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button onClick={() => showPrompt()} id="pwa_btn">
        Instalar aplicação
      </button>
    </div>
  );
}

export default MainPage;
