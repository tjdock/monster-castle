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
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonBadge,
  IonCol,
  IonImg,
  IonIcon,
  IonButton,
  IonPopover,
  IonList,
  IonItem,
  IonRange,
  IonText,
  IonBackButton,
  IonSegment,
  IonSegmentButton
} from '@ionic/react';
import React, {useState} from "react";
import {buildOutline} from "ionicons/icons";
import {RouteComponentProps} from "react-router";
import {covertDate} from "../shared/utils";
import {TECH_NAME} from "../shared/tech_data";

interface DetailPageProps extends RouteComponentProps<{
  id: string;
}> {
}


const Tech: React.FC<DetailPageProps> = ({match, history}) => {

  const [sType, setSType] = useState('');

  const getDetail = () => {

    if (sType) {
      //@ts-ignore
      return TECH_NAME.find(d => d.type === match.params.id).segments.find(item => item.type === sType).text
    } else {
      return '';
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>科技</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSegment onIonChange={e => setSType(e.detail.value + '')}>
          {
            //@ts-ignore
            TECH_NAME.find(d => d.type === match.params.id).segments.map(item => (
              <IonSegmentButton value={item.type} key={item.type}>
                <IonImg src={`./assets/tech/${match.params.id}-${item.type}.png`} className='tab-img'/>
              </IonSegmentButton>
            ))
          }
        </IonSegment>

        <IonText className='desc ion-padding'>{getDetail()}</IonText>

        <IonGrid>
          <IonRow>
            <IonCol size='1' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='1.5' className='icon-title'>
              <IonImg src='./assets/icon/eff.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/life.png'/>
            </IonCol>
            <IonCol size='1.5' className='icon-title'>
              {
                match.params.id === '8' ? <IonImg src='./assets/icon/cure.png'/> : <IonImg src='./assets/icon/atk.png'/>
              }
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/stone.png'/>
            </IonCol>

            {
              sType === '3' ? (
                <IonCol size='2' className='icon-title'>
                  <IonImg src='./assets/icon/xs.png'/>
                </IonCol>
              ) : (
                parseInt(match.params.id) < 10 ?
                  <IonCol size='2' className='icon-title'>
                    <IonImg src='./assets/icon/wine.png'/>
                  </IonCol> :
                  <IonCol size='2' className='icon-title'>
                    <IonImg src='./assets/icon/money.png'/>
                  </IonCol>
              )
            }
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/sj.png'/>
            </IonCol>

          </IonRow>
          {
            //@ts-ignore
            TECH_NAME.find(d => d.type === match.params.id).segments.find(d => d.type === sType)?.data.map(item => (
              <IonRow key={item.lv}>
                <IonCol size='1' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='1.5' className='ion-text-right ion-align-self-center'>{item.eff}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.life}</IonCol>
                <IonCol size='1.5' className='ion-text-right ion-align-self-center'>{item.atk}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.stone}</IonCol>
                <IonCol size='2'
                        className='ion-text-right ion-align-self-center'>{sType === '3' ? item.xs : item.cost}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{covertDate(item.spending)}</IonCol>
              </IonRow>
            ))
          }
        </IonGrid>
      </IonContent>

    </IonPage>
  );
};

export default Tech;
