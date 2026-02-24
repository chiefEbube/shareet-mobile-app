export const getFontFamily = (baseFont = 'Inter', size = 18, weight = '400') => {
    switch (weight) {
        case '100':
            return `${baseFont}_${size}pt-Thin`;
        case '200':
            return `${baseFont}_${size}-ExtraLight`;
        case '300':
            return `${baseFont}_${size}pt-Light`;
        case 'normal':
        case '400':
            return `${baseFont}_${size}pt-Regular`;
        case '500':
            return `${baseFont}_${size}pt-Medium`;
        case '600': 
            return `${baseFont}_${size}pt-SemiBold`;
        case 'bold':
        case '700': 
            return `${baseFont}_${size}pt-Bold`;
        case '800':
            return `${baseFont}_${size}pt-ExtraBold`;
        case '900':
            return `${baseFont}_${size}pt-Black`;
        default:
            return `${baseFont}_${size}pt-Regular`;
    }
}