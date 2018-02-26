/**
 * import all the languages
 */
import English from './English';
import Russian from './Russian';

/**
 * i18N
 * Languages supported
 * and Paths to them
 */
import I18n from 'react-native-i18n';

I18n.fallbacks = true;
const lang = I18n.translation ={
    en : English,
    rus :Russian,
}
export default lang;