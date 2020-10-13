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
  {lv: 0, life: null, armies: null, cost: 71600, spending: new Date(2020, 1, 7, 40, 0, 0), xs: null},
  {lv: 1, life: 580, armies: 4, cost: 559000, spending: new Date(2020, 1, 2, 2, 0, 0), xs: 5},
  {lv: 2, life: 880, armies: 5, cost: 2420000, spending: new Date(2020, 1, 9, 1, 0, 0), xs: 110},
  {lv: 3, life: 1340, armies: 6, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
]


const SBY: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>哨兵营</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='1.5' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/life.png'/>
            </IonCol>
            <IonCol size='1.5' className='icon-title'>
              <IonImg src='./assets/icon/jd.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/wine.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/sj.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/xs.png'/>
            </IonCol>
          </IonRow>
          {
            data.map(item => (
              <IonRow key={item.lv}>
                <IonCol size='1.5' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.life}</IonCol>
                <IonCol size='1.5' className='ion-text-right ion-align-self-center'>{item.armies}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.cost}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{covertDate(item.spending)}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.xs}</IonCol>
              </IonRow>
            ))
          }
          <IonRow class='bold'>
            <IonCol size='1.5' className='ion-text-right ion-align-self-center'>总计</IonCol>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='1.5' className='ion-text-right ion-align-self-center'/>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>{sum(data, 'cost')}</IonCol>
            <IonCol size='2' className='ion-text-right ion-align-self-center'>{sumTime(data)}</IonCol>
            <IonCol size='2' className='ion-text-right ion-align-self-center'>{sum(data, 'xs')}</IonCol>

          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default SBY;
