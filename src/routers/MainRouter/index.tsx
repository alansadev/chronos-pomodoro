import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../../Pages/Home';
import { NotFound } from '../../Pages/NotFound';
import { AboutPomodoro } from '../../Pages/AboutPomodoro';
import { useEffect } from 'react';
import { History } from '../../Pages/History';
import { Settings } from '../../Pages/Settings';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);

	return null;
}

export function MainRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/history/' element={<History />} />
				<Route path='/about-pomodoro/' element={<AboutPomodoro />} />
				<Route path='/settings/' element={<Settings />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
			<ScrollToTop />
		</BrowserRouter>
	);
}
