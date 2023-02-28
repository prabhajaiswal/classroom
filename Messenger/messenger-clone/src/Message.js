import React from 'react'
import { CardContent,Card ,Typography} from '@mui/material';

export default function Message({message,username}) {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && `message_user`}`}>
      <Card className={isUser ? "message_useCard" : "message_guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
          {message.username}:{message.text}
          </Typography>
          </CardContent>
      </Card>
      
    </div>
  )
}
