import React from "react";

export default function FormattedDate(props){
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = props.date.getDay();
    let date = props.date.getDate();
    let year = props.date.getFullYear();
    let month = props.date.getMonth();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    return <p>{days[day]}, {months[month]} {date} {year}, {("0" + hours).substr(-2)}:{("0" + minutes).substr(-2)}</p>
}