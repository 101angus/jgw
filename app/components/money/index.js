import React, { Component } from "react";
import {Container,Header,Title,Content,Text,H3,Button,Footer,FooterTab,Left,Right,Body,Card,CardItem,List,ListItem} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';


const datas = [
  {
    route: "Money1",
    text: "借款契約書(借據)"
  },
];

class Money extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                        <Icon name="bars" style={{fontSize: 20, color: 'white'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>金融相關</Title>
                    </Body>
                    <Right />
                </Header>

                <Content padder>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data.route)}
                            >
                            <Text>{data.text}</Text>
                            <Right>
                                <Icon name="angle-right" />
                            </Right>
                            </ListItem>}
                    />
                </Content>

                <Footer>
                    <FooterTab>
                        <Button active full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Money;
