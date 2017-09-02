import React, { Component } from "react";
import {Container,Header,Title,Content,Text,Button,Icon,Footer,FooterTab,Left,Right,Body,Card,CardItem} from "native-base";


class Main extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                        <Icon name="ios-menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>契約書產生器</Title>
                    </Body>
                    <Right />
                 </Header>

                <Content padder>
                    <Text>熱門常用</Text>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>Top.1</Text>
                                <Button danger full><Text>借款契約書(借據)</Text></Button>
                                <Text>Top.2</Text>
                                <Button warning full><Text>不動產租賃契約書</Text></Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <Text>使用說明</Text>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>點擊 <Icon name="ios-menu" /> 後可進入總目錄，然後進入您想製作的契約書種類，依序填入需填入的資訊，即可自動產生契約書。</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Text>軟體聲明</Text>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>本契約書產生器app軟體，自動生成契約書僅供參考使用，若有詳細法律問題，請詢問您的律師或法律顧問。</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Text>版本說明</Text>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>版本號：1.00</Text>
                                <Text>Copyright © 2017 jgw</Text>
                            </Body>
                        </CardItem>
                    </Card>

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

export default Main;
