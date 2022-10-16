const inf = `{
	"_id" : "SR0000",
    "mainImage" : {
        "title" : {
            "EN" : "main view",
            "RU" : "main view"
        },
        "filename" : "main.jpg"
    },
    "additionalImages" : [
        {
            "title" : {
                "EN" : "Living room:",
                "RU" : "Гостиная:"
            },
            "filename" : "lr1.jpg"
        },
        {
            "title" : {
                "EN" : "Master bedroom:",
                "RU" : "Первая спальня:"
            },
            "filename" : "br1_1.jpg"
        },
        {
            "title" : {
                "EN" : "Second bedroom:",
                "RU" : "Вторая спальня:"
            },
            "filename" : "br2_1.jpg"
        },
        {
            "title" : {
                "EN" : "Third bedroom:",
                "RU" : "Третья спальня:"
            },
            "filename" : "br3_1.jpg"
        },
        {
            "title" : {
                "EN" : "Fourth bedroom:",
                "RU" : "Четвёртая спальня:"
            },
            "filename" : "br4_1.jpg"
        },
        {
            "title" : {
                "EN" : "Kitchen:",
                "RU" : "Кухня:"
            },
            "filename" : "kch1.jpg"
        },
        {
            "title" : {
                "EN" : "Area:",
                "RU" : "Территория:"
            },
            "filename" : "tr1.jpg"
        }
    ],
    "title" : {
        "EN" : "Discription",
        "RU" : "Описание"
    },
    "briefly" : {
        "EN" : "Свежие и уютные 2-х спальный дома в резорте с общим бассейном в районе Бан Као.",
        "RU" : "Свежие и уютные 2-х спальный дома в резорте с общим бассейном в районе Бан Као."
    },
    "description" : {
        "EN" : "2 спальни с кондиционерами, санузел, кухня и гостиная. Дом укомплектован всей необходимой мебелью и техникой. На кухне есть печь, микроволновая печь, тостер, чайник и вся посуда. В спальне есть сейф, на окнах москитные сетки. Тихий и спокойный район, для людей с транспортом, т.к. инфраструктуры вокруг практически нет. Сам пляж Банг Као практически не купабельный. До пляжа Ламай - 11 км (20 минут езды), до Липа Ной 12 км (20 минут езды), до Талинг Нама - 10 км (16 минут езды). До продуктового супермаркета Macro - 29,5 км (15 минут езды). Стоимость: 30000 бат/мес.",
        "RU" : "2 спальни с кондиционерами, санузел, кухня и гостиная. Дом укомплектован всей необходимой мебелью и техникой. На кухне есть печь, микроволновая печь, тостер, чайник и вся посуда. В спальне есть сейф, на окнах москитные сетки. Тихий и спокойный район, для людей с транспортом, т.к. инфраструктуры вокруг практически нет. Сам пляж Банг Као практически не купабельный. До пляжа Ламай - 11 км (20 минут езды), до Липа Ной 12 км (20 минут езды), до Талинг Нама - 10 км (16 минут езды). До продуктового супермаркета Macro - 29,5 км (15 минут езды). Стоимость: 30000 бат/мес."
    },
    "type" : "house",
    "beach" : "bangKao",
	"dayPrice" : 1000.0,
    "monthPrice" : 30000.0,
    "options" : {
        "conditioner" : true,
        "tv" : true,
        "washingMachine" : false,
        "dishWasher" : false,
        "hairDryer" : false,
        "microwaveOven" : true,
        "cooker" : true,
        "teaPot" : true,
        "coffeePot" : false,
        "wifi" : true,
        "internet" : true,
        "iron" : false,
        "garden" : false,
        "grill" : false,
        "swimmingPool" : true,
        "closedArea" : false,
        "seaView" : false,
        "nearSea" : false,
        "bedClothes" : true,
        "towels" : true,
        "toaster" : false,
        "babyCot" : false,
        "parking" : true,
        "terrace" : false,
        "refrigerator" : true,
        "kitchenWare" : true,
        "cleaning" : true,
        "tableWare" : true,
        "kitchen" : true,
        "jungle" : false
    },
    "sleepingRoomCount" : 0,
    "parkingPlaceCount" : 0,
    "washRoomCount" : 0,
    "distanceToSea" : 230.0,
    "videoLink" : "",
    "archived" : false,
    "special" : false,
    "propositionLocation" : {
        "latitude" : 0.0,
        "longitude" : 0.0
    },
    "uploadedToIk" : true,
    "_class" : "pro.nsystem.proposition.domain.localized.Proposition"
}`

const RUSITEVERS = {
    "_id" : "Название объекта",
    "mainImage" : "Отображение объекта в каталоге",
    "title" : "Изображение",
    "filename" : "Название изображения",
    "additionalImages" : "Дополнительные изображения",
    "briefly" : "Краткое описание",
    "description" : "Полное описание",
    "type" : "Тип жилья (apartments,bungalow,villa,house,room,studio,townhouse)",
    "beach" : "Пляж (banTai,bangKao,bangPo,bangRak,bophut,lamai,lipaNoi,maenam,naMueang,nathon,talingNgnam,huathanon,chaweng,chawengNoi,choengMon)",
    "dayPrice" : "Суточная Цена",
     "monthPrice" : "Месячная цена",
     "options" : "Опции",
     "sleepingRoomCount" : "Количество спальных комнат",
     "special" : "Особый",
     "washRoomCount" : "Количество ванных комнат",
     "parkingPlaceCount" : "Количество парковочных мест",
     "distanceToSea" : "Расстояние до моря",
     "archived" : "В архиве?",
     "propositionLocation" : "Расположение предложений",
     "latitude" : "Широта",
     "longitude" : "Долгота",
     "uploadedToIk" : "Загружено",
     "videoLink" : "Видео с YouTube (вида https://youtu.be/xxxxxxxxxxx)",
     "RU" : "RU",
     "EN" : "EN",
     "conditioner" : "Кондиционер",
        "tv" : "Телевизор",
        "washingMachine" : "Стиральная машина",
        "dishWasher" : "Посудомойка",
        "hairDryer" : "Фен",
        "microwaveOven" : "Микроволновая печь",
        "cooker" : "Кухонная плита",
        "teaPot" : "Заварочный чайник",
        "coffeePot" : "Кофейник",
        "wifi" : "Wifi",
        "internet" : "Интернет",
        "iron" : "Утюг",
        "garden" : "Сад",
        "grill" : "Гриль",
        "swimmingPool" : "Бассейн",
        "closedArea" : "Охраняемая территория",
        "seaView" : "Вид на море",
        "nearSea" : "Море в пешей доступности",
        "bedClothes" : "Постельное белье",
        "towels" : "Полотенца",
        "toaster" : "Тостер",
        "babyCot" : "Детская кровать",
        "parking" : "Парковка",
        "terrace" : "Терраса",
        "refrigerator" : "Холодильник",
        "kitchenWare" : "Кухонные принадлежности",
        "cleaning" : "Уборка",
        "tableWare" : "Посуда и столовые приборы",
        "kitchen" : "Кухня",
        "jungle" : "Вдали от цивилизации",
}

const passwd = `passwd`;
const url = `https://catalog.samui.rest/json.php`;
const importJson = `https://catalog.samui.rest/import.php`;


