import {IRootState} from '../store/rootReducer';

export const getLanguage = (state: IRootState) => state.app.language;
