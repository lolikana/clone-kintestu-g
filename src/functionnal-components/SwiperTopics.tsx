import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TopicsCard from '@functionnal-components/sections/topics/TopicsCard';
import type { FC } from 'react';
import type { ITopicsCard } from 'src/types';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './SwiperTopics.module.scss';

type Props = {
	data: ITopicsCard[];
};

const SwiperTopics: FC<Props> = props => {
	const { data } = props;

	return (
		<div className={styles.topics}>
			<Swiper
				pagination={true}
				cssMode={true}
				navigation={true}
				modules={[Pagination, Navigation]}
				loop={true}
				className={styles.mySwiper}
			>
				{data.map((item, index) => (
					<SwiperSlide key={index}>
						<TopicsCard data={item} index={index} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SwiperTopics;
