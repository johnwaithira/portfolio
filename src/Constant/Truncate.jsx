import React, { useState } from 'react';

const Truncate = ({ text }) => {
    const [isShown, setIsShown] = useState(false);

    const showBtn = text.length > 70;

    return (
        <div>
            <p>
                {showBtn && !isShown ? `${text.slice(0, 70)}...` : text}
            </p>
            {showBtn && (
                <button style={{ backgroundColor: "#007bff", borderRadius: "5px", padding: "5px 10px", marginTop: "5px", cursor: "pointer" }} onClick={() => setIsShown(!isShown)}>
                    {isShown ? 'View less' : 'View more'}
                </button>
            )}
        </div>
    );
};

export default Truncate;
