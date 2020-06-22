import React from 'react';

import telegram from '../../assets/telegram-color.png'
import discord from '../../assets/discord-color.png'
import facebook from '../../assets/facebook-color.png'

import './Main.css';

import Card from '../Card/Card'

export default function Main() {
  return (
    <main >
      <h1>DeployAR</h1>
      <h3>Comunidad argentina</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt repellat animi architecto quia quis sit vero et amet excepturi ipsum! Ullam quae tempora, facilis optio officia nemo ducimus porro
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

      <div className='comunidades'>
        <Card
          href='https://t.me/joinchat/K923HlbTWN1hQGcJzhjeSg'
          title='Empleos'
          src={telegram}
          alt='Telegram icon'
          color='telegram'
        />
        <Card
          href='https://t.me/joinchat/K923HlbTWN1hQGcJzhjeSg'
          title='Discord'
          src={discord}
          alt='Discord icon'
          color='discord'
        />
        <Card
          href='https://t.me/joinchat/K923HlbTWN1hQGcJzhjeSg'
          title='Facebook'
          src={facebook}
          alt='Facebook icon'
          color='facebook'
        />
      </div>
    </main>


  );
}

