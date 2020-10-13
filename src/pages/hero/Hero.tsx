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
  IonCol, IonImg, IonIcon, IonButton, IonPopover, IonList, IonItem, IonRange, IonLabel, IonToggle, IonText
} from '@ionic/react';
import {settingsOutline} from 'ionicons/icons';
import React, {useState} from 'react';
import {sum} from "../../shared/utils";

const data = [
  {
    id: 7, rare: 2, img: './assets/hero/hero7.png', lv: 1, kb: 0, life: 740, atk: 82,
    lifes: [350, 570, 880, 950, 0], atks: [32, 50, 70, 70, 0], skills: '7'
  },
  {
    id: 8, rare: 2, img: './assets/hero/hero8.png', lv: 1, kb: 0, life: 770, atk: 94,
    lifes: [370, 610, 920, 1010, 0], atks: [38, 56, 82, 82, 0], skills: '8'
  },
  {
    id: 9, rare: 2, img: './assets/hero/hero9.png', lv: 1, kb: 0, life: 910, atk: 74,
    lifes: [430, 700, 1090, 1170, 0], atks: [30, 44, 62, 64, 0], skills: '8'
  },
  {
    id: 10, rare: 2, img: './assets/hero/hero10.png', lv: 1, kb: 0, life: 1100, atk: 58,
    lifes: [520, 860, 1310, 1430, 0], atks: [24, 34, 50, 50, 0], skills: '8'
  },
  {
    id: 11, rare: 2, img: './assets/hero/hero11.png', lv: 1, kb: 0, life: 1040, atk: 66,
    lifes: [500, 820, 1250, 1350, 0], atks: [24, 40, 56, 56, 0]
  },
  {
    id: 12, rare: 2, img: './assets/hero/hero12.png', lv: 1, kb: 0, life: 580, atk: 118,
    lifes: [280, 450, 700, 750, 0], atks: [46, 72, 100, 104, 0], skills: '7'
  },
  {
    id: 13, rare: 2, img: './assets/hero/hero13.png', lv: 1, kb: 0, life: 980, atk: 66,
    lifes: [470, 770, 1170, 1280, 0], atks: [24, 40, 54, 58, 0], skills: '68'
  },
  {
    id: 14, rare: 3, img: './assets/hero/hero14.png', lv: 1, kb: 0, life: 1160, atk: 104,
    lifes: [550, 910, 1390, 2130, 3250], atks: [40, 60, 88, 126, 178], skills: '68'
  },
  {
    id: 15, rare: 3, img: './assets/hero/hero15.png', lv: 1, kb: 0, life: 960, atk: 114,
    lifes: [460, 750, 1150, 1750, 2690], atks: [42, 70, 96, 140, 198], skills: '7'
  },
  {
    id: 16, rare: 3, img: './assets/hero/hero16.png', lv: 1, kb: 0, life: 1010, atk: 112,
    lifes: [470, 790, 1200, 1840, 2820], atks: [42, 66, 96, 136, 196]
  },
  {
    id: 17, rare: 3, img: './assets/hero/hero17.png', lv: 1, kb: 0, life: 1000, atk: 108,
    lifes: [470, 780, 1200, 1830, 2800], atks: [39, 64, 93, 127, 187], skills: '7'
  },
  {
    id: 18, rare: 3, img: './assets/hero/hero18.png', lv: 1, kb: 0, life: 1160, atk: 78,
    lifes: [550, 910, 1390, 2130, 3250], atks: [30, 44, 66, 94, 136], skills: '8'
  },
  {
    id: 19, rare: 3, img: './assets/hero/hero19.png', lv: 1, kb: 0, life: 1140, atk: 80,
    lifes: [550, 890, 1370, 2090, 3200], atks: [30, 48, 66, 96, 140], skills: '8'
  },
  {
    id: 20, rare: 3, img: './assets/hero/hero20.png', lv: 1, kb: 0, life: 1170, atk: 134,
    lifes: [560, 910, 1400, 2140, 3280], atks: [52, 80, 114, 164, 236]
  },
  {
    id: 21, rare: 3, img: './assets/hero/hero21.png', lv: 1, kb: 0, life: 1440, atk: 96,
    lifes: [690, 1130, 1730, 2640, 4050], atks: [36, 56, 82, 114, 168], skills: '68'
  },
  {
    id: 22, rare: 3, img: './assets/hero/hero22.png', lv: 1, kb: 0, life: 1150, atk: 125,
    lifes: [590, 1016, 1610, 2550, 4039], atks: [54, 89, 131, 196, 293], skills: '8'
  },
  {
    id: 23, rare: 3, img: './assets/hero/hero23.png', lv: 1, kb: 0, life: 1250, atk: 86,
    lifes: [600, 980, 1490, 2300, 3510], atks: [34, 50, 72, 104, 150], skills: '68'
  },
  {
    id: 24, rare: 3, img: './assets/hero/hero24.png', lv: 1, kb: 0, life: 1080, atk: 88,
    lifes: [510, 840, 1290, 1980, 3030], atks: [34, 52, 74, 106, 154], skills: '8'
  },
  {
    id: 25, rare: 3, img: './assets/hero/hero25.png', lv: 1, kb: 0, life: 910, atk: 112,
    lifes: [440, 710, 1100, 1670, 2570], atks: [44, 66, 96, 136, 196]
  },
  {
    id: 26, rare: 3, img: './assets/hero/hero26.png', lv: 1, kb: 0, life: 690, atk: 140,
    lifes: [320, 540, 820, 1260, 1920], atks: [54, 82, 122, 170, 246], skills: '7'
  },
  {
    id: 27, rare: 3, img: './assets/hero/hero27.png', lv: 1, kb: 0, life: 820, atk: 21,
    lifes: [400, 640, 980, 1510, 2310], atks: [22, 46, 83, 147, 252]
  },
  {
    id: 28, rare: 3, img: './assets/hero/hero28.png', lv: 1, kb: 0, life: 760, atk: 88,
    lifes: [360, 590, 910, 1390, 2130], atks: [35, 52, 76, 109, 156], skills: '7'
  },
  {
    id: 29, rare: 3, img: './assets/hero/hero29.png', lv: 1, kb: 0, life: 1080, atk: 146,
    lifes: [510, 840, 1290, 1980, 3030], atks: [56, 86, 124, 178, 256], skills: '7'
  },
  {
    id: 30, rare: 3, img: './assets/hero/hero30.png', lv: 1, kb: 0, life: 1200, atk: 146,
    lifes: [600, 1022, 1604, 2515, 3944], atks: [56, 86, 124, 178, 256], skills: '7'
  },
]

const level6 = [
  0, 0.5, 0.54, 0.58, 0.62, 0.65, 0.69, 0.73, 0.77, 0.81, 0.85, 0.88, 0.92, 0.96, 1.00, 1.04, 1.08, 1.12, 1.15, 1.19, 1.23,
  1.27, 1.31, 1.35, 1.38, 1.42, 1.46, 1.5, 1.54, 1.58, 1.62, 1.65, 1.69, 1.73, 1.77, 1.81, 1.85, 1.88, 1.92, 1.96, 2.00
];
const level78 = [
  0, 10, 10.5, 11, 11.5, 12.1, 12.6, 13.1, 13.6, 14.1, 14.6, 15.1, 15.6, 16.2, 16.7, 17.2, 17.7, 18.2, 18.7, 19.2, 19.7,
  20.3, 20.8, 21.3, 21.8, 22.3, 22.8, 23.3, 23.8, 24.4, 24.9, 25.4, 25.9, 26.4, 26.9, 27.4, 27.9, 28.5, 29, 29.5, 30
]


const Hero: React.FC = () => {
  const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined,
  });
  const [level, setLevel] = useState(0);
  const [terror, setTerror] = useState(0);
  const [order, setOrder] = useState(0);

  const [skill6, setSkill6] = useState(0);
  const [skill7, setSkill7] = useState(0);
  const [skill8, setSkill8] = useState(0);

  const floatMe = (num: number) => {
    let index = num.toString().indexOf('.');
    if (index >= 0) {
      if (num - Math.floor(num) >= 0.9) {
        return Math.ceil(num);
      }
    }
    return Math.floor(num);
  }

  const calc78 = (value: number, skillValue: number) => {
    return floatMe(level78[skillValue] * value / 100);
  }

  const calc6 = (life: number) => {
    return floatMe(level6[skill6] * life / 100);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>英雄</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={(e) => {
              setShowPopover({open: true, event: e.nativeEvent})
            }}>
              <IonIcon slot='icon-only' icon={settingsOutline}/>
            </IonButton>

          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='3' className='icon-title'/>
            <IonCol size='1.5' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='1.5' className='icon-title'>
              <IonImg src='./assets/icon/terror_active.png'/>
            </IonCol>

            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/life.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/atk.png'/>
            </IonCol>

          </IonRow>
          {
            data.map(d => {
              let _tempLevel = level;
              if (d.rare === 2) {
                if (level >= 40) {
                  _tempLevel = 39;
                }
              }


              let lifes = d.lifes.slice(0, level / 10).reduce((b, c) => {
                return b + c;
              }, 0);
              let atks = d.atks.slice(0, level / 10).reduce((b, c) => {
                return b + c;
              }, 0)

              let calcLife = floatMe((lifes + d.life) * (1 + terror * 0.1));
              let totalLife = calcLife;
              if (d.skills && d.skills.indexOf('8') >= 0) {
                totalLife = calcLife + calc78(calcLife, skill8)
              }

              let calcAtk = floatMe((atks + d.atk) * (1 + terror * 0.1));
              let totalAtk = calcAtk;
              if (d.skills === '7') {
                totalAtk = calcAtk + calc78(calcAtk, skill7);
              }
              if (d.skills && d.skills.indexOf('6') >= 0) {
                totalAtk = calcAtk + calc6(totalLife);
              }


              return {
                ...d,
                lv: _tempLevel === 0 ? 1 : _tempLevel,
                kb: terror,
                life: calcLife,
                atk: calcAtk,
                totalLife: totalLife,
                totalAtk: totalAtk
              }
              // @ts-ignore
            }).sort((a, b) => {
              if (order === 1) {
                return b.totalAtk - a.totalAtk;
              } else if (order === -1) {
                return b.totalLife - a.totalLife;
              } else {
                return a.id - b.id;
              }
            }).map(item => (
              <IonRow key={item.id}>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>
                  <IonImg src={item.img} class='avatar'/>
                </IonCol>
                <IonCol size='1.5' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='1.5' className='ion-text-right ion-align-self-center'>{item.kb}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>
                  {item.life}
                  {
                    item.skills && item.skills.indexOf('8') >= 0 &&
                    <><br/><span className='green'>+{calc78(item.life || 0, skill8)}</span></>
                  }
                </IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>
                  {item.atk}
                  {
                    item.skills === '7' && <><br/><span className='green'>+{calc78(item.atk || 0, skill7)}</span></>
                  }
                  {
                    item.skills && item.skills.indexOf('6') >= 0 &&
                    <><br/><span className='green'>+{calc6(item.life + calc78(item.life || 0, skill6))}</span></>
                  }
                </IonCol>
              </IonRow>
            ))
          }
        </IonGrid>


      </IonContent>

      <IonPopover
        isOpen={showPopover.open}
        event={showPopover.event}
        onDidDismiss={e => setShowPopover({open: false, event: undefined})}
      >
        <IonList>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={50} onIonChange={e => setLevel(e.detail.value as number)}
                      color="secondary" step={10} snaps={true} ticks={true} value={level}>
              <IonImg src='./assets/icon/lv.png' slot='start' style={{width: '20px'}}/>
            </IonRange>
          </IonItem>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={5} onIonChange={e => setTerror(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={true} value={terror}>
              <IonImg src='./assets/icon/terror_active.png' slot='start' style={{width: '20px'}}/>
            </IonRange>
          </IonItem>
          <IonItem class='ion-no-padding'>
            <IonRange min={-1} max={1} onIonChange={e => setOrder(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={true} value={order}>
              <IonImg src='./assets/icon/life.png' slot='start' style={{width: '20px'}}/>
              <IonImg src='./assets/icon/atk.png' slot='end' style={{width: '20px'}}/>
            </IonRange>
          </IonItem>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={40} onIonChange={e => setSkill6(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={false} value={skill6} pin>
              <IonImg src='./assets/skill/6.png' slot='start' style={{width: '24px'}}/>
              <IonText slot='end' style={{fontSize: '0.8rem'}}>{level6[skill6].toFixed(2)}%</IonText>
            </IonRange>
          </IonItem>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={40} onIonChange={e => setSkill7(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={false} value={skill7} pin>
              <IonImg src='./assets/skill/7.png' slot='start' style={{width: '24px'}}/>
              <IonText slot='end' style={{fontSize: '0.8rem'}}>{level78[skill7].toFixed(1)}%</IonText>
            </IonRange>
          </IonItem>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={40} onIonChange={e => setSkill8(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={false} value={skill8} pin>
              <IonImg src='./assets/skill/8.png' slot='start' style={{width: '24px'}}/>
              <IonText slot='end' style={{fontSize: '0.8rem'}}>{level78[skill8].toFixed(1)}%</IonText>
            </IonRange>
          </IonItem>
        </IonList>
      </IonPopover>
    </IonPage>
  );
};

export default Hero;
