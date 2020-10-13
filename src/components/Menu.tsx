import {
  IonContent,
  IonIcon, IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonThumbnail,
} from '@ionic/react';

import React from 'react';
import {useLocation} from 'react-router-dom';

import './Menu.css';

interface AppPage {
  url: string;
  title: string;
  img: string;
}

const intro: AppPage[] = [
  {title: '推荐', url: '/recommend', img: './assets/icon/facebook_icon.png'},
  {title: '移动城堡', url: '/move', img: './assets/icon/move.png'},
  {title: '移动城堡弹簧分布', url: '/th', img: './assets/icon/move.png'},
  {title: '视频攻略', url: '/video', img: './assets/icon/video.png'},
];
const monster: AppPage[] = [
  {title: '兽人', url: '/monster/1', img: './assets/tech/1.png'},
  {title: '豺狼', url: '/monster/2', img: './assets/tech/2.png'},
  {title: '哥布林', url: '/monster/3', img: './assets/tech/3.png'},
  {title: '熊', url: '/monster/4', img: './assets/tech/4.png'},
  {title: '南瓜', url: '/monster/5', img: './assets/tech/5.png'},
  {title: '蝙蝠', url: '/monster/6', img: './assets/tech/6.png'},
  {title: '女巫', url: '/monster/7', img: './assets/tech/7.png'},
  {title: '萨满', url: '/monster/8', img: './assets/tech/8.png'},
  {title: '幽灵', url: '/monster/9', img: './assets/tech/9.png'},
];
const heroes: AppPage[] = [
  {title: '英雄', url: '/hero', img: './assets/icon/yx.png'},
  {title: '升级经验', url: '/hero-exp', img: './assets/icon/yxjy.png'},
  {title: '技能经验', url: '/skill-exp', img: './assets/icon/shu3.png'},
];

const armies: AppPage[] = [
  {title: '训练营', url: '/xly', img: './assets/army/xly.png'},
  {title: '魔法屋', url: '/mfw', img: './assets/army/mfw.png'},
  {title: '金库', url: '/jinku', img: './assets/army/jinku.png'},
  {title: '酒库', url: '/jiuku', img: './assets/army/jiuku.png'},
  {title: '哨兵营', url: '/sby', img: './assets/army/sby.png'},
  {title: '英雄王座', url: '/yxwz', img: './assets/army/yxwz.png'},
  {title: '金矿', url: '/jinkuang', img: './assets/army/jinkuang.png'},
  {title: '酿酒厂', url: '/njc', img: './assets/army/njc.png'},
  {title: '研究所', url: '/yjs', img: './assets/army/yjs.png'},
  {title: '炼金室', url: '/ljs', img: './assets/army/ljs.png'},
];

const defenses: AppPage[] = [
  {title: '弩机', url: '/defense/1', img: './assets/defense/nj.png'},
  {title: '加农炮', url: '/defense/2', img: './assets/defense/jnp.png'},
  {title: '地刺', url: '/defense/3', img: './assets/defense/dc.png'},
  {title: '栅栏', url: '/defense/4', img: './assets/defense/zl.png'},
  {title: '炸药', url: '/defense/5', img: './assets/defense/zy.png'},
  {title: '弹簧', url: '/defense/6', img: './assets/defense/th.png'},
  {title: '龙之召唤', url: '/defense/7', img: './assets/defense/lzzh.png'},
  {title: '沥青坑', url: '/defense/8', img: './assets/defense/lq.png'},
  {title: '魔法台', url: '/defense/9', img: './assets/defense/mft.png'},
  {title: '闸刀', url: '/defense/10', img: './assets/defense/zd.png'},
  {title: '祖玛', url: '/defense/11', img: './assets/defense/zm.png'},
  {title: '圆锯', url: '/defense/12', img: './assets/defense/yj.png'},
  {title: '滚石', url: '/defense/13', img: './assets/defense/gs.png'},
];

const magics: AppPage[] = [
  {title: '闪电', url: '/magic/1', img: './assets/mf/mf1.png'},
  {title: '冰冻', url: '/magic/2', img: './assets/mf/mf2.png'},
  {title: '魔法护盾', url: '/magic/3', img: './assets/mf/mf3.png'},
  {title: '召唤魔法', url: '/magic/4', img: './assets/mf/mf4.png'},
  {title: '解除陷阱', url: '/magic/5', img: './assets/mf/mf5.png'}
];

const others: AppPage[] = [
  {title: '宫殿', url: '/gd', img: './assets/icon/gd.png'},
  {title: '龙', url: '/dragon', img: './assets/icon/long.png'},
];

const menus = [
  {title: '攻略心得', pages: intro},
  {title: '怪兽', pages: monster},
  {title: '英雄', pages: heroes},
  {title: '防御建筑', pages: defenses},
  {title: '军队建筑', pages: armies},
  {title: '魔法', pages: magics},
  {title: '其它', pages: others},
]

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Monster Castle</IonListHeader>
          <IonNote>怪物城堡工具箱</IonNote>
        </IonList>
        {
          menus.map((menu, index) => {
            return (
              <IonList className="labels-list" key={index + ':1'}>
                <IonListHeader>{menu.title}</IonListHeader>
                {menu.pages.map((appPage, i) => {
                  return (
                    <IonMenuToggle key={i + ':2'} autoHide={false}>
                      <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url}
                               routerDirection="none" lines="none" detail={false}>
                        <IonImg src={appPage.img} slot='start' style={{width: '32px', height: '32px'}}/>
                        <IonLabel>{appPage.title}</IonLabel>
                      </IonItem>
                    </IonMenuToggle>
                  );
                })}
              </IonList>
            )
          })
        }
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
