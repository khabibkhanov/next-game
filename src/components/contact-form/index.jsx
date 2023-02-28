import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
        });
        if (ok) {
            form.reset();
        }
    };

    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });

        axios({
            method: "post",
            url: "https://getform.io/f/2c9150c2-202a-4e63-b1b1-b9e666d1b582",
            data,
        })
        .then((_res) => {
            handleServerResponse(true, "Thanks! for being with us", form);
        })
        .catch((err) => {
            handleServerResponse(false, err.response.data.error, form);
        });
    };

    return (
        <div className="form-wrapper-one registration-area">
            <h3 className="mb--30">Xabar qoldirish</h3>
            <form
                className="rwt-dynamic-form"
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5">
                    <label htmlFor="contact-name" className="form-label">
                        Ismingiz
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        {...register("contactName", {
                            required: "Name is required",
                        })}
                    />
                    {errors.contactName && (
                        <ErrorText>{errors.contactName?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-email" className="form-label">
                        Elektron manzilingiz
                    </label>
                    <input
                        name="contact-email"
                        type="email"
                        {...register("contactEmail", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.contactEmail && (
                        <ErrorText>{errors.contactEmail?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="contact-message" className="form-label">
                        Xabaringiz
                    </label>
                    <textarea
                        id="contact-message"
                        rows="3"
                        {...register("contactMessage", {
                            required: "Message is required",
                        })}
                    />
                    {errors.contactMessage && (
                        <ErrorText>{errors.contactMessage?.message}</ErrorText>
                    )}
                </div>
                {/* <div className="mb-5 rn-check-box">
                    <input
                        id="condition"
                        type="checkbox"
                        className="rn-check-box-input"
                        {...register("condition", {
                            required: "Condition is required",
                        })}
                    />
                    <label htmlFor="condition" className="rn-check-box-label">
                        Allow to all tearms & condition
                    </label>
                    <br />
                    {errors.condition && (
                        <ErrorText>{errors.condition?.message}</ErrorText>
                    )}
                </div> */}
                <Button type="submit" size="medium">
                    Xabar yuborish
                </Button>
                {serverState.status && (
                    <p
                        className={`mt-4 font-14 ${
                            !serverState.status.ok
                                ? "text-danger"
                                : "text-success"
                        }`}
                    >
                        {serverState.status.msg}
                    </p>
                )}
            </form>
        </div>
    );
};
export default ContactForm;
