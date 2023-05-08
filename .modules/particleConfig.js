const particleOptions = {
    fpsLimit: 60,
    interactivity: {
        detectsOn: 'canvas',
        events: {
            resize: true
        },
    },
    particles: {
        color: {
            value: "#f1f1f1"
        },
        number: {
            density: {
                enable: true,
                area: 100
            },
            limit: 0,
            value: 50,
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 3.2,
                sync: false,
            },
            random: {
                enable: true,
                minimumValue: 0.1,
            },
            value: 1,
        },
        shape: {
            type: 'circle',
        },
        size: {
            random: {
                enable: true,
                minimumValue: 1
            },
            value: 1
        }
    }
};

module.exports = particleOptions;