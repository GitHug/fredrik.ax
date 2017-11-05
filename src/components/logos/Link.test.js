import React from 'react';
import ReactDOM from 'react-dom';
import Link from './Link';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link url={'url'} content={<div>test</div>} />, div);
});

it('renders an anchor tag containing an url and an image', () => {
  const component = renderer.create(<Link url={'url'} content={'content'} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree.props.href).toBe('url');
  expect(tree.children[0]).toBe('content');
});
