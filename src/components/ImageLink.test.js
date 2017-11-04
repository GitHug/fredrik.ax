import React from 'react';
import ReactDOM from 'react-dom';
import ImageLink from './ImageLink';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageLink url={'url'} image={'image'} alt={'alt'} />, div);
});

it('renders an anchor tag containing an url and an image', () => {
  const component = renderer.create(
    <ImageLink url={'url'} image={'image'} alt={'alt'} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.props.href).toBe('url');
  expect(tree.children[0].type).toBe('img');
  expect(tree.children[0].props.src).toBe('image');
  expect(tree.children[0].props.alt).toBe('alt');
});
