import { COUNT_ARTICLES_PAGE, SortMode, SORT_ARTICLES_RULES } from "../../constants";
import { ArticlesState } from "../../types/articleTypes"
import { 
    SET_ARTICLES, SET_ARTICLES_LAUNCH, SET_ARTICLE_CURRENT_PAGE, SET_ARTICLE_LIMIT, SET_ARTICLE_SORT, SET_ARTICLE_SORT_MODE, SET_ARTICLE_START, 
    SET_ARTICLE_TEXT_CONTAINS, SET_ARTICLE_TITLE_CONTAINS, SET_ARTICLE_TOTAL_COUNT, SET_SELECTED_ARTICLE 
} from "../action_types";

const initialState = {
    articles: [],
    searchInfo: {
        _start: 0,
        _limit: COUNT_ARTICLES_PAGE,
        _sort: SORT_ARTICLES_RULES[1],
        title_contains: '',
        summary_contains: '',
    },
    totalCount: 0,
    currentPage: 1,
    sortMode: SortMode.ASC,
    selectedArticle: Object(),
    idLaunch: '',
}

export default (state: ArticlesState = initialState, action: any) => {
    switch(action.type) {
        case SET_ARTICLES: 
            return ({
                ...state,
                articles: state.sortMode === SortMode.ASC ? action.articles : action.articles.reverse(),
            });
        case SET_SELECTED_ARTICLE:
            return ({
                ...state,
                selectedArticle: action.selectedArticle,
            }); 
        case SET_ARTICLES_LAUNCH:
            return ({
                ...state,
                idLaunch: action.idLaunch,
            });       
        case SET_ARTICLE_TOTAL_COUNT: 
            return ({
                ...state,
                totalCount: action.totalCount,
            });    
        case SET_ARTICLE_CURRENT_PAGE: 
            return ({
                ...state,
                currentPage: action.currentPage,
            });            
        case SET_ARTICLE_TITLE_CONTAINS: 
            return ({
                ...state,
                searchInfo: { 
                    ...state.searchInfo,
                    title_contains: action.title_contains,
                },
            });
        case SET_ARTICLE_TEXT_CONTAINS: 
            return ({
                ...state,
                searchInfo: { 
                    ...state.searchInfo,
                    summary_contains: action.summary_contains,
                },
            });            
        case SET_ARTICLE_START:
            return ({
                ...state,
                searchInfo: { 
                    ...state.searchInfo,
                    _start: action.start,
                },
            });
        case SET_ARTICLE_LIMIT:
            return ({
                ...state,
                searchInfo: { 
                    ...state.searchInfo,
                    _limit: action.limit,
                },                
            });
        case SET_ARTICLE_SORT:
            return ({
                ...state,
                searchInfo: { 
                    ...state.searchInfo,
                    _sort: action.order,
                },                
            }); 
        case SET_ARTICLE_SORT_MODE:
            return ({
                ...state,
                sortMode: action.sortMode,                
            });          
        default:
            return state;
    }
}