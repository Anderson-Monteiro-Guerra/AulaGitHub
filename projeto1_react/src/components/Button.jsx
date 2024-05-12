import React from "react";

export default function Button({ title, onClick }) {
    return (
        <button
            style={{
                backgroundColor: "red",
                color: "white",
                padding: 10,
                borderRadius: 5,
            }}
            onClick={onClick}
        >
            {title}
        </button>
    );
}