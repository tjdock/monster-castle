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
  {lv: 1, life: 560, magics: 4, cost: 4260, spending: new Date(2020,1,0,0,30,0)},
  {lv: 2, life: 600, magics: 6, cost: 21800, spending: new Date(2020,1,0,2,0,0)},
  {lv: 3, life: 640, magics: 8, cost: 37300, spending: new Date(2020,1,0,4,37,0)},
  {lv: 4, life: 680, magics: 10, cost: 55100, spending: new Date(2020,1,0,7,8,0)},
  {lv: 5, life: 720, magics: 12, cost: 84000, spending: new Date(2020,1,0,10,23,0)},
  {lv: 6, life: 770, magics: 14, cost: 122000, spending: new Date(2020,1,0,14,44,0)},
  {lv: 7, life: 820, magics: 16, cost: 160000, spending: new Date(2020,1,0,20,15,0)},
  {lv: 8, life: 870, magics: 18, cost: 308000, spending: new Date(2020,1,1,3,0,0)},
  {lv: 9, life: 930, magics: 20, cost: 417000, spending: new Date(2020,1,1,12,0,0)},
  {lv: 10, life: 990, magics: 22, cost: 518000, spending: new Date(2020,1,1,23,0,0)},
  {lv: 11, life: 1050, magics: 24, cost: 675000, spending: new Date(2020,1,2,12,0,0)},
  {lv: 12, life: 1120, magics: 26, cost: 816000, spending: new Date(2020,1,3,4,0,0)},
  {lv: 13, life: 1190, magics: 28, cost: 1460000, spending: new Date(2020,1,3,23,0,0)},
  {lv: 14, life: 1270, magics: 30, cost: 1720000, spending: new Date(2020,1,4,22,0,0)},
  {lv: 15, life: 1350, magics: 32, cost: 2020000, spending: new Date(2020,1,6,1,0,0)},
  {lv: 16, life: 1440, magics: 34, cost: 2360000, spending: new Date(2020,1,7,8,0,0)},
  {lv: 17, life: 1530, magics: 36, cost: 2720000, spending: new Date(2020,1,8,22,0,0)},
  {lv: 18, life: 1630, magics: 38, cost: 3130000, spending: new Date(2020,1,10,16,0,0)},
  {lv: 19, life: 1740, magics: 40, cost: 3530000, spending: new Date(2020,1,12,17,0,0)},
  {lv: 20, life: 1840, magics: 42, cost: null, spending: new Date(2020,0,0,0,0,0)},
]


const MFW: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>魔法屋</IonTitle>
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
              <IonImg src='./assets/icon/magic.png'/>
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
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.magics}</IonCol>
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

export default MFW;
