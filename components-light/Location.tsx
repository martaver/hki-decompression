import React, { useEffect, useLayoutEffect } from 'react';
import { GoogleMapsStyle_Silver } from '../styles/GoogleMapsStyle_Silver';

export function Location() {
  const mapProps = {
    frameBorder: '0',
    style: {
      border: 0,
      padding: 0,
      width: '100%',
      height: '450px',
      outline: 0,
    },
    allowFullScreen: false,
    'aria-hidden': false,
    tabIndex: 0,
  };

  const url =
    'https://www.google.com/maps/place/Kattilahalli/@60.1867061,24.967626,17z/data=!3m1!4b1!4m5!3m4!1s0x4692097c7897338f:0x8f9812ebd652da44!8m2!3d60.1867035!4d24.9698147';

  const goToMaps = () => {
    window.open(url, '__blank');
  };
  useEffect(() => {
    const center: google.maps.LatLngLiteral = {
      lat: 60.18684216859983,
      lng: 24.9698146989871,
    };
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center,
        zoom: 16,
        styles: GoogleMapsStyle_Silver,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        fullscreenControl: false,
        draggable: false,
        streetViewControl: false,
        draggableCursor: 'pointer',
      }
    );

    const marker = new google.maps.Marker({
      position: center,
      map,
      clickable: true,
      label: {
        text: 'Kattilahalli, Sornainen',
        color: 'black',
        fontSize: '12px',
      },
      icon: {
        path: `M13.04,41.77c-0.11-1.29-0.35-3.2-0.99-5.42c-0.91-3.17-4.74-9.54-5.49-10.79c-3.64-6.1-5.46-9.21-5.45-12.07
        c0.03-4.57,2.77-7.72,3.21-8.22c0.52-0.58,4.12-4.47,9.8-4.17c4.73,0.24,7.67,3.23,8.45,4.07c0.47,0.51,3.22,3.61,3.31,8.11
        c0.06,3.01-1.89,6.26-5.78,12.77c-0.18,0.3-4.15,6.95-5.1,10.26c-0.64,2.24-0.89,4.17-1,5.48C13.68,41.78,13.36,41.78,13.04,41.77z
        `,
        fillColor: '#e88c14',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 1,
        anchor: new google.maps.Point(14, 43),
        labelOrigin: new google.maps.Point(13.5, 55),
      },
    });

    marker.addListener('click', goToMaps);
  });

  return (
    <>
      <section
        id={'location'}
        style={{
          backgroundImage: 'url("light/images/kattilahalli.jpg")',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '10em',
          paddingBottom: '10em',
        }}
      >
        <div
          style={{
            border: '2px solid white',
            padding: '3em 4em',
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        >
          <h3 style={{ marginBottom: '1em' }}>Kattilahalli</h3>
          <p
            style={{
              marginBottom: '0',
              textTransform: 'uppercase',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            Sörnäisten rantatie 22, 00540 Helsinki
          </p>
        </div>
      </section>
      <div id={'map'} {...mapProps} onClick={goToMaps} />
    </>
  );
}
