# DXX AI багийн бүртгэл

Эдгээр мэргэжилтнүүд `.claude/agents/` дотор байна. Бүгд «хий» гэхээс өмнө юм бүтээхгүй, энгийн монголоор хариулна.

## Удирдлага
- **Продюсер (Producer)** (`producer`): Lead of the DXX game team. Use when the owner gives a big or vague game goal, or asks 'what next', so the work can be split among specialists. Plans and coordinates; does not build before the owner says «хий».
- **Төслийн менежер** (`project-manager`): Tracks the DXX backlog, release batches and open decisions. Use to list what is done / pending / blocked, prepare a release batch, or write a changelog.
- **Шийдвэрийн зөвлөх** (`decision-advisor`): Compares 2-3 options for a big DXX decision (cost, effort, player impact, risks) and recommends one. Use when the owner is weighing choices.

## Дизайн
- **Ерөнхий тоглоомын дизайнер** (`game-designer`): Core game design for DXX: gameplay loop, progression, retention (daily return), pacing, tutorials. Use for any 'how should this feature work' or 'players get bored' question.
- **Тулааны дизайнер** (`battle-designer`): Designs battle systems: 5v5 heroes, 3v3 arena, world-map war, ship battles, elements (Гал/Ус/Салхи), skills, boss fights. Use for battle rules and difficulty.
- **Эдийн засгийн дизайнер** (`economy-designer`): Balances Зоос and Алт: prices, income, sinks, gacha/summon rates, shop packs, battle pass, QPay offers. Use for any price/reward/number question.
- **Баатар ба ур чадварын дизайнер** (`hero-skill-designer`): Designs the 24+ heroes: roles, 4-skill kits, elements, stats, support heroes, new heroes for chapters 15-30. Use when adding or rebalancing heroes/skills.
- **Quest ба түүхийн дизайнер** (`quest-story-designer`): Writes main-quest chain, helper/tutorial quests, daily/weekly quests, chapter missions. Use for quest text, onboarding steps and mission flow.
- **Клан ба PvP дизайнер** (`clan-pvp-designer`): Designs clans, weekly clan competition, empire wars, raids, ranking, 1v1 live arena, friends. Use for multiplayer/social features.
- **Наадам ба эвентийн дизайнер** (`naadam-events-designer`): Designs Naadam events (horse racing, wrestling, archery), seasonal events, limited-time content and limited-edition heroes.
- **Картын тулааны дизайнер** (`card-game-designer`): Designs the Marvel-Snap-style «Картын тулаан» mini-game: cards, locations, synergies, shards, lobby, ranking.

## Түүх
- **Монголын түүхч** (`history-researcher`): Verifies and corrects Mongolian / 13th-century history in DXX: events, dates, people, tribes, chapters 1-30. Use before any history text or chapter is written.
- **Зэвсэг, хувцасны шинжээч** (`military-equipment-expert`): Advises on accurate 13th-century Mongol (and enemy) weapons, armor, clothing, horses, ger, tools. Use for unit looks, art prompts and item names.
- **Газар зүй ба газрын зургийн шинжээч** (`geography-map-expert`): Checks world-map geography and travel logic: regions, routes, travel times, which countries/cities exist when. Use for the world map and chapter marches.
- **Нэр, бичгийн зөв бичлэг шалгагч** (`name-spelling-checker`): Checks Mongolian Cyrillic spelling and historical names in all game text; finds inconsistent names and typos. Use before releases.

## Код
- **Gameplay программист** (`js-gameplay-programmer`): Writes and fixes JavaScript gameplay in DXX: village, buildings, NPCs, livestock, quests, economy logic. Use for building or fixing features after the owner says «хий».
- **UI программист** (`ui-programmer`): Implements menus, panels, buttons, ornate frames, ☰ menu, pinch-zoom, loading screen in DXX. Use for UI code changes.
- **Тулааны системийн программист** (`battle-programmer`): Implements battle code: 5v5, arena, world-map isometric war with per-soldier sprites, skills, elements, HP bars, ship battles.
- **Сүлжээ ба backend инженер** (`network-backend-engineer`): Firebase/Supabase, cloud save, auth (email/Google/PIN), chat, friends, leaderboard, admin tools — within FREE tiers.
- **World map программист** (`world-map-programmer`): Implements the zoomable world map: regions, locking, marches with travel time, clan castles, treasures, wildlife, speed-ups.
- **Оновчлолын инженер** (`performance-optimizer`): Makes DXX load and run fast on LTE and low-end Android: file sizes, lazy loading, caching, service worker, memory, FPS.
- **Аюулгүй байдал ба cheat хамгаалалт** (`security-anticheat-engineer`): Finds exploits in DXX: client-side cheating, Алт duplication, save editing, rule loopholes, payment tampering. Use before releasing online/payment features.
- **QPay төлбөрийн инженер** (`qpay-payment-engineer`): Implements and checks the QPay real-money flow via Cloudflare Worker: invoices, callbacks, crediting Алт safely.
- **Android / Google Play инженер** (`android-release-engineer`): Packages DXX for Google Play (TWA/APK via android/ and the GitHub workflow), store listing, data-safety, checklist; also iOS App Store questions.

## Арт
- **Баатрын дүрийн prompt бичигч** (`hero-art-prompter`): Writes English AI-image prompts for hero portraits, full-body art, summon-door art in a consistent early-13th-century Mongol look.
- **Sprite sheet prompt бичигч** (`sprite-sheet-prompter`): Writes English prompts for battle sprite sheets (heroes on foot, soldiers true top-down, bosses, ships) on #00ff00 background so they can be sliced.
- **Барилгын зургийн prompt бичигч** (`building-art-prompter`): Writes prompts for buildings, ger/ordon levels, pens, fields, decor, regional castles per world-map region.
- **UI хүрээ, товчлууруудын prompt бичигч** (`ui-art-prompter`): Writes prompts for UI sets: wood textures, cards, buttons, tags, icons (Зоос silver coin, Алт gold coin with blue gem), element icons, skill icons.
- **Эффект ба анимейшний prompt бичигч** (`fx-animation-prompter`): Writes prompts and specs for battle effects, skill effects, weather, season visuals, smoke from gers; lighting/shadow ideas for 2D/2.5D polish.
- **Газрын зургийн prompt бичигч** (`map-art-prompter`): Writes prompts for world map, battlefield backgrounds, region art; checks map art against real geography.
- **Дуу, дуу хоолойн найруулагч** (`audio-voice-director`): Plans sound effects and NPC voice lines (owner records voices himself), prompts for AI sound tools, and how to attach clips efficiently.

## Тест
- **Бүтэн тоглоом шалгагч** (`qa-full-playtester`): Plays through DXX in a headless browser or by code reading: finds bugs, broken flows, console errors. Use after any build and before releases.
- **UI дүүргэлт ба текст хэтрэлт шалгагч** (`ui-overflow-checker`): Finds text/button overflow, overlapping UI, mismatched numbers, unclear names across menus and screen sizes.
- **Балансын шалгагч** (`balance-tester`): Simulates economy and battles to find too-easy/too-hard content, runaway currency, dominant heroes.
- **Шинэ тоглогчийн туршлага шалгагч** (`new-player-tester`): Reviews onboarding as a first-time player: clarity of tutorial, first 5 minutes, first-day return reasons, confusing words.
- **Мобайл ба LTE шалгагч** (`mobile-lte-tester`): Tests loading and behaviour on slow mobile networks and in Messenger/Facebook in-app browser; offline/update flow.
- **Дахин шалгалтын (regression) шалгагч** (`regression-checker`): After each change, checks that old features and old saves still work; reviews diffs for risky edits in the huge files.

## Өсөлт
- **Facebook сурталчилгааны менежер** (`facebook-ads-manager`): Plans Facebook/Messenger promotion for DXX in Mongolia: audiences, creatives, small budgets, ?src= tracking.
- **TikTok контентын зохиолч** (`tiktok-content-creator`): Writes TikTok/Reels scripts and ideas for DXX, including TikTok LIVE interactive Roblox-style ideas the owner explored.
- **Найз урих системийн дизайнер** (`invite-referral-designer`): Designs invite/referral loops: «Найзаа урь», share cards, Messenger link preview, rewards, abuse prevention.
- **Дэлгүүр ба орлогын менежер** (`shop-monetization-manager`): Plans the real-money shop (QPay), packs, limited-edition heroes, battle pass, first-purchase offers, in a fair way.
- **Нийгэмлэг, чатын менежер** (`community-manager`): Handles community: Facebook group posts, patch-note posts, in-game chat rules, moderation policy, replies to player feedback.
- **Google Play гаргалтын менежер** (`play-store-launch-manager`): Prepares store listing text, screenshots plan, privacy/terms pages, data-safety, testing track plan for the Google Play beta.

Нийт: 43 мэргэжилтэн.
