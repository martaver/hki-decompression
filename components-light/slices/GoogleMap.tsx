import React, { FC, useEffect, useLayoutEffect } from 'react';
import { GoogleMapsStyle_Silver } from '../../styles/GoogleMapsStyle_Silver';
import { SliceOf } from '../../utils/types';
import { SliceData } from './Slices';

export type GoogleMapData = SliceOf<SliceData, 'HomepageBodyMap'>;

export type GoogleMapProps = {
  slice: GoogleMapData;
};

export const GoogleMap: FC<GoogleMapProps> = ({ slice }) => {
  const { google_maps_url, label, zoom } = slice.primary;

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

  const latLongRegex = /\/@(\d+\.\d+),(\d+\.\d+),/;
  const matches = google_maps_url.match(latLongRegex);
  const lat = Number.parseFloat(matches[1]);
  const lng = Number.parseFloat(matches[2]);

  const goToMaps = () => {
    window.open(google_maps_url, '__blank');
  };
  useEffect(() => {
    const center: google.maps.LatLngLiteral = {
      lat,
      lng,
    };
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center,
        zoom,
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
        text: label,
        color: 'black',
        fontSize: '12px',
        fontWeight: '600',
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

    const marker2 = new google.maps.Marker({
      position: center,
      map,
      clickable: true,
      label: {
        text: '(Click to open)',
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
        labelOrigin: new google.maps.Point(13.5, 80),
      },
    });

    marker.addListener('click', goToMaps);
  });

  return (
    <div
      id={'map'}
      {...mapProps}
      onClick={goToMaps}
      style={{ height: '450px' }}
    />
  );
};
