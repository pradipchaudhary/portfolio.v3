import React from "react";

const CertificateList = ({ certification, index }) => {
    return (
        <li
            key={index}
            className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300"
        >
            {certification}
        </li>
    );
};

export default CertificateList;
