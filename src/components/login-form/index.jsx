import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

const LoginForm = ({ className }) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    const onSubmit = (data, e) => {
        e.preventDefault()

        axios({
            method: "post",
            url: "http://192.168.0.87:1337/api/auth/local",
            data,
        })
        .then((_res) => {
            window.localStorage.setItem("access_token",_res.data.jwt)   
            router.replace('/')
        })
        .catch((err) => {
            console.log(err)
        });
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Login</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                    <label htmlFor="identifier" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        id="identifier"
                        {...register("identifier", {
                            required: "username is required",
                        })}
                    />
                    {errors.identifier && (
                        <ErrorText>{errors.identifier?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                    />
                    {errors.password && (
                        <ErrorText>
                            {errors.password?.message}
                        </ErrorText>
                    )}
                </div>
                <div className="mb-5 rn-check-box">
                    <input
                        type="checkbox"
                        className="rn-check-box-input"
                        id="exampleCheck1"
                        {...register("exampleCheck1")}
                    />
                    <label
                        className="rn-check-box-label"
                        htmlFor="exampleCheck1"
                    >
                        Remember me leter
                    </label>
                </div>
                <Button type="submit" size="medium" className="mr--15">
                    Log In
                </Button>
                <Button path="/sign-up" color="primary-alta" size="medium">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};
export default LoginForm;
