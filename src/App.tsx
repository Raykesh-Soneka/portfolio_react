import React, { FunctionComponent, useState } from 'react';
import user from './models/user';
import data from './models/data' 

const App: FunctionComponent = () => {
    // const name: String = 'React';
    const [name, setName] = useState<String>('React');
    const [users] = useState<user[]>(data);

    return(
        <div>
            <h1>Bonjour, {name}</h1>
            <p>User : {users.length}</p>
        </div>
    )
}
 
export default App;