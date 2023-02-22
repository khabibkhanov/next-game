import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { useForm, useFormState } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

const SignupForm = ({ className }) => {
    const router = useRouter();
  
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = async (data, e) => {
        e.preventDefault()

        let res = await axios({
            method: "post",
            url: "http://localhost:1337/api/auth/local/register",
            data,
        })
        .then((_res) => {
            window.localStorage.setItem("access_token", _res.jwt)
            router.replace('/')
            return _res
        })
        .catch((errors) => {
            return errors.error
        });
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        {...register("username", {
                            required: "username is required",
                        })}
                    />
                    {
                        console.log(errors)
                    }
                    {errors?.username && (
                        <ErrorText>{console.log(errors)}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors?.email && (
                        <ErrorText>
                            {errors?.email?.message}
                        </ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="form-label">
                        Create Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors?.password && (
                        <ErrorText>{errors?.password?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="confirmpassword"
                        className="form-label"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmpassword"
                        {...register("confirmpassword", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value === getValues("password") ||
                                "The passwords do not match",
                        })}
                    />
                    {errors?.confirmpassword && (
                        <ErrorText>
                            {errors?.confirmpassword?.message}
                        </ErrorText>
                    )}
                </div>
                <div className="mb-5 rn-check-box">
                    <input
                        type="checkbox"
                        className="rn-check-box-input"
                        id="exampleCheck1"
                        {...register("exampleCheck1", {
                            required: "Checkbox is required",
                        })}
                    />
                    <label
                        className="rn-check-box-label"
                        htmlFor="exampleCheck1"
                    >
                        Allow to all tearms & Allow to all tearms & condition
                    </label>
                    <br />
                    {errors?.exampleCheck1 && (
                        <ErrorText>{errors?.exampleCheck1?.message}</ErrorText>
                    )}
                </div>
                <Button type="submit" size="medium" className="mr--15">
                    Sign Up
                </Button>
                <Button path="/login" color="primary-alta" size="medium">
                    Log In
                </Button>
            </form>
        </div>
    );
};

SignupForm.propTypes = {
    className: PropTypes.string,
};

export default SignupForm;