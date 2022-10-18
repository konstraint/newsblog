import React from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { transformDate } from "../../hooks/transformDate";
import { selectBlog } from "../../redux/action_creators/blog_action_creators";
import { BlogVisual } from "../../types/blogTypes";

const Blog = (props: BlogVisual) => {
    const { id, imageUrl, title, summary, url, publishedAt, newsSite } = props.blog;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBlogClick = (id: number) => {
        dispatch(selectBlog(id));
        navigate(`/blogs/${id}`);
    }    
    return (                
        <Col key={id}>
            <Card>
                <Card.Img variant="top" src={imageUrl} height={300}/>
                <Card.Body>
                    <Card.Title className="blog-title" onClick={() => handleBlogClick(id)}>{title.substring(0, 30) + '...'}</Card.Title>
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

export { Blog };