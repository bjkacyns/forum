const DisplayMessage = ({info}) => {
    const t = window.location.pathname;
    if (t === "/") { //home - display all messages
        return ( 
            <div className="DisplayMessage">
                <h2>My messages:</h2>
                {
                info.map(MU => (
                   <div id="previewMessage" key={MU.id}>
                            <div className="messageContent"> "{MU.message}"</div>
                            <div className="userInfo"> - {MU.user}</div>
                            <div className="idContent"> (ID: {MU.id})</div>
                   </div>
               ))}
            </div>
         );
    } else { //display messages only for that thread
        const newt = t.substring(9, t.length);

        return ( 
            <div className="DisplayMessage">
                <h2>My messages:</h2>
                {info.filter(MU => MU.threadID === newt).map(MU => (
                   <div id="previewMessage" key={MU.id}>
                            <div className="messageContent"> "{MU.message}"</div>
                            <div className="userInfo"> - {MU.user}</div>
                            <div className="idContent"> (ID: {MU.id})</div>
                   </div>
               ))}
            </div>
         );
    }  
}

export default DisplayMessage;