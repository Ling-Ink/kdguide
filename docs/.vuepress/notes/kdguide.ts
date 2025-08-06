import type { ThemeNote } from 'vuepress-theme-plume'
import { defineNoteConfig } from 'vuepress-theme-plume'

export const kdguide = defineNoteConfig({
  dir: 'kdguide',
  link: '/',
  sidebar: [
    {
      text: '获取游戏',
      collapsed: false,
      icon: 'carbon:idea',
      prefix: 'getgame',
      items: [
        'browser',
        'application',
        'mobile',
      ],
    },
    {
      text: '设置游戏',
      collapsed: false,
      icon: 'carbon:settings',
      prefix: 'gamesettings',
      items: [
        'language'
      ],
    },
  ],
})
