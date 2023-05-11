import React from 'react';

import {  Image, Item } from 'semantic-ui-react'

import logo from '/Users/jennifer/bootcamp/homework/jjjgm-reactfolio/src/assets/generated logo.svg.png'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

function Portfolio() {
  return (
    <div className="portfolio">

<Item.Group divided>
    <Item>
      <Item.Image src='https://github.com/autohome/jenhua-joerdo/blob/main/assets/%20images/deployedhomepage.png' />

      <Item.Content>
        <Item.Header as='a'><a href="https://github.com/autohome/jenhua-joerdo">"Back-End for E-Commerce"</a></Item.Header>
        <Item.Meta>
          <span className='cinema'>Group Project One: A Web Application that fetches data from two API keys.</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'><a href="https://github.com/jjjgm/the-back-of-the-shop">"Back-End for E-Commerce"</a></Item.Header>
        <Item.Meta>
          <span className='cinema'>A serverside application that shows table/ model relationships in mySQL.</span>
        </Item.Meta>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://user-images.githubusercontent.com/126362926/234385988-827cd7e3-a6d6-4bb3-bf2d-3b24aaf9e8a2.png' />

      <Item.Content>
        <Item.Header as='a'><a href="https://github.com/jjjgm/gg-get-icecream">"Thank You For Being a Friend"</a></Item.Header>
        <Item.Meta>
          <span className='cinema'>Group Project Two : A web based social network application for pet friends to connect!</span>
        </Item.Meta>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src={logo} />

      <Item.Content>
        <Item.Header as='a'><a href="https://github.com/jjjgm/logo-lookslike-svg">SVG Logo Generator</a></Item.Header>
        <Item.Meta>
          <span className='cinema'>A CLI based prompt project that generates an SVG monogram logo.</span>
        </Item.Meta>
      </Item.Content>
    </Item>


  <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'><a href="https://github.com/jjjgm/logo-lookslike-svg">README.md file generator</a></Item.Header>
        <Item.Meta>
          <span className='cinema'>A CLI based file generator with prompts that will generate a completed README</span>
        </Item.Meta>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='https://github.com/jjjgm/oh-another-network/raw/main/assets/Screenshot%202023-05-09%20at%202.17.48%20AM.png' />

      <Item.Content>
        <Item.Header as='a'><a href="https://github.com/jjjgm/oh-another-network">Social Network API</a></Item.Header>
        <Item.Meta>
          <span className='cinema'>An API that has functionality to add/delete: users, thoughts, and reactions.</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  </Item.Group>



    </div>
  )
}

export default Portfolio;
