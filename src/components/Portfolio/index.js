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
        <Item.Header as='a'>Project One</Item.Header>
        <Item.Meta>
          <span className='cinema'>Project Description</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Project Two</Item.Header>
        <Item.Meta>
          <span className='cinema'>Project Description</span>
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

    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Project Six</Item.Header>
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
