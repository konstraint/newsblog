import React from "react";
import { useSelector } from "react-redux";
import { transformDate } from "../../hooks/transformDate";
import { StoreState } from "../../redux/storeTypes";

const SelectedArticle = () => {
    const selectedArticle = useSelector((state: StoreState) => state.articles.selectedArticle);
    return (
        <div className="articles-selected">
            <h2>{selectedArticle.title}</h2>
            <img src={selectedArticle.imageUrl} className="articles-selected-img"></img>
            <span className="articles-selected-date">{transformDate(selectedArticle.publishedAt)}</span>
            <p className="articles-selected-text">{selectedArticle.summary}</p>
            <a className="articles-selected-link" href={selectedArticle.url}>{selectedArticle.newsSite}</a>           
        </div>
    );
};

export { SelectedArticle };