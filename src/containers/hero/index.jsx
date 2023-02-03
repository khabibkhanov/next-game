import Button from "@ui/button";
import BannerGallery from "@components/banner-ui/banner-gallery";
import clsx from "clsx";

const HeroArea = ({ game_picture }) => (
    <div className="slider-area ptb--60">
        <div className="container-fluid padding-contorler-am-slide">
            <div className="row d-flex align-items-center">
                <div className="col-lg-12 col-xl-6 order-2 order-xl-1 padding-contorler-am-slide-right">
                        <h1
                            className="title large-height theme-color"
                            data-sal-delay="200"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            dangerouslySetInnerHTML={{
                                __html: "O'yinlar olamiga xush kelibsiz",
                            }}
                        />
                        <p
                            className="slide-disc"
                            data-sal-delay="300"
                            data-sal="slide-up"
                            data-sal-duration="800"
                        >
                            Eng sara va so'nggi o'yinlar xaqida biz orqali ma'lumotga ega bo'ling!
                        </p>
                        <div className="button-group">
                                <Button
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                    path={"/reviews"}
                                >
                                    Maqolalarni o'qish
                                </Button>
                        </div>
                </div>
                <div className="col-lg-12 col-xl-6 order-1 order-xl-2">
                    <div className={clsx("banner-gallery-wrapper")}>
                        {
                            game_picture?.map(( picture, index ) => (
                                picture && <BannerGallery key={index} pictures={picture} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HeroArea;
