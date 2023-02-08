import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";

const PrivacyPolicyArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-privacy-policy-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb_dec--50">
                <div className="offset-lg-2 col-lg-8 ">
                    <div className="privacy-wrapper">
                        <h4>Umumiy qoidalar</h4>
                        <ul>
                            <li>
                                Shaxsiy ma’lumotlarni qayta ishlash bo‘yicha ushbu siyosat O‘zbekiston Respublikasining 02.07.2019 yildagi O‘RQ-547-sonli «Shaxsga doir ma’lumotlar to‘g‘risida»gi qonuni talablariga muvofiq ishlab chiqilgan hamda «ProgrammSoft» MChJ (keyingi o‘rinlarda – «Operator») tomonidan shaxsiy ma’lumotlarini qayta ishlash tartibini va shaxsiy ma’lumotlarining xavfsizligini ta’minlash choralarini belgilaydi.
                            </li>
                            <li>
                                Operatorning shaxsiy ma’lumotlarni qayta ishlashga oid ushbu siyosati (keyingi o‘rinlarda – Siyosat) Operator tomonidan ### Internet tarmog’idagi veb-saytiga (keyingi o‘rinlarda – Sayt) tashrif buyuruvchilar haqida olinishi mumkin bo‘lgan barcha ma’lumotlarga nisbatan qo‘llaniladi.
                            </li>
                            <li>
                            Ushbu siyosat to'g'ridan-to'g'ri Saytga va uning yordamida olinadigan ma'lumotlarga nisbatan qo'llaniladi. Siyosat boshqa saytlarga taalluqli emas va sayt haqida eslatmani o'z ichiga olishi mumkin bo'lgan va saytga havolalar berilishi mumkin bo'lgan uchinchi tomon veb-saytlariga, shuningdek Saytdan boshqa Internet tarmog’idagi veb-saytlarga havolalar uchun amal qilmaydi.
                            </li>
                        </ul>

                        <h4>Siyosatda ishlatiladigan asosiy tushunchalar</h4>
                        <ul>
                            <li>
                                2.1. Shaxsiy ma’lumotlarni avtomatlashtirilgan tarzda qayta ishlash – shaxsiy ma’lumotlarni hisoblash texnikasi vositalari yordamida qayta ishlash;
                            </li>
                            <li>
                                2.2. Shaxsiy ma’lumotlarni blokirovka qilish – shaxsiy ma’lumotlarni qayta ishlashni vaqtincha to‘xtatish (qayta ishlash shaxsiy ma’lumotlarni aniqlashtirish uchun zarur bo‘lgan holatlardan tashqari);
                            </li>
                            <li>
                                2.3. Shaxsiy ma’lumotlarning axborot tizimi – ma’lumotlar bazalarida mavjud bo‘lgan shaxsiy ma’lumotlar va ularning qayta ishlanishini ta’minlovchi axborot texnologiyalari va texnik vositalar to‘plami;
                            </li>
                            <li>
                                2.4. Shaxsiy ma’lumotlarni egasizlashtirish – qo‘shimcha ma’lumotlardan foydalanmasdan shaxsiy ma’lumotlarning muayyan Foydalanuvchi yoki boshqa shaxsiy ma’lumotlar sub’yektiga tegishli ekanligini aniqlash imkonini bartaraf qiladigan harakatlar;
                            </li>
                            <li>
                                2.5. Shaxsiy ma’lumotlarni qayta ishlash – avtomatlashtirish vositalaridan foydalangan holda yoki bunday vositalardan foydalanmasdan shaxsiy ma’lumotlar bilan bajariladigan har qanday harakat (operatsiya) yoki harakatlar (operatsiyalar) majmui, shu jumladan shaxsiy ma’lumotlarni yig‘ish, yozib olish, tizimlashtirish, to‘plash, saqlash, aniqlashtirish (yangilash, o‘zgartirish), olish, foydalanish, uzatish (tarqatish, taqdim etish, kirish), egasizlashtirish, blokirovka qilish, o‘chirish, yo‘q qilish;
                            </li>
                            <li>
                                2.6. Shaxsiy ma’lumotlar – https://ittime.uz Internet tarmog’idagi veb-saytining foydalanuvchisiga bevosita yoki bilvosita aloqador har qanday ma’lumot;
                            </li>
                            <li>
                                2.7. Foydalanuvchi – https://ittime.uz Internet tarmog’idagi veb-saytiga barcha tashrif buyuruvchilar;
                            </li>
                            <li>
                                2.8. Shaxsiy ma’lumotlarni taqdim etish – shaxsiy ma’lumotlarni muayyan shaxsga yoki muayyan doiradagi shaxslarga oshkor qilishga qaratilgan harakatlar;
                            </li>
                            <li>
                                2.9. Shaxsiy ma’lumotlarni tarqatish – shaxsiy ma’lumotlarni noaniq doiradagi shaxslarga oshkor etishga (shaxsiy ma’lumotlarni uzatishga) yoki cheklanmagan doiradagi shaxslarni shaxsiy ma’lumotlar bilan tanishtirishga qaratilgan harakatlar, shu jumladan ommaviy axborot vositalarida shaxsiy ma’lumotlarni e’lon qilish, axborot va telekommunikatsiya tarmoqlarida joylashtirish yoki boshqa har qanday yo‘l bilan ularni olish imkoniyatini berish;
                            </li>
                            <li>
                                2.10. Shaxsiy ma’lumotlarni yo‘q qilish – shaxsiy ma’lumotlar axborot tizimida keyinchalik shaxsiy ma’lumotlar mazmunini tiklash imkoniyati bo‘lmagan holda shaxsiy ma’lumotlarni qaytarib bo‘lmaydigan tarzda yo‘q qiladigan va (yoki) moddiy shaxsiy ma’lumotlar tashuvchilarini yo‘q qiladigan har qanday harakatlar.
                            </li>
                        </ul>
                        <h4>Operator Foydalanuvchining quyidagi shaxsiy ma’lumotlarini qayta ishlashi mumkin</h4>
                        <ol>
                            <li>
                                FIO;
                            </li>
                            <li>
                                Telefon raqamlari;
                            </li>
                            <li>
                                Elektron manzil;
                            </li>
                            <li>
                                Rezyume, shuningdek unda mavjud bo'lgan barcha ma'lumotlar;
                            </li>
                            <li>
                                Shuningdek, tashrif buyuruvchilar to‘g‘risidagi egasizlashtirilgan ma’lumotlar (shu jumladan “cookie” fayllar) to‘planadi va qayta ishlanadi.
                            </li>
                        </ol>
                        <h4>Shaxsiy ma’lumotlarni qayta ishlash maqsadlari</h4>
                        <ul>
                            <li>
                                4.1. Foydalanuvchi shaxsiy ma’lumotlarini qayta ishlashning maqsadi – Foydalanuvchini SMS va push xabarlar yuborish orqali xabardor qilish; Foydalanuvchiga veb-saytdagi mavjud xizmatlarga, ma’lumotlarga va/yoki materiallarga kirish huquqini berish; talabnoma asosida teskari aloqani taqdim etish.
                            </li>
                            <li>
                                4.2. Operator, shuningdek, Foydalanuvchiga yangi mahsulotlar va xizmatlar, maxsus takliflar va turli hodisalar to‘g‘risida xabarlarni yuborish huquqiga ega. Foydalanuvchi har doim Operatorga info@ittime.uz elektron manzil orqali «Yangi mahsulotlar va xizmatlar va maxsus takliflar haqidagi xabarlardan voz kechish» belgisiga ega murojaatni yuborish orqali ma’lumot olishdan voz kechishi mumkin.
                            </li>
                            <li>
                                4.3. Foydalanuvchilarning internet-statistika xizmatlari yordamida yig‘iladigan egasizlashtirilgan ma’lumotlari Foydalanuvchilarning saytdagi xatti-harakatlari to‘g‘risida ma’lumot to‘plash, saytning sifati va uning mazmunini yaxshilash uchun xizmat qiladi.
                            </li>
                        </ul>
                        <h4>Shaxsiy ma’lumotlarni qayta ishlashning asoslari</h4>
                        <ul>
                            <li>
                                5.1. Operator Foydalanuvchining shaxsiy ma’lumotlarini, faqat ular Foydalanuvchi tomonidan mustaqil ravishda http://ittime.uz Internet tarmog’idagi veb-saytida joylashtirilgan maxsus shakl «Qayta aloqa» vositasida to‘ldirilganda va/yoki yuborilgandagina qayta ishlaydi. Foydalanuvchi tegishli shakllarni to‘ldirish va/yoki Operatorga o‘z shaxsiy ma’lumotlarini yuborish orqali ushbu Siyosatga o‘z roziligini bildiradi.
                            </li>
                            <li>
                                5.2. Operator Foydalanuvchi haqidagi egasizlashtirilgan ma’lumotlarni, agar Foydalanuvchi brauzerining sozlamalarida bunga ruxsat etilgan (“cookie” fayllarni saqlash va JavaScript texnologiyalaridan foydalanish yoqilgan) bo‘lsa qayta ishlaydi.
                            </li>
                        </ul>
                        <h4>Shaxsiy ma’lumotlarni to‘plash, saqlash, uzatish va boshqa turda qayta ishlash tartibi</h4>
                        <ul>
                            <li>
                                6.1. Operator tomonidan qayta ishlanadigan shaxsiy ma’lumotlarning Xavfsizligi shaxsiy ma’lumotlarni himoya qilish sohasidagi amaldagi qonun hujjatlari talablariga to‘liq rioya qilish uchun zarur bo‘lgan huquqiy, tashkiliy va texnik chora-tadbirlarni amalga oshirish orqali ta’minlanadi.
                            </li>
                            <li>
                                6.2. Operator shaxsiy ma’lumotlarning saqlanishini ta’minlaydi va vakolat berilmagan shaxslarning shaxsiy ma’lumotlarga kirishini bartaraf qilish uchun barcha mumkin bo‘lgan choralarni ko‘radi.
                            </li>
                            <li>
                                6.3. Foydalanuvchining shaxsiy ma’lumotlari hech qachon, hech qanday holatda uchinchi shaxslarga berilmaydi, amaldagi qonunlarni bajarish bilan bog‘liq hollar bundan mustasno.
                            </li>
                            <li>
                                6.4. Shaxsiy ma’lumotlarda noaniqliklar aniqlanganda, Foydalanuvchi Operatorga infom@ittie.uz elektron manzil orqali «Shaxsiy ma’lumotlarni yangilash» belgisiga ega xabarni yuborish orqali ularni mustaqil ravishda yangilashi mumkin.
                            </li>
                            <li>
                                6.5. Shaxsiy ma’lumotlarni qayta ishlash muddati cheklanmagan. Foydalanuvchi istalgan vaqtda Operatorga info@ittime.uz elektron manzil orqali «Shaxsiy ma’lumotlarni qayta ishlashga rozilikni bekor qilish» belgisiga ega xabarni yuborish orqali shaxsiy ma’lumotlarining qayta ishlanishiga o‘z roziligini qaytarib olishi mumkin.
                            </li>
                        </ul>
                        <h4>
                            Nizolarni hal qilish
                        </h4>
                        <ul>
                            <li>
                                7.1. Operator va Foydalanuvchi o'rtasidagi munosabatlardan kelib chiqadigan nizolar bo'yicha sudga murojaat qilishdan oldin, da'vo tartibi qo’llanilishi (nizoni kelishuv taribida hal qilish bo'yicha yozma taklif) majburiydir.
                            </li>
                            <li>
                                7.2. Kelishuvga erishilmagan taqdirda, nizo O'zbekiston Respublikasining amaldagi qonunchiligiga muvofiq sudda ko’rib chiqilishga yuboriladi.
                            </li>
                            <li>
                                7.3. Ushbu Maxfiylik siyosatiga va Operator va Foydalanuvchi o'rtasidagi munosabatlarga nisbatan O'zbekiston Respublikasining amaldagi qonunchiligi qo'llaniladi.
                            </li>
                        </ul>
                        <h4>Yakuniy qoidalar</h4>
                        <ul>
                            <li>
                                8.1. Operator Foydalanuvchi roziligisiz ushbu Siyosatga o'zgartirishlar kiritishga haqlidir.
                            </li>
                            <li>
                                8.2. Foydalanuvchi info@ittime.uz elektron manzil orqali Operatorga murojaat qilib, o‘z shaxsiy ma’lumotlarini qayta ishlashga aloqador barcha qiziqtiruvchi savollar bo‘yicha kerakli izohlarni olishi mumkin.
                            </li>
                            <li>
                                8.3. Ushbu hujjatda Operator tomonidan shaxsiy ma’lumotlarni qayta ishlash siyosatidagi har qanday o‘zgarishlar aks ettiriladi. Siyosat yangi tahriri bilan almashtirilgunga qadar muddatsiz amal qiladi.
                            </li>
                            <li>
                                8.4. Siyosatning amaldagi tahriri Internet tarmog’ida https:///policy-policy manzilda unga erkin kirish imkoniyati berilgan holda joylashtirilgan.
                            </li>
                        </ul>
                        <h4>Operator</h4>
                        <ul>
                            <li>
                                «ProgrammSoft» MChJ
                            </li>
                            <li>
                                Manzil: 100047, Toshkent sh., Istiqbol ko‘chasi, 15
                            </li>
                            <li>
                                Bog‘lanish uchun ma’lumot:
                            </li>
                            <li>
                                Telefon: +998 71 233-78-98
                            </li>
                            <li>
                                Elektron manzil: programmsoftuz@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="row mt--50">
                <div className="offset-lg-2 col-lg-8">
                    <Button path="#" size="medium" className="mr--15 ml--25">
                        Accept
                    </Button>
                    <Button path="#" color="primary-alta" size="medium">
                        Decline
                    </Button>
                </div>
            </div> */}
        </div>
    </div>
);

PrivacyPolicyArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
PrivacyPolicyArea.defaultProps = {
    space: 1,
};

export default PrivacyPolicyArea;
