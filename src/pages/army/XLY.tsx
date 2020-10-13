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
import {covertDate, sum, sumTime} from '../../shared/utils';

const data = [
  // {lv: 0, life: '?', armies: null, cost: null, spending: new Date(2020,1, 0, 0, 0, 0)},//todo
  {lv: 1, life: 580, armies: 12, cost: 590, spending: new Date(2020,1, 0, 0, 2, 0)},
  {lv: 2, life: 660, armies: 14, cost: 7300, spending: new Date(2020,1, 0, 2, 0, 0)},
  {lv: 3, life: 760, armies: 15, cost: 44100, spending: new Date(2020,1, 0, 4, 20, 0)},
  {lv: 4, life: 870, armies: 17, cost: 91900, spending: new Date(2020,1, 0, 13, 16, 0)},
  {lv: 5, life: 1000, armies: 19, cost: 252000, spending: new Date(2020,1, 1, 0, 0, 0)},
  {lv: 6, life: 1150, armies: 20, cost: 420000, spending: new Date(2020,1, 1, 19, 0, 0)},
  {lv: 7, life: 1330, armies: 22, cost: 663000, spending: new Date(2020,1, 2, 22, 0, 0)},
  {lv: 8, life: 1530, armies: 24, cost: 1400000, spending: new Date(2020,1, 4, 12, 0, 0)},
  {lv: 9, life: 1760, armies: 25, cost: 1940000, spending: new Date(2020,1, 6, 18, 0, 0)},
  {lv: 10, life: 2020, armies: 25, cost: null, spending: new Date(2020, 1, 0, 0, 0, 0)},
]



const XLY: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>训练营</IonTitle>
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
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/jd.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/wine.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/sj.png'/>
            </IonCol>
          </IonRow>
          {
            data.map(item => (
              <IonRow key={item.lv}>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.life}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.armies}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.cost}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{covertDate(item.spending)}</IonCol>
              </IonRow>
            ))
          }
          <IonRow class='bold'>
            <IonCol size='2' className='ion-text-right ion-align-self-center'>总计</IonCol>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>{sum(data, 'cost')}</IonCol>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>{sumTime(data)}</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default XLY;
