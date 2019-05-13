import React from 'react';
import '../style.css';

class RoomList extends React.Component {
    render() {
        console.log(this.props.rooms)
        return (
            <div className="room-list">
                {/* <div className="help-text">RoomList</div> */}
                <h3>Your rooms:</h3>
                <ul>
                {this.props.rooms.map(room => {
                    return(
                        <li key={room.id} className="room">
                            <a href="#"># {room.name}</a>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default RoomList;