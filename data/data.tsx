export const anim: any = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};

export const program = [
  {
    time: "12:00",
    title: "Փեսայի տուն",
    address: "Երևան",
  },
  {
    time: "13:00",
    title: "Հարսնացուի տուն",
    address: "Երևան",
  },
  {
    time: "15:00",
    title: "Պսակադրություն",
    address: "Ս․ Գայանե",
  },
  {
    time: "17:30",
    title: "Հարսանյաց սրահ",
    address: "Արև Ռեստորանային Համալիր",
  },
];

export const text={
  title:"Դուք հրավիրված եք \n Տաթևի և Հայկի \n հարսանիքին",
  firstwho:"Տաթև և Հայկ",
  firstTxt:"Գեղեցիկ օր և մենք \n կդառնանք ամուսիններ",
  title1:"Սիրելի՛ ընկերներ և  բարեկամներ",
  descr1:"Սիրով հրավիրում ենք \n Ձեզ մասնակցելու մեր կյանքի կարևոր և հիշարժան օրվան",
  day:"22/06/2026",
  txtEnd:"Խնդրում ենք նախապես տեղեկացնել \n Ձեր մասնակցության մասին \n մինչև Մայիսի 15-ը \n Սիրո՛վ սպասում ենք"
}

export const rsvp = 'https://script.google.com/macros/s/AKfycbyjze-p9X8YhZvLebhTg-PMy-I82xchTZ7seeUB_g5hD0f2iaWWNQ4uHdCIvqB5MEj8Eg/exec'