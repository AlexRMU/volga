import logo from "./images/logo.png";
import arrow from "./images/arrow.png";
import start_img from "./images/1.png";
import card1_img from "./images/card1_img.png";
import card2_img from "./images/card2_img.png";
import back_img from "./images/back.png";
import close_img from "./images/close.png";
import glass1 from "./images/glass1.svg";
import glass2 from "./images/glass2.svg";
import glass3 from "./images/glass3.svg";
import glass4 from "./images/glass4.svg";
import like from "./images/like.svg";
import frame from "./images/frame.svg";
import shade1 from "./images/shade1.svg";
import shade2 from "./images/shade2.svg";
import shade3 from "./images/shade3.svg";
import m1 from "./images/m1.svg";
import m2 from "./images/m2.svg";
import m3 from "./images/m3.svg";
import w1 from "./images/w1.svg";
import w2 from "./images/w2.svg";
import w3 from "./images/w3.svg";
import b1 from "./images/b1.svg";
import b2 from "./images/b2.svg";
import b3 from "./images/b3.svg";
import v from "./images/v.svg";
import s1_1 from "./images/select1/1.png";
import s1_2 from "./images/select1/2.png";
import s1_3 from "./images/select1/3.png";
import s1_4 from "./images/select1/4.png";
import s1_5 from "./images/select1/5.png";
import s1_6 from "./images/select1/6.png";
import s1_7 from "./images/select1/7.png";
import s1_8 from "./images/select1/9.png";
import s1_9 from "./images/select1/10.png";
import s1_10 from "./images/select1/11.png";
import s1_11 from "./images/select1/12.png";
import s1_12 from "./images/select1/13.png";
import s2_1 from "./images/select2/1.svg";
import s2_2 from "./images/select2/2.svg";
import s2_3 from "./images/select2/3.svg";
import s2_4 from "./images/select2/4.svg";
import s2_5 from "./images/select2/5.svg";
import s2_6 from "./images/select2/6.svg";
import s2_7 from "./images/select2/7.svg";
import s2_8 from "./images/select2/8.svg";
import s2_9 from "./images/select2/9.svg";
import s2_10 from "./images/select2/10.svg";
import s2_11 from "./images/select2/11.svg";
import s2_12 from "./images/select2/12.svg";
import prize from "./images/prize.svg";

import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";

function App() {
    const [popup, set_popup] = useState("");
    const [current, set_current] = useState(0);
    const [res, set_res] = useState({} as any);
    const [history, set_history] = useState([] as any[]);

    function UpperText(props: any) {
        return (
            <div
                className={ props.className || "upper_text" }
                style={ { ...props.style, width: "100%" } }
            >
                <div
                    style={ {
                        width: props.style.width,
                        marginLeft: "auto",
                        marginRight: "auto",
                    } }
                >
                    { props.children }
                </div>
            </div>
        );
    }
    function Card(props: any) {
        return (
            <button
                className="card_bg"
                style={ { ...{ width: "274px", height: "138px" }, ...props.style } }
                onClick={ props.onClick }
            >
                <div className="card_content" style={ props.content_style }>
                    { props.img ? <img src={ props.img } alt=""></img> : <></> }
                    <div className="card_text" style={ props.text_style }>{ props.children }</div>
                </div>
            </button>
        );
    }
    function Part5(props: any) {
        if (res.eyewear_type === 211) {
            return <>
                <UpperText style={ { top: "50px", width: "319px" } }>
                    When you’re out and about, which shade of lenses do you prefer?
                </UpperText>
                <div className="cards" style={ { top: "142px" } }>
                    <Card
                        style={ { width: "304px", height: "89px" } }
                        text_style={ {
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                        } }
                        onClick={ () => set({ shade: "dark" }) }
                    >
                        <img src={ shade1 } alt="" style={ { left: "28px", position: "absolute" } } />
                        <div
                            style={ { position: "absolute", background: "rgba(222,222,222,1)", width: "1px", height: "35px", marginLeft: "19px", marginRight: "19px", left: "75px" } }
                        ></div>
                        <div style={ { position: "absolute", left: "113px" } }>
                            Dark Shade
                        </div>
                    </Card>
                    <Card
                        style={ { top: "105px", width: "304px", height: "89px" } }
                        text_style={ {
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                        } }
                        onClick={ () => set({ shade: "light" }) }
                    >
                        <img src={ shade2 } alt="" style={ { left: "28px", position: "absolute" } } />
                        <div
                            style={ { position: "absolute", background: "rgba(222,222,222,1)", width: "1px", height: "35px", marginLeft: "19px", marginRight: "19px", left: "75px" } }
                        ></div>
                        <div style={ { position: "absolute", left: "113px" } }>
                            Light Shade
                        </div>
                    </Card>
                    <Card
                        style={ { top: "210px", width: "304px", height: "89px" } }
                        text_style={ {
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                        } }
                        onClick={ () => set({ shade: "transition" }) }
                    >
                        <img src={ shade3 } alt="" style={ { left: "28px", position: "absolute" } } />
                        <div
                            style={ { position: "absolute", background: "rgba(222,222,222,1)", width: "1px", height: "35px", marginLeft: "19px", marginRight: "19px", left: "75px" } }
                        ></div>
                        <div style={ { position: "absolute", left: "113px" } }>
                            Transitioning Shade
                        </div>
                    </Card>
                </div>
            </>;
        } else {
            return <>
                <UpperText style={ { top: "50px", width: "332px" } }>
                    Would you like to protect your eyes from light emanating from screens?
                </UpperText>
                <div className="cards" style={ { top: "142px" } }>
                    <Card
                        style={ { width: "273px", height: "138px" } }
                        onClick={ () => set({ blue_light: true }) }>
                        Yes
                    </Card>
                    <Card
                        style={ { width: "273px", top: "152px", height: "138px" } }
                        onClick={ () => set({ blue_light: false }) }>
                        No
                    </Card>
                </div>
            </>;
        }
    }
    function Select(props: any) {
        return (<>
            <UpperText style={ { top: "30px" } }>
                { props.text || "Which frame style are you looking for?" }
            </UpperText>
            <UpperText className={ "upper_text2" } style={ { top: "70px" } }>
                You can pick more than one.
            </UpperText>
            <div className="select_wrap1">
                <div className="select_wrap2" style={ { top: "126px" } }>
                    {
                        props.arr.map((x: any) => {
                            let t = x.text.toLowerCase().replace(/\s/g, "_");
                            return (
                                <button
                                    key={ x.text }
                                    className="select_elem"
                                    onClick={ () => set_res({
                                        ...res, [props.prop]: (
                                            res[props.prop] ? (
                                                res[props.prop]?.includes(t)
                                                    ? res[props.prop]?.filter((x1: any) => x1 !== t)
                                                    : [...res[props.prop], t]
                                            ) : [t]
                                        )
                                    }) }>
                                    <img
                                        src={ x.img }
                                        alt={ x.text }
                                        className={ props.img_className || "select_img" }
                                    />
                                    { props.text ? <div className="select_text">{ x.text }</div> : "" }
                                    {
                                        (res[props.prop] && res[props.prop]?.includes(t))
                                            ? <>
                                                <img src={ v } alt="" className="select_v" />
                                                <div className="select_selected"></div>
                                            </>
                                            : ""
                                    }
                                </button>
                            );
                        })
                    }
                </div>
            </div>
            <button
                style={ { top: "481px", } }
                onClick={ () => set() }
                disabled={ res[props.prop]?.length === 0 }
                className={ (res[props.prop]?.length > 0 ? "" : "blue_button_grey") + " blue_button" }
            >
                Continue
            </button>
        </>);
    }

    let parts = [
        //0 - start
        {
            number: 0,
            component: <>
                <div className="center">
                    <img src={ start_img } className="start_img" alt=""></img>
                </div>

                <div className="blue_text" style={ { width: "100%", top: "268px" } }>
                    Let’s find your perfect pair!
                </div>
                <div className="bold_text" style={ { width: "272px", top: "321px" } }>
                    Take the quiz to easily discover your perfect fit from
                    thousands of styles
                </div>
                <button
                    style={ { top: "336px" } }
                    onClick={ () => set() }
                    className="blue_button"
                >
                    Start Now
                </button>
            </>,
        },
        //1 - 1
        {
            number: 1,
            component: <>
                <UpperText style={ { top: "50px" } }>
                    You are looking for
                </UpperText>
                <div className="cards" style={ { top: "103px" } }>
                    <Card
                        img={ card1_img }
                        content_style={ { height: "84px", justifyContent: "space-between" } }
                        onClick={ () => set({ gender: 5 }) }
                    >
                        Women's Styles
                    </Card>
                    <Card
                        img={ card2_img }
                        style={ { top: "152px" } }
                        content_style={ { height: "84px", justifyContent: "space-between" } }
                        onClick={ () => set({ gender: 4 }) }
                    >
                        Men's Styles
                    </Card>
                </div>
                <button
                    className="bottom_text"
                    style={ { top: "526px" } }
                    onClick={ () => set({ gender: undefined }) }
                >
                    I'd like to see both
                </button>
            </>,
        },
        //2 - 2
        {
            number: 2,
            component: <>
                <UpperText style={ { top: "50px", width: "243px" } }>
                    What type of glasses are you looking for?
                </UpperText>
                <div className="cards" style={ { top: "141px" } }>
                    <Card
                        img={ res.gender === 5 ? glass3 : glass1 }
                        content_style={ { height: "63px", justifyContent: "space-between" } }
                        onClick={ () => {
                            set({ eyewear_type: 210 });
                            set_popup("Let's get to know you!");
                        } }
                    >
                        Eyeglasses
                    </Card>
                    <Card
                        img={ res.gender === 5 ? glass4 : glass2 }
                        style={ { top: "152px" } }
                        content_style={ { height: "63px", justifyContent: "space-between" } }
                        onClick={ () => {
                            set({ eyewear_type: 211 });
                            set_popup("Let's get to know you!");
                        } }
                    >
                        Sunglasses
                    </Card>
                </div>
                <button
                    className="bottom_text"
                    style={ { top: "526px" } }
                    onClick={ () => {
                        set({ eyewear_type: undefined });
                        set_popup("Let's get to know you!");
                    } }
                >
                    I'd like to see both
                </button>
            </>,
        },
        //3 - 3.1
        {
            number: 3,
            component: <>
                <UpperText style={ { top: "50px" } }>
                    Do you need vision correction?
                </UpperText>
                <div className="cards" style={ { top: "112px" } }>
                    <Card
                        style={ { height: "120px" } }
                        onClick={ () => set({ lenstype: undefined }) }>
                        Yes
                    </Card>
                    <Card
                        style={ { top: "134px", height: "120px" } }
                        onClick={ () => {
                            set({ lenstype: undefined }, false);
                            set_current(5);
                        } }>
                        No
                    </Card>
                </div>
                <button
                    className="bottom_text"
                    style={ { top: "526px" } }
                    onClick={ () => {
                        set({ lenstype: undefined }, false);
                        set_current(5);
                    } }
                >
                    Skip
                </button>
            </>,
        },
        //4 - 3.2
        {
            number: 3,
            component: <>
                <UpperText style={ { top: "50px" } }>
                    What do you need your glasses for?
                </UpperText>
                <div className="cards" style={ { top: "103px" } }>
                    <Card
                        style={ { width: "294px", height: "84px" } }
                        onClick={ () => set({ lenstype: 6 }) }>
                        Near Vision
                    </Card>
                    <Card
                        style={ { top: "98px", width: "294px", height: "84px" } }
                        onClick={ () => set({ lenstype: 6 }) }>
                        Distance Vision
                    </Card>
                    <Card
                        style={ { top: "196px", width: "294px", height: "84px" } }
                        onClick={ () => set({ lenstype: 7 }) }>
                        Multifocal / Progressive
                    </Card>
                </div>
                <button
                    className="bottom_text"
                    style={ { top: "526px" } }
                    onClick={ () => set({ lenstype: undefined }) }
                >
                    Skip
                </button>
            </>,
        },
        //5 - 4.1
        {
            number: 4,
            component: <>
                <UpperText style={ { top: "50px", width: "210px" } }>
                    What’s your current frame size?
                </UpperText>
                <div className="center">
                    <img src={ frame } alt="" className="center" style={ { top: "148px", position: "absolute" } }></img>
                </div>
                <div className="cards" style={ { top: "301px" } }>
                    <Card
                        onClick={ () => {
                            set({ frame_size: 68 }, false);
                            set_current(7);
                            set_popup("No worries, we’ve got you!");
                        } }
                        style={ { width: "318px", height: "56px" } }
                        text_style={ {
                            display: "flex",
                            justifyContent: "space-between",
                            paddingTop: "14px",
                            paddingRight: "19.5px",
                            paddingLeft: "19.5px",
                            width: "100%",
                            height: "100%"
                        } }
                    >
                        <span className="thin_text">Small</span>
                        <span className="bold_text2">42-48 mm</span>
                    </Card>
                    <Card
                        style={ { top: "68px", width: "318px", height: "56px" } }
                        onClick={ () => {
                            set({ frame_size: 67 }, false);
                            set_current(7);
                            set_popup("No worries, we’ve got you!");
                        } }
                        text_style={ {
                            display: "flex",
                            justifyContent: "space-between",
                            paddingTop: "14px",
                            paddingRight: "19.5px",
                            paddingLeft: "19.5px",
                            width: "100%",
                            height: "100%"
                        } }
                    >
                        <span className="thin_text">Medium</span>
                        <span className="bold_text2">49-53 mm</span>
                    </Card>
                    <Card
                        style={ { top: "134px", width: "318px", height: "56px" } }
                        onClick={ () => {
                            set({ frame_size: 66 }, false);
                            set_current(7);
                            set_popup("No worries, we’ve got you!");
                        } }
                        text_style={ {
                            display: "flex",
                            justifyContent: "space-between",
                            paddingTop: "14px",
                            paddingRight: "19.5px",
                            paddingLeft: "19.5px",
                            width: "100%",
                            height: "100%"
                        } }
                    >
                        <span className="thin_text">Large</span>
                        <span className="bold_text2">54-58 mm</span>
                    </Card>
                </div>
                <button
                    className="bottom_text"
                    style={ { top: "526px" } }
                    onClick={ () => {
                        set({ frame_size: undefined });
                        set_popup("No worries, we’ve got you!");
                    } }
                >
                    I don’t know
                </button>
            </>,
        },
        //6 - 4.2
        {
            number: 4,
            component: <>
                <UpperText style={ { top: "50px", width: "210px" } }>
                    How wide would you say your face is?
                </UpperText>
                <div className="cards" style={ { top: "142px" } }>
                    <Card
                        style={ { width: "304px", height: "84px" } }
                        onClick={ () => set({ frame_size: 66 }) }>
                        Wider Than Average
                    </Card>
                    <Card
                        style={ { top: "98px", width: "304px", height: "84px" } }
                        onClick={ () => set({ frame_size: 67 }) }>
                        Average
                    </Card>
                    <Card
                        style={ { top: "196px", width: "304px", height: "84px" } }
                        onClick={ () => set({ frame_size: 68 }) }>
                        Narrower Than Average
                    </Card>
                </div>
                <button
                    className="bottom_text"
                    style={ { top: "526px" } }
                    onClick={ () => set({ frame_size: undefined }) }
                >
                    I’m not sure
                </button>
            </>,
        },
        //7 - 5
        {
            number: 5,
            component: <Part5></Part5>,
        },
        //8 - 6
        {
            number: 6,
            component: <>
                <UpperText style={ { top: "50px", width: "240px" } }>
                    Every face shape has a perfect fit. What’s yours?
                </UpperText>
                <div className="cards" style={ { top: res.gender === 4 ? "140px" : "142px" } }>
                    <Card
                        style={ { width: "304px", height: "89px" } }
                        text_style={ {
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                        } }
                        onClick={ () => set({ face_shape: "long" }) }
                    >
                        <img
                            src={ (res.gender === 4 ? m1 : (res.gender === 5 ? w1 : b1)) }
                            alt=""
                            style={ { left: "28px", position: "absolute" } } />
                        <div
                            style={ { position: "absolute", background: "rgba(222,222,222,1)", width: "1px", height: "35px", marginLeft: "19px", marginRight: "19px", left: "75px" } }
                        ></div>
                        <div style={ { position: "absolute", left: "113px" } }>
                            I have a long face
                        </div>
                    </Card>
                    <Card
                        style={ { top: "105px", width: "304px", height: "89px" } }
                        text_style={ {
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                        } }
                        onClick={ () => set({ face_shape: "round" }) }
                    >
                        <img
                            src={ (res.gender === 4 ? m2 : (res.gender === 5 ? w2 : b2)) }
                            alt=""
                            style={ { left: "28px", position: "absolute" } } />
                        <div
                            style={ { position: "absolute", background: "rgba(222,222,222,1)", width: "1px", height: "35px", marginLeft: "19px", marginRight: "19px", left: "75px" } }
                        ></div>
                        <div style={ { position: "absolute", left: "113px" } }>
                            I have a round face
                        </div>
                    </Card>
                    <Card
                        style={ { top: "210px", width: "304px", height: "89px" } }
                        text_style={ {
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            padding: "0",
                        } }
                        onClick={ () => set({ face_shape: "between" }) }
                    >
                        <img
                            src={ (res.gender === 4 ? m3 : (res.gender === 5 ? w3 : b3)) }
                            alt=""
                            style={ { left: "28px", position: "absolute" } } />
                        <div
                            style={ { position: "absolute", background: "rgba(222,222,222,1)", width: "1px", height: "35px", marginLeft: "19px", marginRight: "19px", left: "75px" } }
                        ></div>
                        <div style={ { position: "absolute", left: "113px" } }>
                            In between
                        </div>
                    </Card>
                    <button
                        className="bottom_text"
                        style={ { top: "526px" } }
                        onClick={ () => set({ face_shape: undefined }) }
                    >
                        I don’t know
                    </button>
                </div>
            </>,
        },
        //9 - 7
        {
            number: 7,
            component: <>
                <UpperText style={ { top: "50px", width: "240px" } }>
                    How would you define your facial features?
                </UpperText>
                <div className="cards" style={ { top: "142px" } }>
                    <Card
                        style={ { width: "314px", height: "97px" } }
                        onClick={ () => set({ facial_features: "sharp" }) }>
                        Sharp
                    </Card>
                    <Card
                        style={ { top: "111px", width: "314px", height: "97px" } }
                        onClick={ () => set({ facial_features: "rounded" }) }>
                        Rounded
                    </Card>
                    <Card
                        style={ { top: "222px", width: "314px", height: "97px" } }
                        onClick={ () => set({ facial_features: "between" }) }>
                        In between
                    </Card>
                </div>
                <button
                    className="bottom_text"
                    style={ { top: "526px" } }
                    onClick={ () => set({ facial_features: undefined }) }
                >
                    I don’t know
                </button>
            </>,
        },
        //10 - 8
        {
            number: 8,
            component: <>
                <Select
                    arr={ [
                        { img: s1_1, text: "Rectangle" },
                        { img: s1_2, text: "Wayframe" },
                        { img: s1_3, text: "Oval" },
                        { img: s1_4, text: "Cat Eye" },
                        { img: s1_5, text: "Browline" },
                        { img: s1_6, text: "Aviator" },
                        { img: s1_7, text: "Geometric" },
                        { img: s1_8, text: "Oversized" },
                        { img: s1_9, text: "Rimless" },
                        { img: s1_10, text: "Square" },
                        { img: s1_11, text: "Wrap" },
                        { img: s1_12, text: "Round" },
                    ] }
                    prop="shape"
                    text={ true }>
                </Select>
            </>,
        },
        //11 - 9
        {
            number: 9,
            component: <>
                <UpperText style={ { top: "50px", width: "254px" } }>
                    Are you looking for any particular eyewear brands?
                </UpperText>
                <div className="cards" style={ { top: "142px" } }>
                    <Card
                        style={ { width: "274px", height: "120px" } }
                        onClick={ () => set() }>
                        Yes, I have some in mind
                    </Card>
                    <Card
                        style={ { width: "274px", height: "120px", top: "136px" } }
                        onClick={ () => {
                            set({ brand: undefined }, false);
                            set_current(13);
                        } }>
                        No, brand isn't important
                    </Card>
                </div>
            </>,
        },
        //12 - 10
        {
            number: 10,
            component: <>
                <Select
                    arr={ [
                        { img: s2_1, text: "Ray Ban" },
                        { img: s2_2, text: "OAKLEY" },
                        { img: s2_3, text: "GUCCI" },
                        { img: s2_4, text: "ARMANI EXCHANGE" },
                        { img: s2_5, text: "Hilary Duff" },
                        { img: s2_6, text: "PRADA" },
                        { img: s2_7, text: "VERSACE" },
                        { img: s2_8, text: "VOGUE" },
                        { img: s2_9, text: "MICHAEL KORS" },
                        { img: s2_10, text: "COACH" },
                        { img: s2_11, text: "TORY BURCH" },
                        { img: s2_12, text: "BURBERRY" },
                    ] }
                    prop="brand"
                    img_className="select_img2"
                    text="Choose your favorite brands">
                </Select>
            </>,
        },
        //13 - end
        {
            number: 10,
            component: <>
                <div className="center">
                    <img src={ prize } className="end_img" alt=""></img>
                </div>

                <div className="center">
                    <div className="blue_text2" style={ { width: "314px", top: "202px" } }>
                        We've found some awesome frames for you!
                    </div>
                    <div className="bold_text3" style={ { width: "344px", top: "274px" } }>
                        Send the results to your email to receive special discounts.
                    </div>
                </div>

                <button
                    style={ { top: "372px" } }
                    onClick={ () => console.log(
                        "URL: " + document.getElementById("glasses-quiz-widget")?.getAttribute("data-source") + "?" + Object.entries(res).map(([k, v]) =>
                            v === undefined ? "" : (k + "=" + (Array.isArray(v) ? v.join(",") : (v)))
                        ).filter(x => x).join("&")
                    ) }
                    className="blue_button"
                >
                    Send
                </button>

                <div className="center">
                    <div className="bottom_text2" style={ { width: "286px", top: "518px" } }>
                        By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails
                    </div>
                </div>
            </>,
        },
    ];

    useEffect(() => {
        console.log("res", res);
        console.log("current", current);
        if (current === 0) {
            if (Object.keys(res).length !== 0) set_res({});
            set_history([]);
        }
    }, [res, current]);

    useEffect(() => {
        setTimeout(() => popup ? set_popup("") : "", 1000 * 2);
    }, [popup]);

    function set(obj?: any, next = true) {
        if (obj) set_res({ ...res, ...obj });
        set_history([...history, current]);
        if (next) {
            set_current(current + 1);
        }
    }

    function Header(props: any) {
        if (current === 0) {
            return (
                <div>
                    <img src={ logo } className="logo" alt=""></img>
                    <input
                        type="image"
                        src={ arrow }
                        className="next"
                        alt=""
                        onClick={ () => set() }
                    />
                </div>
            );
        } else if (current === parts.length - 1) {
            return (
                <>
                    <div className="header_inner">
                        <img src={ logo } className="logo" alt=""></img>
                        <input
                            type="image"
                            src={ close_img }
                            className="close"
                            alt=""
                            onClick={ () => {
                                set_current(0);
                            } }
                        />
                    </div>
                    <div className="bar">
                        <div className="bar_bg"></div>
                        <div
                            className="progress"
                            style={ {
                                left: `calc(-100% + ${ parts[current].number } * 10%)`
                            } }>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="header_inner">
                        <input
                            type="image"
                            src={ back_img }
                            className="back"
                            alt=""
                            onClick={ () => {
                                if (current === 7) {
                                    set_res({ ...res, shade: undefined, blue_light: undefined });
                                } else if (current === 10) {
                                    set_res({ ...res, shape: undefined });
                                } else if (current === 10) {
                                    set_res({ ...res, brand: undefined });
                                }
                                set_popup("");
                                set_current(history.pop());
                                set_history(history);
                            } }
                        />
                        <div className="count">{ parts[current].number }/10</div>
                        <input
                            type="image"
                            src={ close_img }
                            className="close"
                            alt=""
                            onClick={ () => {
                                set_current(0);
                            } }
                        />
                    </div>
                    <div className="bar">
                        <div className="bar_bg"></div>
                        <div
                            className="progress"
                            style={ {
                                left: `calc(-100% + ${ parts[current].number } * 10%)`
                            } }>
                        </div>
                    </div>
                </>
            );
        }
    }

    function Layout(props: any) {
        return (<>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
            <div className="container">
                <div className="header">
                    <Header></Header>
                </div>
                <div
                    className="content"
                    style={
                        current === 0
                            ? {
                                background: "linear-gradient(180deg,rgb(232 240 242) 0%,rgba(232, 240, 242, 0) 100%)",
                            }
                            : {}
                    }
                >
                    { popup ? (
                        <div className="popup center">
                            <img src={ like } className="start_img" alt=""></img>
                            <div className="blue_text" style={ { top: "272px" } }>
                                { popup }
                            </div>
                        </div>
                    ) : parts[current].component }
                </div>
            </div>
        </>);
    }

    return <Layout></Layout>;
}

export default App;
