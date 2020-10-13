import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from "react";
import {RouteComponentProps} from "react-router";
// import 'video.js/dist/video-js.min.css';
// import 'video.js/dist/video.min.js';

// const data = [
//   {id: 1, url: './assets/video/1.mp4',title:'中路图1'},
//   {id: 2, url: './assets/video/2.mp4',title:'中路图2'}
// ];

interface DetailPageProps extends RouteComponentProps<{
  id: string;
}> {
}


const VideoList: React.FC<DetailPageProps> = ({match, history}) => {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>视频攻略</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p style={{fontWeight:"bold",fontSize:'20px'}}>一，吸血鬼控血打法</p>
        <p>中路图1<a href='https://www.bilibili.com/video/BV1ht4y197Jg/' target='_blank'>(去B站看)</a></p>
        {/*<iframe width='100%' height='300' frameBorder="0" src="https://v.qq.com/txp/iframe/player.html?vid=u3109fo98nx" allowFullScreen/>*/}
        <iframe src="//player.bilibili.com/player.html?aid=626183707&bvid=BV1ht4y197Jg&cid=208964091&page=1"
                width='100%' height='300' frameBorder="0" allowFullScreen/>
        <p>中路图2<a href='https://www.bilibili.com/video/BV1RT4y1J7dH/' target='_blank'>(去B站看)</a></p>
        {/*<iframe width='100%' height='300' frameBorder="0" src="https://v.qq.com/txp/iframe/player.html?vid=v310925kl62" allowFullScreen/>*/}
        <iframe src="//player.bilibili.com/player.html?aid=926136406&bvid=BV1RT4y1J7dH&cid=208964273&page=1"
                width='100%' height='300' frameBorder="0" allowFullScreen/>
        <p style={{fontWeight:"bold",fontSize:'20px'}}>二，死神普通地图打法</p>
        <p>打法1<a href='https://www.bilibili.com/video/BV1kC4y1871H/' target='_blank'>(去B站看)</a></p>
        {/*<iframe width='100%' height='300' frameBorder="0" src="https://v.qq.com/txp/iframe/player.html?vid=d31095zu4we" allowFullScreen/>*/}
        <iframe src="//player.bilibili.com/player.html?aid=796168066&bvid=BV1kC4y1871H&cid=208964416&page=1"
                width='100%' height='300' frameBorder="0" allowFullScreen/>
        <p>打法2<a href='https://www.bilibili.com/video/BV1JK4y1s7Sp/' target='_blank'>(去B站看)</a></p>
        {/*<iframe width='100%' height='300' frameBorder="0" src="https://v.qq.com/txp/iframe/player.html?vid=t31097mpazl" allowFullScreen/>*/}
        <iframe src="//player.bilibili.com/player.html?aid=883697401&bvid=BV1JK4y1s7Sp&cid=208964801&page=1"
                width='100%' height='300' frameBorder="0" allowFullScreen/>
        <p>针对英雄等级不满50级的<a href='https://www.bilibili.com/video/BV1Ft4y1R7xs/' target='_blank'>(去B站看)</a></p>
        {/*<iframe width='100%' height='300' frameBorder="0" src="https://v.qq.com/txp/iframe/player.html?vid=q3109ihs03k" allowFullScreen/>*/}
        <iframe src="//player.bilibili.com/player.html?aid=626243777&bvid=BV1Ft4y1R7xs&cid=208964689&page=1"
                width='100%' height='300' frameBorder="0" allowFullScreen/>

      </IonContent>

    </IonPage>
  );
};

export default VideoList;
