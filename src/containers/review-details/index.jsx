import PropTypes from "prop-types";
import clsx from "clsx";
import { markdown } from "markdown"
import GameDetails from "@containers/review/game-details";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";

const ReviewDetailsArea = ({ className, post }) => {
    
    return (
        <div className={clsx("blog-details-area", className)}>
            <TabContainer defaultActiveKey={'nav-info'}>
                <div className="row">
                        <div className="col-12">
                            <div className="tab-wrapper-one">
                                <nav className="tab-button-one">
                                    <Nav
                                        className="nav nav-tabs"
                                        id="nav-tab"
                                        role="tablist"
                                    >
                                        <Nav.Link
                                            as="button"
                                            eventKey="nav-info"
                                        >
                                            Ma'lumotlar
                                        </Nav.Link>
                                        <Nav.Link
                                            as="button"
                                            eventKey="nav-guide"
                                        >
                                            O'yinni yutish sirlari
                                        </Nav.Link>
                                    </Nav>
                                </nav>
                            </div>
                        </div>
                </div>

                <TabContent className="tab-content rn-bid-content">
                        <TabPane eventKey="nav-info">
                            <div
                                className="news-details mb-5"
                                dangerouslySetInnerHTML={{ __html: markdown.toHTML(post.reviews )}}
                            />

                            <div className="blog-content-bottom">
                                <GameDetails games = {post} />
                            </div>
                        </TabPane>
                        <TabPane eventKey="nav-guide">
                            <div>
                                <h1>
                                    Guides
                                </h1>
                            </div>
                        </TabPane>
                </TabContent>
            </TabContainer>
        </div>
    );
};

ReviewDetailsArea.propTypes = {
    className: PropTypes.string,
    post: PropTypes.shape({}),
};

export default ReviewDetailsArea;
