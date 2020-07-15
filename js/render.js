const item = [

    {
        type: 'masks',
        title: 'Ball Game!',
        body:
            `Маска для Московского онлайн магазина Yolo Shop.
            Эффект содержит неоновую рамку с названием бренда.
            При моргании появляются зеленые линзы.`,
        video: 'mask1.mp4',
        background: '#ffffff'
    },
    {
        type: 'masks',
        title: 'Ball Game!',
        body:
            `Маска для Московского онлайн магазина Yolo Shop.
            Эффект содержит неоновую рамку с названием бренда.
            При моргании появляются зеленые линзы.`,
        video: 'mask1.mp4',
        background: '#ffffff'
    },
    {
        type: 'masks',
        title: 'Ball Game!',
        body:
            `Маска для Московского онлайн магазина Yolo Shop.
            Эффект содержит неоновую рамку с названием бренда.
            При моргании появляются зеленые линзы.`,
        video: 'mask1.mp4',
        background: '#ffffff'
    },
    {
        type: 'masks',
        title: 'Ball Game!',
        body:
            `Маска для Московского онлайн магазина Yolo Shop.
            Эффект содержит неоновую рамку с названием бренда.
            При моргании появляются зеленые линзы.`,
        video: 'mask1.mp4',
        background: '#ffffff'
    },

    {
        type: 'games',
        title: 'игра',
        body:
            `игра р агр га ра гр аг раг аа рг рага рга ра г раг арга ра гра га р`,
        video: 'mask1.mp4',
        background: '#34a1ff'
    },

    {
        type: 'games',
        title: 'игра',
        body:
            `игра р агр га ра гр аг раг аа рг рага рга ра г раг арга ра гра га р`,
        video: 'mask1.mp4',
        background: '#34a1ff'
    },
    {
        type: 'games',
        title: 'игра',
        body:
            `игра р агр га ра гр аг раг аа рг рага рга ра г раг арга ра гра га р`,
        video: 'mask1.mp4',
        background: '#34a1ff'
    },
    {
        type: 'games',
        title: 'игра',
        body:
            `игра р агр га ра гр аг раг аа рг рага рга ра г раг арга ра гра га р`,
        video: 'mask1.mp4',
        background: '#34a1ff'
    },
    {
        type: 'games',
        title: 'игра',
        body:
            `игра р агр га ра гр аг раг аа рг рага рга ра г раг арга ра гра га р`,
        video: 'mask1.mp4',
        background: '#34a1ff'
    },
    {
        type: 'games',
        title: 'игра',
        body:
            `игра р агр га ра гр аг раг аа рг рага рга ра г раг арга ра гра га р`,
        video: 'mask1.mp4',
        background: '#34a1ff'
    },

    {
        type: 'presets',
        title: 'пресет',
        body:
            ` пресет пресет пресетпресет пресет пресетпресет пресет пресетпресет пресет пресет`,
        video: 'mask1.mp4',
        background: '#da73ff'
    },

    {
        type: 'presets',
        title: 'пресет',
        body:
            ` пресет пресет пресетпресет пресет пресетпресет пресет пресетпресет пресет пресет`,
        video: 'mask1.mp4',
        background: '#da73ff'
    },
    {
        type: 'presets',
        title: 'пресет',
        body:
            ` пресет пресет пресетпресет пресет пресетпресет пресет пресетпресет пресет пресет`,
        video: 'mask1.mp4',
        background: '#da73ff'
    },
]

document.body.onload = () => {
    item.forEach((item,index) => {
        const maskExample = document.createElement("div");
        maskExample.classList.add('mask__example');
        maskExample.style.background = item.background

        const container = document.createElement('div');
        container.classList.add('container')

        const videoContainer = document.createElement("div");
        videoContainer.classList.add('video')

        const video = document.createElement("video")
        video.id = `player${index}`
        video.width = 420;
        video.height = 730;
        video.controls = true;
        video['data-plyr-config'] = {"controls": ["play", "restart"]}
        video.style.width = "348px";
        video.style.borderRadius = '40px'

        const source = document.createElement("source");
        source.src = `media/${item.video}`
        source.type = "video/mp4"

        const maskExampleDescription = document.createElement('div')
        maskExampleDescription.classList.add('mask__example-description');

        const maskExampleDescriptionTittle = document.createElement('div');
        maskExampleDescriptionTittle.classList.add('mask__example-description-title')
        maskExampleDescriptionTittle.innerText = item.title

        const maskExampleDescriptionBody = document.createElement('div');
        maskExampleDescriptionBody.classList.add('mask__example-description-body')
        maskExampleDescriptionBody.innerText = `Маска\n${item.body}`

        const button = document.createElement('div');
        button.classList.add('mask__example_button-test-effect')

        maskExampleDescription.appendChild(maskExampleDescriptionTittle)
        maskExampleDescription.appendChild(maskExampleDescriptionBody)
        maskExampleDescription.appendChild(button)

        video.appendChild(source)

        videoContainer.appendChild(video)
        videoContainer.appendChild(maskExampleDescription)
        container.appendChild(videoContainer)
        maskExample.appendChild(container)

        const target = document.getElementById(item.type)
        target.appendChild(maskExample)

        const player = new Plyr(`#player${index}`, {"controls": ["play", "restart"]});
    })


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