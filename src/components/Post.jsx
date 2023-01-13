import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {
  return (
	<Card sx={{margin:5}}>
		<CardHeader
		avatar={
			<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
				R
			</Avatar>
		}
		action={
			<IconButton aria-label="settings">
				<MoreVert />
			</IconButton>
		}
		title="John Doe"
		subheader="September 14, 2023"
		/>
		<CardMedia
		component="img"
		height="20%"
		image="https://s0.tchkcdn.com/g-fG2Id1bCEj3UVvpltmj6JA/17/262994/1200x630/f/0/553_62476496_1081881648669549_393770582643859171_n.jpg"
		alt="Paella dish"
		/>
		<CardContent>
		<Typography variant="body2" color="text.secondary">
			This impressive paella is a perfect party dish and a fun meal to cook
			together with your guests. Add 1 cup of frozen peas along with the mussels,
			if you like.
		</Typography>
		</CardContent>
		<CardActions disableSpacing>

		<IconButton aria-label="add to favorites">
			<Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color: "red"}}/>}/>
		</IconButton>

		<IconButton aria-label="share">
			<Share />
		</IconButton>
		</CardActions>
	</Card>
  )
}

export default Post