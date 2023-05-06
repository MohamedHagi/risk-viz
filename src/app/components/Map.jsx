'use client';
import React, { useEffect, useState, useMemo } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, Popup } from 'react-map-gl';
import useData from '../DataContext';
import styles from '../Home.module.css';

export default function RiskMap() {
	const { data, view } = useData();

	console.log(data);

	data.forEach((marker) => {
		const risk = marker['Risk Rating'];
		//scaling index for switch-case statements, adding a marker color for risk rating
		const index = Math.round(risk * 10);
		switch (index) {
			case 0:
				marker.markercolor = '#FEF001';
				break;
			case 1:
				marker.markercolor = '#FFCE03';
				break;
			case 2:
				marker.markercolor = '#FD9A01';
				break;
			case 3:
				marker.markercolor = '#FD6104';
				break;
			case 4:
				marker.markercolor = '#FF2C05';
				break;
			case 5:
				marker.markercolor = '#F00505';
				break;
			case 6:
				marker.markercolor = '#750227';
				break;
			case 7:
				marker.markercolor = '#570044';
				break;
			case 8:
				marker.markercolor = '#3B005C';
				break;
			case 9:
				marker.markercolor = '#250740';
				break;
		}
	});

	//setting intial start viewport, and handling the viewport
	const [viewport, setViewPort] = useState({
		latitude: 49.7715,
		longitude: -96.8165,
		zoom: 3,
	});

	//handle the popUp state
	const [popupInfo, setPopupInfo] = useState(null);

	//extract markers from the data
	const markers = useMemo(
		() =>
			data.map((entry, index) => (
				<Marker
					key={`marker-${index}`}
					longitude={entry['Long']}
					latitude={entry['Lat']}
					anchor="bottom"
					onClick={(e) => {
						e.originalEvent.stopPropagation();
						setPopupInfo(entry);
					}}
					color={`${entry['markercolor']}`}
				></Marker>
			)),
		[data]
	);

	return (
		<div>
			{view === 'map' ? (
				<Map
					{...viewport}
					style={{ width: '90%', height: '100vh', margin: '0 auto' }}
					className={styles.map}
					mapStyle="mapbox://styles/mhagi9/clh8906rf01nz01p8hbofbeay"
					mapboxAccessToken={
						'pk.eyJ1IjoibWhhZ2k5IiwiYSI6ImNsaDg2azViczA1cWszcm1zeXI0ZGNrdW8ifQ.LFdeZ3LqJ8s0JojBpmMngg'
					}
					onMove={(evt) => setViewPort(evt.viewport)}
				>
					{markers}

					{popupInfo && (
						<Popup
							anchor="top"
							longitude={Number(popupInfo['Long'])}
							latitude={Number(popupInfo['Lat'])}
							onClose={() => setPopupInfo(null)}
						>
							<div>
								<p>Asset Name: {popupInfo['Asset Name']}</p>
								<p>Business: {popupInfo['Business Category']}</p>
							</div>
						</Popup>
					)}
				</Map>
			) : (
				''
			)}
		</div>
	);
}
