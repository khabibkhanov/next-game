import PropTypes from "prop-types";
import clsx from "clsx";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import NewsLayout from "../layout";

const NewsArea = ({ className, data }) => (
    <div
        className={clsx(
            "rn-product-area",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-12 custom-product-col">
                    {data?.section_title && (
                        <h2 className="text-left mb--50">
                            {data.section_title.title}
                        </h2>
                    )}

                    <TabContainer defaultActiveKey="nav-home">
                        <TabContent>
                            <TabPane
                                eventKey="nav-home"
                            >
                                {data?.posts?.map((post) => (
                                    <NewsLayout
                                        key={post.slug}
                                        data-sal="slide-up"
                                        data-sal-duration="800"
                                        data-sal-delay="150"
                                        className="single-column mb--30"
                                        title={post.title}
                                        slug={post.slug}    
                                        createdAt={post.createdAt}
                                        timeToRead={post.timeToRead}
                                        image={{ ...post.game_picture, alt: post.title, width: 350, height: 200 }}
                                    />
                                ))}
                            </TabPane>
                        </TabContent>
                    </TabContainer>
                </div>
            </div>
        </div>
    </div>
);

NewsArea.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape(),
}

export default NewsArea;