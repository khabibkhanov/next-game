/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import Button from "@ui/button";
import ProductModal from "@components/modals/product-modal";
import ErrorText from "@ui/error-text";
import { toast } from "react-toastify";
import NiceSelect from "@ui/nice-select";

const CreateNewArea = ({ className, space }) => {
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [hasImageError, setHasImageError] = useState(false);
    const [previewData, setPreviewData] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
    });

    const notify = () => toast("Your product has submitted");
    const handleProductModal = () => {
        setShowProductModal(false);
    };

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const onSubmit = (data, e) => {
        const { target } = e;
        console.log(data, target)

        const submitBtn = target.localName === "span" ? target.parentElement : target;
        const isPreviewBtn = submitBtn.dataset?.btn;
        setHasImageError(!selectedImage)

        if (isPreviewBtn && selectedImage) {    
            setPreviewData({ ...data, image: selectedImage })
            setShowProductModal(true);
        }

        if (!isPreviewBtn) {
            notify();
            reset();
            setSelectedImage();
        }
    };

    return (
        <>
            <div
                className={clsx(
                    "create-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 ml_md--0 ml_sm--0">
                            </div>

                            <div className="col-lg-9">
                                <div className="form-wrapper-one">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label"
                                                >
                                                    O'yin nomi
                                                </label>
                                                <input
                                                    id="name"
                                                    placeholder="e. g. `Call of duty warfare eagames`"
                                                    {...register("name", {
                                                        required:
                                                            "Name is required",
                                                    })}
                                                />
                                                {errors.name && (
                                                    <ErrorText>
                                                        {errors.name?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label"
                                                >
                                                    slug
                                                </label>
                                                <input
                                                    id="name"
                                                    placeholder="e. g. `call-of-duty-warfare-eagames`"
                                                    {...register("name", {
                                                        required:
                                                            "Name is required",
                                                    })}
                                                />
                                                {errors.name && (
                                                    <ErrorText>
                                                        {errors.name?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="row mb--20">
                                            <div className="col-md-6">
                                                <div className="input-box pb--20">
                                                    <label
                                                        htmlFor="Properties"
                                                        className="form-label"
                                                        
                                                    >
                                                        Ishlab chiqarilgan sana
                                                    </label>
                                                    <input
                                                        id="propertiys"  
                                                        type="date"
                                                        placeholder="e. g. `Properties`"
                                                        {...register("propertiy", {
                                                            required:
                                                                "Propertiy is required",
                                                        })}
                                                    />
                                                    {errors.propertiy && (
                                                        <ErrorText>
                                                            {
                                                                errors.propertiy
                                                                    ?.message
                                                            }
                                                        </ErrorText>
                                                    )}
                                                </div>

                                                <div className="input-box pb--20">
                                                    <label
                                                        htmlFor="name"
                                                        className="form-label"
                                                    >
                                                        O'yin nomi
                                                    </label>
                                                    <input
                                                        id="name"
                                                        placeholder="e. g. `Call of duty warfare eagames`"
                                                        {...register("name", {
                                                            required:
                                                                "Name is required",
                                                        })}
                                                    />
                                                    {errors.name && (
                                                        <ErrorText>
                                                            {errors.name?.message}
                                                        </ErrorText>
                                                    )}
                                                </div>

                                                <div className="input-box pb--20">
                                                    <label
                                                        htmlFor="name"
                                                        className="form-label"
                                                    >
                                                        O'yin nomi
                                                    </label>
                                                    <input
                                                        id="name"
                                                        placeholder="e. g. `Call of duty warfare eagames`"
                                                        {...register("name", {
                                                            required:
                                                                "Name is required",
                                                        })}
                                                    />
                                                    {errors.name && (
                                                        <ErrorText>
                                                            {errors.name?.message}
                                                        </ErrorText>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="upload-area pb-20">
                                                    <div className="upload-formate mb-2">
                                                        <span className="form-label">
                                                            Rasm yuklang
                                                        </span>
                                                    </div>

                                                    <div className="brows-file-wrapper">
                                                        <input
                                                            name="file"
                                                            id="file"
                                                            type="file"
                                                            className="inputfile"
                                                            data-multiple-caption="{count} files selected"
                                                            multiple
                                                            onChange={imageChange}
                                                        />
                                                        {selectedImage && (
                                                            <img
                                                                id="createfileImage"
                                                                src={URL.createObjectURL(
                                                                    selectedImage
                                                                )}
                                                                alt=""
                                                                data-black-overlay="6"
                                                            />
                                                        )}

                                                        <label
                                                            htmlFor="file"
                                                            title="No File Choosen"
                                                        >
                                                            <i className="feather-upload" />
                                                            <span className="text-center">
                                                                Choose a File
                                                            </span>
                                                            <p className="text-center mt--10">
                                                                PNG, GIF, WEBP, MP4 or MP3.{" "}
                                                                <br /> Max 1Gb.
                                                            </p>
                                                        </label>
                                                    </div>
                                                    {hasImageError && !selectedImage && (
                                                        <ErrorText>Image is required</ErrorText>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="price"
                                                    className="form-label"
                                                >
                                                    Item Price in $
                                                </label>
                                                <input
                                                    id="price"
                                                    placeholder="e. g. `20$`"
                                                    {...register("price", {
                                                        pattern: {
                                                            value: /^[0-9]+$/,
                                                            message:
                                                                "Please enter a number",
                                                        },
                                                        required:
                                                            "Price is required",
                                                    })}
                                                />
                                                {errors.price && (
                                                    <ErrorText>
                                                        {errors.price?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="select-box pb--20">
                                                <label
                                                    htmlFor="price"
                                                    className="form-label"
                                                >
                                                    Item Price in $
                                                </label>
                                                <div className="input-two-wrapper">
                                                    
                                                    <div className="currency">

                                                        <NiceSelect
                                                            options={[
                                                                { value: "($)USD", text: "($)USD" },
                                                                { value: "wETH", text: "wETH" },
                                                                { value: "BIT Coin", text: "BIT Coin" },
                                                                { value: "Bsdin", text: "BIT Coin" },
                                                                { value: "soin", text: "BIT Coin" },

                                                            ]}
                                                            placeholder="Currency"
                                                            className=""
                                                            onChange={(e) => e}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="Discription"
                                                    className="form-label"
                                                >
                                                    O'yin xaqida ma'lumotlar
                                                </label>
                                                <textarea
                                                    id="discription"
                                                    rows="3"
                                                    placeholder="e. g. Shu yerga yozing"
                                                    {...register(
                                                        "discription",
                                                        {
                                                            required:
                                                                "Discription is required",
                                                        }
                                                    )}
                                                />
                                                {errors.discription && (
                                                    <ErrorText>
                                                        {
                                                            errors.discription
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-4">
                                            <div className="input-box pb--20 rn-check-box">
                                                <input
                                                    className="rn-check-box-input"
                                                    type="checkbox"
                                                    id="putonsale"
                                                />
                                                <label
                                                    className="rn-check-box-label"
                                                    htmlFor="putonsale"
                                                >
                                                    Put on Sale
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-4">
                                            <div className="input-box pb--20 rn-check-box">
                                                <input
                                                    className="rn-check-box-input"
                                                    type="checkbox"
                                                    id="instantsaleprice"
                                                />
                                                <label
                                                    className="rn-check-box-label"
                                                    htmlFor="instantsaleprice"
                                                >
                                                    Instant Sale Price
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-4">
                                            <div className="input-box pb--20 rn-check-box">
                                                <input
                                                    className="rn-check-box-input"
                                                    type="checkbox"
                                                    id="unlockpurchased"
                                                />
                                                <label
                                                    className="rn-check-box-label"
                                                    htmlFor="unlockpurchased"
                                                >
                                                    Unlock Purchased
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-xl-4">
                                            <div className="input-box">
                                                <Button
                                                    color="primary-alta"
                                                    fullwidth
                                                    type="submit"
                                                    data-btn="preview"
                                                    onClick={handleSubmit(
                                                        onSubmit
                                                    )}
                                                >
                                                    Preview
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                                            <div className="input-box">
                                                <Button type="submit" fullwidth>
                                                    Submit Item
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
                                <h5> Note: </h5>
                                <span>
                                    {" "}
                                    Service fee : <strong>2.5%</strong>{" "}
                                </span>{" "}
                                <br />
                                <span>
                                    {" "}
                                    You will receive :{" "}
                                    <strong>25.00 ETH $50,000</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {showProductModal && (
                <ProductModal
                    show={showProductModal}
                    handleModal={handleProductModal}
                    data={previewData}
                />
            )}
        </>
    );
};

CreateNewArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

CreateNewArea.defaultProps = {
    space: 1,
};

export default CreateNewArea;
