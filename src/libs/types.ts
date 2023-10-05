import type { ImageMetadata } from 'astro';

export interface ITopicsCard {
	image: { src: ImageMetadata; alt: string };
	title: string;
	subtitle: string;
	text: string;
}

export interface TPeoples {
	top: {
		imageProfile: { src: ImageMetadata; alt: string };
		infoProfile: {
			entry: string;
			position: string;
			office: string;
		};
		addInfo: {
			title: '主な仕事内容' | '仕事の醍醐味';
			text: string;
		}[];
	};
	bottom: {
		imageContent: { src: ImageMetadata; alt: string };
		addInfo: {
			title: '印象に残っているエピソード' | '学生時代の学びを活かせたこと';
			text: string;
		}[];
	};
}
