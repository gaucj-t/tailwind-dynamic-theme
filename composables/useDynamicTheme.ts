enum CssVariables {
    COLOR_BASE = '--xxx-color-base',
    COLOR_PRIMARY = '--xxx-color-primary',
    COLOR_SECONDARY = '--xxx-color-secondary',
    COLOR_SUCCESS = '--xxx-color-success',
    COLOR_DANGER = '--xxx-color-danger',
    COLOR_WARNING = '--xxx-color-warning',
    COLOR_INFO = '--xxx-color-info',
    COLOR_LIGHT = '--xxx-color-light',
    COLOR_DARK = '--xxx-color-dark',
}

type cssVariables = keyof typeof CssVariables

const CSS_VAR_ARRAY: CssVariables[] = Object.values(CssVariables);

const imgUrl = ref('')
const generateRandomImgUrl = () => {
    const words = [ 'Tailwind', 'Vue', 'NuxtJs' ]
    const randomWord = words[Math.floor(Math.random() * words.length)];
    imgUrl.value = `https://placehold.co/800x200?text=${randomWord}&font=roboto`
    console.log('Image URL = ', imgUrl.value)
}

const changeColors = () => {
    const rootSelector = document.querySelector<HTMLElement>(':root')
    const cssStyleDeclaration = rootSelector ? getComputedStyle(rootSelector) : undefined

    if (cssStyleDeclaration) {
        CSS_VAR_ARRAY.forEach((cssVar) => {
            const newColor = Math.floor(Math.random() * 16777215).toString(16);
            rootSelector?.style.setProperty(cssVar, `#${newColor}`)
        })
    }

}


export const useDynamicTheme = () => {
    changeColors()
    generateRandomImgUrl()

    return { imgUrl }
}
