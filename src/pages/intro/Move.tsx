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


const Move: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>移动城堡</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <p>
          <IonText color="primary">兵种：</IonText>
          36个<IonText color='secondary'>豺狼</IonText>，1<IonText color='secondary'>哥布林</IonText>，1<IonText color='secondary'>兽人</IonText>，进图支援<IonText color='secondary'>女巫</IonText>4个<br/>
          根据兵营等级变化，<IonText color='secondary'>哥布林</IonText>必须带，<IonText color='secondary'>兽人</IonText>可不要，其余全部<IonText color='secondary'>豺狼</IonText>！
        </p>
        <p>
          <IonText color="primary">英雄：</IonText><br/>
          <IonText color="primary">有女巫重炮科技的带法：</IonText>
          <IonText color='danger'>鼓王，鹰身女妖</IonText>必须，搭配<IonText color='danger'>死神，美杜莎，吸血鬼</IonText>(这三英雄都是高攻击力，主动技能都具有伤害可清理绿光处的人类兵种)
        </p>
        <p>
          <IonText color="primary">无女巫重炮科技额带法：</IonText>
          <IonText color='danger'>鼓王，鹰身女妖，鲨鱼</IonText>(鲨鱼单独放另一边，反击抗兵，这边放完留2个豺狼清兵)
        </p>

        <p className='ion-text-right pb'>Powered by @青山不改绿水长流</p>

        <hr/>
        <p>
          <IonText color="primary">无女巫重炮，无鲨鱼：</IonText>
          根据英雄强度，留2-8个<IonText color='secondary'>豺狼</IonText>，出兵后放狼清兵，根据<IonText color='secondary'>豺狼</IonText>强度尽量用少的狼清多波小兵。
        </p>
        <p className='ion-text-right pb'>Powered by @士力架横扫饥饿</p>
      </IonContent>

    </IonPage>
  );
};

export default Move;
