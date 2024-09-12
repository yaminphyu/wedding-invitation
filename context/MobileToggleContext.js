import { createContext, useState } from "react";

const MobileToggleContext = createContext({
    toggle: null,
    setToggle: () => {},
});

const MobileToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(null);

    return (
        <MobileToggleContext.Provider value={{ toggle, setToggle }}>
            {children}
        </MobileToggleContext.Provider>
    );
};

export { MobileToggleContext, MobileToggleProvider }