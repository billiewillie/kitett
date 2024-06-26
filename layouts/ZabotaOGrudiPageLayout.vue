<script
  setup
  lang="ts">
import {useLocation} from '~/composables/useLocation';
import type {Breadcrumb} from '~/types';
import HelpMomNavigation from '~/components/base/HelpMomNavigation.vue';

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
    title: 'Забота о груди',
  },
];

const breastItems = [
  {
    id: 1,
    title: 'Поддерживающий бюстгальтер',
    text: 'Правильно подобранное белье играет важную роль, как во время беременности, так и в период кормления. Эластичный, бесшовный бюстгальтер не будет давить на молочные протоки, не позволит груди «растянуться» под собственным весом, сохранит упругость кожи. Стоит обратить внимание на такое белье еще во время беременности, когда молочная железа меняет свой привычный размер',
  },
  {
    id: 2,
    title: 'Смягчающий крем',
    text: 'Подготовьте грудь к встрече с малышом заранее — 1-2 раза в день на последнем месяце беременности наносите на нее натуральный смягчающий крем, защищающий от возникновения трещин на сосках и воспалений. Продолжайте использование такого крема после каждого кормления. Если крем будет на 100% натуральным и гипоаллергенным, его не нужно будет смывать перед следующим контактом малыша с грудью.',
  },
  {
    id: 3,
    title: 'Контрастный душ',
    text: 'Во время принятия душа чередуйте горячую воду и холодную. Такая резкая смена температуры улучшает кровообращение, тренирует кровеносную систему, способствует сохранению упругости кожи.',
  },
  {
    id: 4,
    title: 'Компрессы',
    text: 'Для стимулирования лактации можно использовать тёплый компресс, а после кормления, для восстановления груди, прохладный компресс.',
  },
  {
    id: 5,
    title: 'Массаж',
    text: 'Как и теплый компресс, стимулирует лактацию и приводит грудь в норму после кормления. Достаточно совершать круговые движения по часовой стрелке по 3-4 минуты каждый день весь период грудного вскармливания.',
  },
  {
    id: 6,
    title: 'Питание',
    text: 'В период лактации необходимо следить, чтобы из рациона мамы не пропадали минеральные вещества, белок и витамины, необходимые для обновления клеток кожи и предотвращения появления растяжек. Стоит употреблять в пищу рыбу, нежирное мясо — источники коллагена и эластина, фрукты, овощи — источники витаминов.',
  },
];

const routineList = [
  {
    id: 1,
    title: 'Чистота и гигиена',
    text: 'помещение, где будет находиться малыш, должно быть чистым. Иммунитет ребёнка еще не окреп, поэтому важно мыть руки перед тем, как контактировать с ним. Желательно оградить своего кроху от болеющих людей и сократить количество контактов.',
  },
  {
    id: 2,
    title: 'Прогулки',
    text: 'В зимнее время, когда температура на улице ниже −10°С, прогулки с новорожденным на улице не рекомендуют, в летнее время ограничений нет. Зимой вы можете провести прогулку на балконе, одев малыша так, как одели бы для улицы. Всегда следите за тем, чтобы ребёнок был одет по погоде, заранее подумайте о непромокаемом чехле на коляску на случай дождя.',
  },
  {
    id: 3,
    title: 'Аккуратность',
    text: 'Относитесь к малышу бережно. Он еще не может держать голову самостоятельно, так как мышцы шеи еще не окрепли. Придерживаете его головку каждый раз, когда берете его на руки. Не оставляйте ребенка без присмотра, даже на короткое время.',
  },
  {
    id: 4,
    title: 'Плач',
    text: 'Пока малыши могут сообщить родителям о своих маленьких проблемах только плачем. Не стоит пугаться — со временем вы разберетесь, что с одной интонацией он просит вашего внимания и ласки, с другой — говорит, что голоден, с третьей — говорит, что устал и хочет спать.',
  },
  {
    id: 5,
    title: 'Звуки',
    text: 'Малыш сразу привыкнет к уровню шума своего нового дома, и шум не будет его тревожить. Если ребенок спит, не нужно соблюдать полную тишину. Во время ухода активно разговаривайте с малышом, пойте ему, когда он волнуется и капризничает, это его успокоит.',
  },
  {
    id: 6,
    title: 'Купание',
    text: 'Рекомендуют купать малыша после того, как заживает пупочная ранка (1,5 недели), а первое время достаточно проводить обтирания мокрой губкой. Купать можно и сразу, если вы будете делать это в кипяченой воде. Оптимальная температура для начала купания составляет 33-34 °С. Первое время не используйте мыло и гели, вытирайте малыша осторожно, не растирайте нежную кожу. Лучше всего купать до того, как накормить ребенка перед ночным сном.',
  },
  {
    id: 7,
    title: 'Температура и влажность воздуха',
    text: 'Необходимо поддерживать микроклимат в комнате с температурой — 16-22*С и оптимальной относительной влажностью воздуха в детской комнате — 50 — 70 %. Распологайте кроватку вдали от окон, батарей и обогревателей. Важно не подвергать малыша длительному перегреву и переохлаждению.',
  },
];
</script>

<template>
  <section class="first-screen">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs" />
      <BaseTitle
        title="Забота о груди"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase" />
    </div>
  </section>

  <section class="pb-[75px] pt-[75px] -mt-[75px] overflow-hidden">
    <div class="container relative">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        <div class="relative z-10 col-span-2 w-full xl:min-h-[660px]">
          <BaseImage
            image="./img/help-mom-articles/article-6-cover.jpg"
            img-class="object-cover w-full h-full"
            class="rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"
          />
          <NuxtImg src="./img/cell-decorator.svg" class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p>
            <b>
              В период лактации груди необходим правильный уход — в это время повышается чувствительность сосков,
              возможны
              болезненные ощущения и изменение внешнего вида молочных желез.
            </b>
          </p>
          <br>
          <p>
            Чтобы минимизировать возможные сложности и нежеланные последствия кормления, нужно начать заботиться о груди
            еще до родов и продолжать заботу весь период грудного вскармливания.
          </p>
        </div>
        <div class="absolute left-[50%] top-[16%] md:top-[50%] md:left-[80%] xl:top-[80%] xl:left-[55.5%] w-[200px] h-[200px]">
          <div class="round-1 absolute w-[28px] h-[28px] rounded-full right-0 bottom-0 bg-notice"></div>
          <NuxtImg
            src="./img/cell-decorator.svg"
            class="w-[88px] h-[88px] absolute bottom-[32px] right-[32px]" />
          <div class="round-3 absolute w-[156px] h-[156px] rounded-full left-0 top-0 bg-[#EE7C00] opacity-20"></div>
        </div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[472px] h-[472px] -left-[120px] top-[60px]"></div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[782px] h-[782px] -right-[400px] -top-[60px] -z-10"></div>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <ul class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-[72px]">
        <li
          v-for="item in breastItems"
          :key="item.id">
          <h3 class="title uppercase font-display font-bold text-[18px] lg:text-[22px]">{{ item.title }}</h3>
          <Separator class="h-[5px] bg-separator-pattern my-2 lg:my-4" />
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        <BaseImage
          image="./img/help-mom-articles/article-61-cover.jpg"
          img-class="object-cover w-full h-full"
          class="relative col-span-2 overflow-hidden w-full xl:min-h-[660px] rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"
        />
        <div class="flex flex-col justify-center w-full">
          <p>
            <b>
              Появление малыша в доме внесет некоторые изменения в ваш привычный быт.
            </b>
          </p>
          <br>
          <p>
            Перемены доставляют волнение, но совсем скоро вы привыкнете, и вам будет казаться, что так было всегда.
          </p>
          <br>
          <p>
            Мы подготовили для вас некоторые рекомендации по поведению с новорожденным, которые помогут разобраться
            с возникшими вопросами.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <ul class="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-[72px]">
        <li
          v-for="item in routineList"
          :key="item.id">
          <h3 class="title uppercase font-display font-bold text-[18px] lg:text-[22px]">{{ item.title }}</h3>
          <Separator class="h-[5px] bg-separator-pattern my-2 lg:my-4"/>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <HelpMomNavigation/>

</template>