const products = {
	categories: [
		{
			id: 1,
			slug: 'klinicheskie-molokootsosy',
			title: 'Клинические молокоотсосы',
			description: 'для использования в родильных домах и перинатальных центрах',
			img: '/img/products/klinicheskie-molokootsosy.jpg',
			productList: [
				{
					id: 11,
					slug: 'fisio',
					title: 'Клинический молокоотсос <span class="text-primary">FISIO<sup>®</sup></span>',
					fullTitle: 'Клинический электрический молокоотсос <span class="text-primary">FISIO<sup>®</sup></span>',
					description: 'Молокоотсос Kitett FISIO<sup>®</sup> предназначен для использования в медицинских учреждениях. Благодаря легкости в настройке может быть использован мамой самостоятельно.',
					country: 'Франция',
					material: 'Не содержит бисфенол-А',
					size: [
						{
							title: '',
							type: 'standard',
							width: 360,
							height: 250,
							length: 180,
							unit: 'мм',
						},
					],
					weight: {
						digit: 4,
						unit: 'кг',
					},
					installed: [
						{
							title: 'ГБУ РО "Перинатальный Центр"',
							country: 'ru-ru',
							address: '344068, ул. Бодрая, д. 90, г. Ростов-на-Дону',
						},
						{
							title: 'ФГБУ "НМИЦ АГП им. В.И.Кулакова" МИНЗДРАВА РОССИИ',
							country: 'ru-ru',
							address: '117997, г. Москва, ул. Академика Опарина, д. 4',
						},
						{
							title: 'ГБУЗ города Москвы "Детская городская клиническая больница имени Н.Ф. Филатова ДЗМ"',
							country: 'ru-ru',
							address: '123001, г. Москва, ул. Садовая-Кудринская, д. 15.',
						},
						{
							title: 'Городская клиническая больница. Отделение анестезиологии и реанимации новорожденных, комната грудного вскармивания, 1 этаж. Обсервационное отделение.',
							country: 'by-ru',
							address: '220026, г. Минск, ул. Филатова, д. 9',
						},
						{
							title: 'Городская клиническая больница №3 им. Е.В. Клумова Отделение акушерское послеродовое физиологическое',
							country: 'by-ru',
							address: '220030, г. Минск, ул. Ленина, д. 30',
						},
						{
							title: 'УЗ «Клинический родильный дом» Минской области',
							country: 'by-ru',
							address: '220114 г. Минск, ул. Ф. Скорины, д. 16',
						},
					],
					set: '<ul>' +
						'<li>Основной прибор (Электрический молокоотсос FISIO<sup>®</sup>) (1шт.)</li>' +
						'<li>' +
						'<p>Набор для сцеживания KOLOR<sup>®</sup> (1шт.)</p>' +
						'<ul>' +
						'<li>Воронка KOLOR<sup>®</sup> размер 24L (1 шт.)</li>' +
						'<li>Контейнер для сбора и хранения грудного молока, 100 мл (1шт.)</li>' +
						'<li>Крышка контейнера для хранения грудного молока (1 шт.)</li>' +
						'<li>Соединительная трубка (1 шт.)</li>' +
						'<li>Флакон-переходник (1 шт.)</li>' +
						'</ul>' +
						'</li>' +
						'</ul>',
					cover: '/img/products/bytovye-molokootsosy/fisio/electr-molocootsos-fisio.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/bytovye-molokootsosy/fisio/electr-molocootsos-fisio.jpg',
						},
						{
							id: 2,
							type: 'video',
							cover: '/img/video-covers/video-fisio-cover.jpg',
							link: 'https://www.youtube.com/embed/PmoRGrczn0Y?si=YzbCqhOo1Zoot0wU',
						},
					],
					instructions: [
						{
							id: 1,
							link: '../../../img/products/bytovye-molokootsosy/fisio/ekspluataciya-electro-molokootsosa.pdf',
							title: 'Инструкция по эксплуатации электрического молокоотсоса Kitett<sup>®</sup> FISIO',
						},
						{
							id: 2,
							link: '../../../img/products/bytovye-molokootsosy/fisio/hranenie-grudnogo-moloka.pdf',
							title: 'Хранение грудного молока',
						},
						{
							id: 3,
							link: '../../../img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf',
							title: 'Линейка KOLORAMA',
						},
					],
					review: '<p class="font-bold text-secondary">Сцеживание молока может быть необходимо по ряду причин:</p>' +
						'<ul>' +
						'<li>по медицинским показаниям со стороны ребенка: проблемы сосания, преждевременные роды, врожденные патологии.</li>' +
						'<li>по медицинским показаниям со стороны мамы: трещины сосков, нагрубание, боли при кормлении, втянутые соски или в случае медикаментозного лечения, несовместимого с грудным вскармливанием</li>' +
						'</ul>' +
						'<br>' +
						'<p class="font-bold text-secondary">Использование клинического молокоотсоса в роддоме поможет маме в:</p>' +
						'<ul>' +
						'<li>становлении лактации</li>' +
						'<li>стимулировании и поддержании выработки достаточного количества молока</li>' +
						'<li>повышении эффективности сцеживания</li>' +
						'</ul>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Технология сцеживания</h3>' +
						'<p>Молокоотсос FISIO может быть использован в роддоме мамой самостоятельно. Интенсивность и частота циклов сцеживания одномоментно настраиваются с помощью одной ручки-регулятора, что позволяет изменять силу вакуума в зависимости от индивидуальных ощущений.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Контроль гигиены устройства</h3>' +
						'<p>Конструкция молокоотсоса предусматривает защиту электромотора и других элементов от попадания грудного молока внутрь. Это исключает перекрестную контаминацию при использовании молокоотсоса несколькими мамами.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Индивидуальные параметры молокоотсоса</h3>' +
						'<p>При применении электрических молокоотсосов FISIO® и FISIO® PRO в медицинских учреждениях маме необходимо использовать индивидуальный набор для сцеживания KOLOR® с подобранной по размеру воронкой.</p>',
				},
				{
					id: 12,
					slug: 'fisio-pro',
					title: 'Клинический молокоотсос <span class="text-primary">FISIO<sup>®</sup> PRO</span>',
					fullTitle: 'Клинический электрический молокоотсос <span class="text-primary">FISIO<sup>®</sup> PRO</span>',
					description: 'Mолокоотсос Kitett FISIO<sup>®</sup>PRO предназначен для использования только в медицинских учреждениях. Помогает становлению и поддержанию необходимого уровня лактации.',
					country: 'Франция',
					material: 'Не содержит бисфенол-А',
					size: [
						{
							title: '',
							type: 'standard',
							width: 360,
							height: 250,
							length: 180,
							unit: 'мм',
						},
					],
					weight: {
						digit: 4,
						unit: 'кг',
					},
					installed: [
						{
							title: 'ФГБОУ ВО "Первый СПбГМУ им. акад. И.П. Павлова" МЗ РФ',
							country: 'ru-ru',
							address: '197022, г. Санкт-Петербург, ул. Льва Толстого, д. 6-8',
						},
						{
							title: 'ГАУЗ "Городская Больница № 2 г. Миасс"',
							country: 'ru-ru',
							address: '456300, Челябинская область, г. Миасс, Ильменская ул., д. 81',
						},
						{
							title: 'ГБУ РО "Перинатальный Центр"',
							country: 'ru-ru',
							address: '344068, г. Ростов-на-Дону, ул. Бодрая, д. 90',
						},
						{
							title: 'ФГБУ "НМИЦ АГП им. В.И.Кулакова" МИНЗДРАВА РОССИИ',
							country: 'ru-ru',
							address: '117997, г. Москва, ул. Академика Опарина, д. 4',
						},
						{
							title: 'ГБУЗ города Москвы "Детская городская клиническая больница имени Н.Ф. Филатова ДЗМ"',
							country: 'ru-ru',
							address: '123001, г. Москва, ул. Садовая-Кудринская, д. 15.',
						},
						{
							title: 'ГБУ "Республиканский Перинатальный Центр"',
							country: 'ru-ru',
							address: '364017, г. Грозный, Байсангуровский р-он, Бульвар Дудаева, 16а',
						},
						{
							title: 'ГБУЗ "Республиканская Клиническая Больница им. Г.Г. Куватова"',
							country: 'ru-ru',
							address: '450005, Республика Башкортостан, г. Уфа, ул. Достоевского, д. 132.',
						},
						{
							title: 'Семейная клиника «Роддом на Фурштатской» (Родильный дом № 2)',
							country: 'ru-ru',
							address: 'г. Санкт-Петербург, ул. Фурштатская, дом 36а, Лит. А',
						},
						{
							title: 'ГБУЗ города Москвы «ММКЦ «Коммунарка» ДЗМ», г. Москва, пос. Коммунарка',
							country: 'ru-ru',
							address: '108814, г. Москва, п. Коммунарка, ул. Сосенский стан, д. 8, ТиНАО',
						},
						{
							title: 'ГБУЗ города Москвы «Инфекционная клиническая больница № 1 ДЗМ», г. Москва',
							country: 'ru-ru',
							address: '125367, г. Москва, Волоколамское шоссе, д. 63c2',
						},
						{
							title: ' ГБУЗ «Кузбасская детская клиническая больница им. проф. Ю.Е. Малаховского»',
							country: 'ru-ru',
							address: '654063, Кемеровская область, г. Новокузнецк, ул. Димитрова 33',
						},
						{
							title: 'Городская клиническая больница №6 Родильное отделение',
							country: 'by-ru',
							address: '220037, г. Минск, Уральская ул., д. 5',
						},
						{
							title: 'УЗ «Клинический родильный дом» Минской области',
							country: 'by-ru',
							address: '220114 г. Минск, ул. Ф. Скорины, д. 16',
						},
					],
					set: '<ul>' +
						'<li>Основной прибор (Электрический молокоотсос FISIO PRO) (1 шт.)</li>' +
						'<li>' +
						'<p>Набор для сцеживания KOLOR (1 шт.)</p>' +
						'<ul>' +
						'<li>Воронка KOLOR размер 24L (1 шт.)</li>' +
						'<li>Контейнер для сбора и хранения грудного молока, 100 мл (1 шт.)</li>' +
						'<li>Крышка контейнера для хранения грудного молока (1 шт.)</li>' +
						'<li>Соединительная трубка (1 шт.)</li>' +
						'<li>Флакон-переходник (1 шт.)</li>' +
						'</ul>' +
						'</li>' +
						'</ul>',
					cover: '/img/products/bytovye-molokootsosy/fisio-pro/kitett_fisiopro.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/bytovye-molokootsosy/fisio-pro/kitett_fisiopro.jpg',
						},
						{
							id: 2,
							type: 'video',
							cover: '/img/video-covers/video-1-cover.jpg',
							link: 'https://www.youtube.com/embed/oUEwG1aBGL4?si=SW6J4-Us5YXi6BPW',
						},
					],
					instructions: [
						{
							id: 1,
							link: '../../../img/products/bytovye-molokootsosy/fisio-pro/kitett_fisio_pro_instrukzia.pdf',
							title: 'Инструкция по эксплуатации электрического молокоотсоса Kitett FISIO®',
						},
						{
							id: 2,
							link: '../../../img/products/bytovye-molokootsosy/fisio/hranenie-grudnogo-moloka.pdf',
							title: 'Хранение грудного молока',
						},
						{
							id: 1,
							link: '../../../img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf',
							title: 'Линейка KOLORAMA',
						},
					],
					review: '<p class="font-bold text-secondary">Сцеживание молока может быть необходимо по ряду причин:</p>' +
						'<ul>' +
						'<li>по медицинским показаниям со стороны ребенка: проблемы сосания, преждевременные роды, врожденные патологии.</li>' +
						'<li>по медицинским показаниям со стороны мамы: трещины сосков, нагрубание, боли при кормлении, втянутые соски или в случае медикаментозного лечения, несовместимого с грудным вскармливанием</li>' +
						'</ul>' +
						'<br>' +
						'<p class="font-bold text-secondary">Использование клинического молокоотсоса в роддоме поможет маме в:</p>' +
						'<ul>' +
						'<li>становлении лактации</li>' +
						'<li>стимулировании и поддержании выработки достаточного количества молока</li>' +
						'<li>повышении эффективности сцеживания</li>' +
						'</ul>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Технология сцеживания</h3>' +
						'<p>Молокоотсос FISIO может быть использован в роддоме мамой самостоятельно. Интенсивность и частота циклов сцеживания одномоментно настраиваются с помощью одной ручки-регулятора, что позволяет изменять силу вакуума в зависимости от индивидуальных ощущений.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Контроль гигиены устройства</h3>' +
						'<p>Конструкция молокоотсоса предусматривает защиту электромотора и других элементов от попадания грудного молока внутрь. Это исключает перекрестную контаминацию при использовании молокоотсоса несколькими мамами.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Индивидуальные параметры молокоотсоса</h3>' +
						'<p>При применении электрических молокоотсосов FISIO® и FISIO® PRO в медицинских учреждениях маме необходимо использовать индивидуальный набор для сцеживания KOLOR® с подобранной по размеру воронкой.</p>',
				},
			],
		},
		{
			id: 2,
			slug: 'bytovye-molokootsosy',
			title: 'Бытовые молокоотсосы',
			description: 'для домашнего использования',
			img: '/img/products/klinicheskie-molokootsosy/minikit-solo/minikit-solo.jpg',
			productList: [
				{
					id: 21,
					slug: 'kolor-play',
					title: 'Ручной молокоотсос <span class="text-primary">KOLOR PLAY<sup>®</sup></span>',
					fullTitle: 'Ручной молокоотсос <span class="text-primary">KOLOR PLAY<sup>®</sup></span>',
					description: 'Молокоотсос Kitett KOLOR PLAY<sup>®</sup> - это легкий и компактный ручной молокоотсос, простой в сборке и эксплуатации. Идеально подходит для эпизодических сцеживаний, незаменим во время длительных прогулок и путешествий.',
					country: 'Франция',
					material: 'Не содержит бисфенол-А',
					size: [
						{
							title: '',
							type: 'standard',
							width: 190,
							height: 168,
							length: 90,
							unit: 'мм',
						},
					],
					weight: {
						digit: 167,
						unit: 'г',
					},
					installed: [],
					set: '<ul>' +
						'<li>Вакуумный модуль KOLOR<sup>®</sup> CLIP (1 шт.)</li>' +
						'<li>Клапан «Clean Valve» (1 шт.)</li>' +
						'<li>Контейнер для сбора и хранения грудного молока, 100 мл (1 шт.)</li>' +
						'<li>Крышка контейнера для хранения грудного молока (1 шт.)</li>' +
						'<li>Подставка под контейнер (1 шт.)</li>' +
						'<li>Сумка для хранения принадлежностей (1 шт.)</li>' +
						'<li>Воронка KOLOR (1 шт.)</li>' +
						'</ul>',
					cover: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-blue-1.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor_play.jpg',
						},
						{
							id: 2,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-violet.jpg',
						},
						{
							id: 22,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-violet-1.jpg',
						},
						{
							id: 222,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-violet-2.jpg',
						},
						{
							id: 3,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-orange.jpg',
						},
						{
							id: 33,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-orange-1.jpg',
						},
						{
							id: 333,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-orange-2.jpg',
						},
						{
							id: 4,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-green.jpg',
						},
						{
							id: 44,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-green-1.jpg',
						},
						{
							id: 5,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-blue.jpg',
						},
						{
							id: 55,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-blue-1.jpg',
						},
						{
							id: 555,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-blue-2.jpg',
						},
						{
							id: 6,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-box.jpg',
						},
						{
							id: 66,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-box-1.jpg',
						},
						{
							id: 7,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-1.jpg',
						},
						{
							id: 8,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-2.jpg',
						},
						{
							id: 9,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/kolor-play/kolor-play-3.jpg',
						},
						{
							id: 10,
							type: 'video',
							cover: '/img/video-covers/video-2-cover.jpg',
							link: 'https://www.youtube.com/embed/Ik8eQ_qh9sY?si=g_rM86a-Ds22s41m',
						},
						{
							id: 11,
							type: 'video',
							cover: '/img/video-covers/video-2-cover.jpg',
							link: 'https://www.youtube.com/embed/oEsP629UFLY?si=v6Buijy0Pi4Y9Fyi',
						},
						{
							id: 12,
							type: 'video',
							cover: '/img/video-covers/video-2-cover.jpg',
							link: 'https://www.youtube.com/embed/KRCz5pk9d5Y?si=YrJVEqLXxChAUSp7',
						},
						{
							id: 13,
							type: 'video',
							cover: '/img/video-covers/video-2-cover.jpg',
							link: 'https://www.youtube.com/embed/gvbRbShevTs?si=pjJEb9UOHMj4hb7z',
						},
					],
					instructions: [
						{
							id: 1,
							link: '../../../img/products/klinicheskie-molokootsosy/kolor-play/kolorplay_instrukzia_rus.pdf',
							title: 'Инструкция по эксплуатации ручного молокоотсоса KOLOR PLAY<sup>®</sup>',
						},
						{
							id: 2,
							link: '../../../img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf',
							title: 'Линейка KOLORAMA',
						},
					],
					review:
						'<h3 class="font-bold text-secondary">Технология двух фаз сцеживания</h3>' +
						'<p>Воспроизводит две фазы грудного вскармливания — стимуляцию и, непосредственно, самосцеживание.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Контроль гигиены устройства</h3>' +
						'<p>Технология CLEAN VALVE максимально снижает риск бактериального загрязнения деталей ручного молокоотсоса от пальцев рук при сборке.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Комфорт во время использования</h3>' +
						'<p>Форма контейнера для сбора молока и вакуумный модуль KOLOR<sup>®</sup> CLIP разработаны с учётом анатомии женской руки, модуль работает мягко и беззвучно.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Индивидуальные параметры молокоотсоса</h3>' +
						'<p>Вы можете выбрать размер воронки KOLOR<sup>®</sup>, соответствующий форме и размеру вашей груди.</p>',
				},
				{
					id: 22,
					slug: 'minikit-solo',
					title: 'Электрический молокоотсос <span class="text-primary">MINIKIT SOLO<sup>®</sup></span>',
					fullTitle: 'Электрический молокоотсос <span class="text-primary">MINIKIT SOLO<sup>®</sup></span>',
					description: 'Молокоотсос Kitett MINIKIT SOLO<sup>®</sup> — это портативный электрический молокоотсос, созданный для мам, ведущих активный образ жизни. Идеально подходит для частого и продолжительного применения дома и на работе.',
					country: 'Франция',
					material: 'Не содержит бисфенол-А',
					size: [
						{
							title: '',
							type: 'standard',
							width: 120,
							height: 135,
							length: 55,
							unit: 'мм',
						},
					],
					installed: [],
					weight: {
						digit: 250,
						unit: 'г',
					},
					set: '<ul>' +
						'<li>Основной прибор (Электрический молокоотсос MINIKIT SOLO<sup>®</sup>) (1 шт.)</li>' +
						'<li>Воронка KOLOR, размер 24L (1 шт.)</li>' +
						'<li>Клапан «Clean Valve» (1 шт.)</li>' +
						'<li>Контейнер для сбора и хранения грудного молока, 100 мл (1 шт.)</li>' +
						'<li>Крышка контейнера (1 шт.)</li>' +
						'<li>Подставка под контейнер (1 шт.)</li>' +
						'<li>Соединительная трубка с защитной мембраной (1 шт.)</li>' +
						'<li>2 запасные диафрагмы белого цвета для клапана «Clean Valve»</li>' +
						'<li>Сетевой адаптер (1 шт.)</li>' +
						'<li>Сумка для хранения принадлежностей (1 шт.)</li>' +
						'<li>Воронка KOLOR (1 шт.)</li>' +
						'</ul>',
					cover: '/img/products/klinicheskie-molokootsosy/minikit-solo/minikit-solo.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/minikit-solo.jpg',
						},
						{
							id: 2,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-box-front.jpg',
						},
						{
							id: 3,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-box-side.jpg',
						},
						{
							id: 4,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-blue.jpg',
						},
						{
							id: 5,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-blue-1.jpg',
						},
						{
							id: 6,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-green.jpg',
						},
						{
							id: 7,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-green-1.jpg',
						},
						{
							id: 8,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-orange.jpg',
						},
						{
							id: 9,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-orange-1.jpg',
						},
						{
							id: 10,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-violet.jpg',
						},
						{
							id: 11,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-violet-1.jpg',
						},
						{
							id: 12,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/solo-violet-3.jpg',
						},
						{
							id: 13,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/minikit-solo-1.jpg',
						},
						{
							id: 14,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/minikit-solo-2.jpg',
						},
						{
							id: 15,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/minikit-solo-3.jpg',
						},
						{
							id: 16,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/minikit-solo-4.jpg',
						},
						{
							id: 17,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-solo/minikit-solo-5.jpg',
						},
						{
							id: 18,
							type: 'video',
							cover: '/img/video-covers/video-3-cover.jpg',
							link: 'https://www.youtube.com/embed/rrb1NLfUmDI?si=c5LDp6YDki_YzE_S',
						},
						{
							id: 19,
							type: 'video',
							cover: '/img/video-covers/video-4-cover.jpg',
							link: 'https://www.youtube.com/embed/cFnBdiK8OC8?si=sGoTJ2ZyMfLZbvCv',
						},
						{
							id: 20,
							type: 'video',
							cover: '/img/video-covers/video-solo-util-cover.webp',
							link: "https://www.youtube.com/embed/rfPwGGlhRSc?si=fYsn8Ji2f1P3wPEM",
						},
					],
					instructions: [
						{
							id: 1,
							link: '../../../img/products/klinicheskie-molokootsosy/minikit-solo/minikit_solo_instrukzia_rus_last.pdf',
							title: 'Инструкция по эксплуатации электрического молокоотсоса MINIKIT SOLO<sup>®</sup>',
						},
						{
							id: 2,
							link: '../../../img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf',
							title: 'Линейка KOLORAMA',
						},
					],
					review:
						'<h3 class="font-bold text-secondary">Технология двух фаз сцеживания</h3>' +
						'<p>Молокоотсос работает в пяти режимах, отличающихся по интенсивности. Режимы 1-2 имитируют фазу «стимуляции», продолжительность данного этапа должна быть не менее 2 минут. Режимы 3-5 предназначены для сцеживания. В любой момент работы устройства можно переключиться на другой режим.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Контроль гигиены устройства</h3>' +
						'<p>Технология CLEAN VALVE максимально снижает риск бактериального загрязнения деталей ручного молокоотсоса от пальцев рук при сборке.</p>' +
						'<p>Клапан «Clean Valve» состоит из диафрагмы белого цвета и прозрачного промежуточного кольца. Данный клапан подходит для молокоотсосов Kitett MINIKIT ® и Kitett MINIKIT DUO®, но не подходит для использования с ручным молокоотсосом Kitett KOLOR PLAY или другими электрическими молокоотсосами Kitett.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Эффективность использования</h3>' +
						'<p>Помогает успешно формировать, стимулировать и поддерживать выработку необходимого количества молока с максимальным комфортом для мамы.</p>' +
						'<p>Для продуктивного и комфортного сцеживания важно подобрать воронку для молокоотсоса правильного размера. Воронка вашего размера будет герметично прилегать к груди, стимулировать нужные доли молочной железы и обеспечит хороший объем сцеженного молока.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Простое управление</h3>' +
						'<p>Электронный блок имеет цифровой дисплей с удобным и простым меню, а также две кнопки переключения между режимами. На дисплее отображается время работы и выбранный режим сцеживания. Устройство работает от 4 батареек типа АА или от сети.</p>',
				},
				{
					id: 23,
					slug: 'minikit-duo',
					title: 'Электрический молокоотсос двойного сцеживания <span class="text-primary">MINIKIT DUO<sup>®</sup></span>',
					fullTitle: 'Двойной электрический молокоотсос <span class="text-primary">MINIKIT DUO<sup>®</sup></span>',
					description: 'Молокоотсос Kitett MINIKIT DUO<sup>®</sup> — это портативный электрический молокоотсос двойного сцеживания. Идеален для стимуляции лактации, обеспечивает увеличение количества и улучшение качества молока.',
					country: 'Франция',
					material: 'Полипропилен, термопластичес-кий эластомер, поливинилхлорид',
					size: [
						{
							title: '',
							type: 'standard',
							width: 120,
							height: 90,
							length: 60,
							unit: 'мм',
						},
					],
					installed: [],
					weight: {
						digit: 200,
						unit: 'г',
					},
					set: '<ul>' +
						'<li>Электрический молокоотсос MINIKIT DUO<sup>®</sup> (1 шт.)</li>' +
						'<li>Воронка KOLOR, размер 21S, 24L, 26L или 30L (2 шт.)</li>' +
						'<li>Клапан «Clean Valve» (2 шт.)</li>' +
						'<li>Контейнер для сбора и хранения грудного молока, 100 мл (2 шт.)</li>' +
						'<li>Крышка контейнера (2 шт.)</li>' +
						'<li>Подставка под контейнер (2 шт.)</li>' +
						'<li>Длинная трубка с коннектором (1 шт.)</li>' +
						'<li>Переключатель двойного или одинарного сцеживания (1 шт.)</li>' +
						'<li>Промежуточная трубка с коннектором (2 шт.)</li>' +
						'<li>Защитная мембрана с короткой трубкой (2 шт.)</li>' +
						'<li>2 запасные диафрагмы для клапана «Clean Valve»</li>' +
						'<li>Сетевой адаптер (1 шт.)</li>' +
						'<li>Сумка для хранения принадлежностей (1 шт.)</li>' +
						'<li>Воронка KOLOR (2 шт.)</li>' +

						'</ul>',
					cover: '/img/products/klinicheskie-molokootsosy/minikit-duo/minikit_duo.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-duo/minikit_duo.jpg',
						},
						{
							id: 2,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-duo/minikit-duo-1.jpg',
						},
						{
							id: 3,
							type: 'image',
							link: '/img/products/klinicheskie-molokootsosy/minikit-duo/minikit-duo-2.jpg',
						},
						{
							id: 4,
							type: 'video',
							cover: '/img/video-covers/video-6-cover.jpg',
							link: 'https://www.youtube.com/embed/0rYerAG6eYs?si=GNxzCo6CiIcO-Vsu',
						},
					],
					instructions: [
						{
							id: 1,
							link: '../../../img/products/klinicheskie-molokootsosy/minikit-duo/instruction_minikit_duo.pdf',
							title: 'Инструкция по эксплуатации электрического молокоотсоса MINIKIT DUO<sup>®</sup>',
						},
						{
							id: 2,
							link: '../../../img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf',
							title: 'Линейка KOLORAMA',
						},
					],
					review:
						'<h3 class="font-bold text-secondary">Технология двух фаз сцеживания</h3>' +
						'<p>Молокоотсос может использоваться как для двойного, так и для одинарного сцеживания, и имеет девять режимов, отличающихся по интенсивности. Режимы 1-4 имитируют фазу «стимуляции», продолжительность данного этапа должна быть не менее 2 минут. Режимы 5-9 предназначены для сцеживания. В любой момент работы устройства можно переключиться на другой режим.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Контроль гигиены устройства</h3>' +
						'<p>Технология CLEAN VALVE максимально снижает риск бактериального загрязнения деталей молокоотсоса, контактирующих с молоком, от пальцев рук при сборке.</p>' +
						'<p>Клапан «Clean Valve» состоит из диафрагмы белого цвета и прозрачного промежуточного кольца. Данный клапан подходит для молокоотсосов Kitett MINIKIT SOLO® и Kitett MINIKIT DUO®, но не подходит для использования с ручным молокоотсосом Kitett KOLOR PLAY® или другими электрическими молокоотсосами Kitett.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Эффективность использования</h3>' +
						'<p>Помогает успешно формировать, стимулировать и поддерживать выработку необходимого количества молока с максимальным комфортом для мамы. Двойное сцеживание даёт следующие преимущества:</p>' +
						'<ul>' +
						'<li>Увеличение объёма молока</li>' +
						'<li>Улучшение качества молока (повышение калорийности)</li>' +
						'<li>Экономит время</li>' +
						'<li>Освобождает руки (при использовании специального белья)</li>' +
						'</ul>' +
						'<p>Для продуктивного и комфортного сцеживания важно подобрать воронку для молокоотсоса правильного размера. Воронка вашего размера будет герметично прилегать к груди, стимулировать нужные доли молочной железы и обеспечит хороший объем сцеженного молока.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Простое управление</h3>' +
						'<p>Электронный блок имеет цифровой дисплей с удобным и простым меню, а также две кнопки переключения между режимами. На дисплее отображается время работы и выбранный режим сцеживания. Устройство работает от 4 батареек типа АА или от сети.</p>',
				},
			],
		},
		{
			id: 3,
			slug: 'aksessuary',
			title: 'Аксессуары',
			description: 'для сцеживания, хранения и транспортировки грудного молока, а также ухода за грудью',
			img: '/img/products/aksessuary/aksessuary.jpg',
			productList: [
				{
					id: 31,
					slug: 'voronki-kolor',
					title: 'Воронки <span class="text-primary">KOLOR<sup>®</sup></span>',
					fullTitle: 'Воронки для сцеживания <span class="text-primary">KOLOR<sup>®</sup></span>',
					description: 'Идеально подобранная воронка сделает сцеживание комфортным и продуктивным, а также исключит любое травмирование нежной и чувствительной кожи груди.',
					country: 'Франция',
					material: 'Не содержит бисфенола-А и фталатов',
					size: [
						{
							title: 'Воронки KOLOR®',
							type: 'variants',
							variants: ['21S', '21L', '24S', '24L', '26S', '26L', '30S', '30L'],
						},
						{
							title: 'Воронки KOLOR автоклавируемые',
							type: 'variants',
							variants: ['21S', '24S', '26L', '30L'],
						},
					],
					weight: {
						digit: 167,
						unit: 'г',
					},
					installed: [],
					set:
						'<ul>' +
						'<li>Воронка KOLOR, размер 24L (1 шт.)</li>' +
						'<li>Вакуумный модуль KOLOR CLIP (1 шт.)</li>' +
						'<li>Клапан «Clean Valve» (1 шт.)</li>' +
						'<li>Контейнер для сбора и хранения грудного молока, 100 мл (1 шт.)</li>' +
						'<li>Крышка контейнера для хранения грудного молока (1 шт.)</li>' +
						'<li>Подставка под контейнер (1 шт.)</li>' +
						'<li>Сумка для хранения принадлежностей (1 шт.)</li>' +
						'</ul>',
					cover: '/img/products/aksessuary/voronki-kolor/voronki.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-box-front.jpg',
						},
						{
							id: 2,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-box.jpg',
						},
						{
							id: 3,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-blue.jpg',
						},
						{
							id: 4,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-blue-1.jpg',
						},
						{
							id: 5,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-green.jpg',
						},
						{
							id: 6,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-green-1.jpg',
						},
						{
							id: 7,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-orange.jpg',
						},
						{
							id: 8,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-orange-1.jpg',
						},
						{
							id: 9,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-violet.jpg',
						},
						{
							id: 10,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronka-violet-1.jpg',
						},
						{
							id: 11,
							type: 'image',
							link: '/img/products/aksessuary/voronki-kolor/voronki-1.jpg',
						},
					],
					instructions: [
						{
							id: 1,
							link: '../../../img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf',
							title: 'Линейка KOLORAMA',
						},
					],
					review:
						'<h3 class="font-bold text-secondary">Идеальный размер воронки</h3>' +
						'<p>Размеры воронок KOLOR<sup>®</sup> отличаются по внутреннему диаметру (21-24-26-30 мм) и по полноте груди (S и L). Для определения нужного размера воронки воспользуйтесь:</p>' +
						'<ul>' +
						'<li><a href="../../../img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf" target="_blank" class="decorated">линейкой KOLORAMA</a></li>' +
						'</ul>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Удобство в использовании</h3>' +
						'<p>Цельная неразборная конструкция воронки обеспечивает простоту ежедневной стерилизации и не допускает контактов внутренних частей с пальцами рук.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Эффективность сцеживания</h3>' +
						'<p>Правильно подобранная воронка KOLOR<sup>®</sup> герметично прилегает к груди благодаря вакууму, создающемуся внутри устройства. Стимулирование нужных долей молочной железы обеспечивает хороший объём сцеженного молока.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Безопасность для малыша и мамы</h3>' +
						'<p>В составе воронок KOLOR<sup>®</sup> нет фталатов и бисфенола А, поэтому их без опасения можно использовать на протяжении всего периода применения молокоотсоса.</p>',
				},
				{
					id: 32,
					slug: 'nabor-kolor',
					title: 'Набор для сцеживания <span class="text-primary">KOLOR<sup>®</sup></span>',
					fullTitle: 'Набор для сцеживания <span class="text-primary">KOLOR<sup>®</sup></span>',
					description: 'Набор для сцеживания KOLOR для клинических молокотсосов FISIO<sup>®</sup> и FISIO<sup>®</sup> PRO предназначен к использованию в медицинских учреждениях. После выписки он может использоваться дома с бытовыми молокоотсосами KOLOR PLAY<sup>®</sup> и MINIKIT SOLO<sup>®</sup>.',
					country: 'Франция',
					material: 'Воронки KOLOR<sup>®</sup> не содержат бисфенола-А и фталатов',
					size: [
						{
							title: 'Набор для сцеживания KOLOR с одной или двумя воронками',
							type: 'variants',
							variants: ['21S', '21L', '24S', '24L', '26S', '26L', '30S', '30L'],
						},
						{
							title: 'Набор для сцеживания KOLOR автоклавируемые',
							type: 'variants',
							variants: ['21S', '24S', '26L', '30L'],
						},
					],
					weight: {
						digit: 0,
						unit: '',
					},
					installed: [],
					set:
						'<ul>' +
						'<li>В зависимости от модели молокоотсоса: с одной воронкой, с двумя, с одной автоклавируемой воронкой (для медицинских учреждений).</li>' +
						'<li>Контейнер для сбора и хранения грудного молока, 100 мл (1 шт.)</li>' +
						'<li>Крышка контейнера для хранения грудного молока (1 шт.)</li>' +
						'<li>Соединительная трубка (1 шт.)</li>' +
						'<li>Флакон-переходник (1 шт.)</li>' +
						'</ul>',
					cover: '/img/products/aksessuary/nabor-kolor/nabor_dlja_szegivania.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/nabor_dlja_szegivania.jpg',
						},
						{
							id: 4,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-box.jpg',
						},
						{
							id: 5,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-front.jpg',
						},
						{
							id: 6,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-blue.jpg',
						},
						{
							id: 7,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-blue-1.jpg',
						},
						{
							id: 8,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-blue-2.jpg',
						},
						{
							id: 9,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-green.jpg',
						},
						{
							id: 10,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-green-1.jpg',
						},
						{
							id: 2,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-green-2.jpg',
						},
						{
							id: 11,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-orange.jpg',
						},
						{
							id: 3,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-orange-1.jpg',
						},
						{
							id: 12,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-orange-2.jpg',
						},
						{
							id: 13,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-violet.jpg',
						},
						{
							id: 14,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-violet-1.jpg',
						},
						{
							id: 15,
							type: 'image',
							link: '/img/products/aksessuary/nabor-kolor/kit-violet-2.jpg',
						},
					],
					instructions: [
						{
							id: 1,
							link: '../../../img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf',
							title: 'Линейка KOLORAMA',
						},
						{
							id: 2,
							link: '../../../img/products/aksessuary/nabor-kolor/individual-nabor-dlya-stsezhivaniya_instrukziarus.pdf',
							title: 'Инструкция по эксплуатации индивидуального набора для сцеживания KOLOR®',
						},
					],
					review:
						'<h3 class="font-bold text-secondary">Размер воронки</h3>' +
						'<p>Размеры воронок KOLOR отличаются по внутреннему диаметру (21-24-26-30 мм) и по полноте груди (S и L). Для определения нужного размера воронки воспользуйтесь:</p>' +
						'<ul>' +
						'<li><a href="../../../img/products/bytovye-molokootsosy/fisio/lineika_colorrama.pdf" target="_blank" class="decorated">линейкой KOLORAMA</a></li>' +
						'</ul>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Контроль гигиены устройства</h3>' +
						'<p>Цельная неразборная конструкция воронки позволяет избежать прикосновений пальцев рук к внутренним частям воронки и винтовой резьбе контейнера. Воронки KOLOR можно многократно использовать на протяжении всего периода применения молокоотсоса. Автоклавируемый набор для сцеживания KOLOR предназначен для использования в медицинских учреждениях с централизованной стерилизацией.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Система контроля</h3>' +
						'<p>В набор для сцеживания входит флакон переходник, предназначенный для защиты мотора клинических молокоотсосов Kitett FISIO® и FISIO® PRO от попадания грудного молока.</p>',
				},
				{
					id: 33,
					slug: 'fisio-bib',
					title: 'Контейнеры для грудного молока <span class="text-primary">FISIO<sup>®</sup>BIB</span>',
					fullTitle: 'Контейнеры для грудного молока <span class="text-primary">FISIO<sup>®</sup>BIB</span>',
					description: 'Грудное молоко – бесценный продукт, который требует правильного и безопасного хранения. Контейнеры для сбора и хранения грудного молока FISIO<sup>®</sup>BIB сохраняют все полезные свойства молока, которые так важны для вашего малыша.',
					country: 'Франция',
					material: 'Не содержит бисфенола-А и фталатов',
					size: [
						{
							width: 1360,
							height: 360,
							length: 60,
							volume: 100,
							unit: 'мл',
						},
					],
					weight: {
						digit: 30,
						unit: 'г',
					},
					installed: [],
					set:
						'<ul>' +
						'<li>2 контейнера с герметичными крышками</li>' +
						'</ul>',
					cover: '/img/products/aksessuary/fisio-bib/fisio-bib.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/aksessuary/fisio-bib/fisio-bib.jpg',
						},
						{
							id: 2,
							type: 'image',
							link: '/img/products/aksessuary/fisio-bib/fisio-bib-1.jpg',
						},
						{
							id: 3,
							type: 'image',
							link: '/img/products/aksessuary/fisio-bib/fisio-fresh-1.jpg',
						},
					],
					instructions: [
						{
							id: 1,
							link: '../../../img/products/bytovye-molokootsosy/fisio/hranenie-grudnogo-moloka.pdf',
							title: 'Хранение грудного молока',
						},
					],
					review:
						'<h3 class="font-bold text-secondary">Персональный банк грудного молока</h3>' +
						'<p>Размеры воронок KOLOR отличаются по внутреннему диаметру (21-24-26-30 мм) и по полноте груди (S и L). Для определения нужного размера воронки воспользуйтесь:</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Безопасные материалы</h3>' +
						'<p>Контейнеры для сбора и хранения грудного молока изготовлены из материалов, не содержащих опасные вещества, поэтому их использование оптимально для мамы и ребёнка на любом этапе грудного вскармливания.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Простой уход</h3>' +
						'<p>Контейнеры можно мыть в посудомоечной машине, хранить в холодильной и морозильной камерах.</p>' +
						'<h3 class="font-bold text-secondary">Безопасные материалы</h3>' +
						'<p>Контейнеры для сбора и хранения грудного молока FISIO<sup>®</sup>BIB совместимы со всеми молокоотсосами Kitett: с ручным KOLOR PLAY, с электрическими MINIKIT SOLO<sup>®</sup>, FISIO<sup>®</sup> и FISIO<sup>®</sup>  PRO.</p>',
				},
				{
					id: 34,
					slug: 'fisio-fresh',
					title: 'Набор <span class="text-primary">FISIO<sup>®</sup>FRESH</span> для охлаждения и транспортировки грудного молока',
					fullTitle: 'Набор <span class="text-primary">FISIO<sup>®</sup>FRESH</span> для охлаждения и транспортировки грудного молока',
					description: 'В состав набора FISIO<sup>®</sup> FRESH входят аккумуляторы холода, контейнеры для сбора и хранения грудного молока и термосумка. Контейнеры вместе с аккумуляторами холода легко помещаются в компактную термосумку. Благодаря надежной упаковке, транспортировка грудного молока пройдет безопасно, а время охлаждения и хранения будет продлено.',
					country: 'Франция',
					material: 'В составе набора для хранения и транспортировки материал корпуса из ABS-пластика, не содержит бисфенола-А и фталатов',
					size: [
						{
							width: 150,
							height: 160,
							length: 130,
							unit: 'мм',
						},
					],
					weight: {
						digit: 1,
						unit: 'кг',
					},
					installed: [],
					set:
						'<ul>' +
						'<li>Термосумка (1 шт.)</li>' +
						'<li>Контейнеры FISIO<sup>®</sup>BIB для сбора и хранения грудного молока, 100 мл c крышкой (4 шт.)</li>' +
						'<li>Аккумуляторы холода FISIO COOL (4 шт.)</li>' +
						'<li>Сумка для хранения принадлежностей (1 шт.)</li>' +
						'</ul>',
					cover: '/img/products/aksessuary/fisio-fresh/fisio-fresh.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/aksessuary/fisio-fresh/fisio-fresh.jpg',
						},
						{
							id: 2,
							type: 'image',
							link: '/img/products/aksessuary/fisio-fresh/fisio-fresh-1.jpg',
						},
						{
							id: 3,
							type: 'image',
							link: '/img/products/aksessuary/fisio-fresh/fisio-fresh-2.jpg',
						},
						{
							id: 4,
							type: 'image',
							link: '/img/products/aksessuary/fisio-fresh/fisio-fresh-3.jpg',
						},
					],
					instructions: [
						{
							id: 1,
							link: '../../../img/products/bytovye-molokootsosy/fisio/hranenie-grudnogo-moloka.pdf',
							title: 'Хранение грудного молока',
						},
					],
					review:
						'<h3 class="font-bold text-secondary">Транспортировка</h3>' +
						'<p>Гарантия надежной транспортировки банка грудного молока во время небольших поездок и путешествий.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Эргономичность</h3>' +
						'<p>Набор FISIOFRESH позволяет компактно расположить и удобно транспортировать грудное молоко.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Износостойкость</h3>' +
						'<p>Термосумка и контейнеры FISIOBIB подходят для многократного использования.</p>',
				},
				{
					id: 35,
					slug: 'fisio-lan',
					title: 'Крем <span class="text-primary">FISIO<sup>®</sup>LAN</span>',
					fullTitle: 'Крем для груди <span class="text-primary">FISIO<sup>®</sup>LAN</span>',
					description: 'Во время кормления грудью чувствительность сосков повышается, возможны болезненные ощущения - воспаление или возникновение трещин. С помощью Kitett Вы сможете начать заботиться о нежной коже груди еще до рождения малыша и продолжать уход весь период грудного вскармливания, чтобы предотвратить возможные неприятные ощущения.',
					country: 'Франция',
					material: 'В составе крема 100% ланолин',
					size: [
						{
							width: 0,
							height: 0,
							length: 0,
							volume: 39.3,
							unit: 'мл',
						},
					],
					weight: {
						digit: 40,
						unit: 'г',
					},
					installed: [],
					set:
						'<ul>' +
						'<li>Тюбик с кремом</li>' +
						'</ul>',
					cover: '/img/products/aksessuary/fisio-lan/fisiolan_krem.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/aksessuary/fisio-lan/fisiolan_krem.jpg',
						},
						{
							id: 2,
							type: 'image',
							link: '/img/products/aksessuary/fisio-lan/fisiolan_krem-1.jpg',
						},
						{
							id: 3,
							type: 'image',
							link: '/img/products/aksessuary/fisio-lan/fisiolan_krem-2.jpg',
						},
					],
					instructions: [
						{
							id: 1,
							text: 'Ланолин обеспечивает комфорт и защиту для сухой кожи мам. Необходимо наносить крем на кожу сосков после каждого использования молокоотсоса. Не нужно смывать перед кормлением. Перед использованием вымыть руки.',
						},
					],
					review:
						'<h3 class="font-bold text-secondary">100% натуральный продукт</h3>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Эффективность</h3>' +
						'<p>Увлажняет и смягчает кожу сосков естественным способом, восстанавливая ее защитный слой.</p>' +
						'<br>' +
						'<h3 class="font-bold text-secondary">Не нужно смывать</h3>' +
						'<p>В период грудного вскармливания наносите крем после каждого кормления, предварительно разогрев его между пальцами. Крем не требует смывания перед следующим прикладыванием малыша к груди.</p>' +
						'<br>' +
						'<p>Не требует назначения врача</p>',
				},
				{
					id: 36,
					slug: 'fisio-pad',
					title: 'Прокладки <span class="text-primary">FISIO<sup>®</sup>PAD</span>',
					fullTitle: 'Лактационные одноразовые прокладки для груди <span class="text-primary">FISIO<sup>®</sup>PAD</span>',
					description: 'Незаметная, нежная и деликатная защита от подтекания молока из груди',
					country: 'Франция',
					material: 'нетканный полипропилен, полиэтилен, расплющенная целлюлоза, адсорбент – полиакрилат натрия.',
					size: [
						{
							width: 130,
							height: 140,
							length: 90,
							unit: 'мм',
						},
					],
					weight: {
						digit: 0,
						unit: 'кг',
					},
					installed: [],
					set: '<p>30 шт.</p>',
					cover: '/img/products/aksessuary/fisio-pad/fisiopad.jpg',
					gallery: [
						{
							id: 1,
							type: 'image',
							link: '/img/products/aksessuary/fisio-pad/fisiopad.jpg',
						},
					],
					instructions: [
						{
							id: 1,
							text: '<ol style="padding-left: 20px; list-style-type: disc">' +
								'<li>Достаньте прокладку из индивидуальной упаковки, вскрыв ее по перфорации</li>' +
								'<li>Снимите защитную бумагу с клеевого слоя</li>' +
								'<li>Прикрепите клеевым слоем на внутреннюю поверхность нижнего белья</li>' +
								'</ol>' +
								'<img src="../../../img/products/aksessuary/fisio-pad/instruc_fisio_pad.jpg" alt="img">',
						},
					],
					review:
						'<p>Одноразовые лактационные прокладки FISIO®PAD отлично поглощают жидкость и пропускают воздух, позволяя одежде оставаться сухой, а коже груди дышать.</p>' +
						'<br>' +
						'<p>Регулярная смена прокладок, не реже одного раза в четыре часа или по мере наполнения, минимизурует риск раздражения и инфекции.</p>' +
						'<br>' +
						'<p>Ультра сорбент ― сохраняет кожу сухой. Гибкие и тонкие прокладки незаметны снаружи. Анатомическая форма обеспечивает комфортное прилегание к груди без складок. Две клейкие полоски удерживают прокладку на месте. Индивидуальная упаковка ― гигиенично и удобно взять с собой.</p>' +
						'<br>' +
						'<p>Обязательно возьмите с собой лактационные прокладки в родильный дом. В случае обильного подтекания молока на этапе становления лактации вы легко справитесь с этой проблемой!</p>',
				},
			],
		},
		{
			id: 4,
			slug: 'individualnyj-podbor-voronki',
			title: 'Индивидуальный подбор воронки',
			description: 'для максимально комфортного и эффективного сцеживания',
			img: '/img/products/voronki/voronki.jpg',
			productList: [],
		},
	],
};
export default products;