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
import {buildOutline, settingsOutline} from "ionicons/icons";
import {RouteComponentProps} from "react-router";
import {covertDate, sum, sumTime} from "../../shared/utils";
import {TECH_NAME} from "../../shared/tech_data";

interface DetailPageProps extends RouteComponentProps<{
  id: string;
}> {
}

let MONSTER_NAME = {
  "1": '兽人', "2": "豺狼人", "3": "哥布林", "4": "熊", "5": "南瓜", "6": "蝙蝠", "7": "女巫", "8": "萨满", "9": "幽灵"
}

const level = [
  0, 5, 5.5, 6, 6.5, 7.1, 7.6, 8.1, 8.6, 9.1, 9.6, 10.1, 10.6, 11.2, 11.7, 12.2, 12.7, 13.2, 13.7, 14.2, 14.7,
  15.3, 15.8, 16.3, 16.8, 17.3, 17.8, 18.3, 18.8, 19.4, 19.9, 20.4, 20.9, 21.4, 21.9, 22.4, 22.9, 23.5, 24, 24.5, 25
]

const data = [
  {type: "1", lv: 1, life: 120, atk: 20, cost: 0, spending: new Date(2020, 1, 0, 0, 0, 3)},
  {type: "1", lv: 2, life: 134, atk: 22, cost: 15000, spending: new Date(2020, 1, 0, 3, 1, 0)},
  {type: "1", lv: 3, life: 148, atk: 23, cost: 28000, spending: new Date(2020, 1, 0, 3, 19, 0)},
  {type: "1", lv: 4, life: 164, atk: 24, cost: 50000, spending: new Date(2020, 1, 0, 4, 30, 0)},
  {type: "1", lv: 5, life: 202, atk: 27, cost: 100000, spending: new Date(2020, 1, 0, 5, 29, 0)},
  {type: "1", lv: 6, life: 224, atk: 29, cost: 140000, spending: new Date(2020, 1, 0, 6, 46, 0)},
  {type: "1", lv: 7, life: 249, atk: 30, cost: 200000, spending: new Date(2020, 1, 0, 8, 24, 0)},
  {type: "1", lv: 8, life: 279, atk: 32, cost: 270000, spending: new Date(2020, 1, 0, 10, 26, 0)},
  {type: "1", lv: 9, life: 306, atk: 34, cost: 480000, spending: new Date(2020, 1, 0, 16, 40, 0)},
  {type: "1", lv: 10, life: 387, atk: 38, cost: 610000, spending: new Date(2020, 1, 0, 20, 16, 0)},
  {type: "1", lv: 11, life: 430, atk: 41, cost: 750000, spending: new Date(2020, 1, 1, 0, 0, 0)},
  {type: "1", lv: 12, life: 477, atk: 43, cost: 910000, spending: new Date(2020, 1, 1, 5, 0, 0)},
  {type: "1", lv: 13, life: 529, atk: 45, cost: 1100000, spending: new Date(2020, 1, 1, 10, 0, 0)},
  {type: "1", lv: 14, life: 587, atk: 48, cost: 1600000, spending: new Date(2020, 1, 2, 1, 0, 0)},
  {type: "1", lv: 15, life: 741, atk: 55, cost: 1800000, spending: new Date(2020, 1, 2, 9, 0, 0)},
  {type: "1", lv: 16, life: 822, atk: 58, cost: 2100000, spending: new Date(2020, 1, 2, 18, 0, 0)},
  {type: "1", lv: 17, life: 912, atk: 61, cost: 2400000, spending: new Date(2020, 1, 3, 3, 0, 0)},
  {type: "1", lv: 18, life: 1012, atk: 65, cost: 2800000, spending: new Date(2020, 1, 3, 14, 0, 0)},
  {type: "1", lv: 19, life: 1123, atk: 68, cost: 3700000, spending: new Date(2020, 1, 4, 17, 0, 0)},
  {type: "1", lv: 20, life: 1419, atk: 78, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "2", lv: 1, life: 150, atk: 48, cost: 15000, spending: new Date(2020, 1, 0, 2, 56, 0)},
  {type: "2", lv: 2, life: 165, atk: 51, cost: 24000, spending: new Date(2020, 1, 0, 3, 11, 0)},
  {type: "2", lv: 3, life: 183, atk: 55, cost: 38000, spending: new Date(2020, 1, 0, 3, 36, 0)},
  {type: "2", lv: 4, life: 202, atk: 60, cost: 50000, spending: new Date(2020, 1, 0, 4, 57, 0)},
  {type: "2", lv: 5, life: 243, atk: 69, cost: 120000, spending: new Date(2020, 1, 0, 6, 5, 0)},
  {type: "2", lv: 6, life: 269, atk: 74, cost: 170000, spending: new Date(2020, 1, 0, 7, 32, 0)},
  {type: "2", lv: 7, life: 297, atk: 80, cost: 230000, spending: new Date(2020, 1, 0, 9, 22, 0)},
  {type: "2", lv: 8, life: 328, atk: 86, cost: 310000, spending: new Date(2020, 1, 0, 11, 36, 0)},
  {type: "2", lv: 9, life: 362, atk: 93, cost: 500000, spending: new Date(2020, 1, 0, 17, 57, 0)},
  {type: "2", lv: 10, life: 448, atk: 109, cost: 660000, spending: new Date(2020, 1, 0, 21, 46, 0)},
  {type: "2", lv: 11, life: 495, atk: 118, cost: 810000, spending: new Date(2020, 1, 1, 2, 0, 0)},
  {type: "2", lv: 12, life: 547, atk: 127, cost: 980000, spending: new Date(2020, 1, 1, 7, 0, 0)},
  {type: "2", lv: 13, life: 605, atk: 137, cost: 1100000, spending: new Date(2020, 1, 1, 12, 0, 0)},
  {type: "2", lv: 14, life: 668, atk: 148, cost: 1600000, spending: new Date(2020, 1, 2, 3, 0, 0)},
  {type: "2", lv: 15, life: 827, atk: 174, cost: 1900000, spending: new Date(2020, 1, 2, 11, 0, 0)},
  {type: "2", lv: 16, life: 913, atk: 188, cost: 2200000, spending: new Date(2020, 1, 2, 20, 0, 0)},
  {type: "2", lv: 17, life: 1009, atk: 202, cost: 2500000, spending: new Date(2020, 1, 3, 6, 0, 0)},
  {type: "2", lv: 18, life: 1116, atk: 218, cost: 2900000, spending: new Date(2020, 1, 3, 17, 0, 0)},
  {type: "2", lv: 19, life: 1233, atk: 236, cost: 3700000, spending: new Date(2020, 1, 4, 17, 0, 0)},
  {type: "2", lv: 20, life: 1506, atk: 274, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "3", lv: 1, life: 220, atk: 40, cost: 34000, spending: new Date(2020, 1, 0, 3, 28, 0)},
  {type: "3", lv: 2, life: 236, atk: 42, cost: 50000, spending: new Date(2020, 1, 0, 3, 57, 0)},
  {type: "3", lv: 3, life: 253, atk: 44, cost: 73000, spending: new Date(2020, 1, 0, 4, 37, 0)},
  {type: "3", lv: 4, life: 272, atk: 46, cost: 140000, spending: new Date(2020, 1, 0, 6, 46, 0)},
  {type: "3", lv: 5, life: 316, atk: 51, cost: 190000, spending: new Date(2020, 1, 0, 8, 10, 0)},
  {type: "3", lv: 6, life: 338, atk: 53, cost: 250000, spending: new Date(2020, 1, 0, 9, 53, 0)},
  {type: "3", lv: 7, life: 363, atk: 56, cost: 320000, spending: new Date(2020, 1, 0, 11, 55, 0)},
  {type: "3", lv: 8, life: 389, atk: 59, cost: 400000, spending: new Date(2020, 1, 0, 14, 18, 0)},
  {type: "3", lv: 9, life: 417, atk: 62, cost: 650000, spending: new Date(2020, 1, 0, 21, 46, 0)},
  {type: "3", lv: 10, life: 495, atk: 69, cost: 790000, spending: new Date(2020, 1, 1, 1, 0, 0)},
  {type: "3", lv: 11, life: 531, atk: 73, cost: 930000, spending: new Date(2020, 1, 1, 5, 0, 0)},
  {type: "3", lv: 12, life: 569, atk: 77, cost: 1100000, spending: new Date(2020, 1, 1, 10, 0, 0)},
  {type: "3", lv: 13, life: 610, atk: 80, cost: 1200000, spending: new Date(2020, 1, 1, 16, 0, 0)},
  {type: "3", lv: 14, life: 654, atk: 54, cost: 1800000, spending: new Date(2020, 1, 2, 7, 0, 0)},
  {type: "3", lv: 15, life: 776, atk: 95, cost: 2000000, spending: new Date(2020, 1, 2, 14, 0, 0)},
  {type: "3", lv: 16, life: 832, atk: 100, cost: 2300000, spending: new Date(2020, 1, 2, 23, 0, 0)},
  {type: "3", lv: 17, life: 892, atk: 105, cost: 2600000, spending: new Date(2020, 1, 3, 7, 0, 0)},
  {type: "3", lv: 18, life: 957, atk: 110, cost: 2900000, spending: new Date(2020, 1, 3, 17, 0, 0)},
  {type: "3", lv: 19, life: 1026, atk: 115, cost: 3700000, spending: new Date(2020, 1, 4, 17, 0, 0)},
  {type: "3", lv: 20, life: 1204, atk: 129, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "4", lv: 1, life: 1045, atk: 51, cost: 94000, spending: new Date(2020, 1, 0, 5, 13, 0)},
  {type: "4", lv: 2, life: 1109, atk: 53, cost: 120000, spending: new Date(2020, 1, 0, 6, 5, 0)},
  {type: "4", lv: 3, life: 1178, atk: 55, cost: 160000, spending: new Date(2020, 1, 0, 7, 8, 0)},
  {type: "4", lv: 4, life: 1251, atk: 57, cost: 250000, spending: new Date(2020, 1, 0, 10, 26, 0)},
  {type: "4", lv: 5, life: 1439, atk: 62, cost: 330000, spending: new Date(2020, 1, 0, 12, 14, 0)},
  {type: "4", lv: 6, life: 1528, atk: 64, cost: 400000, spending: new Date(2020, 1, 0, 14, 18, 0)},
  {type: "4", lv: 7, life: 1622, atk: 67, cost: 480000, spending: new Date(2020, 1, 0, 16, 40, 0)},
  {type: "4", lv: 8, life: 1722, atk: 69, cost: 570000, spending: new Date(2020, 1, 0, 19, 19, 0)},
  {type: "4", lv: 9, life: 1829, atk: 72, cost: 870000, spending: new Date(2020, 1, 1, 3, 0, 0)},
  {type: "4", lv: 10, life: 2146, atk: 79, cost: 1000000, spending: new Date(2020, 1, 1, 7, 0, 0)},
  {type: "4", lv: 11, life: 2279, atk: 82, cost: 1100000, spending: new Date(2020, 1, 1, 12, 0, 0)},
  {type: "4", lv: 12, life: 2419, atk: 85, cost: 1300000, spending: new Date(2020, 1, 1, 16, 0, 0)},
  {type: "4", lv: 13, life: 2569, atk: 88, cost: 1400000, spending: new Date(2020, 1, 1, 22, 0, 0)},
  {type: "4", lv: 14, life: 2728, atk: 91, cost: 1900000, spending: new Date(2020, 1, 2, 12, 0, 0)},
  {type: "4", lv: 15, life: 3169, atk: 99, cost: 2200000, spending: new Date(2020, 1, 2, 19, 0, 0)},
  {type: "4", lv: 16, life: 3365, atk: 103, cost: 2400000, spending: new Date(2020, 1, 3, 2, 0, 0)},
  {type: "4", lv: 17, life: 3573, atk: 107, cost: 2700000, spending: new Date(2020, 1, 3, 10, 0, 0)},
  {type: "4", lv: 18, life: 3794, atk: 111, cost: 2900000, spending: new Date(2020, 1, 3, 18, 0, 0)},
  {type: "4", lv: 19, life: 4029, atk: 115, cost: 3700000, spending: new Date(2020, 1, 4, 17, 0, 0)},
  {type: "4", lv: 20, life: 4681, atk: 126, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "5", lv: 1, life: 155, atk: 259, cost: 220000, spending: new Date(2020, 1, 0, 8, 52, 0)},
  {type: "5", lv: 2, life: 166, atk: 272, cost: 270000, spending: new Date(2020, 1, 0, 10, 26, 0)},
  {type: "5", lv: 3, life: 177, atk: 285, cost: 330000, spending: new Date(2020, 1, 0, 12, 14, 0)},
  {type: "5", lv: 4, life: 189, atk: 299, cost: 450000, spending: new Date(2020, 1, 0, 15, 50, 0)},
  {type: "5", lv: 5, life: 211, atk: 324, cost: 540000, spending: new Date(2020, 1, 0, 18, 24, 0)},
  {type: "5", lv: 6, life: 225, atk: 340, cost: 640000, spending: new Date(2020, 1, 0, 21, 15, 0)},
  {type: "5", lv: 7, life: 241, atk: 357, cost: 750000, spending: new Date(2020, 1, 1, 0, 0, 0)},
  {type: "5", lv: 8, life: 257, atk: 374, cost: 870000, spending: new Date(2020, 1, 1, 3, 0, 0)},
  {type: "5", lv: 9, life: 275, atk: 392, cost: 1100000, spending: new Date(2020, 1, 1, 10, 0, 0)},
  {type: "5", lv: 10, life: 307, atk: 425, cost: 1200000, spending: new Date(2020, 1, 1, 15, 0, 0)},
  {type: "5", lv: 11, life: 328, atk: 446, cost: 1400000, spending: new Date(2020, 1, 1, 20, 0, 0)},
  {type: "5", lv: 12, life: 350, atk: 468, cost: 1600000, spending: new Date(2020, 1, 2, 1, 0, 0)},
  {type: "5", lv: 13, life: 374, atk: 491, cost: 1800000, spending: new Date(2020, 1, 2, 7, 0, 0)},
  {type: "5", lv: 14, life: 399, atk: 515, cost: 2100000, spending: new Date(2020, 1, 2, 18, 0, 0)},
  {type: "5", lv: 15, life: 445, atk: 558, cost: 2400000, spending: new Date(2020, 1, 3, 1, 0, 0)},
  {type: "5", lv: 16, life: 476, atk: 585, cost: 2600000, spending: new Date(2020, 1, 3, 9, 0, 0)},
  {type: "5", lv: 17, life: 508, atk: 614, cost: 2900000, spending: new Date(2020, 1, 3, 17, 0, 0)},
  {type: "5", lv: 18, life: 543, atk: 644, cost: 3200000, spending: new Date(2020, 1, 4, 2, 0, 0)},
  {type: "5", lv: 19, life: 580, atk: 676, cost: 3700000, spending: new Date(2020, 1, 4, 17, 0, 0)},
  {type: "5", lv: 20, life: 647, atk: 732, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "6", lv: 1, life: 180, atk: 28, cost: 480000, spending: new Date(2020, 1, 0, 16, 40, 0)},
  {type: "6", lv: 2, life: 187, atk: 29, cost: 560000, spending: new Date(2020, 1, 0, 18, 51, 0)},
  {type: "6", lv: 3, life: 194, atk: 30, cost: 640000, spending: new Date(2020, 1, 0, 21, 15, 0)},
  {type: "6", lv: 4, life: 202, atk: 31, cost: 790000, spending: new Date(2020, 1, 1, 1, 0, 0)},
  {type: "6", lv: 5, life: 214, atk: 33, cost: 890000, spending: new Date(2020, 1, 1, 4, 0, 0)},
  {type: "6", lv: 6, life: 222, atk: 33, cost: 1000000, spending: new Date(2020, 1, 1, 7, 0, 0)},
  {type: "6", lv: 7, life: 231, atk: 35, cost: 1100000, spending: new Date(2020, 1, 1, 11, 0, 0)},
  {type: "6", lv: 8, life: 239, atk: 36, cost: 1200000, spending: new Date(2020, 1, 1, 15, 0, 0)},
  {type: "6", lv: 9, life: 249, atk: 37, cost: 1400000, spending: new Date(2020, 1, 1, 21, 0, 0)},
  {type: "6", lv: 10, life: 262, atk: 39, cost: 1600000, spending: new Date(2020, 1, 2, 1, 0, 0)},
  {type: "6", lv: 11, life: 272, atk: 40, cost: 1700000, spending: new Date(2020, 1, 2, 6, 0, 0)},
  {type: "6", lv: 12, life: 282, atk: 42, cost: 1900000, spending: new Date(2020, 1, 2, 11, 0, 0)},
  {type: "6", lv: 13, life: 293, atk: 43, cost: 2100000, spending: new Date(2020, 1, 2, 17, 0, 0)},
  {type: "6", lv: 14, life: 304, atk: 44, cost: 2400000, spending: new Date(2020, 1, 3, 2, 0, 0)},
  {type: "6", lv: 15, life: 323, atk: 47, cost: 2600000, spending: new Date(2020, 1, 3, 9, 0, 0)},
  {type: "6", lv: 16, life: 335, atk: 48, cost: 2900000, spending: new Date(2020, 1, 3, 15, 0, 0)},
  {type: "6", lv: 17, life: 348, atk: 50, cost: 3100000, spending: new Date(2020, 1, 3, 23, 0, 0)},
  {type: "6", lv: 18, life: 361, atk: 51, cost: 3300000, spending: new Date(2020, 1, 4, 6, 0, 0)},
  {type: "6", lv: 19, life: 375, atk: 53, cost: 3700000, spending: new Date(2020, 1, 4, 17, 0, 0)},
  {type: "6", lv: 20, life: 395, atk: 56, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "7", lv: 1, life: 1233, atk: 151, cost: 570000, spending: new Date(2020, 1, 0, 19, 19, 0)},
  {type: "7", lv: 2, life: 1294, atk: 157, cost: 670000, spending: new Date(2020, 1, 0, 22, 17, 0)},
  {type: "7", lv: 3, life: 1357, atk: 164, cost: 870000, spending: new Date(2020, 1, 1, 3, 0, 0)},
  {type: "7", lv: 4, life: 1470, atk: 176, cost: 1000000, spending: new Date(2020, 1, 1, 7, 0, 0)},
  {type: "7", lv: 5, life: 1543, atk: 183, cost: 1100000, spending: new Date(2020, 1, 1, 12, 0, 0)},
  {type: "7", lv: 6, life: 1618, atk: 191, cost: 1300000, spending: new Date(2020, 1, 1, 16, 0, 0)},
  {type: "7", lv: 7, life: 1698, atk: 199, cost: 1600000, spending: new Date(2020, 1, 2, 1, 0, 0)},
  {type: "7", lv: 8, life: 1839, atk: 214, cost: 1800000, spending: new Date(2020, 1, 2, 7, 0, 0)},
  {type: "7", lv: 9, life: 1930, atk: 223, cost: 2000000, spending: new Date(2020, 1, 2, 13, 0, 0)},
  {type: "7", lv: 10, life: 2025, atk: 232, cost: 2200000, spending: new Date(2020, 1, 2, 20, 0, 0)},
  {type: "7", lv: 11, life: 2124, atk: 242, cost: 2700000, spending: new Date(2020, 1, 3, 10, 0, 0)},
  {type: "7", lv: 12, life: 2320, atk: 262, cost: 2900000, spending: new Date(2020, 1, 3, 18, 0, 0)},
  {type: "7", lv: 13, life: 2434, atk: 273, cost: 3200000, spending: new Date(2020, 1, 4, 3, 0, 0)},
  {type: "7", lv: 14, life: 2553, atk: 285, cost: 3700000, spending: new Date(2020, 1, 4, 17, 0, 0)},
  {type: "7", lv: 15, life: 2744, atk: 303, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "8", lv: 1, life: 1225, atk: 78, cost: 1000000, spending: new Date(2020, 1, 1, 9, 0, 0)},
  {type: "8", lv: 2, life: 1309, atk: 81, cost: 1100000, spending: new Date(2020, 1, 1, 12, 0, 0)},
  {type: "8", lv: 3, life: 1360, atk: 83, cost: 1400000, spending: new Date(2020, 1, 1, 20, 0, 0)},
  {type: "8", lv: 4, life: 1461, atk: 89, cost: 1500000, spending: new Date(2020, 1, 2, 0, 0, 0)},
  {type: "8", lv: 5, life: 1521, atk: 92, cost: 1700000, spending: new Date(2020, 1, 2, 5, 0, 0)},
  {type: "8", lv: 6, life: 1583, atk: 95, cost: 2000000, spending: new Date(2020, 1, 2, 14, 0, 0)},
  {type: "8", lv: 7, life: 1701, atk: 102, cost: 2200000, spending: new Date(2020, 1, 2, 20, 0, 0)},
  {type: "8", lv: 8, life: 1770, atk: 105, cost: 2400000, spending: new Date(2020, 1, 3, 2, 0, 0)},
  {type: "8", lv: 9, life: 1843, atk: 109, cost: 2800000, spending: new Date(2020, 1, 3, 14, 0, 0)},
  {type: "8", lv: 10, life: 1980, atk: 116, cost: 3000000, spending: new Date(2020, 1, 3, 21, 0, 0)},
  {type: "8", lv: 11, life: 2061, atk: 120, cost: 3300000, spending: new Date(2020, 1, 4, 5, 0, 0)},
  {type: "8", lv: 12, life: 2145, atk: 125, cost: 3700000, spending: new Date(2020, 1, 4, 17, 0, 0)},
  {type: "8", lv: 13, life: 2287, atk: 132, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},
  {type: "9", lv: 1, life: 1259, atk: 101, cost: 2400000, spending: new Date(2020, 1, 3, 2, 0, 0)},
  {type: "9", lv: 2, life: 1290, atk: 102, cost: 2600000, spending: new Date(2020, 1, 3, 7, 0, 0)},
  {type: "9", lv: 3, life: 1332, atk: 104, cost: 2700000, spending: new Date(2020, 1, 3, 11, 0, 0)},
  {type: "9", lv: 4, life: 1364, atk: 106, cost: 2900000, spending: new Date(2020, 1, 3, 17, 0, 0)},
  {type: "9", lv: 5, life: 1409, atk: 108, cost: 3000000, spending: new Date(2020, 1, 3, 21, 0, 0)},
  {type: "9", lv: 6, life: 1443, atk: 110, cost: 3200000, spending: new Date(2020, 1, 4, 2, 0, 0)},
  {type: "9", lv: 7, life: 1478, atk: 111, cost: 3400000, spending: new Date(2020, 1, 4, 8, 0, 0)},
  {type: "9", lv: 8, life: 1526, atk: 113, cost: 3600000, spending: new Date(2020, 1, 4, 12, 0, 0)},
  {type: "9", lv: 9, life: 1563, atk: 115, cost: 3700000, spending: new Date(2020, 1, 4, 17, 0, 0)},
  {type: "9", lv: 10, life: 1601, atk: 117, cost: null, spending: new Date(2020, 0, 0, 0, 0, 0)},

]

const Monster: React.FC<DetailPageProps> = ({match, history}) => {
  const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined,
  });
  const [lifeLevel1, setLifeLevel1] = useState(0);
  const [lifeLevel2, setLifeLevel2] = useState(0);
  const [atkLevel1, setAtkLevel1] = useState(0);
  const [atkLevel2, setAtkLevel2] = useState(0);
  const [atkLevel3, setAtkLevel3] = useState(0);
  const [atkLevel4, setAtkLevel4] = useState(0);
  const [skillLevel1, setSkillLevel1] = useState(0);
  const [skillLevel2, setSkillLevel2] = useState(0);
  const [skillLevel3, setSkillLevel3] = useState(0);

  let getTitle = () => {
    // @ts-ignore
    return MONSTER_NAME[match.params.id]
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
    let id = match.params.id;
    let sum = 0;

    if (id === '1' || id === '3' || id === '4' || id === '9') {
      if (level[atkLevel3] + level[atkLevel4] >= 40) {
        sum = 40;
      } else {
        sum = level[atkLevel3] + level[atkLevel4];
      }
      return floatMe(value * sum / 100);
    } else if (id === '2' || id === '7') {
      if (level[atkLevel1] + level[atkLevel2] >= 40) {
        sum = 40;
      } else {
        sum = level[atkLevel1] + level[atkLevel2];
      }
      return floatMe(value * sum / 100);
    } else {
      return 0;
    }


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
    if (type !== '' && TECH_NAME.find(t => t.type === match.params.id)) {
      //@ts-ignore
      let _life = TECH_NAME.find(t => t.type === match.params.id).segments.find(s => s.type === type).data.find(d => d.lv === curLevel).life || 0
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
    if (type !== '' && TECH_NAME.find(t => t.type === match.params.id)) {
      //@ts-ignore
      let _atk = TECH_NAME.find(t => t.type === match.params.id).segments.find(s => s.type === type).data.find(d => d.lv === curLevel).atk || 0
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
            <IonButton onClick={(e) => {
              e.preventDefault();
              history.push(`/tech/${match.params.id}`)
            }}>
              <IonIcon slot='icon-only' icon={buildOutline}/>
            </IonButton>

          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow class='fixed'>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/lv.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              <IonImg src='./assets/icon/life.png'/>
            </IonCol>
            <IonCol size='2' className='icon-title'>
              {
                match.params.id === "8" ? <IonImg src='./assets/icon/cure.png'/> : <IonImg src='./assets/icon/atk.png'/>
              }
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/wine.png'/>
            </IonCol>
            <IonCol size='3' className='icon-title'>
              <IonImg src='./assets/icon/sj.png'/>
            </IonCol>
          </IonRow>
          {
            data.filter(d => d.type === match.params.id).map(item => (
              <IonRow key={item.lv}>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>{item.lv}</IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>
                  {item.life}<br/>
                  <span className='green'>+{calcLife(item.life || 0)}</span><br/>
                  <span className='purple'>+{calcSkillLife()}</span>
                </IonCol>
                <IonCol size='2' className='ion-text-right ion-align-self-center'>
                  {item.atk}<br/>
                  <span className='green'>+{calcAtk(item.atk || 0)}</span><br/>
                  <span className='purple'>{calcSkillAtk() > 0 ? '+' + calcSkillAtk() : calcSkillAtk()}</span>
                </IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{item.cost}</IonCol>
                <IonCol size='3' className='ion-text-right ion-align-self-center'>{covertDate(item.spending)}</IonCol>
              </IonRow>
            ))
          }
          <IonRow class='bold'>
            <IonCol size='2' className='ion-text-right ion-align-self-center'>总计</IonCol>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='2' className='ion-text-right ion-align-self-center'/>
            <IonCol size='3'
                    className='ion-text-right ion-align-self-center'>{sum(data.filter(d => d.type === match.params.id), 'cost')}</IonCol>
            <IonCol size='3'
                    className='ion-text-right ion-align-self-center'>{sumTime(data.filter(d => d.type === match.params.id))}</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonPopover
        isOpen={showPopover.open}
        event={showPopover.event}
        onDidDismiss={e => setShowPopover({open: false, event: undefined})}
      >
        <IonList>
          {
            (match.params.id === '2' ||
              match.params.id === '7') && (
              <>
                <IonItem class='ion-no-padding'>
                  <IonRange min={0} max={40} onIonChange={e => setAtkLevel1(e.detail.value as number)}
                            color="secondary" step={1} snaps={true} ticks={false} value={atkLevel1} pin>
                    <IonImg src='./assets/skill/3.png' slot='start' style={{width: '24px'}}/>
                    <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[atkLevel1].toFixed(1)}%</IonText>
                  </IonRange>
                </IonItem>
                <IonItem class='ion-no-padding'>
                  <IonRange min={0} max={40} onIonChange={e => setAtkLevel2(e.detail.value as number)}
                            color="secondary" step={1} snaps={true} ticks={false} value={atkLevel2} pin>
                    <IonImg src='./assets/skill/3.png' slot='start' style={{width: '24px'}}/>
                    <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[atkLevel2].toFixed(1)}%</IonText>
                  </IonRange>
                </IonItem>
              </>
            )
          }
          {
            (match.params.id === '1' ||
              match.params.id === '3' ||
              match.params.id === '4' ||
              match.params.id === '9') && (
              <>
                <IonItem class='ion-no-padding'>
                  <IonRange min={0} max={40} onIonChange={e => setAtkLevel3(e.detail.value as number)}
                            color="secondary" step={1} snaps={true} ticks={false} value={atkLevel3} pin>
                    <IonImg src='./assets/skill/4.png' slot='start' style={{width: '24px'}}/>
                    <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[atkLevel3].toFixed(1)}%</IonText>
                  </IonRange>
                </IonItem>
                <IonItem class='ion-no-padding'>
                  <IonRange min={0} max={40} onIonChange={e => setAtkLevel4(e.detail.value as number)}
                            color="secondary" step={1} snaps={true} ticks={false} value={atkLevel4} pin>
                    <IonImg src='./assets/skill/4.png' slot='start' style={{width: '24px'}}/>
                    <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[atkLevel4].toFixed(1)}%</IonText>
                  </IonRange>
                </IonItem>
              </>
            )
          }


          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={40} onIonChange={e => setLifeLevel1(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={false} value={lifeLevel1} pin>
              <IonImg src='./assets/skill/5.png' slot='start' style={{width: '24px'}}/>
              <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[lifeLevel1].toFixed(1)}%</IonText>
            </IonRange>
          </IonItem>
          <IonItem class='ion-no-padding'>
            <IonRange min={0} max={40} onIonChange={e => setLifeLevel2(e.detail.value as number)}
                      color="secondary" step={1} snaps={true} ticks={false} value={lifeLevel2} pin>
              <IonImg src='./assets/skill/5.png' slot='start' style={{width: '24px'}}/>
              <IonText slot='end' style={{fontSize: '0.8rem'}}>{level[lifeLevel2].toFixed(1)}%</IonText>
            </IonRange>
          </IonItem>

          <IonItem class='ion-no-padding'>
            <IonRange
              onIonChange={e => {
                setSkillLevel1(e.detail.value as number);
                setSkillLevel2(0);
                setSkillLevel3(0);
              }}
              color="secondary" step={1} snaps={true} ticks={true} value={skillLevel1} min={0} max={5}>
              <IonImg src={`./assets/tech/${match.params.id}-1.png`}
                      slot='start' style={{width: '24px'}}/>
            </IonRange>
          </IonItem>
          {
            match.params.id !== '8' && (
              <IonItem class='ion-no-padding'>
                <IonRange
                  onIonChange={e => {
                    setSkillLevel1(0);
                    setSkillLevel2(e.detail.value as number);
                    setSkillLevel3(0);
                  }}
                  color="secondary" step={1} snaps={true} ticks={true} value={skillLevel2} min={0} max={5}>
                  <IonImg src={`./assets/tech/${match.params.id}-2.png`}
                          slot='start' style={{width: '24px'}}/>
                </IonRange>
              </IonItem>
            )
          }
          <IonItem class='ion-no-padding'>
            <IonRange
              onIonChange={e => {
                setSkillLevel1(0);
                setSkillLevel2(0);
                setSkillLevel3(e.detail.value as number);
              }}
              color="secondary" step={1} snaps={true} ticks={true} value={skillLevel3} min={0} max={5}>
              <IonImg src={`./assets/tech/${match.params.id}-3.png`}
                      slot='start' style={{width: '24px'}}/>
            </IonRange>
          </IonItem>
        </IonList>
      </IonPopover>
    </IonPage>
  );
};

export default Monster;
