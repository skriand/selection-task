
window.onload = function() {
    let tvSerials = [
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/ba1b5a6d-9d22-4ea6-86b9-21b2c95ed171/x1000\"/>",
            title: "Being Human",  
            date: 2011,
            description: "Сериал рассказывает о троих соседях: вампире, оборотне и привидении. Вампир не слишком успешно пытается обходиться без людей, оборотень мучается из-за своих превращений в полнолуние, а привидение немного странное взбалмошное создание.",        
            rate: 7.5,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/19ecc1b2-800a-485d-9015-47a39e65a779/x1000\"/>",
            title: "The Magicians",
            date: 2015,
            description: "Молодые люди слегка за двадцать изучают в современном Нью-Йорке магию и обнаруживают, что волшебный мир, о котором они читали в детстве, не только реален, но ещё и очень опасен.",
            rate: 7,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/ad87523d-984a-4204-9411-8f0da7ce5e3a/x1000\"/>",
            title: "The Librarians",
            date: 2014,
            description: "Группа библиотекарей отправляется в путешествие, чтобы спасти загадочные древние артефакты.",
            rate: 6.8,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/88a8912a-54c9-43b1-9fba-3d5b1c157796/x1000\"/>",
            title: "Game of Thrones",
            date: 2011,
            description: "К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наемника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем, никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от нее.",
            rate: 9,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/6f42e6c6-8334-4cd8-8955-837916d26fde/x1000\"/>",
            title: "Gunpowder",
            date: 2017,
            description: "Сериал посвящен Пороховому заговору 1605 года — попытке группы английских католиков убить короля Якова I, симпатизировавшего протестантам.",
            rate: 6.2,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/2d3a155d-2f23-4aaa-9140-afe2e1fdfda1/x1000\"/>",
            title: "Sherlock",
            date: 2010,
            description: "События разворачиваются в наши дни. Он прошел Афганистан, остался инвалидом. По возвращении в родные края встречается с загадочным, но своеобразным гениальным человеком. Тот в поиске соседа по квартире. Лондон, 2010 год. Происходят необъяснимые убийства. Скотланд-Ярд без понятия, за что хвататься. Существует лишь один человек, который в силах разрешить проблемы и найти ответы на сложные вопросы.",
            rate: 8.9,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/a54224f1-58a9-4a1a-92a0-c581224ee4a2/x1000\"/>",
            title: "Medici: Masters of Florence",
            date: 2016,
            description: "История превращения титулованного семейства Медичи из обычных торговцев в невероятно могучий клан, который, зачастую пренебрегая законами морали, оказал существенное влияние на духовную, экономическую и культурную революции и нажил себе много врагов.",
            rate: 7.5,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/2f4bd9ea-ec01-4fa9-9812-575158aa71f2/x1000\"/>",
            title: "Stranger Things",  
            date: 2016,
            description: "1980-е годы, тихий провинциальный американский городок. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл. Выяснить обстоятельства дела полны решимости родные мальчика и местный шериф, также события затрагивают лучшего друга Уилла — Майка. Он начинает собственное расследование. Майк уверен, что близок к разгадке, и теперь ему предстоит оказаться в эпицентре ожесточенной битвы потусторонних сил.",        
            rate: 8.5,
        },
        {
            img: "<img src=\"https://st.kp.yandex.net/im/poster/3/2/6/kinopoisk.ru-Chilling-Adventures-of-Sabrina-3266070.jpg\"/>",
            title: "Chilling Adventures of Sabrina",  
            date: 2018,
            description: "Ведьма Сабрина пытается найти истинную себя между натурами смертной и ведьмы, при этом ей придётся противостоять злым силам, которые угрожают ей, её семье и всему миру людей.",        
            rate: 7.2,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/53e53a08-3f1d-4169-a987-e00c25cd1622/x1000\"/>",
            title: "Vikings",  
            date: 2013,
            description: "Сериал рассказывает об отряде викингов Рагнара. Он восстал, чтобы стать королём племён викингов. Норвежская легенда гласит, что он был прямым потомком Одина, бога войны и воинов.",        
            rate: 8.3,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/57375a05-4883-4994-b33b-8d60741a0706/x1000\"/>",
            title: "The Witcher",  
            date: 2019,
            description: "Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ болотных, оборотней и даже заколдованных принцесс. В сельской глуши местную девушку Йеннифэр, которой сильно не повезло с внешностью, зато посчастливилось иметь способности к магии, отец продаёт колдунье в ученицы. А малолетняя наследница королевства Цинтра по имени Цири вынуждена пуститься в бега, когда их страну захватывает империя Нильфгаард. Судьбы этих троих окажутся тесно связаны, но скоро сказка сказывается, да не скоро дело делается.",        
            rate: 7.4,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/9e4388cc-b407-4149-8e28-3499ac431910/x1000\"/>",
            title: "The Dragon Prince",  
            date: 2018,
            description: "Сюжет повествует о трёх подростках, направляющихся в страну эльфов Зейдию, чтобы доставить туда яйцо дракона — наследника короля драконов, так как это может предотвратить грядущую войну между людьми и эльфами.",        
            rate: 7.7,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/4f0c84e5-6dcd-4253-ab6d-c070af4f71c0/x1000\"/>",
            title: "Scrubs",  
            date: 2001,
            description: "Отучившись четыре года в медицинской школе, Джон Дориан приходит работать интерном в клинику. Вместе с ним здесь же будет применять полученные знания и его лучший друг со времен колледжа Крис Терк. Не имеющие опыта практической работы, молодые специалисты сразу же погружаются в хаотический мир жизни больницы…",        
            rate: 8.7,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/270df10e-2e72-4d8e-a49b-f84c751162a7/x1000\"/>",
            title: "House, M.D.",  
            date: 2004,
            description: "Сериал рассказывает о команде врачей, которые должны правильно поставить диагноз пациенту и спасти его. Возглавляет команду доктор Грегори Хаус, который ходит с тростью после того, как его мышечный инфаркт в правой ноге слишком поздно правильно диагностировали. Как врач Хаус просто гений, но сам не отличается проникновенностью в общении с больными и с удовольствием избегает их, если только есть возможность. Он сам всё время проводит в борьбе с собственной болью, а трость в его руке только подчеркивает его жесткую, ядовитую манеру общения. Порой его поведение можно назвать почти бесчеловечным, и при этом он прекрасный врач, обладающий нетипичным умом и безупречным инстинктом, что снискало ему глубокое уважение. Будучи инфекционистом, он ещё и замечательный диагност, который любит разгадывать медицинские загадки, чтобы спасти кому-то жизнь. Если бы все было по его воле, то Хаус лечил бы больных не выходя из своего кабинета.",        
            rate: 8.8,
        },
        {
            img: "<img src=\"https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/70408945-2b71-4d10-9ffc-cd23d43d1c08/x1000\"/>",
            title: "Rick and Morty",  
            date: 2013,
            description: "В центре сюжета — школьник по имени Морти и его дедушка Рик. Морти — самый обычный мальчик, который ничем не отличается от своих сверстников. А вот его дедуля занимается необычными научными исследованиями и зачастую полностью неадекватен. Он может в любое время дня и ночи схватить внука и отправиться вместе с ним в безумные приключения с помощью построенной из разного хлама летающей тарелки, которая способна перемещаться сквозь межпространственный тоннель. Каждый раз эта парочка оказывается в самых неожиданных местах и самых нелепых ситуациях.",        
            rate: 8.9,
        }
    ];

    tvSerials.sort((prev, next) => prev.date - next.date);

    function divCreate(parentd, classEl){
        let div = document.createElement('div');
        div.className = classEl;
        parentd.append(div);
        return div;
    }
    function openBox(toggler, bool) {
        let div = toggler.previousElementSibling;
        if(div.style.display == 'block') {
            div.style.display = 'none';
            if (bool == true) toggler.innerHTML = 'Развернуть описание';
        }
        else {
            div.style.display = 'block';
            if (bool == true) toggler.innerHTML = 'Свернуть описание';
        }
    }
    function listOut(){
        let divs;
        for (let i = 0; i < 15; i++) {
            if (i%4 == 0){
                divs = divCreate(list, "serials");
            }
            let div1 = divCreate(divCreate(divs, "serial"), "in-serial");
            for (let key in tvSerials[i]) {
                let div = document.createElement('div');
                switch (key) {
                    case "description":
                        div.className = "description";
                        break;
                    case "rate":
                        div.className = "d-list";
                        div.innerHTML = "Рейтинг на КиноПоиске: <b>"+tvSerials[i][key]+"</b>";
                        break;
                
                    default: div.className = "caption";
                        break;
                }
                if (!div.innerHTML) div.innerHTML = tvSerials[i][key];
                div1.append(div);
                if (key == "description") {
                    let ah = document.createElement('a');
                    ah.id = "a-"+i;
                    ah.href = "#";
                    ah.innerHTML = 'Развернуть описание';
                    div1.append(ah);
                }
            }
            document.getElementById("a-"+i).onclick = function() {
                openBox(this, true);
                return false;
            };
        }
    }
    listOut();
    let sortic = true;
    document.getElementById("date").onclick = function() {
        if (sortic == true){
            tvSerials.sort((prev, next) => next.date - prev.date);
            sortic = false;
            document.getElementById("date").innerHTML = "По дате выхода&uarr;";
        }
        else{
            tvSerials.sort((prev, next) => prev.date - next.date);
            sortic = true;
            document.getElementById("date").innerHTML = "По дате выхода&darr;";
        }
        document.getElementById("list").innerHTML = "";
        listOut();
        return false;
    };
    document.getElementById("genre").onclick = function() {
        openBox(this, false);
        return false;
    };
}