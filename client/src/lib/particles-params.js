const particlesParams = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value:"#CED4DA"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#fff"
            }
        },
        opacity: {
            value:0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: false,
                speed: 30
            }
        },
        line_linked: {
            enable: true,
            distance: 300,
            color: "#CED4DA",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            direction: "bottom",
            speed: 1
        }
    }
}

export default particlesParams;