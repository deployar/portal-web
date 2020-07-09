import React from 'react';

import telegram from '../../assets/telegram.png'
import discord from '../../assets/discord.png'


import './Main.css';

import Card from '../Card/Card'
import Countdown from '../Countdown/Countdown';

export default function Main() {
  return (
    <main >
      <h1>DeployAR</h1>
      <h3>Comunidad argentina</h3>
      <p>
        Somos una comunidad en continuo crecimiento, retroalimentándonos mutuamente, intentando generar cada día una mejor plataforma colaborativa para nuevos talentos y cualquier seniority.
      </p>
      <p>
        ¡Unite a nuestras plataformas!
      </p>

      <div className='comunidades'>
        <Card
          href='https://t.me/joinchat/K923HlbTWN1hQGcJzhjeSg'
          title='Empleos'
          src={telegram}
          alt='Telegram icon'
          color='telegram'
          text1='Encontrá tu próxima oportunidad laboral'
        //text2='Compartí búsquedas'
        />
        <Card
          href='https://discord.gg/Sd96cV'
          title='Discord'
          src={discord}
          alt='Discord icon'
          color='discord'
          text1=' ¡Vení a hablar con la comunidad! '
        //text2='Charlas sobre el mundo IT '
        />


      </div>
      <Countdown
        timeTillDate="08 09 2020, 0:00 am"
        timeFormat="MM DD YYYY, h:mm a" />
    </main>


  );
}

