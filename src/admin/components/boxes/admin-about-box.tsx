const AdminAboutBox = () => {
  return (
    <div className=" w-full flex flex-col items-start gap-y-4 p-4 bg-white">
      <div className=" w-full aspect-video flex items-center justify-center">
        <div className=" w-1/3">
          <img src="/src/assets/images/doorInAdverstising.png" alt="" className=" object-cover" />
        </div>
      </div>
      <div>
        <div className=" flex items-center gap-1">
          <img src="/src/assets/icons/arm-flag-icon.svg" alt="" className=" w-6 h-6" />
          <h2>AM</h2>
        </div>
        <p>
          iDoors Armenia-ն դռների արտադրությամբ զբաղվող ընկերություն է: Մենք առաջարկում ենք նմանը
          չունեցող դիզայնով և ամրությամբ մուտքի և միջսենյակային դռների մեծ տեսականի: Մեր պրոֆեսիոնալ
          մասնագետները կօգնեն ձեզ դռների չափագրման, տեղադրման և դիզայնի հարցում։ Ընդունվում են
          պատվերներ․ սիրով կսպասենք ձեզ։
        </p>
      </div>
      <div>
        <div className=" flex items-center gap-1">
          <img src="/src/assets/icons/eng-flag-icon.svg" alt="" className=" w-6 h-6" />
          <h2>EN</h2>
        </div>
        <p>
          iDoors Armenia is a door manufacturing company. We offer a wide range of entrance and
          interior doors with unparalleled design and durability. Our professional specialists will
          help you with door sizing, installation and design. Orders are accepted. we will wait for
          you with love.
        </p>
      </div>
      <div>
        <div className=" flex items-center gap-1">
          <img src="/src/assets/icons/rus-flag-icon.svg" alt="" className=" w-6 h-6" />
          <h2>RU</h2>
        </div>
        <p>
          iDoors Армения — компания по производству дверей. Мы предлагаем широкий ассортимент
          входных и межкомнатных дверей с непревзойденным дизайном и долговечностью. Наши
          профессиональные специалисты помогут Вам с выбором размеров, установкой и дизайном дверей.
          Заказы принимаются. мы будем ждать тебя с любовью.
        </p>
      </div>
      <div className=" flex items-center gap-4">
        <button className=" px-4 py-2 text-white bg-green-500">Խմբագրել</button>
        <button className=" px-4 py-2 text-white bg-red-500">Ջնջել</button>
      </div>
    </div>
  );
};

export default AdminAboutBox;
