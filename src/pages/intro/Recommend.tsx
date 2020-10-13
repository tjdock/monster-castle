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


const Recommend: React.FC = () => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>推荐</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <p>
          <IonText color="primary">平推流：</IonText>
          <IonText color='secondary'>豺狼，熊，哥布林，萨满，兽人</IonText><br/>
          推荐<IonText color='danger'>鼓王，鹰身女妖</IonText>技能有风之号角，庇护图腾，投掷训练可以加兵种攻击和生命，移动速度，可搭配
          <IonText color='danger'>齐天大圣，死神，熔岩领主</IonText>
        </p>
        <p>
          <IonText color="primary">幽灵流：</IonText>
          <IonText color='secondary'>幽灵，哥布林，兽人</IonText><br/>
          推荐<IonText color='danger'>鹰身女妖</IonText>(只需加生命和移动速度，另外带不屈帮幽灵抗伤害）
          <IonText color='danger'>m-2</IonText>(加生命，攻击，移动速度，主动技能炙热飞弹可以多敌方防御建筑造成伤害)
          <IonText color='danger'>齐天大圣</IonText>(肉盾加不屈可帮忙抗伤害)
        </p>
        <p>
          <IonText color='danger'>鹰身女妖,死神</IonText>是浮空单位，无视减速，炸弹，弹簧，滚石，圆锯，地刺，闸刀,是进攻首选
          <IonText color='danger'>猴子，熔岩</IonText>高血量可恢复生命也不错
        </p>
        <p>
          <IonText color="primary">盾女流：</IonText>
          <IonText color='secondary'>女巫</IonText>(护盾杖科技有输出，有恢复)，<IonText color='secondary'>熊，哥布林，萨满，兽人</IonText><br/>
          推荐<IonText color='danger'>鼓王，鹰身女妖</IonText>技能有风之号角，庇护图腾，投掷训练可以加兵种攻击和生命，移动速度，可搭配<IonText color='danger'>齐天大圣，死神，熔岩领主</IonText>
          这个用的人很少，女巫占4个人口
        </p>
        <p>
          <IonText color="primary">蝙蝠流：</IonText>
          <IonText color='secondary'>蝙蝠</IonText><br/>
          推荐<IonText color='danger'>鲨鱼</IonText>(可学反击技能专门对付蝙蝠还怕的魔法塔)，<IonText color='danger'>齐天大圣，鹰身女妖，熔岩领主，狼人，法老，死神</IonText>
          可任意搭配！蝙蝠路线变化无常需多加练习
        </p>
        <p className='ion-text-right pb'>Powered by @青山不改绿水长流</p>
      </IonContent>

    </IonPage>
  );
};

export default Recommend;
