import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styles from './style.component/StoreLocator.module.css';

const StoreLocator = () => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 10.762622, lng: 106.660172 });
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const fetchStores = () => {
    const dummyStores = [
      { id: 1, name: 'PomDu Store Sư Vạn Hạnh', address: '828 Đ. Sư Vạn Hạnh, Phường 12, Quận 10, thành phố Hồ Chí Minh', lat: 10.776047121263808, lng: 106.66737787754859 },
      { id: 2, name: 'PomDu Store Hóc Môn', address: '806 QL22, ấp Mỹ Hoà 3, Hóc Môn, thành phố Hồ Chí Minh', lat: 10.865717228892738, lng: 106.60054545412493 },
      { id: 3, name: 'PomDu Store Ba Gia', address: '52-70 Ba Gia, Phường 7, Tân Bình, thành phố Hồ Chí Minh', lat: 10.785068857175446, lng: 106.65462303236737 },
      { id: 4, name: 'PomDu Store Trường Sơn', address: '32 Đ. Trường Sơn, Phường 2, Tân Bình, thành phố Hồ Chí Minh', lat: 10.809086667370536, lng: 106.66502622396764 },
    ];
    setStores(dummyStores);
  };

  useEffect(() => {
    fetchStores();
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '600px'
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
    setMapCenter({ lat: store.lat, lng: store.lng });
  };

  return (
    <div className={styles.storeLocator}>
      <h1 className={styles.title}>Cửa hàng của PomDu</h1>
      <div className={styles.container}>
        <div className={styles.mapContainer}>
          {googleMapsApiKey ? (
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={14}
                options={options}
              >
                {stores.map(store => (
                  <Marker
                    key={store.id}
                    position={{ lat: store.lat, lng: store.lng }}
                    onClick={() => handleStoreSelect(store)}
                  />
                ))}
                {selectedStore && (
                  <InfoWindow
                    position={{ lat: selectedStore.lat, lng: selectedStore.lng }}
                    onCloseClick={() => setSelectedStore(null)}
                  >
                    <div>
                      <h3>{selectedStore.name}</h3>
                      <p>{selectedStore.address}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          ) : (
            <div>Không thể tải Google Maps. Vui lòng kiểm tra API key.</div>
          )}
        </div>
        <div className={styles.storeList}>
          <h2>Danh sách cửa hàng</h2>
          <ul>
            {stores.map(store => (
                <li key={store.id} onClick={() => handleStoreSelect(store)}>
                <h3>{store.name}</h3>
                <p>{store.address}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;