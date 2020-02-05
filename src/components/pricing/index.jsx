import React, { Component } from 'react'
import MyButton from '../utils/MyButton'
import Zoom from 'react-reveal/Zoom'


class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        position: ['Balcony', 'Medium', 'Star'],
        desc:[
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem sunt voluptate placeat aut autem fugiat iste nam neque rem, eius odit architecto. Quos cupiditate fuga necessitatibus? Nihil cumque necessitatibus minima!',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem, saepe dignissimos autem ipsam nostrum porro reprehenderit. Sint, aut beatae itaque recusandae nisi, eveniet doloremque mollitia sed nesciunt quos explicabo.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed impedit, at, nam aliquam laborum culpa, distinctio vero delectus eius molestiae ad eaque ratione. Laborum sint eos aperiam officia totam sapiente.',

        ],
        linkto:['http://yahoo.com', 'http://google.com', 'http://nfl.com'],
        delay: [500, 0, 500]

    }

    showBoxes = () => (
       
       this.state.prices.map((box, i)=> (
           <Zoom key={i} delay={this.state.delay[i]}>
           <div className='pricing_item' >
               <div className='pricing_inner_wrapper'>
                    <div className='pricing_title'>
                    <span>${this.state.prices[i]}</span>
                    <span>{this.state.position[i]}</span>
                    </div>
                    <div className='pricing_description'>
                        {this.state.desc}
                    </div>
                    <div className='pricing_buttons'>
                        <MyButton 
                            text='Purchase'
                            bck='#ffa800'
                            color='white'
                            link={this.state.linkto[i]}
                        />
                    </div>


               </div>
           </div>
           </Zoom>
       ))
    )

    render() {
        return (
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>

                    <div className='pricing_wrapper'>
                        {this.showBoxes()}
                    </div>

                </div>
                
            </div>
        )
    }
}
export default Pricing