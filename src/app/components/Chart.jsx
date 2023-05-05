import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import useData from '../DataContext';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
export default function Chart() {
	return (
		<div>
			<h1>Chart</h1>
		</div>
	);
}
