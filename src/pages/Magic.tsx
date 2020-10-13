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
  IonTabs, IonTabBar, IonTabButton, IonLabel, IonBadge,
  IonCol, IonImg, IonIcon, IonButton, IonPopover, IonList, IonItem, IonRange, IonText, IonBackButton
} from '@ionic/react';
import React, {useState} from "react";
import {buildOutline} from "ionicons/icons";
import {RouteComponentProps} from "react-router";
import {covertDate, sum, sumTime} from "../shared/utils";

interface DetailPageProps extends RouteComponentProps<{
  id: string;
}> {
}

let MAGIC_NAME = {
  "1": '闪电', "2": "冰冻", "3": "魔法护盾", "4": "召唤魔法", "5": "陷阱解除"
}

const data = [
  {type: "1", lv: 1, atk: 134, cost: 9000, spending: new Date(2020, 1, 0, 2, 15, 0)},
  {type: "1", lv: 2, atk: 142, cost: 20000, spending: new Date(2020, 1, 0, 2, 19, 0)},
  {type: "1", lv: 3, atk: 156, cost: 30000, spending: new Date(2020, 1, 0, 2, 31, 0)},
  {type: "1", lv: 4, atk: 166, cost: 50000, spending: new Date(2020, 1, 0, 2, 52, 0)},
  {type: "1", lv: 5, atk: 182, cost: 80000, spending: new Date(2020, 1, 0, 3, 23, 0)},
  {type: "1", lv: 6, atk: 196, cost: 120000, spending: new Date(2020, 1, 0, 4, 9, 0)},
  {type: "1", lv: 7, atk: 212, cost: 180000, spending: new Date(2020, 1, 0, 5, 10, 0)},
  {type: "1", lv: 8, atk: 228, cost: 260000, spending: new Date(2020, 1, 0, 6, 28, 0)},
  {type: "1", lv: 9, atk: 248, cost: 360000, spending: new Date(2020, 1, 0, 8, 5, 0)},
  {type: "1", lv: 10, atk: 268, cost: 490000, spending: new Date(2020, 1, 0, 10, 2, 0)},
  {type: "1", lv: 11, atk: 288, cost: 640000, spending: new Date(2020, 1, 0, 12, 23, 0)},
  {type: "1", lv: 12, atk: 314, cost: 820000, spending: new Date(2020, 1, 0, 15, 8, 0)},
  {type: "1", lv: 13, atk: 338, cost: 1030000, spending: new Date(2020, 1, 0, 18, 18, 0)},
  {type: "1", lv: 14, atk: 364, cost: 1280000, spending: new Date(2020, 1, 0, 21, 56, 0)},
  {type: "1", lv: 15, atk: 394, cost: 1560000, spending: new Date(2020, 1, 1, 2, 0, 0)},
  {type: "1", lv: 16, atk: 426, cost: 1880000, spending: new Date(2020, 1, 1, 6, 0, 0)},
  {type: "1", lv: 17, atk: 462, cost: 2230000, spending: new Date(2020, 1, 1, 11, 0, 0)},
  {type: "1", lv: 18, atk: 498, cost: 2630000, spending: new Date(2020, 1, 1, 17, 0, 0)},
  {type: "1", lv: 19, atk: 538, cost: 3080000, spending: new Date(2020, 1, 1, 23, 0, 0)},
  {type: "1", lv: 20, atk: 582, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "2", lv: 1, atk: '6s', cost: 10000, spending: new Date(2020, 1, 0, 2, 30, 0)},
  {type: "2", lv: 2, atk: '6.5s', cost: 13000, spending: new Date(2020, 1, 0, 2, 35, 0)},
  {type: "2", lv: 3, atk: '7s', cost: 22000, spending: new Date(2020, 1, 0, 2, 47, 0)},
  {type: "2", lv: 4, atk: '7.5s', cost: 39000, spending: new Date(2020, 1, 0, 3, 9, 0)},
  {type: "2", lv: 5, atk: '8s', cost: 65000, spending: new Date(2020, 1, 0, 3, 44, 0)},
  {type: "2", lv: 6, atk: '8.5s', cost: 105000, spending: new Date(2020, 1, 0, 4, 35, 0)},
  {type: "2", lv: 7, atk: '9s', cost: 159000, spending: new Date(2020, 1, 0, 5, 43, 0)},
  {type: "2", lv: 8, atk: '9.5s', cost: 231000, spending: new Date(2020, 1, 0, 7, 10, 0)},
  {type: "2", lv: 9, atk: '10s', cost: 322000, spending: new Date(2020, 1, 0, 9, 0, 0)},
  {type: "2", lv: 10, atk: '10.5s', cost: 435000, spending: new Date(2020, 1, 0, 11, 15, 0)},
  {type: "2", lv: 11, atk: '11s', cost: 572000, spending: new Date(2020, 1, 0, 13, 55, 0)},
  {type: "2", lv: 12, atk: '11.5s', cost: 736000, spending: new Date(2020, 1, 0, 17, 5, 0)},
  {type: "2", lv: 13, atk: '12s', cost: 927000, spending: new Date(2020, 1, 0, 20, 45, 0)},
  {type: "2", lv: 14, atk: '12.5s', cost: 1150000, spending: new Date(2020, 1, 1, 0, 0, 0)},
  {type: "2", lv: 15, atk: '13s', cost: 1406000, spending: new Date(2020, 1, 1, 5, 0, 0)},
  {type: "2", lv: 16, atk: '13.5s', cost: 1696000, spending: new Date(2020, 1, 1, 11, 0, 0)},
  {type: "2", lv: 17, atk: '14s', cost: 2024000, spending: new Date(2020, 1, 1, 17, 0, 0)},
  {type: "2", lv: 18, atk: '14.5s', cost: 2391000, spending: new Date(2020, 1, 1, 23, 0, 0)},
  {type: "2", lv: 19, atk: '15s', cost: 2800000, spending: new Date(2020, 1, 2, 7, 0, 0)},
  {type: "2", lv: 20, atk: '15.5s', cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "3", lv: 1, atk: '4s', cost: 41000, spending: new Date(2020, 1, 0, 4, 12, 0)},
  {type: "3", lv: 2, atk: '4.2s', cost: 45000, spending: new Date(2020, 1, 0, 4, 19, 0)},
  {type: "3", lv: 3, atk: '4.4s', cost: 55000, spending: new Date(2020, 1, 0, 4, 36, 0)},
  {type: "3", lv: 4, atk: '4.6s', cost: 75000, spending: new Date(2020, 1, 0, 5, 7, 0)},
  {type: "3", lv: 5, atk: '4.8s', cost: 107000, spending: new Date(2020, 1, 0, 5, 56, 0)},
  {type: "3", lv: 6, atk: '5s', cost: 154000, spending: new Date(2020, 1, 0, 7, 7, 0)},
  {type: "3", lv: 7, atk: '5.2s', cost: 220000, spending: new Date(2020, 1, 0, 8, 42, 0)},
  {type: "3", lv: 8, atk: '5.4s', cost: 306000, spending: new Date(2020, 1, 0, 10, 45, 0)},
  {type: "3", lv: 9, atk: '5.6s', cost: 415000, spending: new Date(2020, 1, 0, 13, 19, 0)},
  {type: "3", lv: 10, atk: '5.8s', cost: 551000, spending: new Date(2020, 1, 0, 16, 27, 0)},
  {type: "3", lv: 11, atk: '6s', cost: 715000, spending: new Date(2020, 1, 0, 20, 12, 0)},
  {type: "3", lv: 12, atk: '6.2s', cost: 910000, spending: new Date(2020, 1, 1, 0, 0, 0)},
  {type: "3", lv: 13, atk: '6.4s', cost: 1142000, spending: new Date(2020, 1, 1, 5, 0, 0)},
  {type: "3", lv: 14, atk: '6.6s', cost: 1409000, spending: new Date(2020, 1, 1, 11, 0, 0)},
  {type: "3", lv: 15, atk: '6.8s', cost: 1715000, spending: new Date(2020, 1, 1, 18, 0, 0)},
  {type: "3", lv: 16, atk: '7s', cost: 2064000, spending: new Date(2020, 1, 2, 1, 0, 0)},
  {type: "3", lv: 17, atk: '7.2s', cost: 2458000, spending: new Date(2020, 1, 2, 10, 0, 0)},
  {type: "3", lv: 18, atk: '7.4s', cost: 2898000, spending: new Date(2020, 1, 2, 19, 0, 0)},
  {type: "3", lv: 19, atk: '7.6s', cost: 3389000, spending: new Date(2020, 1, 3, 6, 0, 0)},
  {type: "3", lv: 20, atk: '7.8s', cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "4", lv: 1, atk: '30s(3)', cost: 100000, spending: new Date(2020, 1, 0, 4, 16, 0)},
  {type: "4", lv: 2, atk: '33s(3)', cost: 200000, spending: new Date(2020, 1, 0, 4, 57, 0)},
  {type: "4", lv: 3, atk: '36s(3)', cost: 300000, spending: new Date(2020, 1, 0, 6, 48, 0)},
  {type: "4", lv: 4, atk: '39s(3)', cost: 500000, spending: new Date(2020, 1, 0, 10, 24, 0)},
  {type: "4", lv: 5, atk: '42s(4)', cost: 800000, spending: new Date(2020, 1, 0, 16, 20, 0)},
  {type: "4", lv: 6, atk: '45s(4)', cost: 1300000, spending: new Date(2020, 1, 1, 1, 0, 0)},
  {type: "4", lv: 7, atk: '48s(5)', cost: 2000000, spending: new Date(2020, 1, 1, 13, 0, 0)},
  {type: "4", lv: 8, atk: '51s(5)', cost: 3000000, spending: new Date(2020, 1, 2, 5, 0, 0)},
  {type: "4", lv: 9, atk: '54s(5)', cost: 4200000, spending: new Date(2020, 1, 3, 3, 0, 0)},
  {type: "4", lv: 10, atk: '57s(5)', cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "5", lv: 1, atk: 1, cost: 50000, spending: new Date(2020, 1, 0, 5, 0, 0)},
  {type: "5", lv: 2, atk: 3, cost: 120000, spending: new Date(2020, 1, 0, 5, 50, 0)},
  {type: "5", lv: 3, atk: 5, cost: 300000, spending: new Date(2020, 1, 0, 7, 53, 0)},
  {type: "5", lv: 4, atk: 7, cost: 630000, spending: new Date(2020, 1, 0, 11, 36, 0)},
  {type: "5", lv: 5, atk: 9, cost: 1160000, spending: new Date(2020, 1, 0, 17, 27, 0)},
  {type: "5", lv: 6, atk: 11, cost: 1950000, spending: new Date(2020, 1, 1, 1, 0, 0)},
  {type: "5", lv: 7, atk: 13, cost: 3040000, spending: new Date(2020, 1, 1, 13, 0, 0)},
  {type: "5", lv: 8, atk: 15, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},

]
const Magic: React.FC<DetailPageProps> = ({match, history}) => {

  let getTitle = () => {
    // @ts-ignore
    return MAGIC_NAME[match.params.id]
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>{getTitle()}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/atk.png'/>
            </IonCol>
            <IonCol size='4' className='icon-title'>
              <IonImg src='./assets/icon/wine.png'/>
            </IonCol>
            <IonCol size='4' className='icon-title'>
              <IonImg src='./assets/icon/sj.png'/>
            </IonCol>
          </IonRow>
          {
            data.filter(d => d.type === match.params.id).map(item => (
              <IonRow key={item.lv}>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.atk}</IonCol>
                <IonCol size='4' className='ion-text-right ion-align-self-center'>{item.cost}</IonCol>
                <IonCol size='4' className='ion-text-right ion-align-self-center'>{covertDate(item.spending)}</IonCol>
              </IonRow>
            ))
          }
          <IonRow class='bold'>
            <IonCol size='2' className='ion-text-right ion-align-self-center'>总计</IonCol>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='4'
                    className='ion-text-right ion-align-self-center'>{sum(data.filter(d => d.type === match.params.id), 'cost')}</IonCol>
            <IonCol size='4'
                    className='ion-text-right ion-align-self-center'>{sumTime(data.filter(d => d.type === match.params.id))}</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

    </IonPage>
  );
};

export default Magic;
