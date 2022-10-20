import { SortMode } from "../constants/vars"
import { Events } from "./eventTypes"
import { Launches } from "./launchesTypes"

type ArticleInfo = {
    id: number,
    featured: boolean,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string, 
    launches: Launches[],
    events: Events[],
}

type ArticleVisualInfo = {
    id: number,
    title: string,
    url: string,
    newsSite: string,
    imageUrl: string,
    summary: string,
    publishedAt: string, 
}

type ArticleVisual = {
    article: ArticleVisualInfo,
    key: number,
}

type ArticleSearch = {
    idLaunch: string,
}

type ArticlesState = {
    articles: ArticleInfo[],
    searchInfo: SearchArticlesInfo,
    totalCount: number,
    currentPage: number,
    sortMode: SortMode,
    selectedArticle: ArticleInfo,
    idLaunch: string,
}

type SearchArticlesInfo = {
    _start: number,
    _limit: number,
    _sort: string,
    title_contains: string,
    summary_contains: string,
}

type PaginationArticleInfo = {
    totalCount: number,
    currentPage: number,
}

export type { ArticleInfo, ArticlesState, SearchArticlesInfo, ArticleVisualInfo, ArticleVisual, PaginationArticleInfo, ArticleSearch };