import React from 'react';

import telegram from '../../assets/telegram.png'
import discord from '../../assets/discord.png'
import facebook from '../../assets/facebook.png'

import './Main.css';

import Card from '../Card/Card'

export default function Main() {
  return (
    <main >
      <h1>DeployAR</h1>
      <h3>Comunidad argentina</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt repellat animi architecto quia quis sit vero et amet excepturi ipsum! Ullam quae tempora, facilis optio officia nemo ducimus porro <rerum></rerum>
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>

      <div className='comunidades'>
        <Card
          href='https://t.me/joinchat/K923HlbTWN1hQGcJzhjeSg'
          title='Telegram Empleos'
          src={telegram}
          alt='Telegram icon'
          color='telegram'
        />
        <Card
          href='https://t.me/joinchat/K923HlbTWN1hQGcJzhjeSg'
          title='Comunidad Discord'
          src={discord}
          alt='Discord icon'
          color='discord'
        />
        <Card
          href='https://t.me/joinchat/K923HlbTWN1hQGcJzhjeSg'
          title='Comunidad Facebook'
          src={facebook}
          alt='Facebook icon'
          color='facebook'
        />
      </div>
    </main>


  );
}

