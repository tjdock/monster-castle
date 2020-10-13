import {
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol, IonImg
} from '@ionic/react';
import React from 'react';
import {covertDate, sum, sumTime} from "../../shared/utils";

const data = [
  {lv: 1, life: 1500, cost: 800, spending: new Date(2020, 1, 0, 0, 0, 3)},
  {lv: 2, life: 1700, cost: 5000, spending: new Date(2020, 1, 0, 0, 2, 0)},
  {lv: 3, life: 1910, cost: 18000, spending: new Date(2020, 1, 0, 0, 10, 0)},
  {lv: 4, life: 2150, cost: 40000, spending: new Date(2020, 1, 0, 0, 30, 0)},
  {lv: 5, life: 2430, cost: 80000, spending: new Date(2020, 1, 0, 1, 40, 0)},
  {lv: 6, life: 2740, cost: 140000, spending: new Date(2020, 1, 0, 10, 0, 0)},
  {lv: 7, life: 3090, cost: 220000, spending: new Date(2020, 1, 0, 16, 25, 0)},
  {lv: 8, life: 3480, cost: 330000, spending: new Date(2020, 1, 1, 0, 0, 0)},
  {lv: 9, life: 3920, cost: 480000, spending: new Date(2020, 1, 1, 11, 0, 0)},
  {lv: 10, life: 4420, cost: 650000, spending: new Date(2020, 1, 2, 1, 0, 0)},
  {lv: 11, life: 4990, cost: 850000, spending: new Date(2020, 1, 2, 20, 0, 0)},
  {lv: 12, life: 5620, cost: 1100000, spending: new Date(2020, 1, 3, 18, 0, 0)},
  {lv: 13, life: 6340, cost: 1400000, spending: new Date(2020, 1, 4, 22, 0, 0)},
  {lv: 14, life: 7140, cost: 1800000, spending: new Date(2020, 1, 6, 9, 0, 0)},
  {lv: 15, life: 8050, cost: 2200000, spending: new Date(2020, 1, 8, 3, 0, 0)},
  {lv: 16, life: 9080, cost: 2600000, spending: new Date(2020, 1, 10, 4, 0, 0)},
  {lv: 17, life: 10240, cost: 3200000, spending: new Date(2020, 1, 12, 16, 0, 0)},
  {lv: 18, life: 11540, cost: 3800000, spending: new Date(2020, 1, 15, 13, 0, 0)},
  {lv: 19, life: 13010, cost: 4500000, spending: new Date(2020, 1, 22, 19, 0, 0)},
  {lv: 20, life: 14670, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
]


const GD: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>宫殿</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/life.png'/>
            </IonCol>
            <IonCol size='4' className='icon-title'>
              <IonImg src='./assets/icon/money.png'/>
            </IonCol>
            <IonCol size='4' className='icon-title'>
              <IonImg src='./assets/icon/sj.png'/>
            </IonCol>
          </IonRow>
          {
            data.map(item => (
              <IonRow key={item.lv}>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.life}</IonCol>
                <IonCol size='4' className='ion-text-right ion-align-self-center'>{item.cost}</IonCol>
                <IonCol size='4' className='ion-text-right ion-align-self-center'>{covertDate(item.spending)}</IonCol>
              </IonRow>
            ))
          }
          <IonRow class='bold'>
            <IonCol size='2' className='ion-text-right ion-align-self-center'>总计</IonCol>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='4' className='ion-text-right ion-align-self-center'>{sum(data, 'cost')}</IonCol>
            <IonCol size='4' className='ion-text-right ion-align-self-center'>{sumTime(data)}</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default GD;
