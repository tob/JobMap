import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://lorempixel.com/800/600/sports/',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://lorempixel.com/800/600/food/',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://lorempixel.com/800/600/cats/',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://lorempixel.com/800/600/animals/',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const PhotoGrid = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default PhotoGrid;
