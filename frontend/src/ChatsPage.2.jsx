import { PrettyChatWindow } from 'react-chat-engine-pretty';


export const ChatsPage = () => {
    const chatProps = useMultiChatLogic(
        '95ecb2c2-d330-4426-a08d-89b09db19a97',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='95ecb2c2-d330-4426-a08d-89b09db19a97'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }} />
        </div>

    );
};
