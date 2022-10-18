import React from "react";
import { useSelector } from "react-redux";
import { transformDate } from "../../hooks/transformDate";
import { StoreState } from "../../redux/storeTypes";

const SelectedBlog = () => {
    const selectedBlog = useSelector((state: StoreState) => state.blogs.selectedBlog);
    return (
        <div className="blogs-selected">
            <h2>{selectedBlog.title}</h2>
            <img src={selectedBlog.imageUrl} className="blogs-selected-img"></img>
            <span className="blogs-selected-date">{transformDate(selectedBlog.publishedAt)}</span>
            <p className="blogs-selected-text">{selectedBlog.summary}</p>
            <a className="blogs-selected-link" href={selectedBlog.url}>{selectedBlog.newsSite}</a>           
        </div>
    );
};

export { SelectedBlog };