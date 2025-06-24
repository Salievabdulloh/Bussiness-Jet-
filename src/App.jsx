import { useEffect, useState } from 'react'
import man from './assets/man.png'
import woman from './assets/woman.png'
import tur from './assets/tur.png'
import maldivi from './assets/maldivi.png'
import airplane from './assets/airplane.png'
import apple from './assets/apple.png'
import seat from './assets/seat.png'
import Km from './assets/7250км.png'
import Card from './component/Card'
import headphone from './assets/headphone.png'
import white from './assets/white.png'
import dast from './assets/dast.png'
import shop from './assets/shop.png'
import dog from './assets/dog.png'
import car from './assets/car.png'
import arrow2 from './assets/arrrow2.png'
import img from './assets/img.png'
import social from './assets/social.png'
import footer from './assets/footer.png'
import map from './assets/map.png'
import { Button } from 'antd'

const App = () => {
    let api = 'https://6821ee75b342dce8004c674e.mockapi.io/12/link'
    let [user, setUser] = useState([])

    async function get() {
        try {
            let res = await fetch(api)
            let data = await res.json()
            setUser(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function changeStatus(e) {
        let checkstatus = {
            ...e,
            status: !e.status
        }
        try {
            await fetch(`${api}/${e.id}`, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(checkstatus)
            })
            get()
        } catch (error) {
            console.error(error)
        }
    }

    async function deleteUser(id) {
        try {
            await fetch(`${api}/${id}`, { method: "DELETE" })
            get()
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        get()
    }, [])

    return (
        <>
            <header className='flex p-5 md:pb-[50px] w-full bg-cover text-center items-center flex-col text-white bg-[url(./assets/back.png)]'>
                <h1 className="mb-5 text-[30px] md:text-[48px] pt-[500px]">Полет на Lujo BlackJet</h1>
                <h1 className="w-[400px] text-[#6a6a6a]">Новейший самолёт, оборудованный 72 креслами только бизнес-класса</h1>
            </header>
            <main>
                <section className='md:pt-[60px] p-5 md:px-[300px]'>
                    <h1 className="text-[28px]">Lujo BlackJet доставляет путешественников в Турцию
                        и на Мальдивы:</h1>
                    <div className="mt-20 relative">
                        <img src={tur} />
                        <img src={man} className='w-[200px] md:w-[360px] top-[-58px] md:top-[-52px] absolute' />
                    </div>
                    <div className="pb-5">
                        <p className="py-6  text-[12px]">Рейсы проходят по маршруту Москва — Бодрум, аэропорт Milas Bodrum. <br /> Максимальная частота вылетов в летний сезон — 5 раз в неделю.</p>
                        <ul className='list-disc text-[12px] pl-5 flex flex-col gap-4'>
                            <li>Вылет<b> — 09:00</b></li>
                            <li>Прибытие в <b>Бодрум — 14:35</b></li>
                            <li>Обратный вылет в<b> Москву — 16:10</b></li>
                            <li>Возвращение в <b>столицу — 21:20</b></li>
                        </ul>
                    </div>
                    <div className="mt-20 relative">
                        <img src={maldivi} />
                        <img src={woman} className='w-[200px] md:w-[360px] top-[-58px] md:top-[-52px] absolute' />
                    </div>
                    <div className="pb-5">
                        <p className="py-6  text-[12px]">Полётная программа включает вылеты 2 раза в неделю, по средам и пятницам.</p>
                        <ul className='list-disc text-[12px] pl-5 flex flex-col gap-4'>
                            <li>Вылет<b> — 00:15</b></li>
                            <li>Прибытие в <b>Мале —  11:15</b></li>
                            <li>Обратный вылет в <b>Москву — 13:40</b></li>
                            <li>Возвращение в <b>столицу — 21:15</b></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-[500] mb-[30px] text-[25px] md:text-[28px]"><b>Lujo BlackJet</b> — cтоит один раз оказаться в небе на борту уникального лайнера, и вам не захочется соглашаться на другие варианты. </h1>
                        <div className="flex flex-col mt-[30px] gap-10 items-center">
                            <img src={Km} />
                            <h1 className="text-[18px]"><b>дальность полета</b> - что позволяет долететь до желаемого пункта назначения без пересадок</h1>
                        </div>
                        <p className='font-[500] my-8 text-[#574346]'>Это Boeing 757−200, единственный в России самолёт, в котором нет экономического и бизнес-класса, только 72 места
                            бизнес-класса.
                            <br /> <br />
                            Точнее — Ultimate Business Class. А это значит, что вас ждет персональный подход, люксовые удобства и партнёрство
                            с мировыми брендами.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 mb-7 text-center justify-between">
                        <div className="flex border-[#6091B1] border-1 bg-[#F0F9FF] rounded-2xl p-10 flex-col text-[#6091B1] items-center">
                            <p className='font-semibold text-[64px]'>72</p>
                            <p className='text-[14px] font-medium'>кресла только <br />бизнес-класса</p>
                        </div>
                        <div className="flex  border-[#6091B1] border-1 bg-[#F0F9FF] rounded-2xl p-10 flex-col text-[#6091B1] items-center">
                            <p className='font-semibold text-[64px]'>850</p>
                            <p className='text-[14px] font-medium'>км/ч  - Средняя <br /> крейсерская скорость</p>
                        </div>
                        <div className="flex border-[#6091B1] border-1 bg-[#F0F9FF] rounded-2xl p-10 flex-col text-[#6091B1] items-center">
                            <p className='font-semibold text-[64px]'>18</p>
                            <p className='text-[14px] font-medium'>видов горячих и <br />холодных блюд</p>
                        </div>
                        <div className="flex border-[#6091B1] border-1 bg-[#F0F9FF] rounded-2xl p-10 flex-col text-[#6091B1] items-center">
                            <p className='font-semibold text-[64px]'>5</p>
                            <p className='text-[14px] font-medium'>бортпроводников - по 1 <br /> на 14 пассажиров</p>
                        </div>
                    </div>
                    <img src={airplane} className='mb-[-21px]' />
                </section>
                <section className='text-white p-5 md:px-[300px] md:py-[90px] bg-[#3E403B]'>
                    <div className="pb-[30px]">
                        <h1 className='text-[28px]'>Здесь Moët & Chandon, гаджеты Apple
                            и косметические travel-наборы от Bvlgari.</h1>
                        <p className='mt-[36px] text-[#8C8F87]'>Все кресла раскладываются в полноценное место для сна с помощью одного нажатия на панель управления, а также откидываются и фиксируются в положении для отдыха.
                            Каждое сиденье оборудовано компактными лампами для чтения, розетками и USB, а также функцией массажа. Вам обязательно предложат мягкое одеяло, подушку под шею и голову, тапочки и маску для сна для комфортного отдыха. <br /> <br /> <br />
                            Мультимедийная система развлечений доступна на протяжении всего полёта. Фильмы, стендап-шоу, сериалы из коллекции Premier, мультфильмы для детей — выбирайте на свой вкус.
                            На протяжении всего полета в вашем распоряжении планшеты iPad самой последней модели, а также наушники AirPods Max с активным шумоподавлением.</p>
                    </div>
                    <Card title='Комфортный отдых' img={seat} desc='Lujo BlackJet — это Boeing 757−200, оборудованный 72 креслами только бизнес-класса. Все сиденья раскладываются в полноценные места для сна, оснащены лампами для чтения, розетками и USB для гаджетов. Расслабиться помогут одеяла и мягкие подушки.' />
                    <hr className='my-[30px]' />
                    <Card title='Современные гаджеты' desc='Для пассажиров Lujo BlackJet — система мультимедийных развлечений на борту, планшеты iPad самой последней модели и наушники AirPods Max.' img={headphone} />
                    <p className="my-[30px] text-[#8C8F87]">Мультимедийная система развлечений доступна на протяжении всего полёта. Смотрите фильмы, стендап-шоу, сериалы из коллекции Premier, мультфильмы для детей — всё, что вам захочется.
                        <br /><br />
                        Гаджеты на борту — это планшеты iPad самой последней модели. А также наушники AirPods Max с активным
                        шумоподавлением — с ними комфортный отдых и ощущение уединения в полёте обеспечены.</p>
                    <div className="py-[15px] mt-[2px] rounded-[10px] pl-5 flex items-center gap-4 bg-[#FFFFFF1A]">
                        <img src={apple} />
                        <p className='font-[600] '>iPad 12.9 Pro</p>
                    </div>
                    <div className="py-[15px] mt-[2px] rounded-[10px] pl-5 flex items-center gap-4 bg-[#FFFFFF1A]">
                        <img src={apple} />
                        <p className='font-[600] '>AirPods Max</p>
                    </div>
                    <hr className='my-[30px]' />
                    <Card title='Забота о себе' img={white} desc='Комплимент каждому гостю — косметичка от Bvlgari. В дорожный набор входят влажные салфетки, парфюм, лосьон для кожи и бальзам для губ. Приятное напоминание о прошедшем путешествии!' />
                    <hr className='my-[30px]' />
                    <Card title='Специальное меню от поваров lujo' img={dast} desc='За питание на борту отвечает шеф-повар. Для гостей готовят блюда ресторанного уровня из свежайших продуктов. Дополняют меню алкогольные и безалкогольные напитки премиум-класса, десерты и деликатесы, специальные блюда для детей и вегетарианцев.' />
                </section>
                <section className='md:px-[300px] p-5 bg-[whitesmoke] md:py-[60px]'>
                    <div className="mb-15">
                        <div className='border-[#E7E7E7] text-[#3E403B] flex items-center justify-between border-b-1 py-5'>
                            <p>Завтрак</p>
                            <img src={arrow2} />
                        </div>
                        <div className='border-[#E7E7E7] text-[#3E403B] flex items-center justify-between border-b-1 py-5'>
                            <p>Обед</p>
                            <img src={arrow2} />
                        </div>
                        <div className='border-[#E7E7E7] text-[#3E403B] flex items-center justify-between border-b-1 py-5'>
                            <p>Детское меню</p>
                            <img src={arrow2} />
                        </div>
                        <div className='border-[#E7E7E7] text-[#3E403B] flex items-center justify-between border-b-1 py-5'>
                            <p>Вегетарианское меню</p>
                            <img src={arrow2} />
                        </div>
                        <div className='border-[#E7E7E7] text-[#3E403B] flex items-center justify-between border-b-1 py-5'>
                            <p>Барное меню Lujo BlackJet</p>
                            <img src={arrow2} />
                        </div>
                    </div>
                    <div className='mb-15'>
                        <h1 className='font-medium mb-10 text-[28px]'>Регистрация и ожидание полёта</h1>
                        <div className="md:flex gap-10 items-start">
                            <img className='my-5' src={shop} />
                            <p>Полёт на бизнес-джете — минимум спешки и ожиданий, максимум привилегий и бережного отношения к вашему времени. Регистрация на борт происходит на отдельных стойках 101 и 102, так что в аэропорт Внуково можно прибыть всего за 1,5 часа до вылета.После регистрации и сдачи багажа гостей ждёт отдых в бизнес-лаундже ART Lounge: шведский стол с закусками, напитки, Wi-Fi, душ, детский уголок, зона с массажными креслами, камера хранения для ручной клади и другие удобства. <br /> <br /> При вылете из Бодрума лаундж также к вашим услугам — при входе в зону отдыха нужно лишь показать посадочный талон.</p>
                        </div>
                    </div>
                    <div className='mb-15'>
                        <h1 className='font-medium mb-10 text-[28px]'>Трансфер</h1>
                        <div className="md:flex gap-10 items-start">
                            <p>Тип трансфера зависит от отеля, в котором вы планируете остановиться.
                                <br />
                                Для гостей Lujo Bodrum в стоимость тура включён индивидуальный трансфер аэропорт—отель—аэропорт. В зависимости от числа путешественников используются автомобили Mercedes Sprinter, Mercedes Vito.
                                <br />
                                Для гостей других отелей — трансфер Comfort Class. По пути из аэропорта в отель и обратно туристы заезжают максимум в 2 отеля. В зависимости от числа гостей используются автомобили Mercedes Tourismo или Travego, Mercedes Sprinter.
                            </p>
                            <img className='my-5' src={car} />
                        </div>
                    </div>
                    <div className='mb-15'>
                        <h1 className='font-medium mb-10 text-[28px]'>Можно на борт Lujo BlackJet с животными?</h1>
                        <div className="md:flex gap-10 items-start">
                            <img className='my-5' src={dog} />
                            <p className='text-[14px]'>Да, на борту Lujo BlackJet рады гостям с питомцами — важно лишь знать о нескольких правилах.
                                <br />
                                Питомцы массой до 8 кг с учётом веса переноски летят в салоне. Максимальные габариты последней — не более 115 см в трёх измерениях.
                                <br />
                                Питомцы массой свыше 8 кг летят в багажно-грузовом отделении. Максимальные габариты переноски — не более 203 см в трёх измерениях.
                                <br /><br /><br /><br /><br />
                                В любом случае клетка должна быть достаточных для вашего любимца размеров, обеспечивать ему комфортное расположение и доступ воздуха. Убедитесь, что переноска имеет ручки, а водонепроницаемое дно покрыто абсорбирующим материалом.
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='font-medium mb-10 text-[28px]'>Отзывы о Lujo BlackJet</h1>
                        <div className="flex flex-col md:flex-row gap-3">
                            {user.map(e => {
                                return (
                                    <div key={e.id} className='rounded-[10px] p-7 pb-[65px] bg-[#fffdff]'>
                                        <img src={e.img} />
                                        <h1 className={`${!e.status ? 'line-through' : ''} mt-1 font-bold mb-2 text-[15px]`}>{e.name}</h1>
                                        <p className="text-[#8C8F87] text-[11px]">{e.job}</p>
                                        <hr className='my-3' />
                                        <p className="font-medium text-[#3E403B] text-[13px]">{e.description}</p>
                                        <input type="checkbox" onClick={() => changeStatus(e)} checked={e.status} />
                                        <div className="flex">
                                            <Button danger type='primary' onClick={() => deleteUser(e.id)}>Delete</Button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className='text-white md:px-[300px] p-5 md:py-[90px] bg-[#3E403B]'>
                    <h1 className="font-[600] mb-10 text-[48px]">Лёгкий способ осуществить мечту</h1>
                    <h1 className="mb-[50px] text-[18px]">Заполните форму обратной связи, напишите ваши контакты и пожелания к туру. Мы свяжемся с вами в ближайшее время!</h1>
                    <div className="">
                        <label for='name' className="font-medium text-[#FE9A4C]">Имя</label><br />
                        <input type="text" id="name" className='text-[18px] mb-5 mt-[10px] px-4 w-full rounded-[10px] border-1 border-[#8C8F87] py-5 text-[#8C8F87]' placeholder="Как к вам обращаться?" />
                        <label for='phone' className="font-medium text-[#FE9A4C]">Телефон</label><br />
                        <input type="text" id="phone" className='text-[18px] mb-5 mt-[10px] px-4 w-full rounded-[10px] border-1 border-[#8C8F87] py-5 text-[#8C8F87]' placeholder="(xxx) xxx-xx-xx" />
                        <label for='wish' className="font-medium text-[#FE9A4C]">Ваши пожелания</label><br />
                        <textarea id="wish" className='text-[18px] overflow-hidden pb-[114px] mt-[10px] px-4 w-full rounded-[10px] border-1 border-[#8C8F87] py-5 text-[#8C8F87]' placeholder='Опишите ваше идеальное путешествие' ></textarea>
                        <button className='font-[600] py-[16px] rounded-[14px] bg-[#FE9A4C] mt-5 px-[38px] text[18px]'>Отправить</button>
                        <p className='mt-[50px] text-[14px]'>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
                    </div>
                </section>
            </main >
            <footer className='md:pt-[60px] p-5 md:pb-[37px] md:flex gap-[83px] md:px-[300px]'>
                <div className="md:m-0 mb-5">
                    <img src={footer} />
                    <div className="gap-[55px] mt-[35px] flex">
                        <div className="">
                            <p className='mb-[22px] text-[#6091B1]'>ИНФОРМАЦИЯ</p>
                            <ul className='flex text-[14px] flex-col gap-[14px]'>
                                <li>Контакты</li>
                                <li>О компании</li>
                                <li>Наши новости</li>
                                <li>Клиентам</li>
                                <li>Сервис</li>
                                <li>Отзывы</li>
                            </ul>
                        </div>
                        <div className="">
                            <p className='mb-[22px] text-[#6091B1]'>КОНТАКТЫ</p>
                            <img src={social} className='mb-[22px] ' />
                            <ul className='flex text-[14px] flex-col gap-[14px]'>
                                <li className='text-[16px] font-medium'>+ 7 (495) 374 77 88</li>
                                <li>Москва, Лесная 8а <br /> (м. Белорусская)</li>
                                <li>Парковка для клиентов турагентства "Бутик Путешествий"</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src={map} />
            </footer>
        </>
    )
}

export default App
