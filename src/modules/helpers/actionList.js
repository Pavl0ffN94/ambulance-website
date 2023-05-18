import siren from './../../img/siren.svg';
import doc from './../../img/doc.svg';
import treatment from './../../img/treatment.svg';
import therapy from './../../img/therapy.svg';
import consultation from './../../img/consultation.svg';

const action = [
  {
    img: siren,
    bg: 'item_bg-1',
    h3: 'Прибытие бригады на место и оценка состояние больного',
    p: 'Прибытие на место вызова с использованием аварийных сигналов и световых маячков',
    num: 'item_number-1',
    item: 1,
  },
  {
    img: doc,
    bg: 'item_bg-2',
    h3: 'Осмотр врачом скорой помощи первичная диагностика',
    p: `Измерение: АД, ЭКГ, Глюкометрия,
     Измерение O2`,
    num: 'item_number-2',
    item: 2,
  },
  {
    img: treatment,
    bg: 'item_bg-3',
    h3: 'Постановка первичного диагноза и начало лечения',
    p: 'назначения для оказание первой помощи постановка в/м уколов постановка в/в уколов или системы',
    num: 'item_number-3',
    item: 3,
  },
  {
    img: therapy,
    bg: 'item_bg-4',
    h3: 'Повторная диагностика после оказанной помощи',
    p: 'оценка состояние пациента после оказанного лечения госпитализация пациента в дежурный стационар (при необходимости)',
    num: 'item_number-4',
    item: 4,
  },
  {
    img: consultation,
    bg: 'item_bg-5',
    h3: 'Советы/рекомедации врача скорой по продолжению лечения',
    p: 'рекомендации к какому специалисту обратиться какие анализы сдать какие диагностичемкие мероприятия пройти',
    num: 'item_number-5',
    item: 5,
  },
];
export {action};
