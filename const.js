const commands = `
/start - Перезапустить бота
/help - Помощь
/action - Действие
`
const text1 = `
Что нужно, чтобы сделать успешный релиз:
1.Трек в формате: .wav
2.  Обложку: размер - 3000x3000 pixels. Формат: .jpg (визуал очень многое решает)
3.  Медиа-паки для инстаграма – сторис - пост - на основе обложки, желательно с анимацией, а также можно указать платформы. Если хотите публиковаться у нас на youtube Curltai – то можно сделать еще превью такого плана: https://www.youtube.com/watch?v=6i6mZ_cFQXE

Указать:
1.  Название трека (должно совпадать с обложкой):
2.  Основной исполнитель: Имя артиста + странички в соц.сетях:
Приглашенный исполнитель: Имя артиста + странички в соц.сетях:
3.  Жанр: 
Поджанр:
4.  Автор (автор слов, автор музыки): ФИО (по паспорту) + страница в инстаграм:
5.  Композитор: ФИО (по паспорту) + страница инстаграм:
6.  Год записи: 
7.  Присутствие ненормативной лексики: (если присутствует, то меньше зарабатывает):
8. Если есть возможность, прислать текст песни.

Дата релиза трека обсуждается, после получения всей этой информации.

`
const text2 = `
Прошу вас сделать питч или презентацию вашей идеи, будь то идея для сериала, клипа или какого-нибудь мероприятия. В питче обязательно должны быть синопсис, тритмент и референсы, подробнее вы можете узнать в интернете, о том, как делается питч.
Кроме этого, отправьте несколько ссылок на самые лучшие ваши работы.
Короткое био.

`
const text3 = `Узнать о дистрибуции музыки
Узнать об услуге менеджер youtube канала
`
const text4 = `Просим вас четко сформулировать свои вопросы и предложения и оформить их сразу в одном письме. Как только наш label менеджер освободится, он сможет ответить на все ваши вопросы.`

const text5 =`
Если вы журналист или креативная единица в творческих тусовках, то вы можете стать нашим инсайдером и сливать информацию для нашего журнала около музыки для Центральноазиатских стран Curltai insight. Это может быть новость о выходе альбома, рецензия, новость о фите, исследование около музыки, статья о новых инструментах, в общем все то, что может заинтересовать публику.
Для этого нужно отправить текст, фотографии или видео, ФИО если хотите, чтобы вас указали как автора.

`
const text6 = `Дистрибуция музыки на стриминговые платформы всего Мира становится хорошим источником дохода и способом продвижения для музыкантов любого уровня и жанра. Работая с нами, вы получаете не только качественный сервис по дистрибуции, но и становитесь частью большой команды. Curltai – это большое сообщество людей, зараженных творчеством.  
 
Внутри этой площадки делаются очень много проектов, которые так или иначе, служат огромной машиной продвижения артистов. 
 Музыкальный журнал Curltai Insight – первый online журнал рупор музыкальной индустрии ЦА. 
 Curltai Radio – радио новой музыкальной волны. 
Подкасты, документальные фильмы, интервью и прочие проекты, которые знакомят артистов с аудиторией со стороны его личности. 
 Live – как уже было сказано, live площадка всегда будет существовать. Будет как открывать новые лица, так и знакомить нас с новыми хитами, уже известных артистов. 
 Curltai Collaboration – проект ищущий сотрудничества разного плана. Будь то feat с артистами из других стран или совместный продукт с компаниями и брендами.  
 Все эти проекты внутри сообщества работают на продвижение наших артистов в мир и культивирование креативных подходов к созданию творчества и зарабатывания на нем.
 `
const text7 = ` Каждый артист сегодня, должен иметь свой youtube канал. Канал нужно постоянно оптимизировать, следить за его оформлением, продвигать его. Хороший канал приносит доход и служит большой площадкой для продвижения в Мир.  
 
Мы предлагаем Вам предоставить эту работу нам. Канал будет принадлежать вам и откроется на вашу почту. Мы лишь будем заниматься его обслуживанием и получать свои 30%.

Будем заливать видео, писать описание, делать обложки, превью, общаться с подписчиками, ежемесячно отчитываться и так далее. Если хотите воспользоваться этой услугой, то напишите ваше имя, вид деятельности и наш менеджер свяжется с вами.
 `

module.exports.commands = commands
module.exports.text1 = text1
module.exports.text2 = text2
module.exports.text3= text3
module.exports.text4 = text4
module.exports.text5= text5
module.exports.text6=text6
module.exports.text7=text7
