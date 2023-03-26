import {Container,Image,Con,Heading,Para,Button,Image1} from  './styledComponents'

const UsersList=(props)=>{
    const {details,deleteUser}=props;
    const {imageUrl,name,role,uniqueNo}=details

    const deleteData=()=>{
        deleteUser(uniqueNo)
    }

    return(
        <Container>
            <Image src={imageUrl} />
            <Con>
                <Heading>{name}</Heading>
                <Para>{role}</Para>
            </Con>
            <Button type="button" onClick={deleteData}>
                <Image1 src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
                alt="cross"
                />
            </Button>
        </Container>
    )
}

export default UsersList