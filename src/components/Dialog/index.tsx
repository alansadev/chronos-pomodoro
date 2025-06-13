import { ToastContentProps } from 'react-toastify';

import styles from './styles.module.css';
import { DefaultButton } from '../DefaultButton/index';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
	return (
		<>
			<div className={styles.container}></div>
			<p>{data}</p>
			<div className={styles.buttonsContainer}>
				<DefaultButton
					onClick={() => closeToast(true)}
					icon={<ThumbsUpIcon />}
					aria-label='Confirmar ação e fechar'
					title='Confirmar ação e fechar'
				/>
				<DefaultButton
					onClick={() => closeToast(false)}
					icon={<ThumbsDownIcon />}
					aria-label='Cancelar ação e fechar'
					title='Cancelar ação e fechar'
					color='red'
				/>
			</div>
		</>
	);
}
