
export const getCosts = (type: string, lv: number) => {
  let costs = [
    //兽人
    {lv: 0, type: "1", cost: 10600, stone: 5100, xs: 88, spending: new Date(2020, 1, 0, 11, 6, 0)},
    {lv: 1, type: "1", cost: 47800, stone: 7900, xs: 139, spending: new Date(2020, 1, 1, 0, 0, 0)},
    {lv: 2, type: "1", cost: 162100, stone: 10500, xs: 192, spending: new Date(2020, 1, 2, 1, 0, 0)},
    {lv: 3, type: "1", cost: 310800, stone: 13500, xs: 252, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 4, type: "1", cost: 525000, stone: 16200, xs: 309, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 5, type: "1", cost: null, stone: null, xs: null, spending: ''},

    //豺狼
    {lv: 0, type: "2", cost: 19300, stone: 2600, xs: 91, spending: new Date(2020, 1, 0, 0, 4, 53)},
    {lv: 1, type: "2", cost: 68600, stone: 3100, xs: 145, spending: new Date(2020, 1, 0, 0, 20, 9)},
    {lv: 2, type: "2", cost: 205000, stone: 4000, xs: 200, spending: new Date(2020, 1, 0, 2, 13, 0)},
    {lv: 3, type: "2", cost: 310800, stone: 5100, xs: 259, spending: new Date(2020, 1, 0, 5, 42, 0)},
    {lv: 4, type: "2", cost: 525000, stone: 6500, xs: 315, spending: new Date(2020, 1, 0, 23, 30, 0)},
    {lv: 5, type: "2", cost: null, stone: null, xs: null, spending: ''},

    //哥布林
    {lv: 0, type: "3", cost: 19300, stone: 5400, xs: 94, spending: new Date(2020, 1, 0, 11, 6, 0)},
    {lv: 1, type: "3", cost: 94300, stone: 8300, xs: 150, spending: new Date(2020, 1, 1, 0, 0, 0)},
    {lv: 2, type: "3", cost: 205000, stone: 11100, xs: 205, spending: new Date(2020, 1, 2, 1, 0, 0)},
    {lv: 3, type: "3", cost: 310800, stone: 14200, xs: 264, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 4, type: "3", cost: 612600, stone: 17100, xs: 328, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 5, type: "3", cost: null, stone: null, xs: null, spending: ''},

    //熊
    {lv: 0, type: "4", cost: 47800, stone: 5500, xs: 99, spending: new Date(2020, 1, 0, 11, 6, 0)},
    {lv: 1, type: "4", cost: 125300, stone: 8500, xs: 156, spending: new Date(2020, 1, 1, 0, 0, 0)},
    {lv: 2, type: "4", cost: 254400, stone: 11400, xs: 214, spending: new Date(2020, 1, 2, 1, 0, 0)},
    {lv: 3, type: "4", cost: 374400, stone: 14600, xs: 274, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 4, type: "4", cost: 612600, stone: 17500, xs: 335, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 5, type: "4", cost: null, stone: null, xs: null, spending: ''},

    //南瓜
    {lv: 0, type: "5", cost: 94300, stone: 6500, xs: 120, spending: new Date(2020, 1, 0, 14, 34, 0)},
    {lv: 1, type: "5", cost: 205000, stone: 9600, xs: 180, spending: new Date(2020, 1, 1, 7, 0, 0)},
    {lv: 2, type: "5", cost: 310800, stone: 12600, xs: 237, spending: new Date(2020, 1, 2, 12, 0, 0)},
    {lv: 3, type: "5", cost: 445700, stone: 15500, xs: 293, spending: new Date(2020, 1, 4, 8, 0, 0)},
    {lv: 4, type: "5", cost: 612600, stone: 18500, xs: 351, spending: new Date(2020, 1, 7, 0, 0, 0)},
    {lv: 5, type: "5", cost: null, stone: null, xs: null, spending: ''},

    //蝙蝠
    {lv: 0, type: "6", cost: 162100, stone: 8500, xs: 159, spending: new Date(2020, 1, 1, 0, 0, 0)},
    {lv: 1, type: "6", cost: 254400, stone: 10500, xs: 199, spending: new Date(2020, 1, 1, 15, 0, 0)},
    {lv: 2, type: "6", cost: 445700, stone: 12600, xs: 245, spending: new Date(2020, 1, 2, 12, 0, 0)},
    {lv: 3, type: "6", cost: 525000, stone: 14600, xs: 282, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 4, type: "6", cost: 708900, stone: 17500, xs: 339, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 5, type: "6", cost: null, stone: null, xs: null, spending: ''},

    //女巫
    {lv: 0, type: "7", cost: 162100, stone: 9600, xs: 177, spending: new Date(2020, 1, 1, 7, 0, 0)},
    {lv: 1, type: "7", cost: 254400, stone: 11400, xs: 214, spending: new Date(2020, 1, 2, 1, 0, 0)},
    {lv: 2, type: "7", cost: 374400, stone: 13500, xs: 256, spending: new Date(2020, 1, 3, 1, 0, 0)},
    {lv: 3, type: "7", cost: 445700, stone: 15500, xs: 293, spending: new Date(2020, 1, 4, 8, 0, 0)},
    {lv: 4, type: "7", cost: 525000, stone: 18500, xs: 347, spending: new Date(2020, 1, 7, 0, 0, 0)},
    {lv: 5, type: "7", cost: null, stone: null, xs: null, spending: ''},

    //巫师
    {lv: 0, type: "8", cost: 310800, stone: 11400, xs: 217, spending: new Date(2020, 1, 2, 1, 0, 0)},
    {lv: 1, type: "8", cost: 374400, stone: 13500, xs: 256, spending: new Date(2020, 1, 3, 1, 0, 0)},
    {lv: 2, type: "8", cost: 445700, stone: 15500, xs: 293, spending: new Date(2020, 1, 4, 8, 0, 0)},
    {lv: 3, type: "8", cost: 525000, stone: 17500, xs: 330, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 4, type: "8", cost: 708900, stone: 18500, xs: 356, spending: new Date(2020, 1, 2, 7, 0, 0)},
    {lv: 5, type: "8", cost: null, stone: null, xs: null, spending: ''},

    //幽灵
    {lv: 0, type: "9", cost: 612600, stone: 16400, xs: 316, spending: new Date(2020, 1, 5, 3, 0, 0)},
    {lv: 1, type: "9", cost: 612600, stone: 17500, xs: 335, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 2, type: "9", cost: 708900, stone: 17500, xs: 339, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 3, type: "9", cost: 708900, stone: 18500, xs: 356, spending: new Date(2020, 1, 7, 0, 0, 0)},
    {lv: 4, type: "9", cost: 814200, stone: 18500, xs: 361, spending: new Date(2020, 1, 7, 0, 0, 0)},
    {lv: 5, type: "9", cost: null, stone: null, xs: null, spending: ''},

    //弩机
    {lv: 0, type: "10", cost: 3150, stone: 2100, xs: 71, spending: new Date(2020, 1, 0, 0, 5, 0)},
    {lv: 1, type: "10", cost: 94300, stone: 2300, xs: 112, spending: new Date(2020, 1, 0, 0, 30, 0)},
    {lv: 2, type: "10", cost: 205000, stone: 2500, xs: 155, spending: new Date(2020, 1, 0, 2, 13, 0)},
    {lv: 3, type: "10", cost: 374400, stone: 2700, xs: 202, spending: new Date(2020, 1, 0, 9, 8, 0)},
    {lv: 4, type: "10", cost: 612600, stone: 3000, xs: 250, spending: new Date(2020, 1, 1, 13, 0, 0)},
    {lv: 5, type: "10", cost: null, stone: null, xs: null, spending: ''},

    //加农炮
    {lv: 0, type: "11", cost: 47800, stone: 4000, xs: 74, spending: new Date(2020, 1, 0, 11, 6, 0)},
    {lv: 1, type: "11", cost: 125300, stone: 6200, xs: 118, spending: new Date(2020, 1, 1, 0, 0, 0)},
    {lv: 2, type: "11", cost: 254400, stone: 8300, xs: 162, spending: new Date(2020, 1, 2, 1, 0, 0)},
    {lv: 3, type: "11", cost: 445700, stone: 10600, xs: 211, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 4, type: "11", cost: 708900, stone: 12700, xs: 259, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 5, type: "11", cost: null, stone: null, xs: null, spending: ''},

    //栅栏
    {lv: 0, type: "13", cost: 94300, stone: 4100, xs: 80, spending: new Date(2020, 1, 0, 11, 6, 0)},
    {lv: 1, type: "13", cost: 205000, stone: 6400, xs: 127, spending: new Date(2020, 1, 1, 0, 0, 0)},
    {lv: 2, type: "13", cost: 374400, stone: 8500, xs: 172, spending: new Date(2020, 1, 2, 1, 0, 0)},
    {lv: 3, type: "13", cost: 612600, stone: 10900, xs: 225, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 4, type: "13", cost: 708900, stone: 13000, xs: 264, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 5, type: "13", cost: null, stone: null, xs: null, spending: ''},

    //炸药
    {lv: 0, type: "14", cost: 47800, stone: 1900, xs: 71, spending: new Date(2020, 1, 0, 0, 5, 0)},
    {lv: 1, type: "14", cost: 94300, stone: 2100, xs: 110, spending: new Date(2020, 1, 0, 0, 30, 0)},
    {lv: 2, type: "14", cost: 205000, stone: 2300, xs: 152, spending: new Date(2020, 1, 0, 2, 13, 0)},
    {lv: 3, type: "14", cost: 445700, stone: 2500, xs: 203, spending: new Date(2020, 1, 0, 14, 39, 0)},
    {lv: 4, type: "14", cost: 612600, stone: 2800, xs: 245, spending: new Date(2020, 1, 1, 13, 0, 0)},
    {lv: 5, type: "14", cost: null, stone: null, xs: null, spending: ''},

    //沥青
    {lv: 0, type: "17", cost: 68600, stone: 4200, xs: 80, spending: new Date(2020, 1, 0, 11, 6, 0)},
    {lv: 1, type: "17", cost: 94300, stone: 6500, xs: 120, spending: new Date(2020, 1, 1, 0, 0, 0)},
    {lv: 2, type: "17", cost: 162100, stone: 8700, xs: 162, spending: new Date(2020, 1, 2, 11, 0, 0)},
    {lv: 3, type: "17", cost: 254400, stone: 11100, xs: 209, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 4, type: "17", cost: 525000, stone: 13300, xs: 260, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 5, type: "17", cost: null, stone: null, xs: null, spending: ''},

    //魔法台
    {lv: 0, type: "18", cost: 162100, stone: 9100, xs: 169, spending: new Date(2020, 1, 0, 11, 6, 0)},
    {lv: 1, type: "18", cost: 310800, stone: 10600, xs: 204, spending: new Date(2020, 1, 1, 0, 0, 0)},
    {lv: 2, type: "18", cost: 445700, stone: 11900, xs: 233, spending: new Date(2020, 1, 2, 1, 0, 0)},
    {lv: 3, type: "18", cost: 612600, stone: 12700, xs: 255, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 4, type: "18", cost: 708900, stone: 13400, xs: 271, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 5, type: "18", cost: null, stone: null, xs: null, spending: ''},

    //闸刀
    {lv: 0, type: "19", cost: 162100, stone: 4300, xs: 89, spending: new Date(2020, 1, 1, 0, 0, 0)},
    {lv: 1, type: "19", cost: 205000, stone: 6700, xs: 132, spending: new Date(2020, 1, 1, 15, 0, 0)},
    {lv: 2, type: "19", cost: 310800, stone: 8900, xs: 175, spending: new Date(2020, 1, 2, 12, 0, 0)},
    {lv: 3, type: "19", cost: 445700, stone: 11400, xs: 225, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 4, type: "19", cost: 612600, stone: 13700, xs: 271, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 5, type: "19", cost: null, stone: null, xs: null, spending: ''},

    //祖玛
    {lv: 0, type: "20", cost: 254400, stone: 10600, xs: 200, spending: new Date(2020, 1, 1, 15, 0, 0)},
    {lv: 1, type: "20", cost: 310800, stone: 11200, xs: 214, spending: new Date(2020, 1, 2, 13, 0, 0)},
    {lv: 2, type: "20", cost: 445700, stone: 11900, xs: 233, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 3, type: "20", cost: 612600, stone: 12700, xs: 255, spending: new Date(2020, 1, 5, 3, 0, 0)},
    {lv: 4, type: "20", cost: 814200, stone: 13400, xs: 276, spending: new Date(2020, 1, 7, 0, 0, 0)},
    {lv: 5, type: "20", cost: null, stone: null, xs: null, spending: ''},

    //滚石
    {lv: 0, type: "22", cost: 445700, stone: 7600, xs: 161, spending: new Date(2020, 1, 3, 16, 0, 0)},
    {lv: 1, type: "22", cost: 525000, stone: 9100, xs: 190, spending: new Date(2020, 1, 4, 8, 0, 0)},
    {lv: 2, type: "22", cost: 612600, stone: 10600, xs: 220, spending: new Date(2020, 1, 5, 3, 0, 0)},
    {lv: 3, type: "22", cost: 708900, stone: 11900, xs: 246, spending: new Date(2020, 1, 6, 0, 0, 0)},
    {lv: 4, type: "22", cost: 814200, stone: 13400, xs: 276, spending: new Date(2020, 1, 7, 0, 0, 0)},
    {lv: 5, type: "22", cost: null, stone: null, xs: null, spending: ''},
  ];
  //console.log(costs.filter(c => c.type === type && c.lv === lv)[0])
  return costs.filter(c => c.type === type && c.lv === lv)[0];
}

export const TECH_NAME = [
  {
    type: "1",
    segments: [
      {
        type: '1', text: '重装(移动速度减少30%，但血量提高)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('1', 0)},
          {lv: 1, eff: null, life: 105, atk: 14, ...getCosts('1', 1)},
          {lv: 2, eff: null, life: 210, atk: 22, ...getCosts('1', 2)},
          {lv: 3, eff: null, life: 372, atk: 32, ...getCosts('1', 3)},
          {lv: 4, eff: null, life: 660, atk: 46, ...getCosts('1', 4)},
          {lv: 5, eff: null, life: 1066, atk: 63, ...getCosts('1', 5)},
        ]
      },
      {
        type: '2', text: '狂暴(兽人攻击力大幅度提高)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('1', 0)},
          {lv: 1, eff: null, life: 42, atk: 11, ...getCosts('1', 1)},
          {lv: 2, eff: null, life: 70, atk: 22, ...getCosts('1', 2)},
          {lv: 3, eff: null, life: 106, atk: 36, ...getCosts('1', 3)},
          {lv: 4, eff: null, life: 165, atk: 58, ...getCosts('1', 4)},
          {lv: 5, eff: null, life: 237, atk: 84, ...getCosts('1', 5)},
        ]
      },
      {
        type: '3', text: '兽人头领(消耗两个兽人召唤出一个拥有较高的生命和攻击的巨型兽人)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('1', 0)},
          {lv: 1, eff: null, life: 294, atk: 39, ...getCosts('1', 1)},
          {lv: 2, eff: null, life: 525, atk: 54, ...getCosts('1', 2)},
          {lv: 3, eff: null, life: 850, atk: 73, ...getCosts('1', 3)},
          {lv: 4, eff: null, life: 1403, atk: 99, ...getCosts('1', 4)},
          {lv: 5, eff: null, life: 2132, atk: 127, ...getCosts('1', 5)},
        ]
      },
    ]
  },
  {
    type: "2",
    segments: [
      {
        type: '1', text: '圆盾(豺狼人装备上了一个圆盾，所收到的范围伤害降低x)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('2', 0)},
          {lv: 1, eff: '20%', life: 20, atk: 21, ...getCosts('2', 1)},
          {lv: 2, eff: '25%', life: 37, atk: 41, ...getCosts('2', 2)},
          {lv: 3, eff: '30%', life: 61, atk: 69, ...getCosts('2', 3)},
          {lv: 4, eff: '35%', life: 101, atk: 113, ...getCosts('2', 4)},
          {lv: 5, eff: '40%', life: 154, atk: 170, ...getCosts('2', 5)},
        ]
      },
      {
        type: '2', text: '百步穿杨(豺狼人的射程增加1格)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('2', 0)},
          {lv: 1, eff: null, life: 20, atk: 28, ...getCosts('2', 1)},
          {lv: 2, eff: null, life: 37, atk: 51, ...getCosts('2', 2)},
          {lv: 3, eff: null, life: 61, atk: 82, ...getCosts('2', 3)},
          {lv: 4, eff: null, life: 101, atk: 132, ...getCosts('2', 4)},
          {lv: 5, eff: null, life: 154, atk: 194, ...getCosts('2', 5)},
        ]
      },
      {
        type: '3', text: '连弩(豺狼人连射两支箭弩攻击敌方)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('2', 0)},
          {lv: 1, eff: null, life: 25, atk: 28, ...getCosts('2', 1)},
          {lv: 2, eff: null, life: 49, atk: 51, ...getCosts('2', 2)},
          {lv: 3, eff: null, life: 85, atk: 82, ...getCosts('2', 3)},
          {lv: 4, eff: null, life: 147, atk: 132, ...getCosts('2', 4)},
          {lv: 5, eff: null, life: 231, atk: 194, ...getCosts('2', 5)},
        ]
      },
    ]
  },
  {
    type: "3",
    segments: [
      {
        type: '1', text: '翅膀帽(所受到的减速效果会被降低x)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('3', 0)},
          {lv: 1, eff: '10%', life: 32, atk: 15, ...getCosts('3', 1)},
          {lv: 2, eff: '15%', life: 69, atk: 26, ...getCosts('3', 2)},
          {lv: 3, eff: '20%', life: 122, atk: 40, ...getCosts('3', 3)},
          {lv: 4, eff: '25%', life: 208, atk: 60, ...getCosts('3', 4)},
          {lv: 5, eff: '30%', life: 319, atk: 83, ...getCosts('3', 5)},
        ]
      },
      {
        type: '2', text: '勇猛盔(对资源建筑的伤害提高x)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('3', 0)},
          {lv: 1, eff: '20%', life: 64, atk: 15, ...getCosts('3', 1)},
          {lv: 2, eff: '25%', life: 115, atk: 26, ...getCosts('3', 2)},
          {lv: 3, eff: '30%', life: 183, atk: 40, ...getCosts('3', 3)},
          {lv: 4, eff: '35%', life: 292, atk: 60, ...getCosts('3', 4)},
          {lv: 5, eff: '40%', life: 425, atk: 83, ...getCosts('3', 5)},
        ]
      },
      {
        type: '3', text: '人潮(开战时依据列队中哥布林的数量的x增加额外数量的哥布林)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('3', 0)},
          {lv: 1, eff: '20%', life: 64, atk: 10, ...getCosts('3', 1)},
          {lv: 2, eff: '30%', life: 92, atk: 13, ...getCosts('3', 2)},
          {lv: 3, eff: '40%', life: 122, atk: 16, ...getCosts('3', 3)},
          {lv: 4, eff: '50%', life: 167, atk: 20, ...getCosts('3', 4)},
          {lv: 5, eff: '60%', life: 212, atk: 24, ...getCosts('3', 5)},
        ]
      },
    ]
  },
  {
    type: "4",
    segments: [
      {
        type: '1', text: '方盾(减免x点所受到的伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('4', 0)},
          {lv: 1, eff: 10, life: 146, atk: 6, ...getCosts('4', 1)},
          {lv: 2, eff: 12, life: 399, atk: 15, ...getCosts('4', 2)},
          {lv: 3, eff: 14, life: 772, atk: 26, ...getCosts('4', 3)},
          {lv: 4, eff: 16, life: 1348, atk: 41, ...getCosts('4', 4)},
          {lv: 5, eff: 18, life: 2084, atk: 59, ...getCosts('4', 5)},
        ]
      },
      {
        type: '2', text: '刃盾(反弹所受伤害的x给进攻者)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('4', 0)},
          {lv: 1, eff: '5%', life: 292, atk: 13, ...getCosts('4', 1)},
          {lv: 2, eff: '6%', life: 598, atk: 23, ...getCosts('4', 2)},
          {lv: 3, eff: '7%', life: 1029, atk: 35, ...getCosts('4', 3)},
          {lv: 4, eff: '8%', life: 1685, atk: 52, ...getCosts('4', 4)},
          {lv: 5, eff: '9%', life: 2501, atk: 70, ...getCosts('4', 5)},
        ]
      },
      {
        type: '3', text: '稳健(有x概率不会被弹簧弹飞)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('4', 0)},
          {lv: 1, eff: '40%', life: 292, atk: 13, ...getCosts('4', 1)},
          {lv: 2, eff: '55%', life: 548, atk: 21, ...getCosts('4', 2)},
          {lv: 3, eff: '80%', life: 900, atk: 31, ...getCosts('4', 3)},
          {lv: 4, eff: '85%', life: 1432, atk: 44, ...getCosts('4', 4)},
          {lv: 5, eff: '100%', life: 2084, atk: 59, ...getCosts('4', 5)},
        ]
      },
    ]
  },
  {
    type: "5",
    segments: [
      {
        type: '1', text: '疾跑(增加移动速度x)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('5', 0)},
          {lv: 1, eff: '60%', life: 43, atk: 17, ...getCosts('5', 1)},
          {lv: 2, eff: '70%', life: 88, atk: 20, ...getCosts('5', 2)},
          {lv: 3, eff: '80%', life: 150, atk: 49, ...getCosts('5', 3)},
          {lv: 4, eff: '90%', life: 238, atk: 88, ...getCosts('5', 4)},
          {lv: 5, eff: '100%', life: 354, atk: 137, ...getCosts('5', 5)},
        ]
      },
      {
        type: '2', text: '巨型南瓜(死亡后爆炸对周围敌人造成x点额外伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('5', 0)},
          {lv: 1, eff: 50, life: 65, atk: 50, ...getCosts('5', 1)},
          {lv: 2, eff: 82, life: 102, atk: 82, ...getCosts('5', 2)},
          {lv: 3, eff: 123, life: 150, atk: 123, ...getCosts('5', 3)},
          {lv: 4, eff: 176, life: 214, atk: 176, ...getCosts('5', 4)},
          {lv: 5, eff: 239, life: 295, atk: 239, ...getCosts('5', 5)},
        ]
      },
      {
        type: '3', text: '铁定帽(南瓜会攻击第一个接触的单位,并对周围敌人造成伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('5', 0)},
          {lv: 1, eff: null, life: 32, atk: 66, ...getCosts('5', 1)},
          {lv: 2, eff: null, life: 58, atk: 123, ...getCosts('5', 2)},
          {lv: 3, eff: null, life: 94, atk: 197, ...getCosts('5', 3)},
          {lv: 4, eff: null, life: 143, atk: 293, ...getCosts('5', 4)},
          {lv: 5, eff: null, life: 207, atk: 410, ...getCosts('5', 5)},
        ]
      },
    ]
  },
  {
    type: "6",
    segments: [
      {
        type: '1', text: '抵御面罩(抵挡x点魔法台和弩机造成的伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('6', 0)},
          {lv: 1, eff: 80, life: 33, atk: 5, ...getCosts('6', 1)},
          {lv: 2, eff: 90, life: 51, atk: 8, ...getCosts('6', 2)},
          {lv: 3, eff: 100, life: 73, atk: 11, ...getCosts('6', 3)},
          {lv: 4, eff: 110, life: 101, atk: 15, ...getCosts('6', 4)},
          {lv: 5, eff: 120, life: 132, atk: 19, ...getCosts('6', 5)},
        ]
      },
      {
        type: '2', text: '机敏(有x概率闪避伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('6', 0)},
          {lv: 1, eff: '13%', life: 22, atk: 3, ...getCosts('6', 1)},
          {lv: 2, eff: '16%', life: 38, atk: 6, ...getCosts('6', 2)},
          {lv: 3, eff: '19%', life: 59, atk: 9, ...getCosts('6', 3)},
          {lv: 4, eff: '21%', life: 84, atk: 12, ...getCosts('6', 4)},
          {lv: 5, eff: '24%', life: 113, atk: 16, ...getCosts('6', 5)},
        ]
      },
      {
        type: '3', text: '巨型蝙蝠(消耗两只蝙蝠唤出一只巨型蝙蝠，拥有较高生命和攻击)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('6', 0)},
          {lv: 1, eff: null, life: 304, atk: 48, ...getCosts('6', 1)},
          {lv: 2, eff: null, life: 383, atk: 58, ...getCosts('6', 2)},
          {lv: 3, eff: null, life: 469, atk: 69, ...getCosts('6', 3)},
          {lv: 4, eff: null, life: 570, atk: 83, ...getCosts('6', 4)},
          {lv: 5, eff: null, life: 679, atk: 97, ...getCosts('6', 5)},
        ]
      },
    ]
  },
  {
    type: "7",
    segments: [
      {
        type: '1', text: '护盾杖(每隔x秒会释放一个护盾，为自己吸收y点伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('7', 0)},
          {lv: 1, eff: '10,40', life: 146, atk: 17, ...getCosts('7', 1)},
          {lv: 2, eff: '9,50', life: 332, atk: 29, ...getCosts('7', 2)},
          {lv: 3, eff: '8,60', life: 565, atk: 44, ...getCosts('7', 3)},
          {lv: 4, eff: '7,70', life: 830, atk: 59, ...getCosts('7', 4)},
          {lv: 5, eff: '6,80', life: 1256, atk: 84, ...getCosts('7', 5)},
        ]
      },
      {
        type: '2', text: '雷电仗(攻击溅射目标周围敌方单位)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('7', 0)},
          {lv: 1, eff: null, life: 146, atk: 17, ...getCosts('7', 1)},
          {lv: 2, eff: null, life: 332, atk: 29, ...getCosts('7', 2)},
          {lv: 3, eff: null, life: 565, atk: 44, ...getCosts('7', 3)},
          {lv: 4, eff: null, life: 830, atk: 59, ...getCosts('7', 4)},
          {lv: 5, eff: null, life: 1256, atk: 84, ...getCosts('7', 5)},
        ]
      },
      {
        type: '3', text: '重炮(释放出的魔法球沿路径一直前进数格，对沿途单位造成伤害，没前进一格伤害降低10%，伤害最低降至原伤害的50%)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('7', 0)},
          {lv: 1, eff: null, life: 291, atk: -113, ...getCosts('7', 1)},
          {lv: 2, eff: null, life: 415, atk: -111, ...getCosts('7', 2)},
          {lv: 3, eff: null, life: 565, atk: -110, ...getCosts('7', 3)},
          {lv: 4, eff: null, life: 726, atk: -103, ...getCosts('7', 4)},
          {lv: 5, eff: null, life: 1005, atk: -101, ...getCosts('7', 5)},
        ]
      },
    ]
  },
  {
    type: "8",
    segments: [
      {
        type: '1', text: '专注幡(更专注地治疗一个友方单位，治疗效果额外提高x)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('8', 0)},
          {lv: 1, eff: '30%', life: 141, atk: 86, ...getCosts('8', 1)},
          {lv: 2, eff: '35%', life: 233, atk: 112, ...getCosts('8', 2)},
          {lv: 3, eff: '40%', life: 347, atk: 145, ...getCosts('8', 3)},
          {lv: 4, eff: '45%', life: 478, atk: 180, ...getCosts('8', 4)},
          {lv: 5, eff: '50%', life: 649, atk: 226, ...getCosts('8', 5)},
        ]
      },
      {
        type: '3', text: '死灵召唤(x%在尸体召唤1个骷髅兵，持续y秒)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('8', 0)},
          {lv: 1, eff: '40,5', life: 141, atk: 17, ...getCosts('8', 1)},
          {lv: 2, eff: '50,6', life: 233, atk: 28, ...getCosts('8', 2)},
          {lv: 3, eff: '60,7', life: 347, atk: 41, ...getCosts('8', 3)},
          {lv: 4, eff: '70,8', life: 478, atk: 56, ...getCosts('8', 4)},
          {lv: 5, eff: '80,9', life: 649, atk: 75, ...getCosts('8', 5)},
        ]
      },
    ]
  },
  {
    type: "9",
    segments: [
      {
        type: '1', text: '灵巧(提高x的闪避几率)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('9', 0)},
          {lv: 1, eff: '3%', life: 65, atk: 31, ...getCosts('9', 1)},
          {lv: 2, eff: '6%', life: 135, atk: 42, ...getCosts('9', 2)},
          {lv: 3, eff: '8%', life: 214, atk: 55, ...getCosts('9', 3)},
          {lv: 4, eff: '11%', life: 300, atk: 67, ...getCosts('9', 4)},
          {lv: 5, eff: '13%', life: 396, atk: 81, ...getCosts('9', 5)},
        ]
      },
      {
        type: '2', text: '虚化(将无视栅栏的阻拦)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('9', 0)},
          {lv: 1, eff: null, life: -258, atk: -20, ...getCosts('9', 1)},
          {lv: 2, eff: null, life: -135, atk: -11, ...getCosts('9', 2)},
          {lv: 3, eff: null, life: 0, atk: 0, ...getCosts('9', 3)},
          {lv: 4, eff: null, life: 150, atk: 11, ...getCosts('9', 4)},
          {lv: 5, eff: null, life: 316, atk: 23, ...getCosts('9', 5)},
        ]
      },
      {
        type: '3', text: '复活礼帽(被击杀后会复活，再次被击杀后不会，复活后的血量为原血量的x)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('9', 0)},
          {lv: 1, eff: '40%', life: 219, atk: 10, ...getCosts('9', 1)},
          {lv: 2, eff: '50%', life: 270, atk: 21, ...getCosts('9', 2)},
          {lv: 3, eff: '60%', life: 428, atk: 33, ...getCosts('9', 3)},
          {lv: 4, eff: '70%', life: 601, atk: 45, ...getCosts('9', 4)},
          {lv: 5, eff: '80%', life: 791, atk: 58, ...getCosts('9', 5)},
        ]
      },
    ]
  },
  {
    type: "10",
    segments: [
      {
        type: '1', text: '狙击(射程提升一格)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('10', 0)},
          {lv: 1, eff: null, life: 31, atk: 13, ...getCosts('10', 1)},
          {lv: 2, eff: null, life: 45, atk: 21, ...getCosts('10', 2)},
          {lv: 3, eff: null, life: 63, atk: 31, ...getCosts('10', 3)},
          {lv: 4, eff: null, life: 88, atk: 45, ...getCosts('10', 4)},
          {lv: 5, eff: null, life: 122, atk: 62, ...getCosts('10', 5)},
        ]
      },
      {
        type: '2', text: '停滞(被攻击中的目标速度降低x，攻击间隔增加1s，持续2s)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('10', 0)},
          {lv: 1, eff: '30%', life: 31, atk: 13, ...getCosts('10', 1)},
          {lv: 2, eff: '40%', life: 45, atk: 21, ...getCosts('10', 2)},
          {lv: 3, eff: '50%', life: 63, atk: 31, ...getCosts('10', 3)},
          {lv: 4, eff: '60%', life: 88, atk: 45, ...getCosts('10', 4)},
          {lv: 5, eff: '70%', life: 122, atk: 62, ...getCosts('10', 5)},
        ]
      },
      {
        type: '3', text: '穿刺(具有穿透效果，对后续路径上的敌方造成%伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('10', 0)},
          {lv: 1, eff: '50%', life: null, atk: null, ...getCosts('10', 1)},
          {lv: 2, eff: '55%', life: null, atk: null, ...getCosts('10', 2)},
          {lv: 3, eff: '60%', life: null, atk: null, ...getCosts('10', 3)},
          {lv: 4, eff: '65%', life: null, atk: null, ...getCosts('10', 4)},
          {lv: 5, eff: '70%', life: null, atk: null, ...getCosts('10', 5)},
        ]
      },
    ]
  },
  {
    type: "11",
    segments: [
      {
        type: '1', text: '榴弹炮(减小最小射程0.5格)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('11', 0)},
          {lv: 1, eff: null, life: 52, atk: 9, ...getCosts('11', 1)},
          {lv: 2, eff: null, life: 71, atk: 16, ...getCosts('11', 2)},
          {lv: 3, eff: null, life: 96, atk: 26, ...getCosts('11', 3)},
          {lv: 4, eff: null, life: 129, atk: 42, ...getCosts('11', 4)},
          {lv: 5, eff: null, life: 172, atk: 65, ...getCosts('11', 5)},
        ]
      },
      {
        type: '2', text: '集束炸弹(分裂为五颗小炮弹，造成溅射伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('11', 0)},
          {lv: 1, eff: null, life: 52, atk: 9, ...getCosts('11', 1)},
          {lv: 2, eff: null, life: 71, atk: 16, ...getCosts('11', 2)},
          {lv: 3, eff: null, life: 96, atk: 26, ...getCosts('11', 3)},
          {lv: 4, eff: null, life: 129, atk: 42, ...getCosts('11', 4)},
          {lv: 5, eff: null, life: 172, atk: 65, ...getCosts('11', 5)},
        ]
      },
      {
        type: '3', text: '锁定(追踪目标，被击中的单位不会受到治疗效果，持续3秒)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('11', 0)},
          {lv: 1, eff: null, life: 129, atk: 12, ...getCosts('11', 1)},
          {lv: 2, eff: null, life: 158, atk: 20, ...getCosts('11', 2)},
          {lv: 3, eff: null, life: 193, atk: 32, ...getCosts('11', 3)},
          {lv: 4, eff: null, life: 234, atk: 49, ...getCosts('11', 4)},
          {lv: 5, eff: null, life: 286, atk: 74, ...getCosts('11', 5)},
        ]
      },
    ]
  },
  {
    type: "13",
    segments: [
      {
        type: '1', text: '铁壁(减少x点所收到的伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('13', 0)},
          {lv: 1, eff: 10, life: 118, atk: null, ...getCosts('13', 1)},
          {lv: 2, eff: 12, life: 181, atk: null, ...getCosts('13', 2)},
          {lv: 3, eff: 15, life: 274, atk: null, ...getCosts('13', 3)},
          {lv: 4, eff: 21, life: 405, atk: null, ...getCosts('13', 4)},
          {lv: 5, eff: 28, life: 594, atk: null, ...getCosts('13', 5)},
        ]
      },
      {
        type: '2', text: '反击(反弹x伤害给进攻者)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('13', 0)},
          {lv: 1, eff: '14%', life: 157, atk: null, ...getCosts('13', 1)},
          {lv: 2, eff: '16%', life: 233, atk: null, ...getCosts('13', 2)},
          {lv: 3, eff: '18%', life: 342, atk: null, ...getCosts('13', 3)},
          {lv: 4, eff: '20%', life: 495, atk: null, ...getCosts('13', 4)},
          {lv: 5, eff: '22%', life: 713, atk: null, ...getCosts('13', 5)},
        ]
      },
      {
        type: '3', text: '爆破(栅栏被攻破时，身边的所有敌人造成x点伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('13', 0)},
          {lv: 1, eff: 100, life: null, atk: null, ...getCosts('13', 1)},
          {lv: 2, eff: 120, life: null, atk: null, ...getCosts('13', 2)},
          {lv: 3, eff: 140, life: null, atk: null, ...getCosts('13', 3)},
          {lv: 4, eff: 160, life: null, atk: null, ...getCosts('13', 4)},
          {lv: 5, eff: 180, life: null, atk: null, ...getCosts('13', 5)},
        ]
      },
    ]
  },
  {
    type: "14",
    segments: [
      {
        type: '1', text: '巨型炸药(攻击范围增加1)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('14', 0)},
          {lv: 1, eff: null, life: null, atk: 41, ...getCosts('14', 1)},
          {lv: 2, eff: null, life: null, atk: 77, ...getCosts('14', 2)},
          {lv: 3, eff: null, life: null, atk: 133, ...getCosts('14', 3)},
          {lv: 4, eff: null, life: null, atk: 205, ...getCosts('14', 4)},
          {lv: 5, eff: null, life: null, atk: 281, ...getCosts('14', 5)},
        ]
      },
      {
        type: '2', text: '震慑(击晕敌方数秒)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('14', 0)},
          {lv: 1, eff: null, life: null, atk: 55, ...getCosts('14', 1)},
          {lv: 2, eff: null, life: null, atk: 96, ...getCosts('14', 2)},
          {lv: 3, eff: null, life: null, atk: 160, ...getCosts('14', 3)},
          {lv: 4, eff: null, life: null, atk: 239, ...getCosts('14', 4)},
          {lv: 5, eff: null, life: null, atk: 322, ...getCosts('14', 5)},
        ]
      },
      {
        type: '3', text: '击飞(将敌方弹到下一层)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('14', 0)},
          {lv: 1, eff: null, life: null, atk: 41, ...getCosts('14', 1)},
          {lv: 2, eff: null, life: null, atk: 77, ...getCosts('14', 2)},
          {lv: 3, eff: null, life: null, atk: 133, ...getCosts('14', 3)},
          {lv: 4, eff: null, life: null, atk: 205, ...getCosts('14', 4)},
          {lv: 5, eff: null, life: null, atk: 281, ...getCosts('14', 5)},
        ]
      },
    ]
  },
  {
    type: "17",
    segments: [
      {
        type: '1', text: '迟疑(使敌方攻击间隔增加x,持续4s)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('17', 0)},
          {lv: 1, eff: '0.5s', life: null, atk: null, ...getCosts('17', 1)},
          {lv: 2, eff: '0.7s', life: null, atk: null, ...getCosts('17', 2)},
          {lv: 3, eff: '0.9s', life: null, atk: null, ...getCosts('17', 3)},
          {lv: 4, eff: '1.1s', life: null, atk: null, ...getCosts('17', 4)},
          {lv: 5, eff: '1.3s', life: null, atk: null, ...getCosts('17', 5)},
        ]
      },
      {
        type: '2', text: '剧毒陷阱(对敌方每秒造成x点伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('17', 0)},
          {lv: 1, eff: 5, life: null, atk: null, ...getCosts('17', 1)},
          {lv: 2, eff: 6, life: null, atk: null, ...getCosts('17', 2)},
          {lv: 3, eff: 7, life: null, atk: null, ...getCosts('17', 3)},
          {lv: 4, eff: 8, life: null, atk: null, ...getCosts('17', 4)},
          {lv: 5, eff: 9, life: null, atk: null, ...getCosts('17', 5)},
        ]
      },
      {
        type: '3', text: '蛛网陷阱(每隔x困住一个路过的敌方单位，持续2s)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('17', 0)},
          {lv: 1, eff: '15s', life: null, atk: null, ...getCosts('17', 1)},
          {lv: 2, eff: '13s', life: null, atk: null, ...getCosts('17', 2)},
          {lv: 3, eff: '11s', life: null, atk: null, ...getCosts('17', 3)},
          {lv: 4, eff: '9s', life: null, atk: null, ...getCosts('17', 4)},
          {lv: 5, eff: '7s', life: null, atk: null, ...getCosts('17', 5)},
        ]
      },
    ]
  },
  {
    type: "18",
    segments: [
      {
        type: '1', text: '分裂法球(攻击最多3个敌方单位，但只造成x伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('18', 0)},
          {lv: 1, eff: '40%', life: 125, atk: 21, ...getCosts('18', 1)},
          {lv: 2, eff: '45%', life: 183, atk: 30, ...getCosts('18', 2)},
          {lv: 3, eff: '50%', life: 255, atk: 42, ...getCosts('18', 3)},
          {lv: 4, eff: '55%', life: 348, atk: 55, ...getCosts('18', 4)},
          {lv: 5, eff: '60%', life: 463, atk: 72, ...getCosts('18', 5)},
        ]
      },
      {
        type: '2', text: '禁锢魔球(使目标无法行动1s)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('18', 0)},
          {lv: 1, eff: null, life: 63, atk: 11, ...getCosts('18', 1)},
          {lv: 2, eff: null, life: 110, atk: 18, ...getCosts('18', 2)},
          {lv: 3, eff: null, life: 170, atk: 28, ...getCosts('18', 3)},
          {lv: 4, eff: null, life: 248, atk: 40, ...getCosts('18', 4)},
          {lv: 5, eff: null, life: 347, atk: 54, ...getCosts('18', 5)},
        ]
      },
      {
        type: '3', text: '击毙(立即击杀血量低于x的单位)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('18', 0)},
          {lv: 1, eff: '13%', life: null, atk: null, ...getCosts('18', 1)},
          {lv: 2, eff: '16%', life: null, atk: null, ...getCosts('18', 2)},
          {lv: 3, eff: '19%', life: null, atk: null, ...getCosts('18', 3)},
          {lv: 4, eff: '22%', life: null, atk: null, ...getCosts('18', 4)},
          {lv: 5, eff: '25%', life: null, atk: null, ...getCosts('18', 5)},
        ]
      },
    ]
  },
  {
    type: "19",
    segments: [
      {
        type: '1', text: '巨人撕裂者(对敌方造成最大生命值x伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('19', 0)},
          {lv: 1, eff: '2%', life: null, atk: null, ...getCosts('19', 1)},
          {lv: 2, eff: '3%', life: null, atk: null, ...getCosts('19', 2)},
          {lv: 3, eff: '4%', life: null, atk: null, ...getCosts('19', 3)},
          {lv: 4, eff: '5%', life: null, atk: null, ...getCosts('19', 4)},
          {lv: 5, eff: '6%', life: null, atk: null, ...getCosts('19', 5)},
        ]
      },
      {
        type: '2', text: '斩杀(对敌方单位造成已损失生命值x伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('19', 0)},
          {lv: 1, eff: '10%', life: null, atk: null, ...getCosts('19', 1)},
          {lv: 2, eff: '12%', life: null, atk: null, ...getCosts('19', 2)},
          {lv: 3, eff: '14%', life: null, atk: null, ...getCosts('19', 3)},
          {lv: 4, eff: '16%', life: null, atk: null, ...getCosts('19', 4)},
          {lv: 5, eff: '18%', life: null, atk: null, ...getCosts('19', 5)},
        ]
      },
      {
        type: '3', text: '击晕(有x概率击晕目标1秒)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('19', 0)},
          {lv: 1, eff: '5%', life: null, atk: 22, ...getCosts('19', 1)},
          {lv: 2, eff: '8%', life: null, atk: 31, ...getCosts('19', 2)},
          {lv: 3, eff: '11%', life: null, atk: 44, ...getCosts('19', 3)},
          {lv: 4, eff: '15%', life: null, atk: 59, ...getCosts('19', 4)},
          {lv: 5, eff: '20%', life: null, atk: 79, ...getCosts('19', 5)},
        ]
      },
    ]
  },
  {
    type: "20",
    segments: [
      {
        type: '1', text: '激光箭(每隔3s造成巨大伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('20', 0)},
          {lv: 1, eff: null, life: 122, atk: 280, ...getCosts('20', 1)},
          {lv: 2, eff: null, life: 178, atk: 323, ...getCosts('20', 2)},
          {lv: 3, eff: null, life: 253, atk: 390, ...getCosts('20', 3)},
          {lv: 4, eff: null, life: 344, atk: 462, ...getCosts('20', 4)},
          {lv: 5, eff: null, life: 453, atk: 541, ...getCosts('20', 5)},
        ]
      },
      {
        type: '2', text: '雷击(基础伤害大幅提高，但攻击时伤害不再增加)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('20', 0)},
          {lv: 1, eff: null, life: 122, atk: 51, ...getCosts('20', 1)},
          {lv: 2, eff: null, life: 178, atk: 61, ...getCosts('20', 2)},
          {lv: 3, eff: null, life: 253, atk: 76, ...getCosts('20', 3)},
          {lv: 4, eff: null, life: 344, atk: 92, ...getCosts('20', 4)},
          {lv: 5, eff: null, life: 453, atk: 110, ...getCosts('20', 5)},
        ]
      },
      {
        type: '3', text: '嗜血射线(每当祖玛击杀一个怪物提高5点，杀死英雄提高10点)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('20', 0)},
          {lv: 1, eff: null, life: 243, atk: 10, ...getCosts('20', 1)},
          {lv: 2, eff: null, life: 312, atk: 12, ...getCosts('20', 2)},
          {lv: 3, eff: null, life: 404, atk: 15, ...getCosts('20', 3)},
          {lv: 4, eff: null, life: 515, atk: 19, ...getCosts('20', 4)},
          {lv: 5, eff: null, life: 648, atk: 23, ...getCosts('20', 5)},
        ]
      },
    ]
  },
  {
    type: "22",
    segments: [
      {
        type: '1', text: '炼狱(滚石经过的区域会被燃烧5秒并对敌方造成每秒x伤害)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('22', 0)},
          {lv: 1, eff: 18, life: null, atk: 49, ...getCosts('22', 1)},
          {lv: 2, eff: 25, life: null, atk: 68, ...getCosts('22', 2)},
          {lv: 3, eff: 33, life: null, atk: 89, ...getCosts('22', 3)},
          {lv: 4, eff: 42, life: null, atk: 113, ...getCosts('22', 4)},
          {lv: 5, eff: 52, life: null, atk: 139, ...getCosts('22', 5)},
        ]
      },
      {
        type: '2', text: '冻结(被滚石伤害到的单位被冻结在原地x秒)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('22', 0)},
          {lv: 1, eff: '1s', life: null, atk: 61, ...getCosts('22', 1)},
          {lv: 2, eff: '1s', life: null, atk: 85, ...getCosts('22', 2)},
          {lv: 3, eff: '1s', life: null, atk: 111, ...getCosts('22', 3)},
          {lv: 4, eff: '2s', life: null, atk: 141, ...getCosts('22', 4)},
          {lv: 5, eff: '2s', life: null, atk: 173, ...getCosts('22', 5)},
        ]
      },
      {
        type: '3', text: '碾压(直接杀死沿途血量低于x点的单位)',
        data: [
          {lv: 0, eff: null, life: null, atk: null, ...getCosts('22', 0)},
          {lv: 1, eff: 568, life: null, atk: 81, ...getCosts('22', 1)},
          {lv: 2, eff: 634, life: null, atk: 106, ...getCosts('22', 2)},
          {lv: 3, eff: 713, life: null, atk: 134, ...getCosts('22', 3)},
          {lv: 4, eff: 799, life: null, atk: 165, ...getCosts('22', 4)},
          {lv: 5, eff: 891, life: null, atk: 198, ...getCosts('22', 5)},
        ]
      },
    ]
  },
];