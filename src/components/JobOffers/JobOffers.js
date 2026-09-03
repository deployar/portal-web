import React, { useEffect, useState } from 'react';
import './JobOffers.css';

function formatDate(value) {
  return new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(value));
}

export default function JobOffers() {
  const [offers, setOffers] = useState([]);
  const [state, setState] = useState('loading');

  useEffect(() => {
    let active = true;

    fetch('/.netlify/functions/messages?limit=30')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudieron cargar las ofertas.');
        }

        return response.json();
      })
      .then((payload) => {
        if (active) {
          setOffers(payload.data || []);
          setState('ready');
        }
      })
      .catch(() => {
        if (active) {
          setState('error');
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className='job-offers'>
      <h1>Ofertas laborales</h1>
      {state === 'loading' && <p>Cargando ofertas...</p>}
      {state === 'error' && <p>No pudimos cargar las ofertas en este momento.</p>}
      {state === 'ready' && offers.length === 0 && <p>Todavía no hay ofertas publicadas.</p>}
      {state === 'ready' && (
        <section className='offer-list' aria-label='Listado de ofertas laborales'>
          {offers.map((offer) => (
            <article className='offer-card' key={offer.id}>
              <div className='offer-meta'>
                <span>{offer.authorName || 'DeployAR'}</span>
                <time dateTime={offer.sentAt}>{formatDate(offer.sentAt)}</time>
              </div>
              {offer.text && <p className='offer-text'>{offer.text}</p>}
              {offer.media && <span className='offer-media'>Adjunto: {offer.media.type}</span>}
              {offer.permalink && (
                <a href={offer.permalink} target='_blank' rel='noopener noreferrer'>
                  Ver publicación en Telegram
                </a>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
