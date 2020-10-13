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
  {lv: 1, life: 500, cost: 3420, spending: new Date(2020, 1, 0, 0, 46, 0)},
  {lv: 2, life: 610, cost: 25700, spending: new Date(2020, 1, 0, 3, 17, 0)},
  {lv: 3, life: 740, cost: 68400, spending: new Date(2020, 1, 0, 8, 51, 0)},
  {lv: 4, life: 890, cost: 217000, spending: new Date(2020, 1, 0, 19, 9, 0)},
  {lv: 5, life: 1080, cost: 404000, spending: new Date(2020, 1, 1, 12, 0, 0)},
  {lv: 6, life: 1300, cost: 686000, spending: new Date(2020, 1, 2, 16, 0, 0)},
  {lv: 7, life: 1570, cost: 1530000, spending: new Date(2020, 1, 4, 9, 0, 0)},
  {lv: 8, life: 1900, cost: 2190000, spending: new Date(2020, 1, 6, 20, 0, 0)},
  {lv: 9, life: 2290, cost: 3010000, spending: new Date(2020, 1, 10, 6, 0, 0)},
  {lv: 10, life: 2770, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
]


const YXWZ: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>英雄王座</IonTitle>
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

export default YXWZ;
