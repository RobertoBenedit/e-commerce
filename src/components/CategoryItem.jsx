import styled from "@emotion/styled";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    background-color: lightcyan;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    color: green;
    margin-bottom: 20px;
`;
const Button = styled.button``;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.image} alt={item.name} />
            <Info>
                <Title>{item.title}</Title>
                <Button>COMPRAR AHORA</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
