import {computed, type ComputedRef} from "vue";
import {useRoute} from "vue-router";
import type {Location} from "~/types";
import branches from "~/data/branches";
import { FLAGS } from '~/data/constants';

export function useLocation(): ComputedRef<Location> {
	const route = useRoute()
	return computed(() => {
		const path = route.path.split('/')[1];
		if (path === '' || path === 'ru-ru') {
			return {
				currentLocation: "ru-ru",
				newLocationPath: "by-ru",
				newLocationText: "РФ",
				branch: branches.spb,
				flag: FLAGS.ru.image
			}
		} else {
			return {
				currentLocation: "by-ru",
				newLocationPath: "ru-ru",
				newLocationText: "РБ",
				branch: branches.minsk,
				flag: FLAGS.by.image
			}
		}
	})
}
