import L from 'leaflet';
import React, { useCallback, useEffect, useState } from 'react';
import { TileLayer, LayersControl } from 'react-leaflet';

const Overlays = () => {
    const [key, setKey] = useState();

    const getSecret = useCallback(async () => {
        try {
            const res = await fetch('/api/secret');
            const resData = await res.json();
            setKey(resData);
        } catch {}
    }, [setKey]);

    const UseOverlays = useCallback(() => {
        if (key) {
            let clouds = L.OWM.cloudsClassic({ appId: key.key });
            let rain = L.OWM.rainClassic({ appId: key.key });
            let snow = L.OWM.snow({ appId: key.key });
            let temp = L.OWM.temperature({ appId: key.key });

            const overlaysArr = [
                { overlay: clouds, name: 'Clouds', opacity: 0.3 },
                { overlay: rain, name: 'Rain', opacity: 0.4 },
                { overlay: snow, name: 'Snow', opacity: 0.7 },
                { overlay: temp, name: 'Temperature', opacity: 0.4 },
            ];

            return overlaysArr.map(el => (
                <LayersControl.Overlay name={el.name} key={el.name}>
                    <TileLayer
                        noWrap={true}
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={el.overlay._owmtileurl}
                        opacity={el.opacity}
                    />
                </LayersControl.Overlay>
            ));
        }
    }, [key]);

    useEffect(() => {
        getSecret();
    }, [getSecret]);

    if (key) {
        return <UseOverlays />;
    } else {
        return null;
    }
};

export default Overlays;
