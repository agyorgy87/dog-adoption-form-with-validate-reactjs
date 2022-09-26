import React, { useState } from 'react';
import {omit} from 'lodash';

const useForm = (callback) => {

  	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});

	const validate = (event, name, value) => {

		switch (name) {
			case 'firstname':
				if(value.length <= 4) {
					setErrors({
						...errors,
						firstname: "please enter your firstname"
					})
				} else {
					let newObj = omit(errors, "firstname");
					setErrors(newObj);
				}
				break;

			case 'lastname':
				if(value.length <= 4) {
					setErrors({
						...errors,
						lastname: "please enter your lastname"
					})
				} else {
					let newObj = omit(errors, "lastname");
					setErrors(newObj);
				}
				break;

				default:
					break;
		}
	}

	const handleChange = (event) => {
		event.persist();

		let name = event.target.name;
		let value = event.target.value;

		validate(event,name,value)

		setValues({
			...values,
			[name]:value,
		})
	}

	const handleSubmit = (event) => {
		if(event) event.preventDefault();

		if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
			callback();
		}else{
			alert("There is an errror!")
		}
	}

	return {
		values,
		errors,
		handleChange,
		handleSubmit
	}
}

export default useForm;