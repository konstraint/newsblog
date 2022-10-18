import React from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { transformDate } from "../../hooks/transformDate";
import { selectArticle } from "../../redux/action_creators";
import { ArticleVisual } from "../../types/articleTypes";

const Article = (props: ArticleVisual) => {
    const { id, imageUrl, title, summary, url, publishedAt, newsSite } = props.article;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleArticleClick = (id: number) => {
        dispatch(selectArticle(id));
        navigate(`/articles/${id}`);
    }
    return (              
        <Col key={id}>
            <Card>
                <Card.Img variant="top" src={imageUrl} height={300}/>
                <Card.Body>
                    <Card.Title className="article-title" onClick={() => handleArticleClick(id)}>{title.substring(0, 30) + '...'}</Card.Title>
                    <Card.Text>{summary.substring(0, 30) + '...'}</Card.Text>
                    <Card.Link href={url}>{`${newsSite} ${id}`}</Card.Link>
                </Card.Body>                               
                <Card.Footer>
                    <small className="text-muted">{`Last updated ${transformDate(publishedAt)}`}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export { Article };