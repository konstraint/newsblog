import { put, takeEvery } from "redux-saga/effects";
import { SortMode } from "../../constants";
import { BlogInfo, SearchBlogsInfo } from "../../types/blogTypes";
import { 
    LOAD_BLOGS, 
    SET_BLOGS, SET_BLOG_LIMIT, SET_BLOG_SORT, SET_BLOG_START, 
    SET_BLOG_TEXT_CONTAINS, SET_BLOG_TITLE_CONTAINS, SET_BLOG_CURRENT_PAGE, SET_BLOG_TOTAL_COUNT, SET_BLOG_SORT_MODE, SELECT_BLOG, SET_SELECTED_BLOG 
} from "../action_types";

const loadBlogs = (searchInfo: SearchBlogsInfo) => ({
    type: LOAD_BLOGS,
    searchInfo,
});

const selectBlog = (id: number) => ({
    type: SELECT_BLOG,
    id,
});

const setSelectedBlog = (selectedBlog: BlogInfo) => ({
    type: SET_SELECTED_BLOG,
    selectedBlog,
});

const setBlogs = (blogs: BlogInfo[]) => ({
    type: SET_BLOGS,
    blogs,
});

const setTitleContains = (title_contains: string) => ({
    type: SET_BLOG_TITLE_CONTAINS,
    title_contains,
});

const setTextContains = (summary_contains: string) => ({
    type: SET_BLOG_TEXT_CONTAINS,
    summary_contains,
});

const setStart = (start: number) => ({
    type: SET_BLOG_START,
    start,
});

const setLimit = (limit: number) => ({
    type: SET_BLOG_LIMIT,
    limit,
});

const setSort = (sort: string) => ({
    type: SET_BLOG_SORT,
    sort,
});

const setSortMode = (sortMode: SortMode) => ({
    type: SET_BLOG_SORT_MODE,
    sortMode,
});

const setCurrentPage = (currentPage: number) => ({
    type: SET_BLOG_CURRENT_PAGE,
    currentPage,
});

const setTotalCount = (totalCount: number) => ({
    type: SET_BLOG_TOTAL_COUNT,
    totalCount,
});

function* fetchBlogs(action: any) {
    const { searchInfo } = action;
    //console.log('searchInfo =', searchInfo);
    const url = new URL('https://api.spaceflightnewsapi.net/v3/blogs/');
    const urlCount = new URL('https://api.spaceflightnewsapi.net/v3/blogs/count');
    for (let key in searchInfo) {        
        url.searchParams.append(key, searchInfo[key]);
        urlCount.searchParams.append(key, searchInfo[key]);
    }

    const dataCount: Response = yield fetch(urlCount);
    const responseCount: number = yield dataCount.json();
    yield put(setTotalCount(responseCount));

    const data: Response = yield fetch(url);
    const response: BlogInfo[] = yield data.json();
    yield put(setBlogs(response));
};

function* fetchSelectBlog(action: any) {
    const data: Response = yield fetch(`https://api.spaceflightnewsapi.net/v3/blogs/${action.id}`);
    const response: BlogInfo = yield data.json();
    yield put(setSelectedBlog(response));  
};

function* watcherBlogs() {
    yield takeEvery(LOAD_BLOGS, fetchBlogs);
    yield takeEvery(SELECT_BLOG, fetchSelectBlog);
};

export { 
    watcherBlogs,
    loadBlogs,
    setTitleContains,
    setTextContains,
    setCurrentPage,
    setStart,
    setSort,
    setSortMode,
    selectBlog
};