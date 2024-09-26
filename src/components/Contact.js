import React, { useReducer, useState } from "react";
import "../styles/contact.css";
import axios from 'axios';
// import { animateScroll as scroll } from "react-scroll";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const initialFormState = {
    form: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
    },
    errors: {},
    status: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'handleChange': {
            const { name, value } = action.payload;
            return {
                ...state,
                form: {
                    ...state.form,
                    [name]: value
                }
            };
        }
        case 'SET_ERRORS': {
            return {
                ...state,
                errors: action.payload
            };
        }
        case 'UNSET_ERRORS': {
            return {
                ...state,
                errors: {}
            };
        }
        case 'POST_DATA_SUCCESS': {
            return {
                ...state,
                form: {
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    message: "",
                },
                status: action.payload
            };
        }
        case 'POST_DATA_ERROR': {
            return {
                ...state,
                status: action.payload
            };
        }
        default: return state;
    }
};
function Contact() {

    const [state, dispatch] = useReducer(reducer, initialFormState);

    const validateForm = () => {
        let newErrors = {};
        if (!state.form.first_name.trim()) newErrors.first_name = 'First name is required';
        if (!state.form.last_name.trim()) newErrors.last_name = 'Last name is required';
        if (!/\S+@\S+\.\S+/.test(state.form.email)) newErrors.email = 'Email is invalid';
        if (!/^\d{10}$/.test(state.form.phone)) newErrors.phone = 'Phone must be 10 digits';
        if (!state.form.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const postData = () => {
        axios.post('http://localhost:5000/api/contact', state.form)
            .then((res) => {
                dispatch({
                    type: 'POST_DATA_SUCCESS',
                    payload: "Form successfully submitted"
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'POST_DATA_ERROR',
                    payload: `There was an error submitting the form - ${err.response.data}`
                });
            });
    };

    const [showStatus, setShowStatus] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            dispatch({ type: 'SET_ERRORS', payload: newErrors });
        } else {
            dispatch({ type: 'UNSET_ERRORS' })
            postData();
        }
        setTimeout(() => {
            setShowStatus(!showStatus)
        }, 10000)
    };



    //GSAP
    const container = useRef(null);
    const box = useRef(null);
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });
        return () => context.revert();
    }, []);

    return (
        <div ref={container} className="contactCont" id="contact">
            <div className="contact_heading">
                <p>Contact</p>
            </div>
            <div className="contactGrid">
                <div ref={box} className="contactGridItem cg1">
                    <p className="contactContent">
                        I'm always open to discussing new projects, creative ideas, or
                        opportunities to be part of your visions.
                    </p>
                </div>

                <div className="contactGridItem cg2">
                    <h2>Get In Touch</h2>
                    <form className="formGrid" noValidate onSubmit={handleSubmit}>
                        <div className="touchGridItem fname">
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                value={state.form.first_name}
                                className="input"
                                placeholder="First Name"
                                onChange={(e) => dispatch({ type: 'handleChange', payload: e.target })}
                            />
                            {state.errors.first_name && <p>{state.errors.first_name}</p>}
                        </div>
                        <div className="touchGridItem lname">
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                value={state.form.last_name}
                                className="input"
                                placeholder="Last Name"
                                onChange={(e) => dispatch({ type: 'handleChange', payload: e.target })}
                            />
                            {state.errors.last_name && <p>{state.errors.last_name}</p>}
                        </div>
                        <div className="touchGridItem email">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={state.form.email}
                                className="input"
                                placeholder="Email"
                                onChange={(e) => dispatch({ type: 'handleChange', payload: e.target })}
                            />
                            {state.errors.email && <p>{state.errors.email}</p>}
                        </div>
                        <div className="touchGridItem phone">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="input"
                                value={state.form.phone}
                                placeholder="Phone"
                                pattern="\d{10}"
                                onChange={(e) => dispatch({ type: 'handleChange', payload: e.target })}
                            />
                            {state.errors.phone && <p>{state.errors.phone}</p>}
                        </div>
                        <div className="touchGridItem message">
                            <textarea
                                id="message"
                                name="message"
                                cols="30"
                                rows="5"
                                className="input"
                                value={state.form.message}
                                placeholder="Message"
                                onChange={(e) => dispatch({ type: 'handleChange', payload: e.target })}
                            ></textarea>
                            {state.errors.message && <p>{state.errors.message}</p>}
                        </div>
                        <div className="touchGridItem submit">
                            <button
                                type="submit"
                                className="btn-12"

                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    {showStatus && state.status && <p>{state.status}</p>}
                </div>
            </div>
        </div>
    );
}

export default Contact;
