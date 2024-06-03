<script
  setup
  lang="ts">
import {useLocation} from '~/composables/useLocation';
import type {Breadcrumb} from '~/types';

const location = useLocation();

const breadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    title: 'Главная',
    link: `/${location.value.currentLocation}`,
  },
  {
    id: 2,
    title: 'О компании',
  },
];
</script>

<template>
  <section class="first-screen relative pb-[120px] mb-[75px]">
    <BaseImage
      image="/img/about-company.jpg"
      class="flex w-full h-full absolute top-0 left-0 -z-10 bg-[#95B9DD]"
      img-class="object-cover w-full h-full"
    />
    <div class="container">
      <BaseBreadcrumb
        :links="breadcrumbs"
        class="mb-[80px]"/>
      <div class="flex flex-col items-center gap-[40px] bg-background rounded max-w-[500px] font-display text-[26px] p-[40px]">
        <p class="uppercase text-secondary text-center font-bold">
          Более 60 лет Kitett помогает мамам в грудном вскармливании
        </p>
        <Button as-child>
          <NuxtLink
            :to="`/${location.currentLocation}/help-mom`"
            class="text-[18px] uppercase">
            полезная информация
          </NuxtLink>
        </Button>
      </div>
    </div>
  </section>

  <section class="mb-[75px] xl:mb-[160px]">
    <div class="container max-w-[1038px] lg:p-4">
      <BaseTitle
        title="о компании"
        tag="h1"
        separator-style="top-[calc(50%-2px)] absolute"
        text-style="text-center uppercase lg:px-[44px]"/>
      <p>
        Официальный представитель бренда Kitett – группа компаний БиоЛайн – эксперт по оснащению лабораторий
        и медицинских учреждений самым современным оборудованием. Более 25 лет мы находимся в поиске инновационных
        продуктов, способных сделать так, чтобы здравоохранение развивалось в соответствии с мировыми тенденциями.</p>
      <br>
      <p>
        Мы вкладываем серьёзные усилия во внедрение и адаптацию передовых разработок – наши специалисты имеют высшее
        профильное образование и опыт работы в медицинских учрежденияхпоэтому обладают всеми необходимыми компетенциями,
        чтобы понять поставленную задачу и подобрать лучшее решение.
      </p>
      <br>
      <p>
        Год за годом мы наращиваем ассортимент продукции и осваиваем новые направления. Несколько лет назад мы начали
        погружение в мир материнства и детства на заводе французской компании DTF medical, разрабатывающей клинические
        молокоотсосы Kitett. Мы ответственно подходим к выбору партнёров, отдавая предпочтение тем, кто разделяет нашу
        страсть к качеству и функциональности, мыслит нестандартно и вкладывает в свою продукцию большие и добрые
        чувства. С DTF medical наши взгляды полностью совпадают.
      </p>
      <br>
      <p>
        Мы ведём активную работу по оснащению родильных домов и перинатальных центров профессиональными клиническими
        молокоотсосами, вместе с ведущими специалистами в области неонатологии работаем над созданием Банк донорского
        грудного молока и занимаемся поддержкой грудного вскармливания на всех этапах материнства.
      </p>
    </div>
  </section>
</template>