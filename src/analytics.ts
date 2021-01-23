import * as $ from 'jquery'

const createAnalytics: () => { destroy(): void; getClicks(): (string | number) } = () => {
    let counter: number = 0

    let isDestroyed: boolean = false

    const listener: () => number = () => counter++

   $(document).on('click', listener)

    return {
        destroy() {
            isDestroyed = true
            $(document).off('click', listener)
        },

        getClicks(): string | number {
            if (isDestroyed)
                return 'Analytic is destroyed'

            return counter
        }
    }
}

window['analytic'] = createAnalytics()