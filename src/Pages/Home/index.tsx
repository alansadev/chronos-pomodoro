import { MainTemplate } from '../../templates/MainTemplate';
import { Container } from '../../components/Container/index';
import { CountDown } from '../../components/CountDown/index';
import { MainForm } from '../../components/MainForm';

export function Home() {
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
