const createAnalytics = () => {
    let counter = 0

    let isDestroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            isDestroyed = true
            document.removeEventListener('click', listener)
        },

        getClicks() {
            if (isDestroyed)
                return 'Analytic is destoyd'

            return counter
        }
    }
}

window.analytic = createAnalytics()