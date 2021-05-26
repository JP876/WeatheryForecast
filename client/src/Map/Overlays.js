import L from 'leaflet';
import React, { useCallback } from 'react';
import { TileLayer, LayersControl } from 'react-leaflet';

const Overlays = () => {
    const UseOverlays = useCallback(() => {
        const appId = 'b214db208ce6c395037d3080b40dfcab';

        let clouds = L.OWM.cloudsClassic({ appId: appId });
        let rain = L.OWM.rainClassic({ appId: appId });
        let snow = L.OWM.snow({ appId: appId });
        let temp = L.OWM.temperature({ appId: appId });

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
    }, []);

    return <UseOverlays />;
};

export default Overlays;
