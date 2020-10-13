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
import {sum} from '../../shared/utils';

const data = [
  {lv: 1, book1: 1, book2: null, book3: null},
  {lv: 2, book1: 1, book2: null, book3: null},
  {lv: 3, book1: 1, book2: null, book3: null},
  {lv: 4, book1: 1, book2: null, book3: null},
  {lv: 5, book1: 1, book2: null, book3: null},
  {lv: 6, book1: 2, book2: null, book3: null},
  {lv: 7, book1: 2, book2: null, book3: null},
  {lv: 8, book1: 2, book2: null, book3: null},
  {lv: 9, book1: 2, book2: null, book3: null},
  {lv: 10, book1: 2, book2: null, book3: null},
  {lv: 11, book1: 3, book2: null, book3: null},
  {lv: 12, book1: 4, book2: null, book3: null},
  {lv: 13, book1: 4, book2: null, book3: null},
  {lv: 14, book1: null, book2: 1, book3: null},
  {lv: 15, book1: null, book2: 1, book3: null},
  {lv: 16, book1: null, book2: 1, book3: null},
  {lv: 17, book1: null, book2: 2, book3: null},
  {lv: 18, book1: null, book2: 2, book3: null},
  {lv: 19, book1: null, book2: 2, book3: null},
  {lv: 20, book1: null, book2: 3, book3: null},
  {lv: 21, book1: null, book2: 3, book3: null},
  {lv: 22, book1: null, book2: 3, book3: null},
  {lv: 23, book1: null, book2: 4, book3: null},
  {lv: 24, book1: null, book2: 4, book3: null},
  {lv: 25, book1: null, book2: 5, book3: null},
  {lv: 26, book1: null, book2: 5, book3: null},
  {lv: 27, book1: null, book2: null, book3: 1},
  {lv: 28, book1: null, book2: null, book3: 1},
  {lv: 29, book1: null, book2: null, book3: 1},
  {lv: 30, book1: null, book2: null, book3: 2},
  {lv: 31, book1: null, book2: null, book3: 2},
  {lv: 32, book1: null, book2: null, book3: 2},
  {lv: 33, book1: null, book2: null, book3: 2},
  {lv: 34, book1: null, book2: null, book3: 2},
  {lv: 35, book1: null, book2: null, book3: 3},
  {lv: 36, book1: null, book2: null, book3: 3},
  {lv: 37, book1: null, book2: null, book3: 3},
  {lv: 38, book1: null, book2: null, book3: 3},
  {lv: 39, book1: null, book2: null, book3: 4},
]


const SkillExp: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>技能经验</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/shu1.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/shu2.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/shu3.png'/>
            </IonCol>
          </IonRow>
          {
            data.map(item => (
              <IonRow key={item.lv}>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.book1}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.book2}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.book3}</IonCol>
              </IonRow>
            ))
          }
          <IonRow class='bold'>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>总计</IonCol>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>{sum(data, 'book1')}</IonCol>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>{sum(data, 'book2')}</IonCol>
            <IonCol size='3' className='ion-text-right ion-align-self-center'>{sum(data, 'book3')}</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default SkillExp;
