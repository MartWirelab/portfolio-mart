import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`
const Logo = styled.p`
    font-size: 35px;
    font-weight: 600;
`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`
const ListItem = styled.li`
    cursor: pointer;
`
const Button = styled.button`
    width: 100px;
    padding 10px;
    border: none;
    border-radius: 5px;
    color: white;
    background: #aa4ab5;
`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo>Mart Nijland</Logo>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Who</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png" ></Icon>
                <Button>Hire me</Button>
            </Icons>

        </Container>
    </Section>
  )
}

export default Navbar