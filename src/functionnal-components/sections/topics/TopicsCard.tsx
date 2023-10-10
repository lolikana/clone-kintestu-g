import type { ITopicsCard } from '@libs/types';
import { type FC } from 'react';

import styles from './TopicsCard.module.scss';

type Props = {
	data: ITopicsCard;
	index: number;
};

const TopicsCard: FC<Props> = props => {
	const { data, index } = props;
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<img src={data.image.src.src} alt={data.image.alt} width={380} height={330} />
			</div>
			<div className={styles.card__content}>
				<div className={`${styles['card__topics']} eng-text`}>
					<div className={styles.card__topics_titles}>
						<p>Paw Dog Holdings</p>
						<p>Recent Topics</p>
					</div>
					<span className={styles.card__topics_number}>#0{index + 1}</span>
				</div>
				<div className={`${styles.card__text} break-line`}>
					<h3 className={`${styles.card__text_title} eng-text`}>{data.title}</h3>
					<h3 className={styles.card__text_subtitle}>{data.subtitle}</h3>
					<p className={styles.card__text_text}>{data.text}</p>
				</div>
			</div>
		</div>
	);
};

export default TopicsCard;
