

function ProfilePicture(){

    const imageUrl = './src/assets/assistant.jpg';
    const handelclick = (e) =>e.target.style.display="none";


    return(<img onClick={(e) => handelclick(e)} src={imageUrl} ></img>)
}



export default ProfilePicture