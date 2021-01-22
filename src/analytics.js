import * as $ from 'jquery'

const createAnalytics = () => {
    let counter = 0

    let isDestroyed = false

    const listener = () => counter++

   $(document).on('click', listener)

    return {
        destroy() {
            isDestroyed = true
            $(document).off('click', listener)
        },

        getClicks() {
            if (isDestroyed)
                return 'Analytic is destoyd'

            return counter
        }
    }
}

window.analytic = createAnalytics()