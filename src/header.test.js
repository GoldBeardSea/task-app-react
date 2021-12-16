import React from 'react';
import renderer from 'react-test-renderer';
import Header from "./header";

test('Renders Header', () => {
  const component = renderer.create(
    <Header>
    </Header>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});