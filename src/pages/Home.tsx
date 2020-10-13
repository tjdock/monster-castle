import {IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>首页</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <IonImg src='./assets/icon/logo.png'/>
        <p>怪物城堡工具箱，为玩家提供数据参考，攻略心得等，陆续更新，敬请期待</p>
        <p>所有数据均已录入，有可能会出现正负1的误差；若发现数据、描述错误、意见等问题，请留言 @xunuo</p>
        <hr style={{borderBottom:'1px solid #ddd'}}/>
        <p>注:目前没有设等级限制，请悉知</p>
        <p>数据支持: @青山不改绿水长流 @依旧是我 @佩姬peggy</p>
        <p>开发者: @xunuo</p>
        <p>版本: v20200705</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
