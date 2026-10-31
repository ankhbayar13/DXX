# Play Store-д оруулах алхмууд (утаснаасаа хийхэд)

Пакетын нэр (package ID): `com.talnutgiinhaan.game`

## A. Одоо (чи хийнэ)
1. Холбоо барих имэйлээ сонго → надад хэл (нууцлалын хуудас болон дэлгүүрт нийтэд харагдана).
2. https://play.google.com/console дээр Developer данс нээ ($25 нэг удаа, иргэний үнэмлэхээр баталгаажуулна).
3. Тест хийх 12+ хүн (Google/Gmail дансаар) бэлд. Тэд 14 хоног тасралтгүй орсон байх ёстой.

## B. Апп-ын багц (.aab) үүсгэх — pwabuilder.com (утаснаас болно)
1. https://www.pwabuilder.com → `https://talnutgiinhaan.com` → Start.
2. «Package for stores» → **Android** → Options:
   - Package ID: `com.talnutgiinhaan.game`
   - App name: Тал Нутгийн Хаан · Launcher name: Тал Нутаг
   - **Start URL: `/?src=play`**  (чухал: Play-ээс нээгдсэн үед худалдан авалтыг нууна)
   - Display: standalone · Orientation: portrait
   - Signing key: **New**. Play Billing, Notifications, Location delegation — бүгдийг **унтраа**.
3. Татсан zip доторх `.aab` ба **signing keystore + нууц үгээ** найдвартай газар (Google Drive) хадгал.

## C. Play Console дээр апп үүсгэх
1. Create app → Game, Free. Language: Монгол.
2. Store listing: `play/STORE-LISTING.md`-ийн текст, икон, banner, скриншот.
3. App content:
   - Privacy policy: https://talnutgiinhaan.com/privacy.html
   - App access: нэвтрэлт шаардлагагүй (бүх хэсэг нээлттэй)
   - Ads: Үгүй · Content rating: асуулт бөглөх (дайн-тулаан зохиомол/түүхэн, мөрийтэй тоглоом үгүй, хэрэглэгчийн чат БАЙНА)
   - Target audience: 13+ (хүүхдийн апп биш)
   - Data safety: `play/DATA-SAFETY.md`
   - Account deletion URL: https://talnutgiinhaan.com/delete-account.html
4. Testing → Closed testing → шинэ release → `.aab` upload → тестерүүдийн жагсаалт → opt-in линк тэдэнд өг.
5. 14 хоног хүлээгээд «Apply for production» дар.

## D. Digital Asset Links (апп хаягийн мөр алга болгох)
Play Console → Test and release → **App integrity → App signing key certificate → SHA-256** хуулж надад өг.
Би `.well-known/assetlinks.json` дотор тавина. (Upload key-ийн SHA-256-г бас өгвөл хоёуланг нь оруулна.)

## E. Худалдан авалт
Play хувилбарт QPay болон мөнгөн худалдан авалт бүгд нуугдана. Вэбсайт (talnutgiinhaan.com) дээр QPay хэвээр ажиллана. Апп дотор вэбсайт руу холбосон линк, «вэбээс ав» гэсэн бичиг ТАВИХГҮЙ.
