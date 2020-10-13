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
  IonCol, IonImg, IonIcon, IonButton, IonPopover, IonList, IonItem, IonRange, IonLabel, IonText
} from '@ionic/react';
import React, {useState} from "react";
import {settingsOutline} from "ionicons/icons";


const TH: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>移动城堡弹簧分布</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {
          Array.from(new Array(38).keys()).map(index=>(
            <IonImg key={index} src={`./assets/th/${index}.png`} class='ion-margin'/>

          ))
        }

        <p className='ion-text-right pb ion-padding'>Powered by @佩姬peggy</p>
      </IonContent>

    </IonPage>
  );
};

export default TH;
