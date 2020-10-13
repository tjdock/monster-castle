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
  IonCol, IonImg, IonButton, IonIcon, IonList, IonItem, IonRange, IonPopover, IonText
} from '@ionic/react';
import React, {useEffect, useState} from 'react';
import {covertDate, sum, sumTime} from "../shared/utils";
import {RouteComponentProps} from "react-router";
import {buildOutline, settingsOutline} from "ionicons/icons";
import {TECH_NAME} from "../shared/tech_data";

interface DetailPageProps extends RouteComponentProps<{
  id: string;
}> {
}


let DEFENSE_NAME = {
  "1": '弩机', "2": "加农炮", "3": "地刺", "4": "栅栏",
  "5": "炸药", "6": "弹簧", "7": "龙之召唤", "8": "沥青坑", "9": "魔法台",
  "10": '闸刀', "11": "祖玛", "12": "圆锯", "13": "滚石"
}

// const level = [
//   0, 10, 10.5, 11, 11.5, 12.1, 12.6, 13.1, 13.6, 14.1, 14.6, 15.1, 15.6, 16.2, 16.7, 17.2, 17.7, 18.2, 18.7, 19.2, 19.7,
//   20.3, 20.8, 21.3, 21.8, 22.3, 22.8, 23.3, 23.8, 24.4, 24.9, 25.4, 25.9, 26.4, 26.9, 27.4, 27.9, 28.5, 29, 29.5, 30
// ]
const level = [
  0, 5, 5.5, 6, 6.5, 7.1, 7.6, 8.1, 8.6, 9.1, 9.6, 10.1, 10.6, 11.2, 11.7, 12.2, 12.7, 13.2, 13.7, 14.2, 14.7,
  15.3, 15.8, 16.3, 16.8, 17.3, 17.8, 18.3, 18.8, 19.4, 19.9, 20.4, 20.9, 21.4, 21.9, 22.4, 22.9, 23.5, 24, 24.5, 25
]

const data = [
  {type: "1", lv: 0, life: null, atk: null, cost: 100, spending: new Date(2020, 1, 0, 0, 0, 3), xs: null},
  {type: "1", lv: 1, life: 240, atk: 31, cost: 520, spending: new Date(2020, 1, 0, 0, 0, 30), xs: null},
  {type: "1", lv: 2, life: 260, atk: 32, cost: 1250, spending: new Date(2020, 1, 0, 0, 8, 0), xs: null},
  {type: "1", lv: 3, life: 290, atk: 34, cost: 2580, spending: new Date(2020, 1, 0, 0, 15, 0), xs: null},
  {type: "1", lv: 4, life: 310, atk: 36, cost: 8580, spending: new Date(2020, 1, 0, 0, 30, 0), xs: null},
  {type: "1", lv: 5, life: 340, atk: 39, cost: 24900, spending: new Date(2020, 1, 0, 2, 0, 0), xs: 5},
  {type: "1", lv: 6, life: 360, atk: 41, cost: 37300, spending: new Date(2020, 1, 0, 5, 12, 0), xs: 5},
  {type: "1", lv: 7, life: 390, atk: 43, cost: 57600, spending: new Date(2020, 1, 0, 7, 47, 0), xs: 10},
  {type: "1", lv: 8, life: 430, atk: 46, cost: 85000, spending: new Date(2020, 1, 0, 11, 14, 0), xs: 10},
  {type: "1", lv: 9, life: 460, atk: 49, cost: 169000, spending: new Date(2020, 1, 0, 15, 45, 0), xs: 15},
  {type: "1", lv: 10, life: 500, atk: 52, cost: 234000, spending: new Date(2020, 1, 0, 21, 25, 0), xs: 20},
  {type: "1", lv: 11, life: 540, atk: 55, cost: 298000, spending: new Date(2020, 1, 1, 4, 0, 0), xs: 25},
  {type: "1", lv: 12, life: 580, atk: 59, cost: 397000, spending: new Date(2020, 1, 1, 13, 0, 0), xs: 25},
  {type: "1", lv: 13, life: 630, atk: 62, cost: 488000, spending: new Date(2020, 1, 2, 0, 0, 0), xs: 30},
  {type: "1", lv: 14, life: 680, atk: 66, cost: 887000, spending: new Date(2020, 1, 2, 13, 0, 0), xs: 35},
  {type: "1", lv: 15, life: 740, atk: 70, cost: 1050000, spending: new Date(2020, 1, 3, 5, 0, 0), xs: 40},
  {type: "1", lv: 16, life: 800, atk: 74, cost: 1260000, spending: new Date(2020, 1, 3, 23, 0, 0), xs: 45},
  {type: "1", lv: 17, life: 870, atk: 79, cost: 1480000, spending: new Date(2020, 1, 4, 22, 0, 0), xs: 50},
  {type: "1", lv: 18, life: 940, atk: 84, cost: 1730000, spending: new Date(2020, 1, 5, 23, 0, 0), xs: 60},
  {type: "1", lv: 19, life: 1020, atk: 89, cost: 2010000, spending: new Date(2020, 1, 7, 5, 0, 0), xs: 65},
  {type: "1", lv: 20, life: 1100, atk: 94, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "2", lv: 0, life: null, atk: null, cost: 540, spending: new Date(2020, 1, 0, 0, 1, 0), xs: null},
  {type: "2", lv: 1, life: 430, atk: 17, cost: 810, spending: new Date(2020, 1, 0, 0, 2, 0), xs: null},
  {type: "2", lv: 2, life: 470, atk: 19, cost: 1180, spending: new Date(2020, 1, 0, 0, 5, 0), xs: null},
  {type: "2", lv: 3, life: 500, atk: 21, cost: 8580, spending: new Date(2020, 1, 0, 0, 30, 0), xs: null},
  {type: "2", lv: 4, life: 530, atk: 23, cost: 28100, spending: new Date(2020, 1, 0, 2, 40, 0), xs: null},
  {type: "2", lv: 5, life: 560, atk: 25, cost: 42000, spending: new Date(2020, 1, 0, 5, 35, 0), xs: 5},
  {type: "2", lv: 6, life: 610, atk: 27, cost: 64600, spending: new Date(2020, 1, 0, 8, 21, 0), xs: 5},
  {type: "2", lv: 7, life: 640, atk: 30, cost: 95000, spending: new Date(2020, 1, 0, 11, 55, 0), xs: 10},
  {type: "2", lv: 8, life: 690, atk: 33, cost: 188000, spending: new Date(2020, 1, 0, 11, 14, 0), xs: 10},
  {type: "2", lv: 9, life: 740, atk: 36, cost: 260000, spending: new Date(2020, 1, 0, 22, 33, 0), xs: 15},
  {type: "2", lv: 10, life: 790, atk: 40, cost: 331000, spending: new Date(2020, 1, 1, 5, 0, 0), xs: 20},
  {type: "2", lv: 11, life: 840, atk: 43, cost: 439000, spending: new Date(2020, 1, 1, 15, 0, 0), xs: 25},
  {type: "2", lv: 12, life: 900, atk: 48, cost: 539000, spending: new Date(2020, 1, 2, 2, 0, 0), xs: 30},
  {type: "2", lv: 13, life: 960, atk: 52, cost: 979000, spending: new Date(2020, 1, 2, 15, 0, 0), xs: 35},
  {type: "2", lv: 14, life: 1030, atk: 58, cost: 1170000, spending: new Date(2020, 1, 3, 8, 0, 0), xs: 40},
  {type: "2", lv: 15, life: 1090, atk: 63, cost: 1390000, spending: new Date(2020, 1, 4, 3, 0, 0), xs: 45},
  {type: "2", lv: 16, life: 1170, atk: 70, cost: 1630000, spending: new Date(2020, 1, 3, 23, 0, 0), xs: 50},
  {type: "2", lv: 17, life: 1250, atk: 76, cost: 1900000, spending: new Date(2020, 1, 6, 5, 0, 0), xs: 60},
  {type: "2", lv: 18, life: 1340, atk: 84, cost: 2200000, spending: new Date(2020, 1, 7, 12, 0, 0), xs: 65},
  {type: "2", lv: 19, life: 1430, atk: 92, cost: 2510000, spending: new Date(2020, 1, 9, 0, 0, 0), xs: 70},
  {type: "2", lv: 20, life: 1520, atk: 101, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "3", lv: 0, life: null, atk: null, cost: 970, spending: new Date(2020, 1, 0, 0, 5, 0), xs: null},
  {type: "3", lv: 1, life: null, atk: 6, cost: 2580, spending: new Date(2020, 1, 0, 0, 15, 30), xs: null},
  {type: "3", lv: 2, life: null, atk: 7, cost: 12300, spending: new Date(2020, 1, 0, 0, 50, 0), xs: null},
  {type: "3", lv: 3, life: null, atk: 8, cost: 26800, spending: new Date(2020, 1, 0, 2, 0, 0), xs: null},
  {type: "3", lv: 4, life: null, atk: 9, cost: 39500, spending: new Date(2020, 1, 0, 5, 4, 0), xs: null},
  {type: "3", lv: 5, life: null, atk: 10, cost: 60000, spending: new Date(2020, 1, 0, 7, 21, 0), xs: 5},
  {type: "3", lv: 6, life: null, atk: 11, cost: 87700, spending: new Date(2020, 1, 0, 10, 28, 0), xs: 5},
  {type: "3", lv: 7, life: null, atk: 12, cost: 172000, spending: new Date(2020, 1, 0, 14, 22, 0), xs: 10},
  {type: "3", lv: 8, life: null, atk: 13, cost: 237000, spending: new Date(2020, 1, 0, 19, 21, 0), xs: 15},
  {type: "3", lv: 9, life: null, atk: 14, cost: 300000, spending: new Date(2020, 1, 1, 1, 0, 0), xs: 20},
  {type: "3", lv: 10, life: null, atk: 15, cost: 397000, spending: new Date(2020, 1, 1, 9, 0, 0), xs: 20},
  {type: "3", lv: 11, life: null, atk: 16, cost: 485000, spending: new Date(2020, 1, 1, 18, 0, 0), xs: 25},
  {type: "3", lv: 12, life: null, atk: 17, cost: 878000, spending: new Date(2020, 1, 2, 6, 0, 0), xs: 35},
  {type: "3", lv: 13, life: null, atk: 18, cost: 1040000, spending: new Date(2020, 1, 2, 19, 0, 0), xs: 40},
  {type: "3", lv: 14, life: null, atk: 19, cost: 1240000, spending: new Date(2020, 1, 3, 12, 0, 0), xs: 45},
  {type: "3", lv: 15, life: null, atk: 20, cost: 1450000, spending: new Date(2020, 1, 4, 7, 0, 0), xs: 50},
  {type: "3", lv: 16, life: null, atk: 21, cost: 1690000, spending: new Date(2020, 1, 5, 5, 0, 0), xs: 55},
  {type: "3", lv: 17, life: null, atk: 22, cost: 1930000, spending: new Date(2020, 1, 6, 8, 0, 0), xs: 65},
  {type: "3", lv: 18, life: null, atk: 23, cost: 2220000, spending: new Date(2020, 1, 7, 14, 0, 0), xs: 70},
  {type: "3", lv: 19, life: null, atk: 25, cost: 2510000, spending: new Date(2020, 1, 9, 0, 0, 0), xs: 75},
  {type: "3", lv: 20, life: null, atk: 27, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "4", lv: 0, life: null, atk: null, cost: 2580, spending: new Date(2020, 1, 0, 0, 15, 0), xs: null},
  {type: "4", lv: 1, life: 1120, atk: null, cost: 18000, spending: new Date(2020, 1, 0, 1, 0, 0), xs: null},
  {type: "4", lv: 2, life: 1230, atk: null, cost: 29800, spending: new Date(2020, 1, 0, 3, 0, 0), xs: null},
  {type: "4", lv: 3, life: 1350, atk: null, cost: 43100, spending: new Date(2020, 1, 0, 5, 18, 0), xs: null},
  {type: "4", lv: 4, life: 1490, atk: null, cost: 64700, spending: new Date(2020, 1, 0, 7, 40, 0), xs: 5},
  {type: "4", lv: 5, life: 1620, atk: null, cost: 93300, spending: new Date(2020, 1, 0, 10, 36, 0), xs: 5},
  {type: "4", lv: 6, life: 1790, atk: null, cost: 181000, spending: new Date(2020, 1, 0, 14, 26, 0), xs: 10},
  {type: "4", lv: 7, life: 1960, atk: null, cost: 248000, spending: new Date(2020, 1, 0, 19, 10, 0), xs: 15},
  {type: "4", lv: 8, life: 2130, atk: null, cost: 311000, spending: new Date(2020, 1, 1, 1, 0, 0), xs: 20},
  {type: "4", lv: 9, life: 2360, atk: null, cost: 409000, spending: new Date(2020, 1, 1, 8, 0, 0), xs: 25},
  {type: "4", lv: 10, life: 2570, atk: null, cost: 498000, spending: new Date(2020, 1, 1, 17, 0, 0), xs: 25},
  {type: "4", lv: 11, life: 2840, atk: null, cost: 896000, spending: new Date(2020, 1, 2, 4, 0, 0), xs: 35},
  {type: "4", lv: 12, life: 3100, atk: null, cost: 1060000, spending: new Date(2020, 1, 2, 16, 0, 0), xs: 40},
  {type: "4", lv: 13, life: 3420, atk: null, cost: 1250000, spending: new Date(2020, 1, 3, 8, 0, 0), xs: 45},
  {type: "4", lv: 14, life: 3740, atk: null, cost: 1470000, spending: new Date(2020, 1, 4, 2, 0, 0), xs: 50},
  {type: "4", lv: 15, life: 4080, atk: null, cost: 1680000, spending: new Date(2020, 1, 4, 23, 0, 0), xs: 55},
  {type: "4", lv: 16, life: 4500, atk: null, cost: 1940000, spending: new Date(2020, 1, 5, 23, 0, 0), xs: 65},
  {type: "4", lv: 17, life: 4920, atk: null, cost: 2200000, spending: new Date(2020, 1, 7, 5, 0, 0), xs: 70},
  {type: "4", lv: 18, life: 5430, atk: null, cost: 2510000, spending: new Date(2020, 1, 8, 13, 0, 0), xs: 75},
  {type: "4", lv: 19, life: 5930, atk: null, cost: 2810000, spending: new Date(2020, 1, 10, 2, 0, 0), xs: 85},
  {type: "4", lv: 20, life: 6470, atk: null, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "5", lv: 0, life: null, atk: null, cost: 18900, spending: new Date(2020, 1, 0, 1, 0, 0), xs: null},
  {type: "5", lv: 1, life: null, atk: 90, cost: 43500, spending: new Date(2020, 1, 0, 3, 30, 0), xs: null},
  {type: "5", lv: 2, life: null, atk: 107, cost: 78400, spending: new Date(2020, 1, 0, 10, 15, 0), xs: null},
  {type: "5", lv: 3, life: null, atk: 126, cost: 138000, spending: new Date(2020, 1, 0, 18, 7, 0), xs: null},
  {type: "5", lv: 4, life: null, atk: 148, cost: 225000, spending: new Date(2020, 1, 1, 6, 0, 0), xs: 5},
  {type: "5", lv: 5, life: null, atk: 175, cost: 485000, spending: new Date(2020, 1, 2, 0, 0, 0), xs: 15},
  {type: "5", lv: 6, life: null, atk: 208, cost: 724000, spending: new Date(2020, 1, 3, 1, 0, 0), xs: 30},
  {type: "5", lv: 7, life: null, atk: 244, cost: 1040000, spending: new Date(2020, 1, 4, 13, 0, 0), xs: 50},
  {type: "5", lv: 8, life: null, atk: 289, cost: 2050000, spending: new Date(2020, 1, 6, 13, 0, 0), xs: 70},
  {type: "5", lv: 9, life: null, atk: 342, cost: 2650000, spending: new Date(2020, 1, 9, 5, 0, 0), xs: 90},
  {type: "5", lv: 10, life: null, atk: 402, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "6", lv: 0, life: null, atk: null, cost: 85700, spending: new Date(2020, 1, 0, 12, 54, 0), xs: null},
  {type: "7", lv: 0, life: null, atk: null, cost: 86000, spending: new Date(2020, 1, 0, 10, 16, 0), xs: null},
  {type: "8", lv: 0, life: null, atk: null, cost: 53500, spending: new Date(2020, 1, 0, 6, 15, 0), xs: null},
  {type: "8", lv: 1, life: null, atk: null, cost: 95400, spending: new Date(2020, 1, 0, 10, 35, 0), xs: null},
  {type: "8", lv: 2, life: null, atk: null, cost: 156000, spending: new Date(2020, 1, 0, 17, 20, 0), xs: null},
  {type: "8", lv: 3, life: null, atk: null, cost: 339000, spending: new Date(2020, 1, 1, 3, 0, 0), xs: null},
  {type: "8", lv: 4, life: null, atk: null, cost: 504000, spending: new Date(2020, 1, 1, 17, 0, 0), xs: 5},
  {type: "8", lv: 5, life: null, atk: null, cost: 676000, spending: new Date(2020, 1, 2, 13, 0, 0), xs: 15},
  {type: "8", lv: 6, life: null, atk: null, cost: 941000, spending: new Date(2020, 1, 3, 16, 0, 0), xs: 35},
  {type: "8", lv: 7, life: null, atk: null, cost: 1820000, spending: new Date(2020, 1, 5, 6, 0, 0), xs: 55},
  {type: "8", lv: 8, life: null, atk: null, cost: 2300000, spending: new Date(2020, 1, 7, 6, 0, 0), xs: 80},
  {type: "8", lv: 9, life: null, atk: null, cost: 2870000, spending: new Date(2020, 1, 9, 22, 0, 0), xs: 105},
  {type: "8", lv: 10, life: null, atk: null, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "9", lv: 0, life: null, atk: null, cost: 35500, spending: new Date(2020, 1, 0, 2, 0, 0), xs: null},
  {type: "9", lv: 1, life: 460, atk: 82, cost: 48500, spending: new Date(2020, 1, 0, 5, 42, 0), xs: null},
  {type: "9", lv: 2, life: 490, atk: 85, cost: 69400, spending: new Date(2020, 1, 0, 7, 39, 0), xs: null},
  {type: "9", lv: 3, life: 510, atk: 89, cost: 96500, spending: new Date(2020, 1, 0, 10, 6, 0), xs: null},
  {type: "9", lv: 4, life: 540, atk: 93, cost: 182000, spending: new Date(2020, 1, 0, 13, 18, 0), xs: 5},
  {type: "9", lv: 5, life: 570, atk: 97, cost: 243000, spending: new Date(2020, 1, 0, 17, 18, 0), xs: 5},
  {type: "9", lv: 6, life: 590, atk: 102, cost: 297000, spending: new Date(2020, 1, 0, 21, 43, 0), xs: 10},
  {type: "9", lv: 7, life: 630, atk: 107, cost: 384000, spending: new Date(2020, 1, 1, 3, 0, 0), xs: 15},
  {type: "9", lv: 8, life: 660, atk: 111, cost: 460000, spending: new Date(2020, 1, 1, 10, 0, 0), xs: 20},
  {type: "9", lv: 9, life: 690, atk: 116, cost: 816000, spending: new Date(2020, 1, 1, 18, 0, 0), xs: 25},
  {type: "9", lv: 10, life: 730, atk: 122, cost: 958000, spending: new Date(2020, 1, 2, 4, 0, 0), xs: 30},
  {type: "9", lv: 11, life: 770, atk: 127, cost: 1100000, spending: new Date(2020, 1, 2, 15, 0, 0), xs: 40},
  {type: "9", lv: 12, life: 810, atk: 133, cost: 1270000, spending: new Date(2020, 1, 3, 5, 0, 0), xs: 45},
  {type: "9", lv: 13, life: 850, atk: 139, cost: 1450000, spending: new Date(2020, 1, 3, 20, 0, 0), xs: 50},
  {type: "9", lv: 14, life: 890, atk: 145, cost: 1660000, spending: new Date(2020, 1, 4, 15, 0, 0), xs: 60},
  {type: "9", lv: 15, life: 950, atk: 152, cost: 1860000, spending: new Date(2020, 1, 5, 12, 0, 0), xs: 65},
  {type: "9", lv: 16, life: 990, atk: 158, cost: 2110000, spending: new Date(2020, 1, 6, 12, 0, 0), xs: 75},
  {type: "9", lv: 17, life: 1040, atk: 165, cost: 2350000, spending: new Date(2020, 1, 7, 16, 0, 0), xs: 80},
  {type: "9", lv: 18, life: 1100, atk: 173, cost: 2630000, spending: new Date(2020, 1, 8, 23, 0, 0), xs: 90},
  {type: "9", lv: 19, life: 1160, atk: 180, cost: 2910000, spending: new Date(2020, 1, 10, 11, 0, 0), xs: 100},
  {type: "9", lv: 20, life: 1210, atk: 188, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "10", lv: 0, life: null, atk: null, cost: 285000, spending: new Date(2020, 1, 0, 18, 52, 0), xs: null},
  {type: "10", lv: 1, life: null, atk: 103, cost: 408000, spending: new Date(2020, 1, 1, 1, 0, 0), xs: null},
  {type: "10", lv: 2, life: null, atk: 111, cost: 531000, spending: new Date(2020, 1, 1, 11, 0, 0), xs: null},
  {type: "10", lv: 3, life: null, atk: 120, cost: 720000, spending: new Date(2020, 1, 2, 0, 0, 0), xs: 5},
  {type: "10", lv: 4, life: null, atk: 129, cost: 899000, spending: new Date(2020, 1, 2, 19, 0, 0), xs: 15},
  {type: "10", lv: 5, life: null, atk: 139, cost: 1650000, spending: new Date(2020, 1, 3, 19, 0, 0), xs: 35},
  {type: "10", lv: 6, life: null, atk: 151, cost: 2010000, spending: new Date(2020, 1, 5, 2, 0, 0), xs: 50},
  {type: "10", lv: 7, life: null, atk: 163, cost: 2410000, spending: new Date(2020, 1, 6, 19, 0, 0), xs: 75},
  {type: "10", lv: 8, life: null, atk: 176, cost: 2860000, spending: new Date(2020, 1, 8, 22, 0, 0), xs: 100},
  {type: "10", lv: 9, life: null, atk: 190, cost: 3370000, spending: new Date(2020, 1, 11, 15, 0, 0), xs: 125},
  {type: "10", lv: 10, life: null, atk: 205, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "11", lv: 0, life: null, atk: null, cost: 550000, spending: new Date(2020, 1, 1, 9, 0, 0), xs: null},
  {type: "11", lv: 1, life: 760, atk: 31, cost: 716000, spending: new Date(2020, 1, 1, 17, 0, 0), xs: null},
  {type: "11", lv: 2, life: 810, atk: 32, cost: 864000, spending: new Date(2020, 1, 2, 5, 0, 0), xs: 5},
  {type: "11", lv: 3, life: 860, atk: 33, cost: 1540000, spending: new Date(2020, 1, 2, 20, 0, 0), xs: 15},
  {type: "11", lv: 4, life: 920, atk: 35, cost: 1820000, spending: new Date(2020, 1, 3, 16, 0, 0), xs: 30},
  {type: "11", lv: 5, life: 980, atk: 37, cost: 2130000, spending: new Date(2020, 1, 4, 19, 0, 0), xs: 50},
  {type: "11", lv: 6, life: 1040, atk: 39, cost: 2480000, spending: new Date(2020, 1, 6, 4, 0, 0), xs: 70},
  {type: "11", lv: 7, life: 1110, atk: 41, cost: 2870000, spending: new Date(2020, 1, 7, 22, 0, 0), xs: 90},
  {type: "11", lv: 8, life: 1180, atk: 43, cost: 3290000, spending: new Date(2020, 1, 10, 1, 0, 0), xs: 115},
  {type: "11", lv: 9, life: 1260, atk: 45, cost: 3710000, spending: new Date(2020, 1, 12, 16, 0, 0), xs: 140},
  {type: "11", lv: 10, life: 1330, atk: 47, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "12", lv: 0, life: null, atk: null, cost: 974000, spending: new Date(2020, 1, 2, 6, 0, 0), xs: null},
  {type: "12", lv: 1, life: null, atk: 64, cost: 1660000, spending: new Date(2020, 1, 2, 15, 0, 0), xs: null},
  {type: "12", lv: 2, life: null, atk: 66, cost: 1890000, spending: new Date(2020, 1, 3, 4, 0, 0), xs: 5},
  {type: "12", lv: 3, life: null, atk: 69, cost: 2140000, spending: new Date(2020, 1, 3, 21, 0, 0), xs: 15},
  {type: "12", lv: 4, life: null, atk: 72, cost: 2420000, spending: new Date(2020, 1, 4, 19, 0, 0), xs: 35},
  {type: "12", lv: 5, life: null, atk: 76, cost: 2680000, spending: new Date(2020, 1, 5, 23, 0, 0), xs: 50},
  {type: "12", lv: 6, life: null, atk: 79, cost: 3000000, spending: new Date(2020, 1, 7, 9, 0, 0), xs: 75},
  {type: "12", lv: 7, life: null, atk: 83, cost: 3300000, spending: new Date(2020, 1, 9, 3, 0, 0), xs: 100},
  {type: "12", lv: 8, life: null, atk: 87, cost: 3670000, spending: new Date(2020, 1, 11, 4, 0, 0), xs: 125},
  {type: "12", lv: 9, life: null, atk: 91, cost: 4010000, spending: new Date(2020, 1, 13, 16, 0, 0), xs: 150},
  {type: "12", lv: 10, life: null, atk: 95, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},
  {type: "13", lv: 0, life: null, atk: null, cost: 2170000, spending: new Date(2020, 1, 3, 7, 0, 0), xs: null},
  {type: "13", lv: 1, life: null, atk: 395, cost: 2340000, spending: new Date(2020, 1, 3, 15, 0, 0), xs: 5},
  {type: "13", lv: 2, life: null, atk: 406, cost: 2540000, spending: new Date(2020, 1, 4, 5, 0, 0), xs: 15},
  {type: "13", lv: 3, life: null, atk: 416, cost: 2720000, spending: new Date(2020, 1, 4, 22, 0, 0), xs: 30},
  {type: "13", lv: 4, life: null, atk: 429, cost: 2940000, spending: new Date(2020, 1, 5, 20, 0, 0), xs: 50},
  {type: "13", lv: 5, life: null, atk: 439, cost: 3140000, spending: new Date(2020, 1, 6, 23, 0, 0), xs: 70},
  {type: "13", lv: 6, life: null, atk: 452, cost: 3390000, spending: new Date(2020, 1, 8, 7, 0, 0), xs: 90},
  {type: "13", lv: 7, life: null, atk: 463, cost: 3600000, spending: new Date(2020, 1, 9, 23, 0, 0), xs: 115},
  {type: "13", lv: 8, life: null, atk: 477, cost: 3870000, spending: new Date(2020, 1, 11, 19, 0, 0), xs: 140},
  {type: "13", lv: 9, life: null, atk: 489, cost: 4110000, spending: new Date(2020, 1, 14, 1, 0, 0), xs: 165},
  {type: "13", lv: 10, life: null, atk: 501, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0), xs: null},

]


const Defense: React.FC<DetailPageProps> = ({match, history}) => {
  const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined,
  });
  const [lifeLevel1, setLifeLevel1] = useState(0);
  const [lifeLevel2, setLifeLevel2] = useState(0);
  const [atkLevel1, setAtkLevel1] = useState(0);
  const [atkLevel2, setAtkLevel2] = useState(0);
  const [skillLevel1, setSkillLevel1] = useState(0);
  const [skillLevel2, setSkillLevel2] = useState(0);
  const [skillLevel3, setSkillLevel3] = useState(0);


  let getTitle = () => {
    // @ts-ignore
    return DEFENSE_NAME[match.params.id]
  }

  const floatMe = (num: number) => {
    let index = num.toString().indexOf('.');
    if (index >= 0) {
      if (num - Math.floor(num) >= 0.9) {
        return Math.ceil(num);
      }
    }
    return Math.floor(num);
  }

  const calcLife = (value: number) => {
    let sum = 0;
    if (level[lifeLevel1] + level[lifeLevel2] >= 40) {
      sum = 40;
    } else {
      sum = level[lifeLevel1] + level[lifeLevel2];
    }
    return floatMe(value * sum / 100);
  }
  const calcAtk = (value: number) => {
    let sum = 0;
    if (level[atkLevel1] + level[atkLevel2] >= 40) {
      sum = 40;
    } else {
      sum = level[atkLevel1] + level[atkLevel2];
    }
    return floatMe(value * sum / 100);
  }

  //技能生命
  const calcSkillLife = () => {
    let type = '';
    let curLevel = 0;
    if (skillLevel1 > 0) {
      type = '1';
      curLevel = skillLevel1;
    }
    if (skillLevel2 > 0) {
      type = '2';
      curLevel = skillLevel2;
    }
    if (skillLevel3 > 0) {
      type = '3';
      curLevel = skillLevel3;
    }

    //@ts-ignore
    if (type !== '' && TECH_NAME.find(t => t.type === (parseInt(match.params.id) + 9) + '')) {
      //@ts-ignore
      let _life = TECH_NAME.find(t => t.type === (parseInt(match.params.id) + 9) + '').segments.find(s => s.type === type).data.find(d => d.lv === curLevel).life || 0
      return calcLife(_life) + _life;
    } else {
      return 0;
    }
  }

  //技能攻击
  const calcSkillAtk = () => {
    let type = '';
    let curLevel = 0;
    if (skillLevel1 > 0) {
      type = '1';
      curLevel = skillLevel1;
    }
    if (skillLevel2 > 0) {
      type = '2';
      curLevel = skillLevel2;
    }
    if (skillLevel3 > 0) {
      type = '3';
      curLevel = skillLevel3;
    }

    //@ts-ignore
    if (type !== '' && TECH_NAME.find(t => t.type === (parseInt(match.params.id) + 9) + '')) {
      //@ts-ignore
      let _atk = TECH_NAME.find(t => t.type === (parseInt(match.params.id) + 9) + '').segments.find(s => s.type === type).data.find(d => d.lv === curLevel).atk || 0
      return calcAtk(_atk) + _atk;
    } else {
      return 0;
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>{getTitle()}</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={(e) => {
              setShowPopover({open: true, event: e.nativeEvent})
            }}>
              <IonIcon slot='icon-only' icon={settingsOutline}/>
            </IonButton>
            {
              match.params.id !== '3' &&
              match.params.id !== '6' &&
              match.params.id !== '7' &&
              match.params.id !== '12' && (
                <IonButton onClick={(e) => {
                  e.preventDefault();
                  let id = parseInt(match.params.id) + 9;
                  history.push(`/tech/${id}`)
                }}>
                  <IonIcon slot='icon-only' icon={buildOutline}/>
                </IonButton>
              )
            }
          </IonButtons>


        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='1' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/life.png'/>
            </IonCol>
            <IonCol size='1.5' className='icon-title'>
              <IonImg src='./assets/icon/atk.png'/>
            </IonCol>
            <IonCol size='2.5' className='icon-title'>
              <IonImg src='./assets/icon/money.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/sj.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/xs.png'/>
            </IonCol>
          </IonRow>
          {
            data.filter(d => d.type === match.params.id)
              .map(item => (
                <IonRow key={item.lv}>
                  <IonCol size='1' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                  <IonCol size='2' className='ion-text-right ion-align-self-center'>
                    {item.life}<br/>
                    <span className='green'>+{calcLife(item.life || 0)}</span><br/>
                    <span className='purple'>+{calcSkillLife()}</span>
                  </IonCol>
                  <IonCol size='1.5' className='ion-text-right ion-align-self-center'>
                    {item.atk}<br/>
                    <span className='green'>+{calcAtk(item.atk || 0)}</span><br/>
                    <span className='purple'>+{calcSkillAtk()}</span>
                  </IonCol>
                  <IonCol size='2.5' className='ion-text-right ion-align-self-center'>{item.cost}</IonCol>
                  <IonCol size='3' className='ion-text-right ion-align-self-center'>{covertDate(item.spending)}</IonCol>
                  <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.xs}</IonCol>
                </IonRow>
              ))
          }
          <IonRow class='bold'>
            <IonCol size='1' className='ion-text-right ion-align-self-center'/>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='1.5' className='ion-text-right ion-align-self-center'/>
            <IonCol size='2.5'
                    className='ion-text-right ion-align-self-center'>{sum(data.filter(d => d.type === match.params.id), 'cost')}</IonCol>
            <IonCol size='3'
                    className='ion-text-right ion-align-self-center'>{sumTime(data.filter(d => d.type === match.params.id))}</IonCol>
            <IonCol size='2'
                    className='ion-text-right ion-align-self-center'>{sum(data.filter(d => d.type === match.params.id), 'xs')}</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>

      <IonPopover
        isOpen={showPopover.open}
        event={showPopover.event}
        onDidDismiss={e => setShowPopover({open: false, event: undefined})}
      >
        <IonList>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={40} onIonChange={e => setAtkLevel1(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={false} value={atkLevel1} pin>
              <IonImg src='./assets/skill/1.png' slot='start' style={{width: '24px'}}/>
              <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[atkLevel1].toFixed(1)}%</IonText>
            </IonRange>
          </IonItem>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={40} onIonChange={e => setAtkLevel2(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={false} value={atkLevel2} pin>
              <IonImg src='./assets/skill/1.png' slot='start' style={{width: '24px'}}/>
              <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[atkLevel2].toFixed(1)}%</IonText>
            </IonRange>
          </IonItem>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={40} onIonChange={e => setLifeLevel1(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={false} value={lifeLevel1} pin>
              <IonImg src='./assets/skill/2.png' slot='start' style={{width: '24px'}}/>
              <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[lifeLevel1].toFixed(1)}%</IonText>
            </IonRange>
          </IonItem>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={40} onIonChange={e => setLifeLevel2(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={false} value={lifeLevel2} pin>
              <IonImg src='./assets/skill/2.png' slot='start' style={{width: '24px'}}/>
              <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[lifeLevel2].toFixed(1)}%</IonText>
            </IonRange>
          </IonItem>
          {
            match.params.id !== '3' &&
            match.params.id !== '6' &&
            match.params.id !== '7' &&
            match.params.id !== '12' && (
              <>
                <IonItem class='ion-no-padding'>
                  <IonRange
                    onIonChange={e => {
                      setSkillLevel1(e.detail.value as number);
                      setSkillLevel2(0);
                      setSkillLevel3(0);
                    }}
                    color="secondary" step={1} snaps={true} ticks={true} value={skillLevel1} min={0} max={5}>
                    <IonImg src={`./assets/tech/${parseInt(match.params.id) + 9}-1.png`}
                            slot='start' style={{width: '24px'}}/>
                  </IonRange>
                </IonItem>
                <IonItem class='ion-no-padding'>
                  <IonRange
                    onIonChange={e => {
                      setSkillLevel1(0);
                      setSkillLevel2(e.detail.value as number);
                      setSkillLevel3(0);
                    }}
                    color="secondary" step={1} snaps={true} ticks={true} value={skillLevel2} min={0} max={5}>
                    <IonImg src={`./assets/tech/${parseInt(match.params.id) + 9}-2.png`}
                            slot='start' style={{width: '24px'}}/>
                  </IonRange>
                </IonItem>
                <IonItem class='ion-no-padding'>
                  <IonRange
                    onIonChange={e => {
                      setSkillLevel1(0);
                      setSkillLevel2(0);
                      setSkillLevel3(e.detail.value as number);
                    }}
                    color="secondary" step={1} snaps={true} ticks={true} value={skillLevel3} min={0} max={5}>
                    <IonImg src={`./assets/tech/${parseInt(match.params.id) + 9}-3.png`}
                            slot='start' style={{width: '24px'}}/>
                  </IonRange>
                </IonItem>
              </>
            )
          }

        </IonList>
      </IonPopover>
    </IonPage>
  );
};

export default Defense;
