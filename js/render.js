const item = [

    {
        videoPosition: 'right',
        type: 'masks',
        title: 'Ball Game!',
        body:
            `Маска для Московского онлайн магазина Yolo Shop.
            Эффект содержит неоновую рамку с названием бренда.
            При моргании появляются зеленые линзы.`,
        video: 'mask1.mp4',
        fontColor: 'white',
        streak: 'white',
        background: '#ffffff',
    },

    {
        videoPosition: 'left',
        type: 'masks',
        title: 'Ball Game!',
        body:
            `Маска для Московского онлайн магазина Yolo Shop.
            Эффект содержит неоновую рамку с названием бренда.
            При моргании появляются зеленые линзы.`,
        video: 'mask1.mp4',
        fontColor: 'black',
        streak: 'white',
        background: '#68afe0'
    },
    {
        videoPosition: 'right',
        type: 'masks',
        title: 'Ball Game!',
        body:
            `Маска для Московского онлайн магазина Yolo Shop.
            Эффект содержит неоновую рамку с названием бренда.
            При моргании появляются зеленые линзы.`,
        video: 'mask1.mp4',
        fontColor: 'black',
        streak: 'white',
        background: '#ffffff'
    },

    {
        videoPosition: 'left',
        type: 'masks',
        title: 'Ball Game!',
        body:
            `Маска для Московского онлайн магазина Yolo Shop.
            Эффект содержит неоновую рамку с названием бренда.
            При моргании появляются зеленые линзы.`,
        video: 'mask1.mp4',
        fontColor: 'black',
        streak: 'white',
        background: '#68afe0'
    },
    {
        videoPosition: 'right',
        type: 'games',
        title: 'Игрулечька!',
        body:
            `Прикольная игра игрулечка коля сделал вщ класс!!!!`,
        video: 'mask1.mp4',
        fontColor: 'black',
        streak: 'white',
        background: '#ffffff'
    },

    {
        videoPosition: 'left',
        type: 'games',
        title: 'Еще одна игрулечка!!',
        body:
            `Тоже коля делал!!! ВЩ ОЧЕНЬ КРУТАЯ!!!`,
        video: 'mask1.mp4',
        fontColor: 'black',
        streak: 'white',
        background: '#a470fd'
    },
    {
        videoPosition: 'right',
        type: 'games',
        title: 'Игрулечька!',
        body:
            `Прикольная игра игрулечка коля сделал вщ класс!!!!`,
        video: 'mask1.mp4',
        fontColor: 'black',
        streak: 'white',
        background: '#ffffff'
    },

    {
        videoPosition: 'left',
        type: 'games',
        title: 'Еще одна игрулечка!!',
        body:
            `Тоже коля делал!!! ВЩ ОЧЕНЬ КРУТАЯ!!!`,
        video: 'mask1.mp4',
        fontColor: 'white',
        streak: 'white',
        background: '#a470fd'
    },
    {
        videoPosition: 'right',
        type: 'games',
        title: 'Игрулечька!',
        body:
            `Прикольная игра игрулечка коля сделал вщ класс!!!!`,
        video: 'mask1.mp4',
        fontColor: 'black',
        streak: 'white',
        background: '#ffffff'
    },

    {
        videoPosition: 'left',
        type: 'games',
        title: 'Еще одна игрулечка!!',
        body:
            `Тоже коля делал!!! ВЩ ОЧЕНЬ КРУТАЯ!!!`,
        video: 'mask1.mp4',
        fontColor: 'black',
        streak: 'white',
        background: '#a470fd'
    },
]

document.body.onload = () => {
    item.forEach((item,index) => {
        const maskExample = document.createElement("div");

        maskExample.innerHTML = `
            <div class="mask__example" style="background: ${item.background}">
                <div class="container">
                    <div class="video ${item.videoPosition}">
                        <video id="player${index}" width="420" height="730" controls data-plyr-config='{"controls": ["play", "restart"]}' style="width: 348px; border-radius: 40px">
                            <source src="media/mask1.mp4" type="video/mp4">
                        </video>
                        <div class="mask__example-description">
                            <div class="mask__example-description-title ${item.streak==='white'?'whitestreak':''}">
                                ${item.type==="masks"?'Маска':item.type==="games"?"Игра":item.type="presets"?'Пресет':'Модель'}<br>Ball Game
                            </div>
                            <div class="mask__example-description-body" style="color:${item.fontColor};">
                                ${item.body}
                            </div>
                        </div>
            
                     </div>
                </div>`

        const target = document.getElementById(item.type)
        target.appendChild(maskExample)

        new Plyr(`#player${index}`, {"controls": ["play", "restart"]});
    })



    // фиксирование меню
    const navBar = document.getElementById('navigator')
    const menu = document.getElementById('menu')
    const initialNavBarOffset = navBar.offsetTop;

    var booooooooo = true;
    document.addEventListener('scroll', (data) => {
        if (window.scrollY > navBar.offsetTop && booooooooo) {
                menu.style.height = `${parseInt(menu.style.height)+80}`
                booooooooo = false
                navBar.classList.add('fixed')
        } else if(window.scrollY < initialNavBarOffset && !booooooooo) {
                menu.style.height = `${parseInt(menu.style.height)-80}`
                navBar.classList.remove('fixed')
                booooooooo = true
        }
    })
}