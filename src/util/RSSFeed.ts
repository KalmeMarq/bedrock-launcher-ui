export interface IFeed {
  title: string,
  description: string,
  image: string,
  link: string,
  tag: string,
  date: string,
  id: string
}

const RSSFeed: IFeed[] = [
  {
    title: 'Students Battle for a Better City in Minecraft on ESPN!',
    description: 'Battle of the Boroughs finals August 8th',
    image: '/content/dam/community/fy22/community-news/battle-ofthe-boroughs/Article-Thumb-277x277.png',
    link: 'https://www.minecraft.net/en-us/article/students-battle-better-city-minecraft-espn-',
    tag: 'News',
    date: 'Fri, 6 Aug 2021 17:43:59 +0000',
    id: 'https://www.minecraft.net/en-us/article/students-battle-better-city-minecraft-espn-'
  },
  {
    title: 'Realms Plus August',
    link: 'https://www.minecraft.net/en-us/article/realms-plus-august',
    description: 'The latest maps, skins, and adventures from the Minecraft Marketplace!',
    image: '/content/dam/games/minecraft/realms/MCMKT_RealmsPlus_August2021_NET_277x277.jpg',
    tag: 'Marketplace',
    date: 'Thu, 5 Aug 2021 16:56:13 +0000',
    id: 'https://www.minecraft.net/en-us/article/realms-plus-august'
  },
  {
    title: 'Taking Inventory Flower Pot',
    link: 'https://www.minecraft.net/en-us/article/taking-inventory-flower-pot',
    description: 'What is this? A pot for plants?',
    image: '/content/dam/games/minecraft/screenshots/flowerpot-1x1.jpg',
    tag: 'Deep Dives',
    date: 'Thu, 5 Aug 2021 14:51:00 +0000',
    id: 'https://www.minecraft.net/en-us/article/taking-inventory-flower-pot'
  },
  {
    title: 'BI-MONTHLY BUILD CHALLENGE: TRAINS!',
    link: 'https://www.minecraft.net/en-us/article/bi-monthly-build-challenge--trains-',
    description: 'No train, no gain',
    image: '/content/dam/community/fy22/community-townhall/buildchallenge-trains/CEa_TIde_277x277.jpg',
    tag: 'Minecraft Builds',
    date: 'Thu, 5 Aug 2021 07:00:00 +0000',
    id: 'https://www.minecraft.net/en-us/article/bi-monthly-build-challenge--trains-'
  },
  {
    title: 'It takes a Village',
    link: 'https://www.minecraft.net/en-us/article/it-takes-village',
    description: 'Element Animation brings villagers to life!',
    image: '/content/dam/games/minecraft/game-characters/villagernews-1x1.jpg',
    tag: 'Deep Dives',
    date: 'Wed, 4 Aug 2021 14:50:27 +0000',
    id: 'https://www.minecraft.net/en-us/article/it-takes-village'
  },
  {
    title: 'Join the Major League Baseball Home Run Derby',
    link: 'https://www.minecraft.net/en-us/article/join-major-league-baseball-home-run-derby',
    description: 'Time to run home and hit home runs!',
    image: '/content/dam/games/minecraft/marketplace/MLBDLC_.netBlogEditorial_277x277.jpg',
    tag: 'Marketplace',
    date: 'Tue, 3 Aug 2021 16:57:24 +0000',
    id: 'https://www.minecraft.net/en-us/article/join-major-league-baseball-home-run-derby'
  },
  {
    title: 'Check out this record-breaking survival gold farm! ',
    link: 'https://www.minecraft.net/en-us/article/check-out-record-breaking-survival-gold-farm-',
    description: 'That’s a lot of enchanted apples',
    image: '/content/dam/community/fy22/community-townhall/elrichmc-feature/thumbnail.png',
    tag: 'Minecraft Builds',
    date: 'Tue, 3 Aug 2021 07:00:00 +0000',
    id: 'https://www.minecraft.net/en-us/article/check-out-record-breaking-survival-gold-farm-'
  },
  {
    title: 'Spot The Difference: Summer Edition',
    link: 'https://www.minecraft.net/en-us/article/spot-the-difference--summer-edition',
    description: 'Nice day for a picnic',
    image: '/content/dam/community/fy22/community-townhall/spot-the-difference-summer/spot-the-difference_web_277x277.png',
    tag: 'Minecraft Builds',
    date: 'Fri, 30 Jul 2021 19:30:20 +0000',
    id: 'https://www.minecraft.net/en-us/article/spot-the-difference--summer-edition'
  },
  {
    title: 'Around the Block: Ice Spikes',
    link: 'https://www.minecraft.net/en-us/article/around-block--ice-spikes',
    description: 'Nice spikes!',
    image: '/content/dam/games/minecraft/screenshots/icespikes-1x1.jpg',
    tag: 'Deep Dives',
    date: 'Thu, 29 Jul 2021 14:55:20 +0000',
    id: 'https://www.minecraft.net/en-us/article/around-block--ice-spikes'
  },
  {
    title: 'Echoing Void has arrived',
    link: 'https://www.minecraft.net/en-us/article/echoing-void-has-arrived',
    description: 'Time to end this!',
    image: '/content/dam/games/dungeons/key-art/ev-1x1(2).jpg',
    tag: 'News',
    date: 'Wed, 28 Jul 2021 14:57:04 +0000',
    id: 'https://www.minecraft.net/en-us/article/echoing-void-has-arrived'
  },
  {
    title: 'New show alert: The Secrets of Minecraft',
    link: 'https://www.minecraft.net/en-us/article/new-show-alert--the-secrets-minecraft',
    description: 'Meet the stars of our new YouTube series! ',
    image: '/content/dam/games/minecraft/game-characters/secrets-1x1.jpg',
    tag: 'News',
    date: 'Mon, 26 Jul 2021 14:50:34 +0000',
    id: 'https://www.minecraft.net/en-us/article/new-show-alert--the-secrets-minecraft'
  },
  {
    title: 'Meet the Enderlings',
    link: 'https://www.minecraft.net/en-us/article/meet-enderlings',
    description: 'Endermen endier than before!',
    image: '/content/dam/games/dungeons/game-characters/enderlings-1x1.jpg',
    tag: 'Deep Dives',
    date: 'Sun, 25 Jul 2021 14:45:14 +0000',
    id: 'https://www.minecraft.net/en-us/article/meet-enderlings'
  },
  {
    title: 'Minecraft Dungeons Oceans FanArt',
    link: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-oceans-fanart',
    description: 'Dive deep into this collection!',
    image: '/content/dam/community/fy22/community-townhall/dungeonsoceansfanart/oceans-fanart_277x277.png',
    tag: 'Minecraft Builds',
    date: 'Thu, 22 Jul 2021 16:34:31 +0000',
    id: 'https://www.minecraft.net/en-us/article/minecraft-dungeons-oceans-fanart'
  },
  {
    title: 'Block of the Week: Cartography Table',
    link: 'https://www.minecraft.net/en-us/article/block-week--cartography-table',
    description: 'Mappy days!',
    image: '/content/dam/games/minecraft/screenshots/carto-1x1.jpg',
    tag: 'Deep Dives',
    date: 'Thu, 22 Jul 2021 14:50:54 +0000',
    id: 'https://www.minecraft.net/en-us/article/block-week--cartography-table'
  },
  {
    title: 'Caves &amp; Cliffs Pt. 1 Community Builds',
    link: 'https://www.minecraft.net/en-us/article/caves---cliffs-pt--1-community-builds',
    description: 'The Community Built it Best',
    image: '/content/dam/community/fy22/community-townhall/c-c-buildsfeature/BielSpirit_277x277.png',
    tag: 'Minecraft Builds',
    date: 'Wed, 21 Jul 2021 20:24:18 +0000',
    id: 'https://www.minecraft.net/en-us/article/caves---cliffs-pt--1-community-builds'
  },
  {
    title: 'Pride 2021 Community Skins',
    link: 'https://www.minecraft.net/en-us/article/pride-2021-community-skins',
    description: 'Calling all creators!',
    image: '/content/dam/games/minecraft/key-art/Pride2021_tile.jpg',
    tag: 'News',
    date: 'Wed, 21 Jul 2021 14:55:03 +0000',
    id: 'https://www.minecraft.net/en-us/article/pride-2021-community-skins'
  },
  {
    title: 'Exploring the End Wilds',
    link: 'https://www.minecraft.net/en-us/article/exploring-end-wilds',
    description: 'A sneak peek at Echoing Void’s new mission! ',
    image: '/content/dam/games/dungeons/screenshots/endwilds-1x1.jpg',
    tag: 'Deep Dives',
    date: 'Sun, 18 Jul 2021 16:50:17 +0000',
    id: 'https://www.minecraft.net/en-us/article/exploring-end-wilds'
  },
  {
    title: 'Illuminations Minions Minecraft DLC launches today',
    link: 'https://www.minecraft.net/en-us/article/illuminations-minions-minecraft-dlc-launches-today',
    description: 'Chaos descends upon the Overworld!',
    image: '/content/dam/games/minecraft/marketplace/minions_tile.jpg',
    tag: 'Marketplace',
    date: 'Fri, 16 Jul 2021 16:58:59 +0000',
    id: 'https://www.minecraft.net/en-us/article/illuminations-minions-minecraft-dlc-launches-today'
  },
  {
    title: 'Taking Inventory: Totem of Undying',
    link: 'https://www.minecraft.net/en-us/article/taking-inventory--totem-undying',
    description: 'A second chance at life',
    image: '/content/dam/games/minecraft/screenshots/totem-1x1.jpg',
    tag: 'Deep Dives',
    date: 'Fri, 16 Jul 2021 14:50:42 +0000',
    id: 'https://www.minecraft.net/en-us/article/taking-inventory--totem-undying'
  }
]

export default RSSFeed