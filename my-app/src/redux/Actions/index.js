export const showUsers = (UsersList) =>({type: 'SHOW_USERS', payload: UsersList});

export const hideUsers = () => ({type: 'HIDE_USER'});

export const showRooms = (RoomsList) => ({type: 'SHOW_ROOMS', payload: RoomsList});

export const hideRooms = (RoomsList) => ({type: 'HIDE_ROOMS'});
