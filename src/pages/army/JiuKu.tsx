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
  // {lv: 0, life: 850, storage: 5000, cost: 590, spending: new Date(2020,1,0,0,2,0)},//todo
  {lv: 1, life: 850, storage: 5000, cost: 590, spending: new Date(2020,1,0,0,2,0)},
  {lv: 2, life: 940, storage: 15000, cost: 1530, spending: new Date(2020,1,0,0,10,0)},
  {lv: 3, life: 1030, storage: 30000, cost: 4260, spending: new Date(2020,1,0,0,30,0)},
  {lv: 4, life: 1140, storage: 50000, cost: 23500, spending: new Date(2020,1,0,1,40,0)},
  {lv: 5, life: 1240, storage: 80000, cost: 72200, spending: new Date(2020,1,0,8,20,0)},
  {lv: 6, life: 1370, storage: 150000, cost: 104000, spending: new Date(2020,1,0,15,1,0)},
  {lv: 7, life: 1500, storage: 250000, cost: 155000, spending: new Date(2020,1,0,21,27,0)},
  {lv: 8, life: 1660, storage: 350000, cost: 222000, spending: new Date(2020,1,1,5,0,0)},
  {lv: 9, life: 1820, storage: 500000, cost: 432000, spending: new Date(2020,1,1,16,0,0)},
  {lv: 10, life: 2010, storage: 650000, cost: 587000, spending: new Date(2020,1,2,5,0,0)},
  {lv: 11, life: 2190, storage: 1000000, cost: 732000, spending: new Date(2020,1,2,22,0,0)},
  {lv: 12, life: 2420, storage: 1300000, cost: 958000, spending: new Date(2020,1,3,18,0,0)},
  {lv: 13, life: 2650, storage: 1800000, cost: 1160000, spending: new Date(2020,1,4,18,0,0)},
  {lv: 14, life: 2930, storage: 2200000, cost: 2080000, spending: new Date(2020,1,6,0,0,0)},
  {lv: 15, life: 3210, storage: 2800000, cost: 2470000, spending: new Date(2020,1,7,11,0,0)},
  {lv: 16, life: 3540, storage: 3400000, cost: 2900000, spending: new Date(2020,1,9,4,0,0)},
  {lv: 17, life: 3880, storage: 4000000, cost: 3390000, spending: new Date(2020,1,11,5,0,0)},
  {lv: 18, life: 4280, storage: 4500000, cost: 3920000, spending: new Date(2020,1,13,13,0,0)},
  {lv: 19, life: 4690, storage: 5000000, cost: 4510000, spending: new Date(2020,1,19,14,0,0)},
  {lv: 20, life: 5130, storage: 5500000, cost: null, spending: new Date(2020,0,0,0,0,0)},
]


const JiuKu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>酒库</IonTitle>
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
              <IonImg src='./assets/icon/kc_w.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/money.png'/>
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

export default JiuKu;
