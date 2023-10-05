import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper.scss';

import type { ITopicsCard } from '@libs/types';
import type { FC } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './SwiperTopics.module.scss';
import TopicsCard from './TopicsCard';

type Props = {
	data: ITopicsCard[];
};

const SwiperTopics: FC<Props> = props => {
	const { data } = props;

	return (
		<>
			<div className={styles.topics}>
				<Swiper
					modules={[Pagination, Navigation]}
					spaceBetween={30}
					pagination={{ clickable: true }}
					navigation={true}
					loop={true}
					speed={500}
					className="swiper-topics"
				>
					{data.map((item, index) => (
						<SwiperSlide key={index}>
							<TopicsCard data={item} index={index} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default SwiperTopics;
