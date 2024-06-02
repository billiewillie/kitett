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
    title: 'главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'полезная информация',
    link: `/${location.value.currentLocation}/help-mom`,
  },
  {
    id: 3,
    title: 'знакомство с новорожденным',
  },
];
</script>

<template>
  <section class="first-screen">
    <div class="container">
      <BaseBreadcrumb :links="breadcrumbs"/>
      <BaseTitle
        title="Знакомство с новорожденным"
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
            image="/img/help-mom-articles/article-2-cover.jpg"
            img-class="object-cover w-full h-full"
            class="rounded xl:rounded-tr-[191px] bg-[#9CA1A2]"
          />
          <NuxtImg
            src="/img/cell-decorator.svg"
            class="hidden xl:block w-[88px] h-[88px] absolute -top-[12px] -left-[12px] -z-10"/>
        </div>
        <div class="flex flex-col justify-center w-full">
          <p>
            <b>Первая встреча мамы и новорожденного малыша очень важна, так как именно она запускает в материнском
              организме выработку гормонов, отвечающих за начало лактации — пролактина и окситоцина.</b>
          </p>
          <br>
          <p>
            15-20 минут новорожденному потребуется для того, чтобы прийти в себя после появления на свет — прокашляться,
            освободить нос и рот от родовой слизи, восстановить дыхание. Далее у малыша наступает более активный
            период —он смотрит по сторонам, шевелит руками и ногами.
          </p>
        </div>
        <div class="absolute left-[50%] top-[16%] md:top-[50%] md:left-[80%] xl:top-[80%] xl:left-[55.5%] w-[200px] h-[200px]">
          <div class="round-1 absolute w-[28px] h-[28px] rounded-full right-0 bottom-0 bg-notice"></div>
          <NuxtImg
            src="/img/cell-decorator.svg"
            class="w-[88px] h-[88px] absolute bottom-[32px] right-[32px]"/>
          <div class="round-3 absolute w-[156px] h-[156px] rounded-full left-0 top-0 bg-[#EE7C00] opacity-20"></div>
        </div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[472px] h-[472px] -left-[120px] top-[60px]"></div>
        <div class="absolute bg-notice hidden xl:block rounded-full w-[782px] h-[782px] -right-[400px] -top-[60px] -z-10"></div>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <h2 class="title text-center uppercase text-[24px] lg:text-[30px]">Первое прикладывание к груди</h2>
      <Separator class="h-[5px] bg-separator-pattern mt-4 mb-6"/>
      <div class="bg-notice-purple max-w-[1180px] m-auto rounded p-4 lg:p-8 text-[18px] lg:text-[24px]">
        <p>
          <b>
            Один из волнительных шагов в начале жизненного пути мамы и младенца —
            это первое прикладывание малыша к груди.
          </b>
        </p>
        <br>
        <p>
          Маме нужно совершить несколько важных действий, чтобы помочь младенцу скорее получить молоко и защитить свою
          грудь от болезненных ощущений.
        </p>
      </div>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <ol class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-x-[72px]">
        <li class="flex flex-col items-center">
          <span class="flex bg-notice rounded-full justify-center items-center w-[85px] h-[85px] font-display font-bold text-[38px] leading-[38px] text-secondary">1</span>
          <Separator class="h-[5px] bg-separator-pattern mb-4 mt-4"/>
          <p>
            Прижмите малыша животиком к своему животу, он должен лежать на боку, поддерживайте его голову и тело рукой
            снизу или подложите подушку.
          </p>
        </li>
        <li class="flex flex-col items-center">
          <span class="flex bg-notice rounded-full justify-center items-center w-[85px] h-[85px] font-display font-bold text-[38px] leading-[38px] text-secondary">2</span>
          <Separator class="h-[5px] bg-separator-pattern mb-4 mt-4"/>
          <p>
            Второй рукой держите свою грудь так, чтобы сосок был на уровне носа малыша.
          </p>
        </li>
        <li class="flex flex-col items-center">
          <span class="flex bg-notice rounded-full justify-center items-center w-[85px] h-[85px] font-display font-bold text-[38px] leading-[38px] text-secondary">3</span>
          <Separator class="h-[5px] bg-separator-pattern mb-4 mt-4"/>
          <p>
            Если вы испытываете боль при кормлении, значит малыш приложен к груди неправильно. Не расстраивайтесь,
            аккуратно извлеките сосок из ротика и повторите заново весь небольшой, но такой важный путь.
          </p>
        </li>
        <li class="flex flex-col items-center">
          <span class="flex bg-notice rounded-full justify-center items-center w-[85px] h-[85px] font-display font-bold text-[38px] leading-[38px] text-secondary">4</span>
          <Separator class="h-[5px] bg-separator-pattern mb-4 mt-4"/>
          <p>
            Дождитесь, пока малыш откроет ротик, и вложите сосок глубоко в него. Направьте сосок в верхнюю часть рта,
            к нёбу. Нижняя губа малыша должна больше обхватывать сосок и ареолу, чем верхняя. Нижняя челюсть
            новорожденного должна нажимать на ареолу, язык совершать волнообразные движения для того, чтобы получить
            первые капли молозива. Малыш должен упираться в мамину грудь подбородком, носик свободен или касается груди
            так, чтобы дыхание было не затруднено.
          </p>
        </li>
        <li class="flex flex-col items-center">
          <span class="flex bg-notice rounded-full justify-center items-center w-[85px] h-[85px] font-display font-bold text-[38px] leading-[38px] text-secondary">5</span>
          <Separator class="h-[5px] bg-separator-pattern mb-4 mt-4"/>
          <p>
            В первые два дня жизни малыша нужно часто прикладывать к груди, он еще учится получать пищу таким образом,
            поэтому важно набраться терпения и продолжать помогать ему. Хорошо, если малыш сначала опустошит одну грудь,
            перед тем, как приступит ко второй. Так он получит достаточно жидкости и питательных элементов. Когда малыш
            отворачивается от груди, это значит, что он насытился и заставлять его кушать еще не нужно. Таким образом,
            вы и ваш организм настраиваетесь на выработку молока в соответствии с потребностью вашего малыша.
          </p>
        </li>
      </ol>
    </div>
  </section>

  <section class="mb-[75px]">
    <div class="container">
      <div class="bg-notice max-w-[1180px] m-auto rounded p-4 lg:p-8 text-[18px] lg:text-[24px]">
        <p>
          <b>
            Помните о том, что каждый малыш и мама уникальны, со временем вы найдете удобный только для вас двоих стиль
            и режим кормления грудью.
          </b>
        </p>
      </div>
    </div>
  </section>

  <HelpMomNavigation/>

</template>