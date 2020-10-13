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
  // {lv: 0, life: 770, storage: 5000, cost: 590, spending: new Date(2020,1,0,0,2,0)},//todo
  {lv: 1, life: 540, storage: 2500, cost: 1550, spending: new Date(2020, 1, 0, 0, 1, 0)},
  {lv: 2, life: 590, storage: 5000, cost: 3880, spending: new Date(2020, 1, 0, 0, 10, 0)},
  {lv: 3, life: 640, storage: 10000, cost: 7600, spending: new Date(2020, 1, 0, 0, 15, 0)},
  {lv: 4, life: 700, storage: 20000, cost: 12900, spending: new Date(2020, 1, 0, 0, 50, 0)},
  {lv: 5, life: 760, storage: 40000, cost: 20200, spending: new Date(2020, 1, 0, 3, 0, 0)},
  {lv: 6, life: 830, storage: 60000, cost: 29600, spending: new Date(2020, 1, 0, 6, 43, 0)},
  {lv: 7, life: 900, storage: 80000, cost: 41400, spending: new Date(2020, 1, 0, 11, 20, 0)},
  {lv: 8, life: 980, storage: 100000, cost: 55900, spending: new Date(2020, 1, 0, 16, 52, 0)},
  {lv: 9, life: 1060, storage: 150000, cost: 77700, spending: new Date(2020, 1, 0, 23, 36, 0)},
  {lv: 10, life: 1150, storage: 200000, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},

]


const JinKuang: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>金矿</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='1' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/life.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/kc_m.png'/>
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
                <IonCol size='1' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.life}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.storage}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.cost}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{covertDate(item.spending)}</IonCol>
              </IonRow>
            ))
          }
          <IonRow class='bold'>
            <IonCol size='1' className='ion-text-right ion-align-self-center'/>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='3' className='ion-text-right ion-align-self-center'/>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>{sum(data, 'cost')}</IonCol>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>{sumTime(data)}</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default JinKuang;
