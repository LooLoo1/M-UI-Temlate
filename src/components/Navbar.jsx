
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, styled, Toolbar, Typography, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
	display:"flex",
	justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
	backgroundColor: "white",
	padding:"0 10px",
	borderRadius: theme.shape.borderRadius,
	width:"40%",
}))

const Icons = styled(Box)(({theme})=>({
	display: "none",
	alignItems: "center",
	gap: 20,
	[theme.breakpoints.up("sm")]: {
		display: "flex"
	}
}))

const UseBox = styled(Box)(({theme})=>({
	display: "flex",
	alignItems: "center",
	gap: 10,
	[theme.breakpoints.up("sm")]: {
		display: "none"
	}
}))


const Navbar = () => {
	const [open, setOpen] = useState(false)

  return (
	 <AppBar position="sticky">
		<StyledToolbar>
			<Typography 
				variant="h6" 
				sx={{ display: { xs: "none", sm: "block"} }}
			>
				LooLoo DEV
			</Typography>
			<Pets sx={{ display: { xs: "block", sm: "none"} }}/>
			<Search><InputBase placeholder="Search..."/></Search>
			<Icons>
				<Badge badgeContent={4} color="error">
					<Mail/>
				</Badge>
				<Badge badgeContent={4} color="error">
					<Notifications/>
				</Badge>
				<Avatar 
					sx={{
						width: 30,
						height: 30
					}}
					alt="L" 
					src="https://avatars.githubusercontent.com/u/59607308?s=40&v=4"
					onClick={e => setOpen(true)}
				/>
			</Icons>
			<UseBox onClick={e => setOpen(true)}>
				<Avatar 
					sx={{
						width: 30,
						height: 30
					}}
					alt="L" 
					src="https://avatars.githubusercontent.com/u/59607308?s=40&v=4"/>
				<Typography variant="span">Vitalii</Typography>
			</UseBox>
		</StyledToolbar>
		<Menu
			id="demo-menu"
			aria-labelledby="demo-button"
			open={open}
			onClose={e => setOpen(false)}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right"
			}}
			transformOrigin={{
				vertical: "top",
				horizontal: "right"
			}}
		>
			<MenuItem>Profile</MenuItem>
			<MenuItem>My account</MenuItem>
			<MenuItem>Logout</MenuItem>
		</Menu>
	</AppBar>
  )
}

export default Navbar