import React, {Fragment} from "react";
import {validate} from "../utils/validator";
import Input from "./common/input";
import Select from "./common/select";
import {COUNTRY, GENDER} from "../data";
import BaseForm from "./base-form";
import toastr from 'toastr';

export default class TestForm extends BaseForm {
    state = {
        fields: {
            username: {
                name: 'username',
                value: '',
                error: '',
                // validation: {
                //     required: true
                // }
            },
            email:  {
                name: 'email',
                value: '',
                error: '',
                validation: {
                    required: true,
                    email: true
                }
            },
            gender: {
                name: 'gender',
                value: '',
                error: '',
                validation: {
                    required: true
                }
            },
            country: {
                name: 'country',
                value: '',
                error: '',
                validation: {
                    required: true
                }
            },
            password: {
                name: 'password',
                value: '',
                error: '',
                validation: {
                    required: true,
                    min: 6
                }
            },
            confirmPassword: {
                name: 'confirmPassword',
                value: '',
                error: '',
                validation: {
                    required: true,
                    confirm: {
                        check: true,
                        referenceValue: ''
                    }
                }
            }
        },
        valid: false
    };

    handleChange = (e) => {
        this.validate(e.currentTarget);
    };

    handleSubmit = e => {
        e.preventDefault();
        toastr.success('success');
        console.log(this.getValue());
    }

    render() {
        const {fields: {username, email, gender, country, password, confirmPassword}} = this.state;
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    {/*Username*/}
                    <Input
                        name={username.name}
                        label="Username"
                        value={username.value}
                        error={username.error}
                        autoFocus
                        onChange={this.handleChange}
                    />

                    {/*Email*/}
                    <Input
                        name={email.name}
                        label="Email"
                        value={email.value}
                        error={email.error}
                        onChange={this.handleChange}
                    />

                    {/*Gender*/}
                    <Select
                        name={gender.name}
                        label="Gender"
                        value={gender.value}
                        prompt="Select Gender"
                        options={GENDER}
                        error={gender.error}
                        onChange={this.handleChange}
                    />

                    {/*Country*/}
                    <Select
                        name={country.name}
                        label="Country"
                        value={country.value}
                        prompt="Select Country"
                        options={COUNTRY}
                        error={country.error}
                        onChange={this.handleChange}
                    />

                    {/*Password*/}
                    <Input
                        name={password.name}
                        label="Password"
                        value={password.value}
                        error={password.error}
                        onChange={this.handleChange}
                    />

                    {/*ConfirmPassword*/}
                    <Input
                        name={confirmPassword.name}
                        label="Confirm Password"
                        value={confirmPassword.value}
                        error={confirmPassword.error}
                        onChange={this.handleChange}
                    />

                    <button
                        className="btn btn-primary btn-block mt-4"
                        disabled={this.isInvalid()}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </Fragment>
        );
    }
}