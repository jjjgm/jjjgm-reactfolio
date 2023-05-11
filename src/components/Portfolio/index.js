import React from 'react';

import {  Image, Item } from 'semantic-ui-react'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

function Portfolio() {
  return (
    <div className="portfolio">

<Item.Group divided>
    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>StylistAi</Item.Header>
        <Item.Meta>
          <span className='cinema'>Group Project One: A Web Application that fetches data from two API keys.</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'><a href="https://github.com/jjjgm/the-back-of-the-shop">"Back End E-Commerce"</a></Item.Header>
        <Item.Meta>
          <span className='cinema'>A serverside application that shows table/ model relationships in mySQL.</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'><a href="https://github.com/jjjgm/gg-get-icecream">"Thank You For Being a Friend"</a></Item.Header>
        <Item.Meta>
          <span className='cinema'>A web based social network application for pet friends to connect!</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Project Three</Item.Header>
        <Item.Meta>
          <span className='cinema'>Project Description</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>


  <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Project Four</Item.Header>
        <Item.Meta>
          <span className='cinema'>Project Description</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Project Five</Item.Header>
        <Item.Meta>
          <span className='cinema'>Project Description</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

   
  </Item.Group>



    </div>
  )
}

export default Portfolio;
