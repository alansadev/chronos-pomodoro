import { Home } from './Pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
// import { AboutPomodoro } from './Pages/AboutPomodoro';
// import { NotFound } from './Pages/NotFound';

import './styles/theme.css';
import './styles/global.css';

export function App() {
	return (
		<TaskContextProvider>
			<Home />
		</TaskContextProvider>
	);
}
