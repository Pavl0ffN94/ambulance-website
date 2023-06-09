const pricelistArr = [
  {
    title: 'Вызов медицинской бригады для взрослых',
    children1: `Получите медицинскую помощь в городе: экстренная медицинская помощь и госпитализация в специализированную клинику - все это доступно в течение 1,5 часов с момента вызова.`,
     cost1: '7000',
    children2: `Получите медицинскую помощь в отдаленных городских районах, таких как Красноглинский, Волжский, пос. Управленческий, Зубчаниновка, пос. Гранный, Икея (Кошелев), Южный город, 116 км, Сухая Самарка и др. - мы гарантируем оказание скорой помощи в течение 1,5 часов с момента прибытия.`,
     cost2: ' 7000 + (50р км)',
    id: 1,
  },
  {
    title: 'Вызов медицинской бригады для детей',
    children1: `Получите медицинскую помощь в городе: экстренная медицинская помощь и госпитализация в специализированную клинику - все это доступно в течение 1,5 часов с момента вызова.`,
     cost1:'6000' ,
    children2: `Быстро получите медицинскую помощь в отдаленных городских районах, таких как Красноглинский, Волжский, пос. Управленческий, Зубчаниновка, пос. Гранный, Икея (Кошелев), Южный город, 116 км, Сухая Самарка - мы гарантируем оказание скорой помощи в течение 1,5 часов с момента прибытия.`,
     cost2:'6000 + (50р км)' ,
    id: 2,
  },
  {
    title:
      'Вызов медицинской бригаду для лечения алк интоксикаций.',
    children1: `Быстро получите комплексное лечение, включающее дезинтоксикацию, сосудистую терапию и симптоматическое лечение, в городских районах - мы обеспечиваем оказание медицинской помощи в течение 1,5 часов с момента прибытия.`,
      cost1:'7000' ,
    children2: `Получите медицинскую помощь в отдаленных городских районах, таких как Красноглинский, Волжский, пос. Управленческий, Зубчаниновка, пос. Гранный, Икея (Кошелев), Южный город, 116 км, Сухая Самарка - мы гарантируем оказание скорой помощи в течение 1,5 часов с момента прибытия.`,
     cost2:'7000 + (50р км)' ,
    id: 3,
  },
  {
    title: 'Работа медицинских бригад на вызове свыше 1,5 часов',
    children1: `(взрослые и дети) за каждый час `,
    cost1:'+1500' ,
    id: 4,
  },
  {
    title: 'Медицинское сопровождение при транспортировке пациентов',
    children1: ` из отделений стационаров (стоимость за час сопровождения).`,
      cost1:'7000 / час' ,
    children2: ` из реанимаций стационаров (стоимость за час сопровождения)`,
    cost2:'7000 / час' ,
    id: 5,
  },
  {
    title: 'Дежурство бригады скорой помощи на мероприятии',
    children1: ` Сопровождение мероприятий в черте города `,
      cost1:'4000 / час' ,
    children2: ` Сопровождение мероприятий за чертой города`,
    cost2:'4000 / час + 45руб/км (расстояние в обе стороны)' ,
    id: 6,
  },
  {
    title: 'Отказ от госпитализации, от вызова',
    children1: `При отказе от госпитализации, повторный вызов свыше 6 часов будет подлежать полной оплате (для взрослых и детей). `,
    cost1:'7000/6000' ,
    children2: ` Отказ от вызова (ложный вызов) по прибытию бригады - `,
    cost2: 'штраф 3000',
    id: 7,
  },
];

export {pricelistArr};
