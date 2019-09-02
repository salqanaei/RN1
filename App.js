import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Body,
  Left,
  Right,
  Title,
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default function App() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://media.licdn.com/dms/image/C4D0BAQHLyZXsUy3iaw/company-logo_200_200/0?e=2159024400&v=beta&t=S_5-JHuojwlJxNHjGWaz1dj5TkdcMOWC9Mm0rzvrYFo"
                }}
              />
              <Body>
                <Text>CODED</Text>
                <Text note>BootCamp SUMMER 2019</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCgOu6YUG5vNJcUE-4UziABM-2dr3G2h39j76sLyGVEUXlMNlp"
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmlIAdeMfn6u1FDxY9EypJHzjtYF6H-9txQif2gJj_bBtZPaNJ"
        }}
      />
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon type="AntDesign" name="idcard" />
            <Text>Profile</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" name="tasks" />
            <Text>Tasks</Text>
          </Button>
          <Button vertical active>
            <Icon active type="Entypo" name="attachment" />
            <Text>Attach</Text>
          </Button>
          <Button vertical>
            <Icon type="Entypo" name="code" />
            <Text>Code</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: "blue"
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
