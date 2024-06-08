import React from 'react';
import { useYandexMapStore } from 'src/store';

import {
  FullscreenControl,
  Map,
  Placemark,
  SearchControl,
  TypeSelector,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import s from './form.module.scss';

const CompanyMapFormItem: React.FC = () => {
  const { location, defaultLocation, setMapLocation } = useYandexMapStore();
  const onMapClick = async (event: any) => {
    const map: number[] = event.get('coords');
    setMapLocation(map);
  };
  const handlePlacemarkDrag = (e: any) => {
    const newCoords: number[] = e.get('target').geometry.getCoordinates();
    setMapLocation(newCoords);
  };
  return (
    <Map
      state={{
        center: location.length ? location : defaultLocation,
        zoom: 15,
      }}
      className={s.map}
      onClick={onMapClick}
    >
      <FullscreenControl />
      <SearchControl />
      <ZoomControl />
      <TypeSelector />
      <Placemark
        geometry={location}
        options={{
          draggable: true,
          iconLayout: 'default#image',
          iconImageSize: [32, 32],
          iconImageOffset: [-16, -16],
        }}
        onDragEnd={handlePlacemarkDrag}
      />
    </Map>
  );
};

export { CompanyMapFormItem };
