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
import {sum} from "../../shared/utils";

const data = [
  {lv: 1, exp: 60, gd: null, xs: null},
  {lv: 2, exp: 190, gd: null, xs: null},
  {lv: 3, exp: 350, gd: null, xs: null},
  {lv: 4, exp: 540, gd: null, xs: null},
  {lv: 5, exp: 760, gd: null, xs: null},
  {lv: 6, exp: 1000, gd: null, xs: null},
  {lv: 7, exp: 1260, gd: null, xs: null},
  {lv: 8, exp: 1540, gd: null, xs: null},
  {lv: 9, exp: 1840, gd: 5, xs: 25},
  {lv: 10, exp: 2160, gd: null, xs: null},
  {lv: 11, exp: 2490, gd: null, xs: null},
  {lv: 12, exp: 2840, gd: null, xs: null},
  {lv: 13, exp: 3210, gd: null, xs: null},
  {lv: 14, exp: 3580, gd: null, xs: null},
  {lv: 15, exp: 3970, gd: null, xs: null},
  {lv: 16, exp: 4380, gd: null, xs: null},
  {lv: 17, exp: 4800, gd: null, xs: null},
  {lv: 18, exp: 5230, gd: null, xs: null},
  {lv: 19, exp: 5670, gd: 10, xs: 100},
  {lv: 20, exp: 6120, gd: null, xs: null},
  {lv: 21, exp: 6590, gd: null, xs: null},
  {lv: 22, exp: 7060, gd: null, xs: null},
  {lv: 23, exp: 7550, gd: null, xs: null},
  {lv: 24, exp: 8050, gd: null, xs: null},
  {lv: 25, exp: 8560, gd: null, xs: null},
  {lv: 26, exp: 9070, gd: null, xs: null},
  {lv: 27, exp: 9600, gd: null, xs: null},
  {lv: 28, exp: 10100, gd: null, xs: null},
  {lv: 29, exp: 10600, gd: 14, xs: 225},
  {lv: 30, exp: 11200, gd: null, xs: null},
  {lv: 31, exp: 11800, gd: null, xs: null},
  {lv: 32, exp: 12300, gd: null, xs: null},
  {lv: 33, exp: 12900, gd: null, xs: null},
  {lv: 34, exp: 13500, gd: null, xs: null},
  {lv: 35, exp: 14100, gd: null, xs: null},
  {lv: 36, exp: 14700, gd: null, xs: null},
  {lv: 37, exp: 15400, gd: null, xs: null},
  {lv: 38, exp: 16000, gd: null, xs: null},
  {lv: 39, exp: 16600, gd: 18, xs: 400},
  {lv: 40, exp: 17300, gd: null, xs: null},
  {lv: 41, exp: 17900, gd: null, xs: null},
  {lv: 42, exp: 18600, gd: null, xs: null},
  {lv: 43, exp: 19300, gd: null, xs: null},
  {lv: 44, exp: 19900, gd: null, xs: null},
  {lv: 45, exp: 20600, gd: null, xs: null},
  {lv: 46, exp: 21300, gd: null, xs: null},
  {lv: 47, exp: 22000, gd: null, xs: null},
  {lv: 48, exp: 22700, gd: null, xs: null},
  {lv: 49, exp: 23400, gd: null, xs: null},
]

const HeroExp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>升级经验</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='4' className='icon-title'>
              <IonImg src='./assets/icon/exp.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/xs.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/gd.png'/>
            </IonCol>
          </IonRow>
          {
            data.map(item => (
              <IonRow key={item.lv}>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='4' className='ion-text-right ion-align-self-center'>{item.exp}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.xs}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.gd}</IonCol>
              </IonRow>
            ))
          }
          <IonRow class='bold'>
            <IonCol size='2' className='ion-text-right ion-align-self-center'>总计</IonCol>
            <IonCol size='4' className='ion-text-right ion-align-self-center'>{sum(data,'exp')}</IonCol>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>{sum(data,'xs')}</IonCol>
            <IonCol size='3' className='ion-text-right ion-align-self-center'/>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default HeroExp;
