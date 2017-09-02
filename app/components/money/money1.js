import React, { Component } from "react";
import { Container, Header, Content, ListItem, CheckBox, Text, Body, Item, Input, Card, Radio, Right, Button, Left, Title, Form, Label, FooterTab, Footer } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

class Money1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkbox6: false,
            checkbox7: false,

            radio1: true,
            radio2: false,
            radio3: false,
            radio4: false,

            radio5: true,
            radio6: false,
            radio7: false,

            radio8: true,
            radio9: false,
            radio10: false,
        };
    }

    toggleSwitch1() {
        this.setState({
        checkbox1: !this.state.checkbox1,
        });
    }
    toggleSwitch2() {
        this.setState({
        checkbox2: !this.state.checkbox2,
        });
    }
    toggleSwitch3() {
        this.setState({
        checkbox3: !this.state.checkbox3,
        });
    }
    toggleSwitch4() {
        this.setState({
        checkbox4: !this.state.checkbox4,
        });
    }
    toggleSwitch5() {
        this.setState({
        checkbox5: !this.state.checkbox5,
        });
    }
    toggleSwitch6() {
        this.setState({
        checkbox6: !this.state.checkbox6,
        });
    }
    toggleSwitch7() {
        this.setState({
        checkbox7: !this.state.checkbox7,
        });
    }

    toggleRadio1() {
      this.setState({
        radio1: true,
        radio2: false,
        radio3: false,
        radio4: false
      });
    }
    toggleRadio2() {
      this.setState({
        radio1: false,
        radio2: true,
        radio3: false,
        radio4: false
      });
    }
    toggleRadio3() {
      this.setState({
        radio1: false,
        radio2: false,
        radio3: true,
        radio4: false
      });
    }
    toggleRadio4() {
      this.setState({
        radio1: false,
        radio2: false,
        radio3: false,
        radio4: true
      });
    }
    
    toggleRadio5() {
      this.setState({
        radio5: true,
        radio6: false,
        radio7: false
      });
    }
    toggleRadio6() {
      this.setState({
        radio5: false,
        radio6: true,
        radio7: false
      });
    }
    toggleRadio7() {
      this.setState({
        radio5: false,
        radio6: false,
        radio7: true
      });
    }
    
    toggleRadio8() {
      this.setState({
        radio5: true,
        radio6: false,
        radio7: false
      });
    }
    toggleRadio9() {
      this.setState({
        radio5: false,
        radio6: true,
        radio7: false
      });
    }
    toggleRadio10() {
      this.setState({
        radio5: false,
        radio6: false,
        radio7: true
      });
    }
    
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
                <Title>借款契約書(借據)</Title>
            </Body>
            <Right />
            </Header>

            <Content>
            <Card style={styles.mb}>
                <Form>
                <Text style={{fontSize: 20, color: '#005611'}}>甲方 ─ 債權人</Text>
                <Item regular>
                    <Label><Icon active name='user-circle' style={{fontSize: 20, color: 'green'}}/> 姓名</Label>
                    <Input placeholder='點我填入' />
                </Item>
                <Item regular>
                    <Label><Icon active name='phone' style={{fontSize: 20, color: 'green'}}/> 電話</Label>
                    <Input placeholder='點我填入' />
                </Item>
                <Item regular>
                    <Label><Icon active name='address-card-o' style={{fontSize: 20, color: 'green'}}/> 身份證字號</Label>
                    <Input placeholder='點我填入' />
                </Item>
                </Form>
            </Card>

            <Card style={styles.mb}>
                <Form>
                <Text style={{fontSize: 20, color: '#005611'}}>乙方 ─ 債務人</Text>
                <Item regular>
                    <Label><Icon active name='user-circle' style={{fontSize: 20, color: 'green'}}/> 姓名</Label>
                    <Input placeholder='點我填入' />
                </Item>
                <Item regular>
                    <Label><Icon active name='phone' style={{fontSize: 20, color: 'green'}}/> 電話</Label>
                    <Input placeholder='點我填入' />
                </Item>
                <Item regular>
                    <Label><Icon active name='address-card-o' style={{fontSize: 20, color: 'green'}}/> 身份證字號</Label>
                    <Input placeholder='點我填入' />
                </Item>
                </Form>
            </Card>

            <Card style={styles.mb}>
                <ListItem button onPress={() => this.toggleSwitch1()}>
                <CheckBox checked={this.state.checkbox1} onPress={() => this.toggleSwitch1()} />
                <Body>
                    <Text>是否有連帶保證人</Text>
                </Body>
                </ListItem>
                <Form>
                <Text style={{fontSize: 20, color: '#005611'}}>連帶保證人</Text>
                <Item regular>
                    <Label><Icon active name='user-circle' style={{fontSize: 20, color: 'green'}}/> 姓名</Label>
                    <Input placeholder='點我填入' />
                </Item>
                <Item regular>
                    <Label><Icon active name='phone' style={{fontSize: 20, color: 'green'}}/> 電話</Label>
                    <Input placeholder='點我填入' />
                </Item>
                <Item regular>
                    <Label><Icon active name='address-card-o' style={{fontSize: 20, color: 'green'}}/> 身份證字號</Label>
                    <Input placeholder='點我填入' />
                </Item>
                </Form>
            </Card>
            
            <Card style={styles.mb}>
                <Text style={{fontSize: 20, color: '#005611'}}>簽約時間</Text>
                <Grid>
                    <Col size={2}>
                        <ListItem button onPress={() => this.toggleSwitch2()}>
                        <CheckBox color="green" checked={this.state.checkbox2} onPress={() => this.toggleSwitch2()} />
                        <Body>
                            <Text>今日</Text>
                        </Body>
                        </ListItem>
                    </Col>
                    <Col size={4}>
                    <Item regular>
                        <Label><Icon active name='calendar' style={{fontSize: 20, color: 'green'}}/></Label>
                        <Input placeholder='點我選擇' />
                    </Item>
                    </Col>
                </Grid>
                <Text style={{fontSize: 20, color: '#005611'}}>借款時間</Text>
                <Grid>
                    <Col size={2}>
                        <ListItem button onPress={() => this.toggleSwitch3()}>
                        <CheckBox color="green" checked={this.state.checkbox3} onPress={() => this.toggleSwitch3()} />
                        <Body>
                            <Text>今日</Text>
                        </Body>
                        </ListItem>
                    </Col>
                    <Col size={4}>
                    <Item regular>
                        <Label><Icon active name='calendar' style={{fontSize: 20, color: 'green'}}/></Label>
                        <Input placeholder='點我選擇' />
                    </Item>
                    </Col>
                </Grid>
                <Text style={{fontSize: 20, color: '#005611'}}>還款時間</Text>
                <Grid>
                    <Col size={2}>
                        <ListItem selected={this.state.radio1} onPress={() => this.toggleRadio1()}>
                                <Radio selected={this.state.radio1} onPress={() => this.toggleRadio1()}/>
                                <Text>三天</Text>
                        </ListItem>
                    </Col>
                    <Col size={2}>
                        <ListItem selected={this.state.radio2} onPress={() => this.toggleRadio2()}>
                                <Radio selected={this.state.radio2} onPress={() => this.toggleRadio2()}/>
                                <Text>隔週</Text>
                        </ListItem>
                    </Col>
                    <Col size={2}>
                        <ListItem selected={this.state.radio3} onPress={() => this.toggleRadio3()}>
                            <Radio selected={this.state.radio3} onPress={() => this.toggleRadio3()}/>
                            <Text>隔月</Text>
                        </ListItem>
                    </Col>
                </Grid>
                <Grid>
                    <Col size={2}>
                        <ListItem selected={this.state.radio4} onPress={() => this.toggleRadio4()}>
                            <Radio selected={this.state.radio4} onPress={() => this.toggleRadio4()}/>
                            <Text>隔年</Text>
                        </ListItem>
                    </Col>
                    <Col size={4}>
                    <Item regular>
                        <Label><Icon active name='calendar' style={{fontSize: 20, color: 'green'}}/></Label>
                        <Input placeholder='點我選擇' />
                    </Item>
                    </Col>
                </Grid>
            </Card>
            
            <Card style={styles.mb}>
                <Text style={{fontSize: 20, color: '#005611'}}>借款金額</Text>
                <Item regular>
                    <Label>新台幣 <Icon active name='dollar' style={{fontSize: 20, color: 'green'}}/></Label>
                    <Input placeholder='點我填入' />
                    <Label>元整</Label>
                </Item>
            </Card>
            
            <Card style={styles.mb}>
                <Text style={{fontSize: 20, color: '#005611'}}>利息</Text>
                <Grid>
                    <Col size={2}>
                        <ListItem selected={this.state.radio5} onPress={() => this.toggleRadio5()}>
                            <Radio selected={this.state.radio5} onPress={() => this.toggleRadio5()}/>
                            <Text>日息</Text>
                        </ListItem>
                    </Col>
                    <Col size={2}>
                        <ListItem selected={this.state.radio6} onPress={() => this.toggleRadio6()}>
                            <Radio selected={this.state.radio6} onPress={() => this.toggleRadio6()}/>
                            <Text>月息</Text>
                        </ListItem>
                    </Col>
                    <Col size={2}>
                        <ListItem selected={this.state.radio7} onPress={() => this.toggleRadio7()}>
                            <Radio selected={this.state.radio7} onPress={() => this.toggleRadio7()}/>
                            <Text>年息</Text>
                        </ListItem>
                    </Col>
                    <Col size={3}>
                        <Item regular>
                            <Input placeholder='點我填入' />
                            <Label>%</Label>
                        </Item>
                    </Col>
                </Grid>
            </Card>
            
            <Card style={styles.mb}>
                <ListItem button onPress={() => this.toggleSwitch5()}>
                <CheckBox color="green" checked={this.state.checkbox5} onPress={() => this.toggleSwitch5()} />
                <Body>
                    <Text>是否有遲延利息</Text>
                </Body>
                </ListItem>
                <Text style={{fontSize: 20, color: '#005611'}}>遲延利息</Text>
                <Grid>
                    <Col size={2}>
                        <ListItem selected={this.state.radio8} onPress={() => this.toggleRadio8()}>
                            <Radio selected={this.state.radio8} onPress={() => this.toggleRadio8()}/>
                            <Text>日息</Text>
                        </ListItem>
                    </Col>
                    <Col size={2}>
                        <ListItem selected={this.state.radio9} onPress={() => this.toggleRadio9()}>
                            <Radio selected={this.state.radio9} onPress={() => this.toggleRadio9()}/>
                            <Text>月息</Text>
                        </ListItem>
                    </Col>
                    <Col size={2}>
                        <ListItem selected={this.state.radio10} onPress={() => this.toggleRadio10()}>
                            <Radio selected={this.state.radio10} onPress={() => this.toggleRadio10()}/>
                            <Text>年息</Text>
                        </ListItem>
                    </Col>
                    <Col size={3}>
                        <Item regular>
                            <Input placeholder='點我填入' />
                            <Label>%</Label>
                        </Item>
                    </Col>
                </Grid>
            </Card>
            
            <Card style={styles.mb}>
                <ListItem button onPress={() => this.toggleSwitch6()}>
                <CheckBox color="green" checked={this.state.checkbox6} onPress={() => this.toggleSwitch6()} />
                <Body>
                    <Text>是否有特約條款</Text>
                </Body>
                </ListItem>
                <Text style={{fontSize: 20, color: '#005611'}}>特約條款</Text>
                <Grid>
                    <Col size={1}>
                        <Icon active name='plus-square-o' style={{fontSize: 20, color: 'green'}}/> 
                    </Col>
                    <Col size={1}>
                        <Icon active name='minus-square-o' style={{fontSize: 20, color: 'green'}}/> 
                    </Col>
                    <Col size={8}>
                        <Item regular>
                            <Label>1.</Label>
                            <Input placeholder='點我填入' />
                        </Item>
                    </Col>
                </Grid>
                <Grid>
                    <Col size={1}>
                        <Icon active name='plus-square-o' style={{fontSize: 20, color: 'green'}}/> 
                    </Col>
                    <Col size={1}>
                        <Icon active name='minus-square-o' style={{fontSize: 20, color: 'green'}}/> 
                    </Col>
                    <Col size={8}>
                        <Item regular>
                            <Label>2.</Label>
                            <Input placeholder='點我填入' />
                        </Item>
                    </Col>
                </Grid>
                <Grid>
                    <Col size={1}>
                        <Icon active name='plus-square-o' style={{fontSize: 20, color: 'green'}}/> 
                    </Col>
                    <Col size={1}>
                        <Icon active name='minus-square-o' style={{fontSize: 20, color: 'green'}}/> 
                    </Col>
                    <Col size={8}>
                        <Item regular>
                            <Label>3.</Label>
                            <Input placeholder='點我填入' />
                        </Item>
                    </Col>
                </Grid>
            </Card>
            
            <Button warning full><Text>全部清除</Text></Button>
            <Button danger full><Text>下一步</Text></Button>



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

export default Money1;
