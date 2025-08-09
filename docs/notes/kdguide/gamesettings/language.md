---
title: 设置语言
icon: carbon:translate
permalink: /gamesettings/language/
---

## 浏览器/游戏本体

点击右下角文字提示 `Language ->` 右侧的按钮，直到按钮显示文字 `CN`，刷新网页或重启游戏即可

## JoiPlay

启动游戏后，JoiPlay会在游戏目录添加一个 `save` 文件夹用于存放游戏的本地数据

```bash
└─/KinkyDungeon
    ...
    ├─/out
    ├─/save # [!code ++]
    ├─/Screens
    ...
    └─index.html
```

在游戏中按照前文 [浏览器或游戏本体](#浏览器游戏本体) 的语言设置方法点击过后，在 `save` 文件夹中会创建一个 `BondageClubLanguage` 文件，反之则需要自行创建

修改 `BondageClubLanguage` 文件内容为

```none title="BondageClubLanguage" twoslash
CN
```

启动游戏即可
