import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container/index';
import { CountDown } from '../../components/CountDown/index';
import { MainForm } from '../../components/MainForm';
import { useEffect } from 'react';

export function Home() {
	useEffect(() => {
		document.title = 'Chronos Pomodoro';
	}, []);
	return (
		<MainTemplate>
			<Container>
				<CountDown />
			</Container>
			<Container>
				<MainForm />
			</Container>
		</MainTemplate>
	);
}
