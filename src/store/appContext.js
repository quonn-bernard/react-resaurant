import React, {useState, useEffect} from 'react';

export const AppContext = React.createContext({
    isVisible: true,
    onOpen: () => {},
    onClose: () => {}
});

export const AppContextProvider = props => {
    const [isVisible, setIsVisible] = useState(false);

    const cartOpenHandler = () => {
        console.log('open')
        setIsVisible(true)
    }

    const cartCloseHandler = () => {
        console.log('close')
        setIsVisible(false)
    }

    return <AppContext.Provider 
            value={{
                isVisible: isVisible, 
                onOpen: cartOpenHandler, 
                onClose: cartCloseHandler
            }}
    >
        {props.children}
    </AppContext.Provider>
}