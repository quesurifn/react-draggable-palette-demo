import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';


class SimpleSortableList extends Component {
  constructor() {
    super()

    this.state = {
      array: [0,1,2,3,4]
    }

    this.onDrop = this.onDrop.bind(this)
  }
  
 
  dragInArray(array, added, removed) {
    const removedCopy = array[removed]
    array.splice(removed, 1);
    array.splice(added, 0, removedCopy);
    return array;
  }

  onDrop(e) {
    let stateCopy = this.state.array
    const swapped = this.dragInArray(stateCopy, e.addedIndex, e.removedIndex)
    this.setState({array: swapped})
  }

  render() {
    return (
      <div>
        <Container orientation="horizontal" onDrop={(e) => this.onDrop(e)}>

          {this.state.array.map(item => {
            return (
              <Draggable key={item}>
                <div style={{height: "100vh", width: "20vw", border: "solid 4px black"}}>
                    {item}
                </div>
              </Draggable>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default SimpleSortableList;
