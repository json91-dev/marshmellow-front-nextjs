// 상태 정의
// export const LuckyDrawCardState = {
//   DEFAULT: 'default',
//   LOSE: 'lose',
//   FIRST: 'firstPrize',
//   SECOND: 'secondPrize',
//   THIRD: 'thirdPrize',
// };

enum LuckyDrawCardState {
  DEFAULT = 'default',
  LOSE = 'lose',
  FIRST = 'firstPrize',
  SECOND = 'secondPrize',
  THIRD = 'thirdPrize',
}

export type LuckyDrawCard = {
  id: number;
  status: 'default' | 'lose' | 'firstPrize' | 'secondPrize' | 'thirdPrize';
};

export type LuckyDrawCardsItem = LuckyDrawCard[][];

export const dummyLuckyDrawResearchItems = [
  { id: 1, name: '태블릿' },
  { id: 2, name: '노트북' },
  { id: 3, name: '모니터' },
  { id: 4, name: '의자' },
  { id: 5, name: '커피머신' },
  { id: 6, name: '공기청정기' },
  { id: 6, name: '배달음식' },
  { id: 7, name: '옷' },
  { id: 8, name: '텀블러' },
  { id: 9, name: '마우스' },
  { id: 10, name: '키보드' },
  { id: 11, name: '안마기' },
  { id: 12, name: '태블릿' },
  { id: 13, name: '기타' },
];

export const dummyLuckyDrawCardsData: LuckyDrawCardsItem = [
  [
    {
      id: 1,
      status: 'default',
    },
    {
      id: 2,
      status: 'default',
    },
    {
      id: 3,
      status: 'default',
    },
    {
      id: 4,
      status: 'default',
    },
    {
      id: 5,
      status: 'default',
    },
    {
      id: 6,
      status: 'default',
    },
    {
      id: 7,
      status: 'default',
    },
    {
      id: 8,
      status: 'default',
    },
    {
      id: 9,
      status: 'default',
    },
    {
      id: 10,
      status: 'default',
    },
    {
      id: 11,
      status: 'default',
    },
    {
      id: 12,
      status: 'default',
    },
    {
      id: 13,
      status: 'default',
    },
    {
      id: 14,
      status: 'default',
    },
    {
      id: 15,
      status: 'default',
    },
    {
      id: 16,
      status: 'default',
    },
    {
      id: 17,
      status: 'default',
    },
    {
      id: 18,
      status: 'default',
    },
    {
      id: 19,
      status: 'default',
    },
    {
      id: 20,
      status: 'default',
    },
    {
      id: 21,
      status: 'default',
    },
    {
      id: 22,
      status: 'default',
    },
    {
      id: 23,
      status: 'default',
    },
    {
      id: 24,
      status: 'default',
    },
    {
      id: 25,
      status: 'default',
    },
    {
      id: 26,
      status: 'default',
    },
    {
      id: 27,
      status: 'default',
    },
    {
      id: 28,
      status: 'default',
    },
    {
      id: 29,
      status: 'default',
    },
    {
      id: 30,
      status: 'default',
    },
    {
      id: 31,
      status: 'default',
    },
    {
      id: 32,
      status: 'default',
    },
    {
      id: 33,
      status: 'default',
    },
    {
      id: 34,
      status: 'default',
    },
    {
      id: 35,
      status: 'default',
    },
    {
      id: 36,
      status: 'default',
    },
    {
      id: 37,
      status: 'default',
    },
    {
      id: 38,
      status: 'default',
    },
    {
      id: 39,
      status: 'default',
    },
    {
      id: 40,
      status: 'default',
    },
    {
      id: 41,
      status: 'default',
    },
    {
      id: 42,
      status: 'default',
    },
    {
      id: 43,
      status: 'default',
    },
    {
      id: 44,
      status: 'default',
    },
    {
      id: 45,
      status: 'default',
    },
    {
      id: 46,
      status: 'default',
    },
    {
      id: 47,
      status: 'default',
    },
    {
      id: 48,
      status: 'default',
    },
    {
      id: 49,
      status: 'default',
    },
    {
      id: 50,
      status: 'default',
    },
  ],
  [
    {
      id: 51,
      status: 'default',
    },
    {
      id: 52,
      status: 'default',
    },
    {
      id: 53,
      status: 'default',
    },
    {
      id: 54,
      status: 'default',
    },
    {
      id: 55,
      status: 'default',
    },
    {
      id: 56,
      status: 'default',
    },
    {
      id: 57,
      status: 'default',
    },
    {
      id: 58,
      status: 'default',
    },
    {
      id: 59,
      status: 'default',
    },
    {
      id: 60,
      status: 'default',
    },
    {
      id: 61,
      status: 'default',
    },
    {
      id: 62,
      status: 'default',
    },
    {
      id: 63,
      status: 'default',
    },
    {
      id: 64,
      status: 'default',
    },
    {
      id: 65,
      status: 'default',
    },
    {
      id: 66,
      status: 'default',
    },
    {
      id: 67,
      status: 'default',
    },
    {
      id: 68,
      status: 'default',
    },
    {
      id: 69,
      status: 'default',
    },
    {
      id: 70,
      status: 'default',
    },
    {
      id: 71,
      status: 'default',
    },
    {
      id: 72,
      status: 'default',
    },
    {
      id: 73,
      status: 'default',
    },
    {
      id: 74,
      status: 'default',
    },
    {
      id: 75,
      status: 'default',
    },
    {
      id: 76,
      status: 'default',
    },
    {
      id: 77,
      status: 'default',
    },
    {
      id: 78,
      status: 'default',
    },
    {
      id: 79,
      status: 'default',
    },
    {
      id: 80,
      status: 'default',
    },
    {
      id: 81,
      status: 'default',
    },
    {
      id: 82,
      status: 'default',
    },
    {
      id: 83,
      status: 'default',
    },
    {
      id: 84,
      status: 'default',
    },
    {
      id: 85,
      status: 'default',
    },
    {
      id: 86,
      status: 'default',
    },
    {
      id: 87,
      status: 'default',
    },
    {
      id: 88,
      status: 'default',
    },
    {
      id: 89,
      status: 'default',
    },
    {
      id: 90,
      status: 'default',
    },
    {
      id: 91,
      status: 'default',
    },
    {
      id: 92,
      status: 'default',
    },
    {
      id: 93,
      status: 'default',
    },
    {
      id: 94,
      status: 'default',
    },
    {
      id: 95,
      status: 'default',
    },
    {
      id: 96,
      status: 'default',
    },
    {
      id: 97,
      status: 'default',
    },
    {
      id: 98,
      status: 'default',
    },
    {
      id: 99,
      status: 'default',
    },
    {
      id: 100,
      status: 'default',
    },
  ],
  [
    {
      id: 101,
      status: 'default',
    },
    {
      id: 102,
      status: 'default',
    },
    {
      id: 103,
      status: 'default',
    },
    {
      id: 104,
      status: 'default',
    },
    {
      id: 105,
      status: 'default',
    },
    {
      id: 106,
      status: 'default',
    },
    {
      id: 107,
      status: 'default',
    },
    {
      id: 108,
      status: 'default',
    },
    {
      id: 109,
      status: 'default',
    },
    {
      id: 110,
      status: 'default',
    },
    {
      id: 111,
      status: 'default',
    },
    {
      id: 112,
      status: 'default',
    },
    {
      id: 113,
      status: 'default',
    },
    {
      id: 114,
      status: 'default',
    },
    {
      id: 115,
      status: 'default',
    },
    {
      id: 116,
      status: 'default',
    },
    {
      id: 117,
      status: 'default',
    },
    {
      id: 118,
      status: 'default',
    },
    {
      id: 119,
      status: 'default',
    },
    {
      id: 120,
      status: 'default',
    },
    {
      id: 121,
      status: 'default',
    },
    {
      id: 122,
      status: 'default',
    },
    {
      id: 123,
      status: 'default',
    },
    {
      id: 124,
      status: 'default',
    },
    {
      id: 125,
      status: 'default',
    },
    {
      id: 126,
      status: 'default',
    },
    {
      id: 127,
      status: 'default',
    },
    {
      id: 128,
      status: 'default',
    },
    {
      id: 129,
      status: 'default',
    },
    {
      id: 130,
      status: 'default',
    },
    {
      id: 131,
      status: 'default',
    },
    {
      id: 132,
      status: 'default',
    },
    {
      id: 133,
      status: 'default',
    },
    {
      id: 134,
      status: 'default',
    },
    {
      id: 135,
      status: 'default',
    },
    {
      id: 136,
      status: 'default',
    },
    {
      id: 137,
      status: 'default',
    },
    {
      id: 138,
      status: 'default',
    },
    {
      id: 139,
      status: 'default',
    },
    {
      id: 140,
      status: 'default',
    },
    {
      id: 141,
      status: 'default',
    },
    {
      id: 142,
      status: 'default',
    },
    {
      id: 143,
      status: 'default',
    },
    {
      id: 144,
      status: 'default',
    },
    {
      id: 145,
      status: 'default',
    },
    {
      id: 146,
      status: 'default',
    },
    {
      id: 147,
      status: 'default',
    },
    {
      id: 148,
      status: 'default',
    },
    {
      id: 149,
      status: 'default',
    },
    {
      id: 150,
      status: 'default',
    },
  ],
  [
    {
      id: 151,
      status: 'default',
    },
    {
      id: 152,
      status: 'default',
    },
    {
      id: 153,
      status: 'default',
    },
    {
      id: 154,
      status: 'default',
    },
    {
      id: 155,
      status: 'default',
    },
    {
      id: 156,
      status: 'default',
    },
    {
      id: 157,
      status: 'default',
    },
    {
      id: 158,
      status: 'default',
    },
    {
      id: 159,
      status: 'default',
    },
    {
      id: 160,
      status: 'default',
    },
    {
      id: 161,
      status: 'default',
    },
    {
      id: 162,
      status: 'default',
    },
    {
      id: 163,
      status: 'default',
    },
    {
      id: 164,
      status: 'default',
    },
    {
      id: 165,
      status: 'default',
    },
    {
      id: 166,
      status: 'default',
    },
    {
      id: 167,
      status: 'default',
    },
    {
      id: 168,
      status: 'default',
    },
    {
      id: 169,
      status: 'default',
    },
    {
      id: 170,
      status: 'default',
    },
    {
      id: 171,
      status: 'default',
    },
    {
      id: 172,
      status: 'default',
    },
    {
      id: 173,
      status: 'default',
    },
    {
      id: 174,
      status: 'default',
    },
    {
      id: 175,
      status: 'default',
    },
    {
      id: 176,
      status: 'default',
    },
    {
      id: 177,
      status: 'default',
    },
    {
      id: 178,
      status: 'default',
    },
    {
      id: 179,
      status: 'default',
    },
    {
      id: 180,
      status: 'default',
    },
    {
      id: 181,
      status: 'default',
    },
    {
      id: 182,
      status: 'default',
    },
    {
      id: 183,
      status: 'default',
    },
    {
      id: 184,
      status: 'default',
    },
    {
      id: 185,
      status: 'default',
    },
    {
      id: 186,
      status: 'default',
    },
    {
      id: 187,
      status: 'default',
    },
    {
      id: 188,
      status: 'default',
    },
    {
      id: 189,
      status: 'default',
    },
    {
      id: 190,
      status: 'default',
    },
    {
      id: 191,
      status: 'default',
    },
    {
      id: 192,
      status: 'default',
    },
    {
      id: 193,
      status: 'default',
    },
    {
      id: 194,
      status: 'default',
    },
    {
      id: 195,
      status: 'default',
    },
    {
      id: 196,
      status: 'default',
    },
    {
      id: 197,
      status: 'default',
    },
    {
      id: 198,
      status: 'default',
    },
    {
      id: 199,
      status: 'default',
    },
    {
      id: 200,
      status: 'default',
    },
  ],
  [
    {
      id: 201,
      status: 'default',
    },
    {
      id: 202,
      status: 'default',
    },
    {
      id: 203,
      status: 'default',
    },
    {
      id: 204,
      status: 'default',
    },
    {
      id: 205,
      status: 'default',
    },
    {
      id: 206,
      status: 'default',
    },
    {
      id: 207,
      status: 'default',
    },
    {
      id: 208,
      status: 'default',
    },
    {
      id: 209,
      status: 'default',
    },
    {
      id: 210,
      status: 'default',
    },
    {
      id: 211,
      status: 'default',
    },
    {
      id: 212,
      status: 'default',
    },
    {
      id: 213,
      status: 'default',
    },
    {
      id: 214,
      status: 'default',
    },
    {
      id: 215,
      status: 'default',
    },
    {
      id: 216,
      status: 'default',
    },
    {
      id: 217,
      status: 'default',
    },
    {
      id: 218,
      status: 'default',
    },
    {
      id: 219,
      status: 'default',
    },
    {
      id: 220,
      status: 'default',
    },
    {
      id: 221,
      status: 'default',
    },
    {
      id: 222,
      status: 'default',
    },
    {
      id: 223,
      status: 'default',
    },
    {
      id: 224,
      status: 'default',
    },
    {
      id: 225,
      status: 'default',
    },
    {
      id: 226,
      status: 'default',
    },
    {
      id: 227,
      status: 'default',
    },
    {
      id: 228,
      status: 'default',
    },
    {
      id: 229,
      status: 'default',
    },
    {
      id: 230,
      status: 'default',
    },
    {
      id: 231,
      status: 'default',
    },
    {
      id: 232,
      status: 'default',
    },
    {
      id: 233,
      status: 'default',
    },
    {
      id: 234,
      status: 'default',
    },
    {
      id: 235,
      status: 'default',
    },
    {
      id: 236,
      status: 'default',
    },
    {
      id: 237,
      status: 'default',
    },
    {
      id: 238,
      status: 'default',
    },
    {
      id: 239,
      status: 'default',
    },
    {
      id: 240,
      status: 'default',
    },
    {
      id: 241,
      status: 'default',
    },
    {
      id: 242,
      status: 'default',
    },
    {
      id: 243,
      status: 'default',
    },
    {
      id: 244,
      status: 'default',
    },
    {
      id: 245,
      status: 'default',
    },
    {
      id: 246,
      status: 'default',
    },
    {
      id: 247,
      status: 'default',
    },
    {
      id: 248,
      status: 'default',
    },
    {
      id: 249,
      status: 'default',
    },
    {
      id: 250,
      status: 'default',
    },
  ],
  [
    {
      id: 251,
      status: 'default',
    },
    {
      id: 252,
      status: 'default',
    },
    {
      id: 253,
      status: 'default',
    },
    {
      id: 254,
      status: 'default',
    },
    {
      id: 255,
      status: 'default',
    },
    {
      id: 256,
      status: 'default',
    },
    {
      id: 257,
      status: 'default',
    },
    {
      id: 258,
      status: 'default',
    },
    {
      id: 259,
      status: 'default',
    },
    {
      id: 260,
      status: 'default',
    },
    {
      id: 261,
      status: 'default',
    },
    {
      id: 262,
      status: 'default',
    },
    {
      id: 263,
      status: 'default',
    },
    {
      id: 264,
      status: 'default',
    },
    {
      id: 265,
      status: 'default',
    },
    {
      id: 266,
      status: 'default',
    },
    {
      id: 267,
      status: 'default',
    },
    {
      id: 268,
      status: 'default',
    },
    {
      id: 269,
      status: 'default',
    },
    {
      id: 270,
      status: 'default',
    },
    {
      id: 271,
      status: 'default',
    },
    {
      id: 272,
      status: 'default',
    },
    {
      id: 273,
      status: 'default',
    },
    {
      id: 274,
      status: 'default',
    },
    {
      id: 275,
      status: 'default',
    },
    {
      id: 276,
      status: 'default',
    },
    {
      id: 277,
      status: 'default',
    },
    {
      id: 278,
      status: 'default',
    },
    {
      id: 279,
      status: 'default',
    },
    {
      id: 280,
      status: 'default',
    },
    {
      id: 281,
      status: 'default',
    },
    {
      id: 282,
      status: 'default',
    },
    {
      id: 283,
      status: 'default',
    },
    {
      id: 284,
      status: 'default',
    },
    {
      id: 285,
      status: 'default',
    },
    {
      id: 286,
      status: 'default',
    },
    {
      id: 287,
      status: 'default',
    },
    {
      id: 288,
      status: 'default',
    },
    {
      id: 289,
      status: 'default',
    },
    {
      id: 290,
      status: 'default',
    },
    {
      id: 291,
      status: 'default',
    },
    {
      id: 292,
      status: 'default',
    },
    {
      id: 293,
      status: 'default',
    },
    {
      id: 294,
      status: 'default',
    },
    {
      id: 295,
      status: 'default',
    },
    {
      id: 296,
      status: 'default',
    },
    {
      id: 297,
      status: 'default',
    },
    {
      id: 298,
      status: 'default',
    },
    {
      id: 299,
      status: 'default',
    },
    {
      id: 300,
      status: 'default',
    },
  ],
];
