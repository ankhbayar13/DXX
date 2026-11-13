# DXX AI багийн бүртгэл

Эдгээр мэргэжилтнүүд `.claude/agents/` дотор байна. Бүгд энгийн монголоор хариулна, «хий» гэхээс өмнө юм бүтээхгүй, эхлээд `docs/GAME-STATE.md` файлыг уншина.

Тэмдэглэл: хаалтан доторх нэр (`producer` гэх мэт) нь Claude Code-д дуудах техникийн нэр. Энэ нь латин үсгээр байх ёстой.

Дуудах жишээ: «history-researcher-оос асуу: Калка голын тулаан зөв үү?»

## Удирдлага
- **Продюсер** (`producer`): Ажлыг төлөвлөж, мэргэжилтэнд хуваарилна
- **Төслийн менежер** (`project-manager`): Хийх жагсаалт, гаргалтын багц
- **Шийдвэрийн зөвлөх** (`decision-advisor`): Том шийдвэрийн сонголтуудыг харьцуулна

## Дизайн
- **Ерөнхий тоглоомын дизайнер** (`game-designer`): Тоглоомын гол цикл, өдөр бүр эргэж ирэх шалтгаан
- **Тулааны дизайнер** (`battle-designer`): Тулааны дүрэм, ур чадвар, элемент
- **Эдийн засгийн дизайнер** (`economy-designer`): Зоос, Алт, үнэ, шагналын баланс
- **Баатар ба ур чадварын дизайнер** (`hero-skill-designer`): Баатрууд, 4 ур чадвар, шинэ баатар
- **Quest ба түүхийн дизайнер** (`quest-story-designer`): Үндсэн болон туслах quest
- **Клан ба PvP дизайнер** (`clan-pvp-designer`): Клан, өрсөлдөөн, найз, 1v1
- **Наадам ба эвентийн дизайнер** (`naadam-events-designer`): Наадам, улирлын эвент
- **Картын тулааны дизайнер** (`card-game-designer`): Картын тулааны мини тоглоом

## Түүх
- **Монголын түүхч** (`history-researcher`): Түүхийн баримт шалгана
- **Зэвсэг, хувцасны шинжээч** (`military-equipment-expert`): Зэвсэг, хувцас, морь, гэр
- **Газар зүй ба газрын зургийн шинжээч** (`geography-map-expert`): Газрын зураг, аяллын хугацаа
- **Нэр, бичгийн зөв бичлэг шалгагч** (`name-spelling-checker`): Нэр, бичгийн зөв бичлэг

## Код
- **Gameplay программист** (`js-gameplay-programmer`): Тоглоомын код, алдаа засах
- **UI программист** (`ui-programmer`): Цэс, хүрээ, товчлуур
- **Тулааны системийн программист** (`battle-programmer`): Тулааны систем, sprite
- **Сүлжээ ба backend инженер** (`network-backend-engineer`): Firebase, Supabase, үнэгүй хязгаар
- **World map программист** (`world-map-programmer`): Дэлхийн газрын зураг, аян дайн
- **Оновчлолын инженер** (`performance-optimizer`): LTE дээр хурдан ачаалах
- **Аюулгүй байдал ба cheat хамгаалалт** (`security-anticheat-engineer`): Cheat, нүх, аюулгүй байдал
- **QPay төлбөрийн инженер** (`qpay-payment-engineer`): QPay төлбөрийн урсгал
- **Android / Google Play инженер** (`android-release-engineer`): Google Play, Android багцлалт

## Арт
- **Баатрын дүрийн prompt бичигч** (`hero-art-prompter`): Баатрын зургийн prompt
- **Sprite sheet prompt бичигч** (`sprite-sheet-prompter`): Sprite sheet prompt (#00ff00)
- **Барилгын зургийн prompt бичигч** (`building-art-prompter`): Барилга, гэрийн зургийн prompt
- **UI хүрээ, товчлууруудын prompt бичигч** (`ui-art-prompter`): UI хүрээ, товч, дүрсний prompt
- **Эффект ба анимейшний prompt бичигч** (`fx-animation-prompter`): Эффект, анимейшний prompt
- **Газрын зургийн prompt бичигч** (`map-art-prompter`): Газрын зураг, байлдааны талбарын prompt
- **Дуу, дуу хоолойн найруулагч** (`audio-voice-director`): Дуу, NPC дуу хоолой

## Тест
- **Бүтэн тоглоом шалгагч** (`qa-full-playtester`): Бүтэн тоглоом шалгаж алдаа олно
- **UI дүүргэлт ба текст хэтрэлт шалгагч** (`ui-overflow-checker`): Текст хэтрэлт, давхцал
- **Балансын шалгагч** (`balance-tester`): Баланс, эдийн засгийн симуляци
- **Шинэ тоглогчийн туршлага шалгагч** (`new-player-tester`): Шинэ тоглогчийн туршлага
- **Мобайл ба LTE шалгагч** (`mobile-lte-tester`): LTE, Messenger browser
- **Дахин шалгалтын (regression) шалгагч** (`regression-checker`): Өөрчлөлт хуучныг эвдсэн эсэх

## Өсөлт
- **Facebook сурталчилгааны менежер** (`facebook-ads-manager`): Facebook сурталчилгааны төлөвлөгөө
- **TikTok контентын зохиолч** (`tiktok-content-creator`): TikTok бичлэгийн сценари
- **Найз урих системийн дизайнер** (`invite-referral-designer`): Найзаа урих систем
- **Дэлгүүр ба орлогын менежер** (`shop-monetization-manager`): Дэлгүүр, багц, орлого
- **Нийгэмлэг, чатын менежер** (`community-manager`): Нийгэмлэг, чат, шинэчлэлийн мэдээ
- **Google Play гаргалтын менежер** (`play-store-launch-manager`): Google Play-д гаргах бэлтгэл

Нийт: 43 мэргэжилтэн.
