import React from "react";
import { Card, Col } from "react-bootstrap";
import { ArticleVisual } from "../../types/articleTypes";

const Article = (props: ArticleVisual) => {
    const { id, imageUrl, title, summary, url, publishedAt } = props.article;
    return (                
        <Col key={id}>
            <Card>
                <Card.Img variant="top" src={imageUrl} height={300}/>
                <Card.Body>
                    <Card.Title style={{height: '150px'}}>{title}</Card.Title>
                    <Card.Text>{summary.substring(0, 30) + '...'}</Card.Text>
                    <Card.Link href={url}>Card Link {id}</Card.Link>
                </Card.Body>                               
                <Card.Footer>
                    <small className="text-muted">{`Last updated ${publishedAt}`}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export { Article };