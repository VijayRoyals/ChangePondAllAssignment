import React, { useState } from 'react';

const DisplayDish = () => {
  const [dishImage, setDishImage] = useState('https://www.shutterstock.com/image-vector/happiness-homemade-phrase-calligraphic-sign-260nw-1936024009.jpg');
  const [dishName, setDishName] = useState('');

  const displayDish = (dish) => {
    switch(dish) {
      case 'idli':
        setDishImage('https://t3.ftcdn.net/jpg/05/79/63/16/360_F_579631615_TrMoGlsaH9GpOKIpZv9zDuRkMseqfjRg.jpg');
        setDishName('Idli');
        break;
      case 'vada':
        setDishImage('https://t4.ftcdn.net/jpg/05/33/82/33/360_F_533823378_QWtmCSSrMSSZANUNb4A0MhSYJJ9jijKk.jpg');
        setDishName('Vada');
        break;
      case 'puri':
        setDishImage('https://t3.ftcdn.net/jpg/05/00/04/18/360_F_500041894_FIwsCmxDUhLayLRXYAIzpaDSAWaZ3IZe.jpg');
        setDishName('Puri');
        break;
      case 'pongal':
        setDishImage('https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2016/01/Ven-Pongal.jpg?resize=720%2C960&ssl=1');
        setDishName('Pongal');
        break;
      case 'dosa':
        setDishImage('https://media.istockphoto.com/id/1255916208/photo/south-indian-breakfast-masala-dosa-plain-dosa-with-coconut-chutney-red-chutney-and-sambar.jpg?s=612x612&w=0&k=20&c=VdhlXcBmu8eq350ZmE9pv_MF-JIVa048QkIHeFC_gBA=');
        setDishName('Dosa');
        break;
      default:
        setDishImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlniUYe3nQIqOmzjsggYVpI-NxhOIjhTg1Xg&s');
        setDishName('');
    }
  };

  return (
    <div>
      <img className="actor-image" src={dishImage} alt="Dish Image" />
      <p>{dishName}</p>

      <div>
        <button onClick={() => displayDish('idli')}>Idli</button>
        <button onClick={() => displayDish('vada')}>Vada</button>
        <button onClick={() => displayDish('puri')}>Puri</button>
        <button onClick={() => displayDish('pongal')}>Pongal</button>
        <button onClick={() => displayDish('dosa')}>Dosa</button>
      </div>
    </div>
  );
};

export default DisplayDish;
