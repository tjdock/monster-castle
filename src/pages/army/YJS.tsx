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
  // {lv: 0, life: null, magics: null, cost: null, spending: new Date(2020,1,0,0,30,0)},//todo
  {lv: 1, life: 600, cost: 9820, spending: new Date(2020, 1, 0, 1, 20, 0)},
  {lv: 2, life: 640, cost: 31900, spending: new Date(2020, 1, 0, 2, 30, 0)},
  {lv: 3, life: 680, cost: 46100, spending: new Date(2020, 1, 0, 6, 22, 0)},
  {lv: 4, life: 730, cost: 70500, spending: new Date(2020, 1, 0, 9, 19, 0)},
  {lv: 5, life: 770, cost: 95300, spending: new Date(2020, 1, 0, 12, 57, 0)},
  {lv: 6, life: 820, cost: 135000, spending: new Date(2020, 1, 0, 17, 47, 0)},
  {lv: 7, life: 880, cost: 187000, spending: new Date(2020, 1, 0, 23, 46, 0)},
  {lv: 8, life: 930, cost: 353000, spending: new Date(2020, 1, 1, 7, 0, 0)},
  {lv: 9, life: 990, cost: 468000, spending: new Date(2020, 1, 1, 16, 0, 0)},
  {lv: 10, life: 1050, cost: 571000, spending: new Date(2020, 1, 2, 3, 0, 0)},
  {lv: 11, life: 1120, cost: 735000, spending: new Date(2020, 1, 2, 17, 0, 0)},
  {lv: 12, life: 1190, cost: 876000, spending: new Date(2020, 1, 3, 9, 0, 0)},
  {lv: 13, life: 1270, cost: 1550000, spending: new Date(2020, 1, 4, 5, 0, 0)},
  {lv: 14, life: 1350, cost: 1810000, spending: new Date(2020, 1, 5, 4, 0, 0)},
  {lv: 15, life: 1440, cost: 2110000, spending: new Date(2020, 1, 6, 7, 0, 0)},
  {lv: 16, life: 1530, cost: 2440000, spending: new Date(2020, 1, 7, 14, 0, 0)},
  {lv: 17, life: 1630, cost: 2800000, spending: new Date(2020, 1, 9, 4, 0, 0)},
  {lv: 18, life: 1740, cost: 3190000, spending: new Date(2020, 1, 10, 21, 0, 0)},
  {lv: 19, life: 1840, cost: 3560000, spending: new Date(2020, 1, 12, 19, 0, 0)},


  {lv: 20, life: 1840, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
]


const YJS: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>研究所</IonTitle>
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
              <IonImg src='./assets/icon/wine.png'/>
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

export default YJS;
