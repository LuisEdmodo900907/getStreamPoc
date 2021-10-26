import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('uukynr3j4d9z');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2lsZW50LXN1cmYtMCJ9.i5SxCzKIYwUJqgselFBNVrSskjOe6nusKoWTlDm6zOs';

chatClient.connectUser(
    {
        id: 'silent-surf-0',
        name: 'silent-surf-0',
        image: 'https://getstream.io/random_png/?id=silent-surf-0&name=silent-surf-0',
    },
    userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
    // add as many custom fields as you'd like
    image: 'https://www.drupal.org/files/project-images/react.png',
    name: 'edmodo POC',
    members: ['silent-surf-0'],
});

const App = () => (
    <Chat client={chatClient} theme='messaging light'>
        <Channel channel={channel}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
            <Thread />
        </Channel>
    </Chat>
);

export default App;
