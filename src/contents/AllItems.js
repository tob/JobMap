// src/contents/AllItems.js
import React, { PureComponent} from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Item from './Item.js'
import CustomStep from './CustomStep.js'
import { Stepper } from 'material-ui/Stepper';

class AllItems extends PureComponent {
  // constructor() {
  //   super();
  //     this.state = {stepIndex: 0};
  // }

  constructor(props) {
    super(props);
      this.state = {open: false, active:false, stepIndex:this.props.index, center:{lat:this.props.lat,lng:this.props.lng,}};
  }

  renderItem(item, index) {
    return <Item key={index} { ...item } />
  }

  changeIndex(stepIndex){
    this.setState({stepIndex});
  }

  renderStep(item, index) {
    if (!this) return null
    return <CustomStep key={index} changeIndex={this.changeIndex.bind(this)} { ...item } />
  }




  render() {
    const {stepIndex} = this.state;

    return(
      <div className="items wrapper">
        <main>
        <header>
          <Title content="experiences" />
        </header>

          <div>
            { this.props.items.map(this.renderItem) }
          </div>
          <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
            <Stepper

            linear={false}
            orientation="vertical"
            >



            </Stepper>
        </div>

        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({
  items
})

export default connect(mapStateToProps)(AllItems)
