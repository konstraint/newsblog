import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { transformDate } from "../../hooks/transformDate";
import { loadArticlesLaunch, setLaunch, setTitleContains, setCurrentPage, setStart, setTextContains } from "../../redux/action_creators/article_action_creators";
import { StoreState } from "../../redux/storeTypes";

const SelectedArticle = () => {
    const selectedArticle = useSelector((state: StoreState) => state.articles.selectedArticle);
    const { _start, _limit, _sort, title_contains, summary_contains } = useSelector((state: StoreState) => state.articles.searchInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLaunchClick = (id: string) => {
        console.log(id);
        dispatch(setLaunch(id));
        dispatch(setStart(0));
        dispatch(setCurrentPage(1));
        dispatch(setTitleContains(''));
        dispatch(setTextContains(''));        
        navigate(`/articles/launch/${id}`);
    }
    return (
        <div className="articles-selected">
            <h2>{selectedArticle.title}</h2>
            <img src={selectedArticle.imageUrl} className="articles-selected-img"></img>
            <span className="articles-selected-date">{transformDate(selectedArticle.publishedAt)}</span>
            <p className="articles-selected-text">{selectedArticle.summary}</p>
            <a className="articles-selected-link" href={selectedArticle.url}>{selectedArticle.newsSite}</a>          
            {
                selectedArticle.launches !== undefined && selectedArticle.launches.length > 0 
                ?
                    <div className="articles-launches">
                        <p className="articles-launches-text">More articles:</p>
                        <div className="articles-launches-links">
                            {
                                selectedArticle.launches.map((launch, index) => 
                                    <span onClick={() => handleLaunchClick(launch.id)} key={index} className="articles-launches-link">{launch.provider}</span>
                                )
                            }                      
                        </div>
                    </div>
                :
                <></>
            }         
        </div>
    );
};

export { SelectedArticle };