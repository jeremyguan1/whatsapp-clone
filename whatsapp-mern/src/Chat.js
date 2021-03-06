import React from 'react'
import "./Chart.css"
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import MicIcon from '@material-ui/icons/Mic'

import { InsertEmoticon } from '@material-ui/icons';

function Chat() {
    return (
        <div className="chart">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>
                    <IconButton >
                        <AttachFile />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">
                        Sonnny
                    </span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        Sonnny
                    </span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
