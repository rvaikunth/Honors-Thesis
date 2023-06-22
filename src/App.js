import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router,
    Route, Routes, Link } from "react-router-dom";

import CreatePost from "./components/createPostComponent";
import PostList from "./components/PostList";
import TagList from "./components/TagList";
import DisplayPhotos from "./components/DisplayPhotos";

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to={"createPostComponent"} className="nav-link">
                                John Simpson New Work
                                </Link>
                            </Navbar.Brand>
                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={"createPostComponent"} className="nav-link">
                                        Create Post
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"PostList"} className="nav-link">
                                        Post List
                                    </Link>
                                </Nav>
                                <Nav>
                                    <Link to={"TagList"} className="nav-link">
                                        Tag List
                                    </Link>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>
                <Container>
                    <Row>
                        <Col md={12}>
                        <div className="wrapper">
                            <Routes>
                            <Route exact path="/" 
                                element={<CreatePost/>} />
                            <Route path="createPostComponent" 
                                element={<CreatePost/>} />
                            <Route path="PostList" 
                                element={<PostList/>} />
                            <Route path="TagList/*" 
                                element={<TagList/>} />
                            <Route path="DisplayPhotos/:tag" 
                                component={<DisplayPhotos/>} />
                            </Routes>
                            
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    )
};

export default App;