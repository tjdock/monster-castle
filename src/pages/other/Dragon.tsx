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
  {lv: 1, atk: null, cost: 6880, times: null},
  {lv: 2, atk: null, cost: 12480, times: null},
  {lv: 3, atk: null, cost: 19520, times: null},
  {lv: 4, atk: null, cost: 27600, times: null},
  {lv: 5, atk: null, cost: 50000, times: null},
  {lv: 1, atk: 88, cost: 149500, times: 1},
  {lv: 2, atk: 110, cost: 480000, times: 1},
  {lv: 3, atk: 132, cost: 1092500, times: 1},
  {lv: 4, atk: 154, cost: 2079000, times: 1},
  {lv: 5, atk: 176, cost: 3525000, times: 1},
  {lv: 6, atk: 198, cost: 5474000, times: 1},
  {lv: 7, atk: 220, cost: 8060000, times: 2},
  {lv: 8, atk: 242, cost: 11322000, times: 2},
  {lv: 9, atk: 264, cost: 15355000, times: 2},
  {lv: 10, atk: 286, cost: 20200000, times: 2},
  {lv: 11, atk: 308, cost: 25972000, times: 2},
  {lv: 12, atk: 330, cost: 32729000, times: 2},
  {lv: 13, atk: 330, cost: 40498500, times: 3},
  {lv: 14, atk: 374, cost: 49452000, times: 3},
  {lv: 15, atk: 396, cost: 59537500, times: 3},
  {lv: 16, atk: 418, cost: 70934000, times: 3},
  {lv: 17, atk: 440, cost: 83661500, times: 3},
  {lv: 18, atk: 462, cost: 97792000, times: 3},
  {lv: 19, atk: 484, cost: 113364000, times: 3},
  {lv: 20, atk: 560, cost: null, times: 3},

]


const Dragon: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>龙</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/atk.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/long.png'/>
            </IonCol>
            <IonCol size='5' className='icon-title'>
              <IonImg src='./assets/icon/money.png'/>
            </IonCol>

          </IonRow>
          {
            data.map(item => (
              <IonRow key={item.cost || 0}>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.atk}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.times}</IonCol>
                <IonCol size='5' className='ion-text-right ion-align-self-center'>{item.cost}</IonCol>

              </IonRow>
            ))
          }
          <IonRow class='bold'>
            <IonCol size='2' className='ion-text-right ion-align-self-center'>总计</IonCol>
            <IonCol size='3' className='ion-text-right ion-align-self-center'/>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='5' className='ion-text-right ion-align-self-center'>{sum(data, 'cost')}</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Dragon;
