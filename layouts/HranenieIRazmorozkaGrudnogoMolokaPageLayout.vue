<script
  setup
  lang="ts">
import {useLocation} from '~/composables/useLocation';
import type {Breadcrumb} from '~/types';
import HelpMomNavigation from '~/components/base/HelpMomNavigation.vue';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const location = useLocation();

const breadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    title: 'Главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'Полезная информация',
    link: `/${location.value.currentLocation}/help-mom`,
  },
  {
    id: 3,
    title: 'Грудное вскармливание',
  },
];

const reminders = [
  {
    id: 1,
    milkType: 'Свежее',
    roomTemperature: '< 6 часов',
    refrigerator: '< 8 дней',
    freezer: {
      text: '< 12 дней',
      type: 'standard',
    },
  },
  {
    id: 2,
    milkType: 'Размороженное в холодильнике, не разогретое',
    roomTemperature: '< 4 часов',
    refrigerator: '< 24 часов',
    freezer: {
      text: 'Повторно не замораживать!',
      type: 'warning',
    },
  },
  {
    id: 3,
    milkType: 'Размороженное, разогретое',
    roomTemperature: 'Не подлежит хранению',
    refrigerator: 'Не подлежит хранению',
    freezer: {
      text: 'Повторно не замораживать!',
      type: 'warning',
    },
  },
];
</script>

<template>

  <section class="first-screen">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        title="Хранение и разморозка грудного молока"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase"/>
    </div>
  </section>

  <section class="pb-[75px] pt-[75px] -mt-[75px] overflow-hidden">
    <div class="container relative">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        <div class="relative z-10 col-span-2 w-full xl:min-h-[660px]">
          <BaseImage
            image="img/help-mom-articles/article-9-cover.jpg"
            img-class="object-cover w-full h-full"
            class="rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"
          />
          <NuxtImg
            src="img/cell-decorator.svg"
            class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p>
            <b>
              Запасы молока рекомендуется создавать тогда, когда у мамы его вырабатывается большое количество.
            </b>
          </p>
          <br>
          <p>
            Сцеживайте молоко в разные контейнеры порционно, столько, сколько сможет съесть малыш за одно кормление.
          </p>
          <br>
          <p>
            При выборе посуды для хранения сцеженного молока остановите свой выбор на контейнерах из безопасного
            пластика —
            избегайте поликарбонат, имеющий в составе бисфенол А и другие вредные элементы, влияющие на здоровье
            ребенка.
          </p>
        </div>
        <div class="absolute left-[50%] top-[16%] md:top-[50%] md:left-[80%] xl:top-[80%] xl:left-[55.5%] w-[200px] h-[200px]">
          <div class="round-1 absolute w-[28px] h-[28px] rounded-full right-0 bottom-0 bg-notice"></div>
          <NuxtImg
            src="img/cell-decorator.svg"
            class="w-[88px] h-[88px] absolute bottom-[32px] right-[32px]"/>
          <div class="round-3 absolute w-[156px] h-[156px] rounded-full left-0 top-0 bg-[#EE7C00] opacity-20"></div>
        </div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[472px] h-[472px] -left-[120px] top-[60px]"></div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[782px] h-[782px] -right-[400px] -top-[60px] -z-10"></div>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container max-w-[1038px] lg:p-4">
      <p>
        <b>
          Для удобства и поддержания стерильности выбирайте контейнеры, которые можно хранить в морозильной камере
          (-18°С), нагревать на водяной бане (или подогревателе) и мыть в посудомоечной машине. Это сведет к минимуму
          контакт молока с бактериями и сэкономит ваше время.
        </b>
      </p>
      <br>
      <p>
        Не спешите ставить свежее сцеженное молоко сразу в морозильную камеру —
        специалисты рекомендуют сначала немного снизить его температуру в холодильной камере (1-2 часа), обязательно
        пометить дату сцеживания, а затем убрать его на длительное хранение в морозильную камеру.
      </p>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">Памятка по длительности хранения грудного
        молока</h2>
      <Separator class="h-[5px] bg-separator-pattern my-4"/>
      <Table class="mb-8">
        <TableHeader>
          <TableRow>
            <TableHead class="font-bold">Грудное молоко</TableHead>
            <TableHead class="font-bold">Комнатная температура</TableHead>
            <TableHead class="font-bold">Холодильник</TableHead>
            <TableHead class="font-bold">Морозильная камера</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="reminder in reminders"
            :key="reminder.id">
            <TableCell>{{ reminder.milkType }}</TableCell>
            <TableCell>{{ reminder.roomTemperature }}</TableCell>
            <TableCell>{{ reminder.refrigerator }}</TableCell>
            <TableCell v-if="reminder.freezer.type === 'standard'">
              {{ reminder.freezer.text }}
            </TableCell>
            <TableCell
              v-else
              class="font-bold">
              {{ reminder.freezer.text }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <span class="text-[14px]"><b>Международные рекомендации*</b></span>
      <br>
      <br>
      <p class="text-[14px] max-w-[600px]">* Данные Ассоциации банков грудного молока Северной Америки (www. hmbana.
        org), которые
        также используются Международной ассоциацией консультантов по грудному вскармливанию — www. ilca. org —
        по хранению грудного молока для крепкого здоровья младенцев.</p>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">Памятка по длительности хранения грудного
        молока</h2>
      <Separator class="h-[5px] bg-separator-pattern mt-4 mb-6"/>
      <div class="bg-notice max-w-[1180px] m-auto rounded p-4 lg:p-8 text-[18px] lg:text-[24px]">
        <p>
          <b>
            Сцеживайте молоко в разные контейнеры порционно, столько, сколько сможет съесть малыш за одно кормление.
          </b>
        </p>
        <br>
        <p>
          Далее емкость с молоком можно будет подогреть на водяной бане или под струей теплой <b>(не горячей)</b> воды
          из-под крана.
        </p>
        <br>
        <p>
          Молоко следует нагревать до температуры не более 36,6°С, при более высокой температуре все иммунные свойства
          ослабевают.
        </p>
      </div>
    </div>
  </section>

  <HelpMomNavigation/>

</template>